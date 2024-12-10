import{_ as t,c as a,a3 as o,o as s}from"./chunks/framework.DtMx7FFi.js";const u=JSON.parse('{"title":"Параметры подключения","description":"","frontmatter":{},"headers":[],"relativePath":"get-started/get-started.md","filePath":"get-started/get-started.md","lastUpdated":1733847621000}'),c={name:"get-started/get-started.md"};function i(r,e,d,l,n,p){return s(),a("div",null,e[0]||(e[0]=[o('<h1 id="параметры-подключения" tabindex="-1">Параметры подключения <a class="header-anchor" href="#параметры-подключения" aria-label="Permalink to &quot;Параметры подключения&quot;">​</a></h1><p>Логин и пароль в Adstat не являются непосредственно авторизационными данными для доступа к API. Вместо этого они используются для получения токенов, а уже токены используются для авторизации (путём передачи в headers при вызове запросов) - Как передавать токены описано <a href="./get-started#authorization">тут</a>.</p><p>При помощи логина и пароля можно запросить access token и refresh token через соответствующий эндпоинт API.</p><ul><li><code>Access token</code> — это временный токен, который используется для авторизации в API-запросах. Он передаётся в заголовке <code>Authorization</code> в формате <code>Bearer &lt;access_token_value&gt;</code>.</li><li><code>Refresh token</code> — это токен, который используется для получения нового access token, когда срок действия текущего access token истекает. Он передаётся в заголовке <code>refresh_token</code> в формате <code>&lt;refresh_token_value&gt;</code></li></ul><p>Как получить первично access &amp; refresh токен описано <a href="./../api-methods/authorization">тут</a></p><p>Процесс авторизации:</p><ol><li><code>Аутентификация</code>: Отправка логина и пароля в API для получения access token и refresh token.</li><li><code>Использование токенов</code>: Access token передаётся в заголовках запросов для выполнения операций через API.</li><li><code>Обновление токенов</code>: Когда access token истекает, с помощью refresh token запрашивается новый access token.</li></ol><p>Т.е - логин и пароль необходимы только для первоначального получения токенов, а для дальнейшего взаимодействия с API используются пара токенов - как авторизационные данные.</p><p>Время жизни токенов:</p><ul><li><code>access_token</code> = 1 час</li><li><code>refresh_token</code> = 30 дней</li></ul><p>Когда время жизни access_token истекло, можно выписать новые: Как выписать новые токены описано <a href="./../api-methods/authorization#access-token">тут</a></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Формирование запроса на стороне пользователя - запросы к Adstat.pro API выполняются через HTTPS и должны быть представлены в форме: <code>https://client.adstat.pro/api/METHOD_NAME</code>, например:</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://client.adstat.pro/api/v2/login/</span></span></code></pre></div></div><h2 id="авторизация" tabindex="-1"><span id="authorization">Авторизация</span> <a class="header-anchor" href="#авторизация" aria-label="Permalink to &quot;&lt;span id=&quot;authorization&quot;&gt;Авторизация&lt;/span&gt;&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Чтобы сформировать запрос к определенному ресурсу API, необходимо предоставить информацию в заголовках запроса, позволяющую идентифицировать пользователя. Список обязательных параметров: <br></p><ul><li>В <b>HTTP</b> запросах :<code>Authorization: Bearer &lt;access_token&gt;</code> <br></li></ul><p>Получение <code>Bearer-token</code> описано в разделе <a href="./../api-methods/authorization">Авторизация</a></p></div>',14)]))}const k=t(c,[["render",i]]);export{u as __pageData,k as default};