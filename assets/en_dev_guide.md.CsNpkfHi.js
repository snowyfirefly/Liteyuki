import{C as e}from"./chunks/ContributorBar.D3yPbWeK.js";import{c as o,I as t,a9 as i,o as r}from"./chunks/framework.C4_mTacX.js";import"./chunks/theme.Cbp6nyHc.js";const a=i('<h1 id="development-guide" tabindex="-1">Development Guide <a class="header-anchor" href="#development-guide" aria-label="Permalink to &quot;Development Guide&quot;">​</a></h1><h2 id="how-to-develop" tabindex="-1">How to Develop <a class="header-anchor" href="#how-to-develop" aria-label="Permalink to &quot;How to Develop&quot;">​</a></h2><p>Please read the <a href="./plugin.html">Plugin Development</a> and <a href="./api/">API Reference</a> documents if you are developing a plugin.</p><p>If you need to submit code to the Liteyuki repository, please read the following:</p><ol><li>First <a href="https://github.com/LiteyukiStudio/LiteyukiBot/fork" target="_blank" rel="noreferrer">fork</a> a copy of the Liteyuki repository to your personal/organization account.</li><li>Develop in your repository.</li><li>Create a new branch in your repository and submit your code to this branch.</li><li>Create a Pull Request in your repository to merge your branch into the <code>main</code> branch of the Liteyuki repository.</li></ol><ul><li>Participation in development assumes that you are already familiar with the basic usage of the Python language and the Liteyuki framework.</li><li>If you are developing documentation, please ensure that you are familiar with Markdown syntax and basic front-end knowledge.</li><li>Contact the repository maintainer in case of conflicts.</li></ul><h3 id="suggestions" tabindex="-1">Suggestions <a class="header-anchor" href="#suggestions" aria-label="Permalink to &quot;Suggestions&quot;">​</a></h3><ul><li>During development, you can use tools such as <code>mypy</code>, <code>flake8</code>, and <code>black</code> for code checking and formatting.</li><li>Enable developer mode by setting <code>dev_mode: true</code> in <code>config.yml</code> to see more debugging information in the console.</li></ul><h2 id="project-structure" tabindex="-1">Project Structure <a class="header-anchor" href="#project-structure" aria-label="Permalink to &quot;Project Structure&quot;">​</a></h2><ul><li><code>main.py</code>: Bot entry file</li><li><code>liteyuki</code>: Framework directory (liteyukibot)</li><li><code>src</code>: Bot application source code directory <ul><li><code>liteyuki_plugins</code>: Liteyuki plugin directory</li><li><code>nonebot_plugins</code>: Nonebot plugin directory</li><li><code>resources</code>: Built-in resource packs directory</li><li><code>utils</code>: Utility directory</li></ul></li><li><code>tests</code>: Unit test directory</li><li><code>docs</code>: Documentation directory <ul><li><code>en</code>: English documentation</li><li><code>zh</code>: Chinese documentation</li></ul></li><li><code>docker</code>: Docker related content directory</li></ul><p>The <code>liteyuki</code> framework is included in the <code>LiteyukiBot</code> application, so this project is both the <code>LiteyukiBot</code> application repository and the <code>liteyuki</code> framework repository.</p><p>The <code>src</code> directory is the application part, please develop business logic in this directory. <code>liteyuki_plugins</code> and <code>nonebot_plugins</code> directories are plugin directories, please develop plugins in these directories.</p><h2 id="standardization" tabindex="-1">Standardization <a class="header-anchor" href="#standardization" aria-label="Permalink to &quot;Standardization&quot;">​</a></h2><ul><li>Code should follow <a href="https://pep8.org/" target="_blank" rel="noreferrer"><code>PEP8</code></a> and <a href="https://google.github.io/styleguide/pyguide.html" target="_blank" rel="noreferrer"><code>Google Python Style Guide</code></a>.</li><li>In addition, code submitted to the Liteyuki repository should follow the following guidelines: <ul><li>Ensure that the code is runnable and harmless.</li><li>Ensure that the type hints in the code are correct.</li><li>Ensure that the comment style is <a href="https://google.github.io/styleguide/pyguide.html" target="_blank" rel="noreferrer"><code>Google Docstring</code></a> or <a href="https://github.com/LiteyukiStudio/litedoc?tab=readme-ov-file#liteyuki-docstring" target="_blank" rel="noreferrer"><code>Liteyuki Docstring</code></a>(recommended) to ensure that Litedoc can parse and generate documentation correctly.</li><li>Strings should be enclosed in double quotes <code>&quot;</code> as much as possible, and single quotes <code>&#39;</code> should be used when nesting strings.</li><li>If there is a part for ordinary users, ensure that the documentation is complete (each language has corresponding documentation).</li></ul></li><li>commit message should follow the following guidelines: <ul><li>You should commit the code after completing a feature or fixing a bug, and not mix the code of multiple features or bugs together.</li><li>We use gitmoji to mark the type of commit, such as <code>:sparkles:</code> for introducing new features, <code>:bug:</code> for fixing bugs, etc., please refer to <a href="https://gitmoji.dev/" target="_blank" rel="noreferrer">gitmoji</a> for details.</li><li>The format of the commit message is <code>&lt;emoji&gt; [type:] &lt;message&gt;</code>, such as <code>:sparkles: feat: add new field to event</code>, where the type field is the type of commit, not much is required, but please fill in as much as possible; the message field is a brief description, in summary, what you did.</li><li>There is no restriction on the language of the commit message, and bilingual use is possible if conditions permit.</li></ul></li><li>The documentation should follow <a href="https://www.markdownguide.org/" target="_blank" rel="noreferrer"><code>Markdown</code></a> syntax and support vitepress-related content: <ul><li>Revise the documentation for each language when editing.</li><li>Ensure that the links in the document are correct and do not lead to inaccessible links.</li><li>Ensure that the <strong>User Documentation</strong> is easy to understand and the <strong>Development Documentation</strong> is detailed.</li></ul></li></ul><h2 id="finally" tabindex="-1">Finally <a class="header-anchor" href="#finally" aria-label="Permalink to &quot;Finally&quot;">​</a></h2><ul><li>This project is a non-profit open-source project, and we welcome anyone to participate in development. Your contributions will make Liteyuki better.</li></ul>',16),p=JSON.parse('{"title":"Development Guide","description":"","frontmatter":{"title":"Development Guide","order":0},"headers":[],"relativePath":"en/dev/guide.md","filePath":"en/dev/guide.md","lastUpdated":1725389024000}'),l={name:"en/dev/guide.md"},g=Object.assign(l,{setup(n){return(d,s)=>(r(),o("div",null,[a,t(e)]))}});export{p as __pageData,g as default};
