import{_ as s,c as i,o as a,a9 as n}from"./chunks/framework.C4_mTacX.js";const E=JSON.parse('{"title":"liteyuki.bot.lifespan","description":"","frontmatter":{"title":"liteyuki.bot.lifespan"},"headers":[],"relativePath":"dev/api/bot/lifespan.md","filePath":"zh/dev/api/bot/lifespan.md","lastUpdated":null}'),t={name:"dev/api/bot/lifespan.md"},e=n('<h1 id="模块-liteyuki-bot-lifespan" tabindex="-1"><strong>模块</strong> <code>liteyuki.bot.lifespan</code> <a class="header-anchor" href="#模块-liteyuki-bot-lifespan" aria-label="Permalink to &quot;**模块** `liteyuki.bot.lifespan`&quot;">​</a></h1><p>Copyright (C) 2020-2024 LiteyukiStudio. All Rights Reserved</p><p>@Time : 2024/7/23 下午8:24 @Author : snowykami @Email : <a href="mailto:snowykami@outlook.com" target="_blank" rel="noreferrer">snowykami@outlook.com</a> @File : lifespan.py @Software: PyCharm</p><h3 id="var-sync-lifespan-func" tabindex="-1">var <code>SYNC_LIFESPAN_FUNC</code> <a class="header-anchor" href="#var-sync-lifespan-func" aria-label="Permalink to &quot;var `SYNC_LIFESPAN_FUNC`&quot;">​</a></h3><ul><li><p><strong>说明</strong>: 同步生命周期函数</p></li><li><p><strong>类型</strong>: <code>TypeAlias</code></p></li><li><p><strong>默认值</strong>: <code>Callable[[], Any]</code></p></li></ul><h3 id="var-async-lifespan-func" tabindex="-1">var <code>ASYNC_LIFESPAN_FUNC</code> <a class="header-anchor" href="#var-async-lifespan-func" aria-label="Permalink to &quot;var `ASYNC_LIFESPAN_FUNC`&quot;">​</a></h3><ul><li><p><strong>说明</strong>: 异步生命周期函数</p></li><li><p><strong>类型</strong>: <code>TypeAlias</code></p></li><li><p><strong>默认值</strong>: <code>Callable[[], Awaitable[Any]]</code></p></li></ul><h3 id="var-lifespan-func" tabindex="-1">var <code>LIFESPAN_FUNC</code> <a class="header-anchor" href="#var-lifespan-func" aria-label="Permalink to &quot;var `LIFESPAN_FUNC`&quot;">​</a></h3><ul><li><p><strong>说明</strong>: 生命周期函数</p></li><li><p><strong>类型</strong>: <code>TypeAlias</code></p></li><li><p><strong>默认值</strong>: <code>SYNC_LIFESPAN_FUNC | ASYNC_LIFESPAN_FUNC</code></p></li></ul><h3 id="var-sync-process-lifespan-func" tabindex="-1">var <code>SYNC_PROCESS_LIFESPAN_FUNC</code> <a class="header-anchor" href="#var-sync-process-lifespan-func" aria-label="Permalink to &quot;var `SYNC_PROCESS_LIFESPAN_FUNC`&quot;">​</a></h3><ul><li><p><strong>说明</strong>: 同步进程生命周期函数</p></li><li><p><strong>类型</strong>: <code>TypeAlias</code></p></li><li><p><strong>默认值</strong>: <code>Callable[[str], Any]</code></p></li></ul><h3 id="var-async-process-lifespan-func" tabindex="-1">var <code>ASYNC_PROCESS_LIFESPAN_FUNC</code> <a class="header-anchor" href="#var-async-process-lifespan-func" aria-label="Permalink to &quot;var `ASYNC_PROCESS_LIFESPAN_FUNC`&quot;">​</a></h3><ul><li><p><strong>说明</strong>: 异步进程生命周期函数</p></li><li><p><strong>类型</strong>: <code>TypeAlias</code></p></li><li><p><strong>默认值</strong>: <code>Callable[[str], Awaitable[Any]]</code></p></li></ul><h3 id="var-process-lifespan-func" tabindex="-1">var <code>PROCESS_LIFESPAN_FUNC</code> <a class="header-anchor" href="#var-process-lifespan-func" aria-label="Permalink to &quot;var `PROCESS_LIFESPAN_FUNC`&quot;">​</a></h3><ul><li><p><strong>说明</strong>: 进程函数</p></li><li><p><strong>类型</strong>: <code>TypeAlias</code></p></li><li><p><strong>默认值</strong>: <code>SYNC_PROCESS_LIFESPAN_FUNC | ASYNC_PROCESS_LIFESPAN_FUNC</code></p></li></ul><h3 id="class-lifespan" tabindex="-1"><em><strong>class</strong></em> <code>Lifespan</code> <a class="header-anchor" href="#class-lifespan" aria-label="Permalink to &quot;***class*** `Lifespan`&quot;">​</a></h3><h4 id="func-init-self-none" tabindex="-1"><em><strong>func</strong></em> <code>__init__(self) -&gt; None</code> <a class="header-anchor" href="#func-init-self-none" aria-label="Permalink to &quot;***func*** `__init__(self) -&gt; None`&quot;">​</a></h4><p><strong>说明</strong>: 轻雪生命周期管理，启动、停止、重启</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/bot/lifespan.py#L27" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.life_flag: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._before_start_funcs: list[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._after_start_funcs: list[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._before_process_shutdown_funcs: list[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PROCESS_LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._after_shutdown_funcs: list[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._before_process_restart_funcs: list[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PROCESS_LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._after_restart_funcs: list[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span></code></pre></div></details><p><a href="https://docs.python.org/3/library/functions.html#staticmethod" target="_blank" rel="noreferrer"><code>@staticmethod</code></a></p><h4 id="async-func-run-funcs-funcs-sequence-lifespan-func-process-lifespan-func-args-kwargs-none" tabindex="-1"><em><strong>async func</strong></em> <code>run_funcs(funcs: Sequence[LIFESPAN_FUNC | PROCESS_LIFESPAN_FUNC], *args, **kwargs) -&gt; None</code> <a class="header-anchor" href="#async-func-run-funcs-funcs-sequence-lifespan-func-process-lifespan-func-args-kwargs-none" aria-label="Permalink to &quot;***async func*** `run_funcs(funcs: Sequence[LIFESPAN_FUNC | PROCESS_LIFESPAN_FUNC], *args, **kwargs) -&gt; None`&quot;">​</a></h4><p><strong>说明</strong>: 并发运行异步函数</p><p><strong>参数</strong>:</p><blockquote><ul><li>funcs (<a href="https://docs.python.org/3/library/typing.html#typing.Sequence" target="_blank" rel="noreferrer"><code>Sequence</code></a>[<a href="#var-lifespan-func"><code>ASYNC_LIFESPAN_FUNC</code></a> | <a href="#var-process-lifespan-func"><code>PROCESS_LIFESPAN_FUNC</code></a>]): 函数列表</li></ul></blockquote><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/bot/lifespan.py#L43" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">staticmethod</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> run_funcs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(funcs: Sequence[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIFESPAN_FUNC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PROCESS_LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kwargs) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tasks </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [func(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kwargs) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> is_coroutine_callable(func) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> async_wrapper(func)(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kwargs) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> func </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> funcs]</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> asyncio.gather(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tasks)</span></span></code></pre></div></details><h4 id="func-on-before-start-self-func-lifespan-func-lifespan-func" tabindex="-1"><em><strong>func</strong></em> <code>on_before_start(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code> <a class="header-anchor" href="#func-on-before-start-self-func-lifespan-func-lifespan-func" aria-label="Permalink to &quot;***func*** `on_before_start(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC`&quot;">​</a></h4><p><strong>说明</strong>: 注册启动时的函数</p><p><strong>参数</strong>:</p><blockquote><ul><li>func (<a href="#var-lifespan-func"><code>LIFESPAN_FUNC</code></a>): 生命周期函数</li></ul></blockquote><p><strong>返回</strong>: <a href="#var-lifespan-func"><code>LIFESPAN_FUNC</code></a>: 生命周期函数</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/bot/lifespan.py#L53" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> on_before_start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, func: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._before_start_funcs.append(func)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> func</span></span></code></pre></div></details><h4 id="func-on-after-start-self-func-lifespan-func-lifespan-func" tabindex="-1"><em><strong>func</strong></em> <code>on_after_start(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code> <a class="header-anchor" href="#func-on-after-start-self-func-lifespan-func-lifespan-func" aria-label="Permalink to &quot;***func*** `on_after_start(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC`&quot;">​</a></h4><p><strong>说明</strong>: 注册启动时的函数</p><p><strong>参数</strong>:</p><blockquote><ul><li>func (<a href="#var-lifespan-func"><code>LIFESPAN_FUNC</code></a>): 生命周期函数</li></ul></blockquote><p><strong>返回</strong>: <a href="#var-lifespan-func"><code>LIFESPAN_FUNC</code></a>: 生命周期函数</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/bot/lifespan.py#L64" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> on_after_start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, func: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._after_start_funcs.append(func)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> func</span></span></code></pre></div></details><h4 id="func-on-before-process-shutdown-self-func-process-lifespan-func-process-lifespan-func" tabindex="-1"><em><strong>func</strong></em> <code>on_before_process_shutdown(self, func: PROCESS_LIFESPAN_FUNC) -&gt; PROCESS_LIFESPAN_FUNC</code> <a class="header-anchor" href="#func-on-before-process-shutdown-self-func-process-lifespan-func-process-lifespan-func" aria-label="Permalink to &quot;***func*** `on_before_process_shutdown(self, func: PROCESS_LIFESPAN_FUNC) -&gt; PROCESS_LIFESPAN_FUNC`&quot;">​</a></h4><p><strong>说明</strong>: 注册进程停止前的函数</p><p><strong>参数</strong>:</p><blockquote><ul><li>func (<a href="#var-process-lifespan-func"><code>PROCESS_LIFESPAN_FUNC</code></a>): 进程生命周期函数</li></ul></blockquote><p><strong>返回</strong>: <a href="#var-process-lifespan-func"><code>PROCESS_LIFESPAN_FUNC</code></a>: 进程生命周期函数</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/bot/lifespan.py#L75" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> on_before_process_shutdown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, func: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PROCESS_LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PROCESS_LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._before_process_shutdown_funcs.append(func)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> func</span></span></code></pre></div></details><h4 id="func-on-after-shutdown-self-func-lifespan-func-lifespan-func" tabindex="-1"><em><strong>func</strong></em> <code>on_after_shutdown(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code> <a class="header-anchor" href="#func-on-after-shutdown-self-func-lifespan-func-lifespan-func" aria-label="Permalink to &quot;***func*** `on_after_shutdown(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC`&quot;">​</a></h4><p><strong>说明</strong>: 注册停止后的函数</p><p><strong>参数</strong>:</p><blockquote><ul><li>func (<a href="#var-lifespan-func"><code>LIFESPAN_FUNC</code></a>): 生命周期函数</li></ul></blockquote><p><strong>返回</strong>: <a href="#var-lifespan-func"><code>LIFESPAN_FUNC</code></a>: 生命周期函数</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/bot/lifespan.py#L86" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> on_after_shutdown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, func: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._after_shutdown_funcs.append(func)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> func</span></span></code></pre></div></details><h4 id="func-on-before-process-restart-self-func-process-lifespan-func-process-lifespan-func" tabindex="-1"><em><strong>func</strong></em> <code>on_before_process_restart(self, func: PROCESS_LIFESPAN_FUNC) -&gt; PROCESS_LIFESPAN_FUNC</code> <a class="header-anchor" href="#func-on-before-process-restart-self-func-process-lifespan-func-process-lifespan-func" aria-label="Permalink to &quot;***func*** `on_before_process_restart(self, func: PROCESS_LIFESPAN_FUNC) -&gt; PROCESS_LIFESPAN_FUNC`&quot;">​</a></h4><p><strong>说明</strong>: 注册进程重启前的函数</p><p><strong>参数</strong>:</p><blockquote><ul><li>func (<a href="#var-process-lifespan-func"><code>PROCESS_LIFESPAN_FUNC</code></a>): 进程生命周期函数</li></ul></blockquote><p><strong>返回</strong>: <a href="#var-process-lifespan-func"><code>PROCESS_LIFESPAN_FUNC</code></a>: 进程生命周期函数</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/bot/lifespan.py#L97" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> on_before_process_restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, func: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PROCESS_LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PROCESS_LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._before_process_restart_funcs.append(func)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> func</span></span></code></pre></div></details><h4 id="func-on-after-restart-self-func-lifespan-func-lifespan-func" tabindex="-1"><em><strong>func</strong></em> <code>on_after_restart(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code> <a class="header-anchor" href="#func-on-after-restart-self-func-lifespan-func-lifespan-func" aria-label="Permalink to &quot;***func*** `on_after_restart(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC`&quot;">​</a></h4><p><strong>说明</strong>: 注册重启后的函数</p><p><strong>参数</strong>:</p><blockquote><ul><li>func (<a href="#var-lifespan-func"><code>LIFESPAN_FUNC</code></a>): 生命周期函数</li></ul></blockquote><p><strong>返回</strong>: <a href="#var-lifespan-func"><code>LIFESPAN_FUNC</code></a>: 生命周期函数</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/bot/lifespan.py#L108" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> on_after_restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, func: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIFESPAN_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._after_restart_funcs.append(func)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> func</span></span></code></pre></div></details><h4 id="async-func-before-start-self-none" tabindex="-1"><em><strong>async func</strong></em> <code>before_start(self) -&gt; None</code> <a class="header-anchor" href="#async-func-before-start-self-none" aria-label="Permalink to &quot;***async func*** `before_start(self) -&gt; None`&quot;">​</a></h4><p><strong>说明</strong>: 启动前钩子</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/bot/lifespan.py#L119" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> before_start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    logger.debug(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Running before_start functions&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.run_funcs(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._before_start_funcs)</span></span></code></pre></div></details><h4 id="async-func-after-start-self-none" tabindex="-1"><em><strong>async func</strong></em> <code>after_start(self) -&gt; None</code> <a class="header-anchor" href="#async-func-after-start-self-none" aria-label="Permalink to &quot;***async func*** `after_start(self) -&gt; None`&quot;">​</a></h4><p><strong>说明</strong>: 启动后钩子</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/bot/lifespan.py#L126" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> after_start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    logger.debug(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Running after_start functions&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.run_funcs(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._after_start_funcs)</span></span></code></pre></div></details><h4 id="async-func-before-process-shutdown-self-args-kwargs-none" tabindex="-1"><em><strong>async func</strong></em> <code>before_process_shutdown(self, *args, **kwargs) -&gt; None</code> <a class="header-anchor" href="#async-func-before-process-shutdown-self-args-kwargs-none" aria-label="Permalink to &quot;***async func*** `before_process_shutdown(self, *args, **kwargs) -&gt; None`&quot;">​</a></h4><p><strong>说明</strong>: 停止前钩子</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/bot/lifespan.py#L133" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> before_process_shutdown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kwargs) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    logger.debug(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Running before_shutdown functions&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.run_funcs(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._before_process_shutdown_funcs, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kwargs)</span></span></code></pre></div></details><h4 id="async-func-after-shutdown-self-none" tabindex="-1"><em><strong>async func</strong></em> <code>after_shutdown(self) -&gt; None</code> <a class="header-anchor" href="#async-func-after-shutdown-self-none" aria-label="Permalink to &quot;***async func*** `after_shutdown(self) -&gt; None`&quot;">​</a></h4><p><strong>说明</strong>: 停止后钩子 未实现</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/bot/lifespan.py#L140" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> after_shutdown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    logger.debug(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Running after_shutdown functions&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.run_funcs(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._after_shutdown_funcs)</span></span></code></pre></div></details><h4 id="async-func-before-process-restart-self-args-kwargs-none" tabindex="-1"><em><strong>async func</strong></em> <code>before_process_restart(self, *args, **kwargs) -&gt; None</code> <a class="header-anchor" href="#async-func-before-process-restart-self-args-kwargs-none" aria-label="Permalink to &quot;***async func*** `before_process_restart(self, *args, **kwargs) -&gt; None`&quot;">​</a></h4><p><strong>说明</strong>: 重启前钩子</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/bot/lifespan.py#L147" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> before_process_restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kwargs) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    logger.debug(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Running before_restart functions&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.run_funcs(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._before_process_restart_funcs, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kwargs)</span></span></code></pre></div></details><h4 id="async-func-after-restart-self-none" tabindex="-1"><em><strong>async func</strong></em> <code>after_restart(self) -&gt; None</code> <a class="header-anchor" href="#async-func-after-restart-self-none" aria-label="Permalink to &quot;***async func*** `after_restart(self) -&gt; None`&quot;">​</a></h4><p><strong>说明</strong>: 重启后钩子 未实现</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/bot/lifespan.py#L154" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> after_restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    logger.debug(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Running after_restart functions&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.run_funcs(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._after_restart_funcs)</span></span></code></pre></div></details>',79),l=[e];function h(p,r,k,o,c,d){return a(),i("div",null,l)}const u=s(t,[["render",h]]);export{E as __pageData,u as default};
