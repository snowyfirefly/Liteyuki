# -*- coding: utf-8 -*-
"""
Copyright (C) 2020-2024 LiteyukiStudio. All Rights Reserved 

@Time    : 2024/7/26 下午11:21
@Author  : snowykami
@Email   : snowykami@outlook.com
@File    : channel.py
@Software: PyCharm

本模块定义了一个通用的通道类，用于进程间通信
"""
import threading
from multiprocessing import Pipe
from typing import Any, Awaitable, Callable, Optional, TypeAlias, TypeVar, Generic, get_args
from uuid import uuid4

from liteyuki.utils import IS_MAIN_PROCESS, is_coroutine_callable, run_coroutine

SYNC_ON_RECEIVE_FUNC: TypeAlias = Callable[[Any], Any]
ASYNC_ON_RECEIVE_FUNC: TypeAlias = Callable[[Any], Awaitable[Any]]
ON_RECEIVE_FUNC: TypeAlias = SYNC_ON_RECEIVE_FUNC | ASYNC_ON_RECEIVE_FUNC

SYNC_FILTER_FUNC: TypeAlias = Callable[[Any], bool]
ASYNC_FILTER_FUNC: TypeAlias = Callable[[Any], Awaitable[bool]]
FILTER_FUNC: TypeAlias = SYNC_FILTER_FUNC | ASYNC_FILTER_FUNC

_channel: dict[str, "Channel"] = {}
_callback_funcs: dict[str, ON_RECEIVE_FUNC] = {}

T = TypeVar("T")


class Channel(Generic[T]):
    """
    通道类，可以在进程间和进程内通信，双向但同时只能有一个发送者和一个接收者
    有两种接收工作方式，但是只能选择一种，主动接收和被动接收，主动接收使用 `receive` 方法，被动接收使用 `on_receive` 装饰器
    """

    def __init__(self, _id: str, type_check: bool = False):
        """
        初始化通道
        Args:
            _id: 通道ID
        """
        self.conn_send, self.conn_recv = Pipe()
        self._closed = False
        self._on_main_receive_funcs: list[str] = []
        self._on_sub_receive_funcs: list[str] = []
        self.name: str = _id

        self.is_main_receive_loop_running = False
        self.is_sub_receive_loop_running = False

        if type_check:
            if self._get_generic_type() is None:
                raise TypeError("Type hint is required for enforcing type check.")
        self.type_check = type_check

    def _get_generic_type(self) -> Optional[type]:
        """
        获取通道传递泛型类型

        Returns:
            Optional[type]: 泛型类型
        """
        if hasattr(self, '__orig_class__'):
            return get_args(self.__orig_class__)[0]
        return None

    def _validate_structure(self, data: any, structure: type | tuple | list | dict) -> bool:
        """
        验证数据结构
        Args:
            data: 数据
            structure: 结构

        Returns:
            bool: 是否通过验证
        """
        if isinstance(structure, type):
            return isinstance(data, structure)
        elif isinstance(structure, tuple):
            if not isinstance(data, tuple) or len(data) != len(structure):
                return False
            return all(self._validate_structure(d, s) for d, s in zip(data, structure))
        elif isinstance(structure, list):
            if not isinstance(data, list):
                return False
            return all(self._validate_structure(d, structure[0]) for d in data)
        elif isinstance(structure, dict):
            if not isinstance(data, dict):
                return False
            return all(k in data and self._validate_structure(data[k], structure[k]) for k in structure)
        return False

    def __str__(self):
        return f"Channel({self.name})"

    def send(self, data: T):
        """
        发送数据
        Args:
            data: 数据
        """
        if self.type_check:
            _type = self._get_generic_type()
            if not self._validate_structure(data, _type):
                raise TypeError(f"Data must be an instance of {_type}, {type(data)} found")

        if self._closed:
            raise RuntimeError("Cannot send to a closed channel")
        self.conn_send.send(data)

    def receive(self) -> T:
        """
        接收数据
        Args:
        """
        if self._closed:
            raise RuntimeError("Cannot receive from a closed channel")

        while True:
            data = self.conn_recv.recv()
            return data

    def close(self):
        """
        关闭通道
        """
        self._closed = True
        self.conn_send.close()
        self.conn_recv.close()

    def on_receive(self, filter_func: Optional[FILTER_FUNC] = None) -> Callable[[ON_RECEIVE_FUNC], ON_RECEIVE_FUNC]:
        """
        接收数据并执行函数
        Args:
            filter_func: 过滤函数，为None则不过滤
        Returns:
            装饰器，装饰一个函数在接收到数据后执行
        """
        if (not self.is_sub_receive_loop_running) and not IS_MAIN_PROCESS:
            threading.Thread(target=self._start_sub_receive_loop, daemon=True).start()

        if (not self.is_main_receive_loop_running) and IS_MAIN_PROCESS:
            threading.Thread(target=self._start_main_receive_loop, daemon=True).start()

        def decorator(func: ON_RECEIVE_FUNC) -> ON_RECEIVE_FUNC:
            async def wrapper(data: Any) -> Any:
                if filter_func is not None:
                    if is_coroutine_callable(filter_func):
                        if not (await filter_func(data)):
                            return
                    else:
                        if not filter_func(data):
                            return

                if is_coroutine_callable(func):
                    return await func(data)
                else:
                    return func(data)

            function_id = str(uuid4())
            _callback_funcs[function_id] = wrapper
            if IS_MAIN_PROCESS:
                self._on_main_receive_funcs.append(function_id)
            else:
                self._on_sub_receive_funcs.append(function_id)
            return func

        return decorator

    def _run_on_main_receive_funcs(self, data: Any):
        """
        运行接收函数
        Args:
            data: 数据
        """
        for func_id in self._on_main_receive_funcs:
            func = _callback_funcs[func_id]
            run_coroutine(func(data))

    def _run_on_sub_receive_funcs(self, data: Any):
        """
        运行接收函数
        Args:
            data: 数据
        """
        for func_id in self._on_sub_receive_funcs:
            func = _callback_funcs[func_id]
            run_coroutine(func(data))

    def _start_main_receive_loop(self):
        """
        开始接收数据
        """
        self.is_main_receive_loop_running = True
        while not self._closed:
            data = self.conn_recv.recv()
            self._run_on_main_receive_funcs(data)

    def _start_sub_receive_loop(self):
        """
        开始接收数据
        """
        self.is_sub_receive_loop_running = True
        while not self._closed:
            data = self.conn_recv.recv()
            self._run_on_sub_receive_funcs(data)

    def __iter__(self):
        return self

    def __next__(self) -> Any:
        return self.receive()


