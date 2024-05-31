import{_ as n,o as e,c as a,e as s}from"./app-CwAAGXLX.js";const t={},o=s(`<h2 id="轻雪函数" tabindex="-1"><a class="header-anchor" href="#轻雪函数"><span><strong>轻雪函数</strong></span></a></h2><p>轻雪函数 Liteyuki Function 是轻雪的一个功能，它允许你在轻雪中运行一些自定义的由数据驱动的命令，类似于Minecraft的mcfunction</p><h3 id="函数文件" tabindex="-1"><a class="header-anchor" href="#函数文件"><span><strong>函数文件</strong></span></a></h3><p>函数文件放在资源包的<code>functions</code>目录下，文件名以<code>.mcfunction</code> <code>.lyfunction</code> <code>.lyf</code>结尾，例如<code>test.mcfunction</code>，文件内容为一系列的命令，每行一个命令，支持单行注释<code>#</code>，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>cmd <span class="token builtin class-name">echo</span> hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="命令文档" tabindex="-1"><a class="header-anchor" href="#命令文档"><span><strong>命令文档</strong></span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>var <span class="token operator">&lt;</span>var1<span class="token operator">=</span>value<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token punctuation">[</span>var2<span class="token operator">=</span>value2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.  <span class="token comment"># 定义变量</span>
cmd <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>  <span class="token comment"># 在设备上执行命令</span>
api <span class="token operator">&lt;</span>api_name<span class="token operator">&gt;</span> <span class="token punctuation">[</span>var<span class="token operator">=</span>value<span class="token punctuation">..</span>.<span class="token punctuation">]</span>  <span class="token comment"># 调用Bot API</span>
<span class="token keyword">function</span> <span class="token operator">&lt;</span>func_name<span class="token operator">&gt;</span> <span class="token comment"># 调用函数，可递归</span>
<span class="token function">sleep</span> <span class="token operator">&lt;</span>time<span class="token operator">&gt;</span>  <span class="token comment"># 异步等待，单位s</span>
<span class="token function">nohup</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>  <span class="token comment"># 使用新的task执行命令，即不等待</span>
end <span class="token comment"># 结束函数关键字，包括子task</span>
await <span class="token comment"># 等待所有异步任务结束，若函数中启动了其他task，需要在最后调用，否则task对象会被销毁</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span><strong>示例</strong></span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 疯狂戳好友</span>
<span class="token comment"># 使用 /function poke user_id=123456 执行</span>
<span class="token comment"># 每隔0.2s戳两次，无限戳，会触发最大递归深度限制</span>
<span class="token comment"># 若要戳20s后停止，则需要删除await，添加sleep 20和end</span>
api friend_poke <span class="token assign-left variable">user_id</span><span class="token operator">=</span>user_id
api friend_poke <span class="token assign-left variable">user_id</span><span class="token operator">=</span>user_id
<span class="token function">sleep</span> <span class="token number">0.2</span>
<span class="token function">nohup</span> <span class="token keyword">function</span> poke
await
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[o];function i(l,p){return e(),a("div",null,c)}const d=n(t,[["render",i],["__file","lyfunc.html.vue"]]),u=JSON.parse('{"path":"/usage/lyfunc.html","title":"轻雪函数","lang":"zh-CN","frontmatter":{"title":"轻雪函数","icon":"code","order":4,"category":"使用指南","tag":["配置"],"description":"轻雪函数 轻雪函数 Liteyuki Function 是轻雪的一个功能，它允许你在轻雪中运行一些自定义的由数据驱动的命令，类似于Minecraft的mcfunction 函数文件 函数文件放在资源包的functions目录下，文件名以.mcfunction .lyfunction .lyf结尾，例如test.mcfunction，文件内容为一系列的命...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/usage/lyfunc.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"轻雪函数"}],["meta",{"property":"og:description","content":"轻雪函数 轻雪函数 Liteyuki Function 是轻雪的一个功能，它允许你在轻雪中运行一些自定义的由数据驱动的命令，类似于Minecraft的mcfunction 函数文件 函数文件放在资源包的functions目录下，文件名以.mcfunction .lyfunction .lyf结尾，例如test.mcfunction，文件内容为一系列的命..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-31T15:15:40.000Z"}],["meta",{"property":"article:author","content":"远野千束"}],["meta",{"property":"article:tag","content":"配置"}],["meta",{"property":"article:modified_time","content":"2024-05-31T15:15:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"轻雪函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-31T15:15:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"远野千束\\",\\"url\\":\\"https://snowykami.me\\"}]}"]]},"headers":[{"level":2,"title":"轻雪函数","slug":"轻雪函数","link":"#轻雪函数","children":[{"level":3,"title":"函数文件","slug":"函数文件","link":"#函数文件","children":[]},{"level":3,"title":"命令文档","slug":"命令文档","link":"#命令文档","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]}],"git":{"createdTime":1717168540000,"updatedTime":1717168540000,"contributors":[{"name":"snowy","email":"snowykami@outlook.com","commits":1}]},"readingTime":{"minutes":1.03,"words":308},"filePathRelative":"usage/lyfunc.md","localizedDate":"2024年5月31日","autoDesc":true}');export{d as comp,u as data};
