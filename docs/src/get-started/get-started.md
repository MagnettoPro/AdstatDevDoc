# Параметры подключения



::: info
Формирование запроса на стороне пользователя - запросы к Adstat.pro API выполняются через HTTPS и должны быть представлены в форме: `https://client.adstat.pro/api/METHOD_NAME`, например: 

```http request
https://client.adstat.pro/api/v2/login/
```
:::
## Авторизация
::: info
Чтобы сформировать запрос к определенному ресурсу API, необходимо предоставить информацию в заголовках запроса, позволяющую идентифицировать пользователя. Список обязательных параметров: <br>
+ В <b>HTTP</b> запросах :`Authorization: Bearer <access_token>` <br>

Получение `Bearer-token` описано в разделе [Авторизация](../api-methods/authorization.md)
:::