"""子进程可用的主动和被动通道"""
active_channel: Optional["Channel"] = None
passive_channel: Optional["Channel"] = None
if not IS_MAIN_PROCESS:
    """sub process only"""
    active_channel: Optional["Channel"] = None
    passive_channel: Optional["Channel"] = None

"""通道传递通道，主进程单例，子进程初始化时实例化"""
channel_deliver_active_channel: Optional["Channel"]
channel_deliver_passive_channel: Optional["Channel"]
if IS_MAIN_PROCESS:
    channel_deliver_active_channel: Optional["Channel"] = Channel(_id="channel_deliver_active_channel")
    channel_deliver_passive_channel: Optional["Channel"] = Channel(_id="channel_deliver_passive_channel")


    @channel_deliver_passive_channel.on_receive(filter_func=lambda data: data[0] == "set_channel")
    def on_set_channel(data: tuple[str, str, Channel, Channel]):
        name, channel, temp_channel = data[1:]
        temp_channel.send(set_channel(name, channel))


    @channel_deliver_active_channel.on_receive(filter_func=lambda data: data[0] == "get_channel")
    def on_get_channel(data: tuple[str, Channel]):
        name = data[1:]
        channel = get_channel()
        return channel
else:
    channel_deliver_active_channel = None
    channel_deliver_passive_channel = None


def set_channel(name: str, channel: Channel):
    """
    设置通道实例
    Args:
        name: 通道名称
        channel: 通道实例
    """
    if not isinstance(channel, Channel):
        raise TypeError(f"channel must be an instance of Channel, {type(channel)} found")

    if IS_MAIN_PROCESS:
        _channel[name] = channel
    else:
        # 请求主进程设置通道
        temp_channel = Channel(_id="temp_channel")
        channel_deliver_passive_channel.send(("set_channel", name, channel, temp_channel))
        return temp_channel.receive()


def set_channels(channels: dict[str, Channel]):
    """
    设置通道实例
    Args:
        channels: 通道名称
    """
    if not IS_MAIN_PROCESS:
        raise RuntimeError(f"Function {__name__} should only be called in the main process.")

    for name, channel in channels.items():
        set_channel(name, channel)


def get_channel(name: str) -> Optional[Channel]:
    """
    获取通道实例
    Args:
        name: 通道名称
    Returns:
    """
    if not IS_MAIN_PROCESS:
        raise RuntimeError(f"Function {__name__} should only be called in the main process.")

    return _channel.get(name, None)


def get_channels() -> dict[str, Channel]:
    """
    获取通道实例
    Returns:
    """
    if not IS_MAIN_PROCESS:
        raise RuntimeError(f"Function {__name__} should only be called in the main process.")

    return _channel
