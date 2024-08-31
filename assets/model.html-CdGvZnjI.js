import{_ as e,o as a,c as t,e as s}from"./app-BvUYPzLF.js";const n={},o=s(`<h1 id="liteyuki-plugin-model" tabindex="-1"><a class="header-anchor" href="#liteyuki-plugin-model"><span>liteyuki.plugin.model</span></a></h1><p><strong>说明</strong>: Copyright (C) 2020-2024 LiteyukiStudio. All Rights Reserved</p><p>@Time : 2024/7/24 上午12:02 @Author : snowykami @Email : snowykami@outlook.com @File : model.py @Software: PyCharm</p><h3 id="class-plugintype-enum" tabindex="-1"><a class="header-anchor" href="#class-plugintype-enum"><span><em><strong>class</strong></em> <code>PluginType(Enum)</code></span></a></h3><h4 id="attr-application-application" tabindex="-1"><a class="header-anchor" href="#attr-application-application"><span><em><strong>attr</strong></em> <code>APPLICATION = &#39;application&#39;</code></span></a></h4><h4 id="attr-service-service" tabindex="-1"><a class="header-anchor" href="#attr-service-service"><span><em><strong>attr</strong></em> <code>SERVICE = &#39;service&#39;</code></span></a></h4><h4 id="attr-module-module" tabindex="-1"><a class="header-anchor" href="#attr-module-module"><span><em><strong>attr</strong></em> <code>MODULE = &#39;module&#39;</code></span></a></h4><h4 id="attr-unclassified-unclassified" tabindex="-1"><a class="header-anchor" href="#attr-unclassified-unclassified"><span><em><strong>attr</strong></em> <code>UNCLASSIFIED = &#39;unclassified&#39;</code></span></a></h4><h4 id="attr-test-test" tabindex="-1"><a class="header-anchor" href="#attr-test-test"><span><em><strong>attr</strong></em> <code>TEST = &#39;test&#39;</code></span></a></h4><h3 id="class-pluginmetadata-basemodel" tabindex="-1"><a class="header-anchor" href="#class-pluginmetadata-basemodel"><span><em><strong>class</strong></em> <code>PluginMetadata(BaseModel)</code></span></a></h3><h4 id="attr-name-str-no-default" tabindex="-1"><a class="header-anchor" href="#attr-name-str-no-default"><span><em><strong>attr</strong></em> <code>name: str = NO_DEFAULT</code></span></a></h4><h4 id="attr-description-str" tabindex="-1"><a class="header-anchor" href="#attr-description-str"><span><em><strong>attr</strong></em> <code>description: str = &#39;&#39;</code></span></a></h4><h4 id="attr-usage-str" tabindex="-1"><a class="header-anchor" href="#attr-usage-str"><span><em><strong>attr</strong></em> <code>usage: str = &#39;&#39;</code></span></a></h4><h4 id="attr-type-plugintype-plugintype-unclassified" tabindex="-1"><a class="header-anchor" href="#attr-type-plugintype-plugintype-unclassified"><span><em><strong>attr</strong></em> <code>type: PluginType = PluginType.UNCLASSIFIED</code></span></a></h4><h4 id="attr-author-str" tabindex="-1"><a class="header-anchor" href="#attr-author-str"><span><em><strong>attr</strong></em> <code>author: str = &#39;&#39;</code></span></a></h4><h4 id="attr-homepage-str" tabindex="-1"><a class="header-anchor" href="#attr-homepage-str"><span><em><strong>attr</strong></em> <code>homepage: str = &#39;&#39;</code></span></a></h4><h4 id="attr-extra-dict-str-any" tabindex="-1"><a class="header-anchor" href="#attr-extra-dict-str-any"><span><em><strong>attr</strong></em> <code>extra: dict[str, Any] = {}</code></span></a></h4><h3 id="class-plugin-basemodel" tabindex="-1"><a class="header-anchor" href="#class-plugin-basemodel"><span><em><strong>class</strong></em> <code>Plugin(BaseModel)</code></span></a></h3><h4 id="def-hash-self" tabindex="-1"><a class="header-anchor" href="#def-hash-self"><span><em><strong>def</strong></em> <code>__hash__(self)</code></span></a></h4><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/plugin/model.py#L83" target="_blank">在GitHub上查看</a></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__hash__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token builtin">hash</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>module_name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><h4 id="attr-model-config-arbitrary-types-allowed-true" tabindex="-1"><a class="header-anchor" href="#attr-model-config-arbitrary-types-allowed-true"><span><em><strong>attr</strong></em> <code>model_config = {&#39;arbitrary_types_allowed&#39;: True}</code></span></a></h4><h4 id="attr-name-str-no-default-1" tabindex="-1"><a class="header-anchor" href="#attr-name-str-no-default-1"><span><em><strong>attr</strong></em> <code>name: str = NO_DEFAULT</code></span></a></h4><h4 id="attr-module-moduletype-no-default" tabindex="-1"><a class="header-anchor" href="#attr-module-moduletype-no-default"><span><em><strong>attr</strong></em> <code>module: ModuleType = NO_DEFAULT</code></span></a></h4><h4 id="attr-module-name-str-no-default" tabindex="-1"><a class="header-anchor" href="#attr-module-name-str-no-default"><span><em><strong>attr</strong></em> <code>module_name: str = NO_DEFAULT</code></span></a></h4><h4 id="attr-metadata-optional-pluginmetadata-none" tabindex="-1"><a class="header-anchor" href="#attr-metadata-optional-pluginmetadata-none"><span><em><strong>attr</strong></em> <code>metadata: Optional[PluginMetadata] = None</code></span></a></h4>`,25),r=[o];function i(l,d){return a(),t("div",null,r)}const c=e(n,[["render",i],["__file","model.html.vue"]]),m=JSON.parse('{"path":"/dev/api/plugin/model.html","title":"liteyuki.plugin.model","lang":"zh-CN","frontmatter":{"title":"liteyuki.plugin.model","lastUpdated":false,"description":"liteyuki.plugin.model 说明: Copyright (C) 2020-2024 LiteyukiStudio. All Rights Reserved @Time : 2024/7/24 上午12:02 @Author : snowykami @Email : snowykami@outlook.com @File : model....","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/en/dev/api/plugin/model.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/dev/api/plugin/model.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"liteyuki.plugin.model"}],["meta",{"property":"og:description","content":"liteyuki.plugin.model 说明: Copyright (C) 2020-2024 LiteyukiStudio. All Rights Reserved @Time : 2024/7/24 上午12:02 @Author : snowykami @Email : snowykami@outlook.com @File : model...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-29T06:19:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-29T06:19:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liteyuki.plugin.model\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T06:19:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"class PluginType(Enum)","slug":"class-plugintype-enum","link":"#class-plugintype-enum","children":[]},{"level":3,"title":"class PluginMetadata(BaseModel)","slug":"class-pluginmetadata-basemodel","link":"#class-pluginmetadata-basemodel","children":[]},{"level":3,"title":"class Plugin(BaseModel)","slug":"class-plugin-basemodel","link":"#class-plugin-basemodel","children":[]}],"git":{"createdTime":1724031826000,"updatedTime":1724912379000,"contributors":[{"name":"snowy","email":"snowykami@outlook.com","commits":5}]},"readingTime":{"minutes":0.44,"words":132},"filePathRelative":"dev/api/plugin/model.md","localizedDate":"2024年8月19日","autoDesc":true}');export{c as comp,m as data};
