import{_ as o,o as t,c as a,b as e,d as i,e as n}from"./app-0e_4pVFu.js";const s={},d=e("h3",{id:"def-flat-config-config-dict-str-any-dict-str-any",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#def-flat-config-config-dict-str-any-dict-str-any"},[e("span",null,[e("em",null,[e("strong",null,"def")]),i(),e("code",null,"flat_config(config: dict[str, Any]) -> dict[str, Any]")])])],-1),l=e("p",null,"扁平化配置文件",-1),r=e("p",{"a.b.c:1":""},"{a:{b:{c:1}}} ->",-1),c=n(`<p>Args:</p><pre><code>config: 配置项目
</code></pre><p>Returns:</p><pre><code>扁平化后的配置文件，但也包含原有的键值对
</code></pre><h3 id="def-load-from-yaml-file-str-dict-str-any" tabindex="-1"><a class="header-anchor" href="#def-load-from-yaml-file-str-dict-str-any"><span><em><strong>def</strong></em> <code>load_from_yaml(file: str) -&gt; dict[str, Any]</code></span></a></h3><p>Load config from yaml file</p><h3 id="def-load-from-json-file-str-dict-str-any" tabindex="-1"><a class="header-anchor" href="#def-load-from-json-file-str-dict-str-any"><span><em><strong>def</strong></em> <code>load_from_json(file: str) -&gt; dict[str, Any]</code></span></a></h3><p>Load config from json file</p><h3 id="def-load-from-toml-file-str-dict-str-any" tabindex="-1"><a class="header-anchor" href="#def-load-from-toml-file-str-dict-str-any"><span><em><strong>def</strong></em> <code>load_from_toml(file: str) -&gt; dict[str, Any]</code></span></a></h3><p>Load config from toml file</p><h3 id="def-load-from-files-dict-str-any" tabindex="-1"><a class="header-anchor" href="#def-load-from-files-dict-str-any"><span><em><strong>def</strong></em> <code>load_from_files() -&gt; dict[str, Any]</code></span></a></h3><p>从指定文件加载配置项，会自动识别文件格式</p><p>默认执行扁平化选项</p><h3 id="def-load-configs-from-dirs-dict-str-any" tabindex="-1"><a class="header-anchor" href="#def-load-configs-from-dirs-dict-str-any"><span><em><strong>def</strong></em> <code>load_configs_from_dirs() -&gt; dict[str, Any]</code></span></a></h3><p>从目录下加载配置文件，不递归</p><p>按照读取文件的优先级反向覆盖</p><p>默认执行扁平化选项</p><h3 id="def-load-config-in-default-no-waring-bool-dict-str-any" tabindex="-1"><a class="header-anchor" href="#def-load-config-in-default-no-waring-bool-dict-str-any"><span><em><strong>def</strong></em> <code>load_config_in_default(no_waring: bool) -&gt; dict[str, Any]</code></span></a></h3><p>从一个标准的轻雪项目加载配置文件</p><p>项目目录下的config.*和config目录下的所有配置文件</p><p>项目目录下的配置文件优先</p><h3 id="class-satorinodeconfig-basemodel" tabindex="-1"><a class="header-anchor" href="#class-satorinodeconfig-basemodel"><span><em><strong>class</strong></em> <code>SatoriNodeConfig(BaseModel)</code></span></a></h3><h3 id="class-satoriconfig-basemodel" tabindex="-1"><a class="header-anchor" href="#class-satoriconfig-basemodel"><span><em><strong>class</strong></em> <code>SatoriConfig(BaseModel)</code></span></a></h3><h3 id="class-basicconfig-basemodel" tabindex="-1"><a class="header-anchor" href="#class-basicconfig-basemodel"><span><em><strong>class</strong></em> <code>BasicConfig(BaseModel)</code></span></a></h3>`,24),f=[d,l,r,c];function m(g,p){return t(),a("div",null,f)}const h=o(s,[["render",m],["__file","config.html.vue"]]),_=JSON.parse('{"path":"/en/dev/api/liteyuki/config.html","title":"liteyuki.config","lang":"en-US","frontmatter":{"title":"liteyuki.config","order":1,"icon":"laptop-code","category":"API","description":"def flat_config(config: dict[str, Any]) -> dict[str, Any] 扁平化配置文件 {a:{b:{c:1}}} -> Args: Returns: def load_from_yaml(file: str) -> dict[str, Any] Load config from yaml file def ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/en/dev/api/liteyuki/config.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot"}],["meta",{"property":"og:title","content":"liteyuki.config"}],["meta",{"property":"og:description","content":"def flat_config(config: dict[str, Any]) -> dict[str, Any] 扁平化配置文件 {a:{b:{c:1}}} -> Args: Returns: def load_from_yaml(file: str) -> dict[str, Any] Load config from yaml file def ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-19T01:55:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-19T01:55:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liteyuki.config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-19T01:55:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"def flat_config(config: dict[str, Any]) -> dict[str, Any]","slug":"def-flat-config-config-dict-str-any-dict-str-any","link":"#def-flat-config-config-dict-str-any-dict-str-any","children":[]},{"level":3,"title":"def load_from_yaml(file: str) -> dict[str, Any]","slug":"def-load-from-yaml-file-str-dict-str-any","link":"#def-load-from-yaml-file-str-dict-str-any","children":[]},{"level":3,"title":"def load_from_json(file: str) -> dict[str, Any]","slug":"def-load-from-json-file-str-dict-str-any","link":"#def-load-from-json-file-str-dict-str-any","children":[]},{"level":3,"title":"def load_from_toml(file: str) -> dict[str, Any]","slug":"def-load-from-toml-file-str-dict-str-any","link":"#def-load-from-toml-file-str-dict-str-any","children":[]},{"level":3,"title":"def load_from_files() -> dict[str, Any]","slug":"def-load-from-files-dict-str-any","link":"#def-load-from-files-dict-str-any","children":[]},{"level":3,"title":"def load_configs_from_dirs() -> dict[str, Any]","slug":"def-load-configs-from-dirs-dict-str-any","link":"#def-load-configs-from-dirs-dict-str-any","children":[]},{"level":3,"title":"def load_config_in_default(no_waring: bool) -> dict[str, Any]","slug":"def-load-config-in-default-no-waring-bool-dict-str-any","link":"#def-load-config-in-default-no-waring-bool-dict-str-any","children":[]},{"level":3,"title":"class SatoriNodeConfig(BaseModel)","slug":"class-satorinodeconfig-basemodel","link":"#class-satorinodeconfig-basemodel","children":[]},{"level":3,"title":"class SatoriConfig(BaseModel)","slug":"class-satoriconfig-basemodel","link":"#class-satoriconfig-basemodel","children":[]},{"level":3,"title":"class BasicConfig(BaseModel)","slug":"class-basicconfig-basemodel","link":"#class-basicconfig-basemodel","children":[]}],"git":{"createdTime":1724031826000,"updatedTime":1724032547000,"contributors":[{"name":"snowy","email":"snowykami@outlook.com","commits":2}]},"readingTime":{"minutes":0.77,"words":230},"filePathRelative":"en/dev/api/liteyuki/config.md","localizedDate":"August 19, 2024","autoDesc":true}');export{h as comp,_ as data};
