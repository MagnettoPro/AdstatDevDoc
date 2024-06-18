# Авторизация

## Авторизация в системе

::: info
_POST_ `v2/login`

Пример использования:
```http request
https://client.adstat.pro/api/v2/login
```

__Параметры:__

| Параметр      | Тип       | Описание            |
|---------------|-----------|---------------------|
| `login`         | string    | Логин пользователя |
| `password`      | string    | Пароль пользователя|

__Пример параметров в тело запроса:__
```json
{
  "login": "user@example.com",
  "password": "string"
}
```
__Пример успешного ответа:__
```json
{
  "user_id": "3fa85f64-5717-4562-b3fc-2c922263f66a",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "refresh_token": "dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4gdXNlZCB0byBnZXQgYW4gbmV3IGFjY2VzcyB0b2tlbiB3aGVuIHRoZSBjdXJyZW50IGFjY2VzcyB0b2tlbiBleHBpcmVz"
}
```


`<access_token>` необходимо передавать в headers HTTP запросов в формате:
+ `Bearer <access_token>`

`<refresh_token>` необходимо использовать в методе `v2/access_token`, когда истёк срок действия `<access_token>` - для обновления `<access_token>`
:::

## Рефреш токена

::: info
_GET_ `v2/access-token`

Пример использования:
```http request
https://client.adstat.pro/api/v2/access-token
```

__Параметры__

В заголовке HTTP запроса необходимо передать `<refresh_token>` в формате:
+ `refresh_token: <refresh_token> `

__Пример успешного ответа:__

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "token_type": "Bearer"
}
```
:::
