import{_ as t,c as e,o as a,a4 as s}from"./chunks/framework.BthPYDgy.js";const m=JSON.parse('{"title":"Параметры подключения","description":"","frontmatter":{},"headers":[],"relativePath":"get-started/get-started.md","filePath":"get-started/get-started.md"}'),o={name:"get-started/get-started.md"},i=s('<h1 id="параметры-подключения" tabindex="-1">Параметры подключения <a class="header-anchor" href="#параметры-подключения" aria-label="Permalink to &quot;Параметры подключения&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Формирование запроса на стороне пользователя - запросы к Adstat.pro API выполняются через HTTPS и должны быть представлены в слудующей форме: <code>https://client.adstat.pro/api/METHOD_NAME</code>. Например вот так:</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://client.adstat.pro/api/v2/login/</span></span></code></pre></div></div><h2 id="авторизация" tabindex="-1">Авторизация <a class="header-anchor" href="#авторизация" aria-label="Permalink to &quot;Авторизация&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Для того чтобы сформировать запрос к определенному ресурсу API, необходимо предоставить информацию в заголовках запроса, позволяющую идентифицировать пользователя. Список обязательных параметров: <br></p><ul><li>В <b>HTTP</b> запросах :<code>Authorization: Bearer &lt;access_token&gt;</code> <br></li></ul><p>Как получить <code>Bearer-token</code> описано в разделе <a href="./../api-methods/authorization">Авторизация</a></p></div>',4),c=[i];function r(d,l,n,p,h,_){return a(),e("div",null,c)}const b=t(o,[["render",r]]);export{m as __pageData,b as default};
