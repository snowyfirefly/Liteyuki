import{_ as e,o as s,c as t,e as a}from"./app-Bs1PeMf0.js";const n={},i=a(`<h3 id="class-messageevent" tabindex="-1"><a class="header-anchor" href="#class-messageevent"><span><em><strong>class</strong></em> <code>MessageEvent</code></span></a></h3><h3 id="def-init-self-bot-id-str-message-list-dict-str-any-str-message-type-str-raw-message-str-session-id-str-session-type-str-receive-channel-str-data-optional-dict-str-any-none" tabindex="-1"><a class="header-anchor" href="#def-init-self-bot-id-str-message-list-dict-str-any-str-message-type-str-raw-message-str-session-id-str-session-type-str-receive-channel-str-data-optional-dict-str-any-none"><span>  <em><strong>def</strong></em> <code>__init__(self, bot_id: str, message: list[dict[str, Any]] | str, message_type: str, raw_message: str, session_id: str, session_type: str, receive_channel: str, data: Optional[dict[str, Any]]) -&gt; None</code></span></a></h3><p> 轻雪抽象消息事件</p><p>Args:</p><pre><code>bot_id: 机器人ID

message: 消息，消息段数组[{type: str, data: dict[str, Any]}]

raw_message: 原始消息(通常为纯文本的格式)

message_type: 消息类型(private, group, other)



session_id: 会话ID(私聊通常为用户ID，群聊通常为群ID)

session_type: 会话类型(private, group)

receive_channel: 接收频道(用于回复消息)



data: 附加数据
</code></pre><h3 id="def-reply-self-message-str-dict-str-any-none" tabindex="-1"><a class="header-anchor" href="#def-reply-self-message-str-dict-str-any-none"><span>  <em><strong>def</strong></em> <code>reply(self, message: str | dict[str, Any]) -&gt; None</code></span></a></h3><p> 回复消息</p><p>Args:</p><pre><code>message:
</code></pre><p>Returns:</p><h3 id="var-reply-event-messageevent-message-type-self-session-type-message-message-raw-message-data-message-message-bot-id-self-bot-id-session-id-self-session-id-session-type-self-session-type-receive-channel" tabindex="-1"><a class="header-anchor" href="#var-reply-event-messageevent-message-type-self-session-type-message-message-raw-message-data-message-message-bot-id-self-bot-id-session-id-self-session-id-session-type-self-session-type-receive-channel"><span><em><strong>var</strong></em> <code>reply_event = MessageEvent(message_type=self.session_type, message=message, raw_message=&#39;&#39;, data={&#39;message&#39;: message}, bot_id=self.bot_id, session_id=self.session_id, session_type=self.session_type, receive_channel=&#39;_&#39;)</code></span></a></h3><h3 id="var-data" tabindex="-1"><a class="header-anchor" href="#var-data"><span><em><strong>var</strong></em> <code>data = {}</code></span></a></h3>`,12),r=[i];function o(l,d){return s(),t("div",null,r)}const c=e(n,[["render",o],["__file","event.html.vue"]]),g=JSON.parse(`{"path":"/dev/api/message/event.html","title":"liteyuki.message.event","lang":"zh-CN","frontmatter":{"title":"liteyuki.message.event","order":1,"icon":"laptop-code","category":"API","description":"class MessageEvent def __init__(self, bot_id: str, message: list[dict[str, Any]] | str, message_type: str, raw_message: str, session_id: str, session_type: str, receive_channel:...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/en/dev/api/message/event.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/dev/api/message/event.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"liteyuki.message.event"}],["meta",{"property":"og:description","content":"class MessageEvent def __init__(self, bot_id: str, message: list[dict[str, Any]] | str, message_type: str, raw_message: str, session_id: str, session_type: str, receive_channel:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liteyuki.message.event\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":3,"title":"class MessageEvent","slug":"class-messageevent","link":"#class-messageevent","children":[]},{"level":3,"title":"def __init__(self, bot_id: str, message: list[dict[str, Any]] | str, message_type: str, raw_message: str, session_id: str, session_type: str, receive_channel: str, data: Optional[dict[str, Any]]) -> None","slug":"def-init-self-bot-id-str-message-list-dict-str-any-str-message-type-str-raw-message-str-session-id-str-session-type-str-receive-channel-str-data-optional-dict-str-any-none","link":"#def-init-self-bot-id-str-message-list-dict-str-any-str-message-type-str-raw-message-str-session-id-str-session-type-str-receive-channel-str-data-optional-dict-str-any-none","children":[]},{"level":3,"title":"def reply(self, message: str | dict[str, Any]) -> None","slug":"def-reply-self-message-str-dict-str-any-none","link":"#def-reply-self-message-str-dict-str-any-none","children":[]},{"level":3,"title":"var reply_event = MessageEvent(message_type=self.session_type, message=message, raw_message='', data={'message': message}, bot_id=self.bot_id, session_id=self.session_id, session_type=self.session_type, receive_channel='_')","slug":"var-reply-event-messageevent-message-type-self-session-type-message-message-raw-message-data-message-message-bot-id-self-bot-id-session-id-self-session-id-session-type-self-session-type-receive-channel","link":"#var-reply-event-messageevent-message-type-self-session-type-message-message-raw-message-data-message-message-bot-id-self-bot-id-session-id-self-session-id-session-type-self-session-type-receive-channel","children":[]},{"level":3,"title":"var data = {}","slug":"var-data","link":"#var-data","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.57,"words":171},"filePathRelative":"dev/api/message/event.md","autoDesc":true}`);export{c as comp,g as data};
