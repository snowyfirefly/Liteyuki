import{_ as n,o as e,c as t,e as a}from"./app-BrSLFMno.js";const s={},i=a(`<h3 id="func-default-plugins-loader" tabindex="-1"><a class="header-anchor" href="#func-default-plugins-loader"><span><em>func</em> <code>default_plugins_loader()</code></span></a></h3><p><strong>Description</strong>: 默认插件加载器，应在初始化时调用</p><details><summary><b>Source code</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">default_plugins_loader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    默认插件加载器，应在初始化时调用
    &quot;&quot;&quot;</span>
    <span class="token keyword">for</span> plugin <span class="token keyword">in</span> get_config<span class="token punctuation">(</span><span class="token string">&#39;liteyuki.plugins&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        load_plugin<span class="token punctuation">(</span>plugin<span class="token punctuation">)</span>
    <span class="token keyword">for</span> plugin_dir <span class="token keyword">in</span> get_config<span class="token punctuation">(</span><span class="token string">&#39;liteyuki.plugin_dirs&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;src/liteyuki_plugins&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        load_plugins<span class="token punctuation">(</span>plugin_dir<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,3),o=[i];function p(l,u){return e(),t("div",null,o)}const r=n(s,[["render",p],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/en/dev/api/plugins/plugin_loader/","title":"liteyuki.plugins.plugin_loader","lang":"en-US","frontmatter":{"title":"liteyuki.plugins.plugin_loader","description":"func default_plugins_loader() Description: 默认插件加载器，应在初始化时调用 Source code","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope-docs-demo.netlify.app/dev/api/plugins/plugin_loader/"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/en/dev/api/plugins/plugin_loader/"}],["meta",{"property":"og:site_name","content":"LiteyukiBot"}],["meta",{"property":"og:title","content":"liteyuki.plugins.plugin_loader"}],["meta",{"property":"og:description","content":"func default_plugins_loader() Description: 默认插件加载器，应在初始化时调用 Source code"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T06:19:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-29T06:19:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liteyuki.plugins.plugin_loader\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T06:19:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"func default_plugins_loader()","slug":"func-default-plugins-loader","link":"#func-default-plugins-loader","children":[]}],"git":{"createdTime":1724912379000,"updatedTime":1724912379000,"contributors":[{"name":"snowy","email":"snowykami@outlook.com","commits":1}]},"readingTime":{"minutes":0.2,"words":61},"filePathRelative":"en/dev/api/plugins/plugin_loader/README.md","localizedDate":"August 29, 2024","autoDesc":true}');export{r as comp,d as data};
