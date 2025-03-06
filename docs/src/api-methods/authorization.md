# Авторизация

## Авторизация в системе

::: info
Авторизация в системе

<details>
    <summary>
        <code>POST v2/login</code> 
        Метод авторизации<br>
    </summary>

```http request
https://client.adstat.pro/api/v2/login
```

**Request body FormData**

| Параметр   | Тип    | Описание            |
|------------|--------|---------------------|
| `username` | string | Логин пользователя  |
| `password` | string | Пароль пользователя |

**Content-Type:**

- `application/x-www-form-urlencoded`
- `multipart/form-data`

**Request:**

```
username=user@example.com
password=string
```

**Response:**

```json
{
  "user_id": "3fa85f64-5717-4562-b3fc-2c922263f66a",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "refresh_token": "dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4gdXNlZCB0byBnZXQgYW4gbmV3IGFjY2VzcyB0b2tlbiB3aGVuIHRoZSBjdXJyZW50IGFjY2VzcyB0b2tlbiBleHBpcmVz"
}
```

</details>

`<access_token>` необходимо передавать в headers HTTP запросов в формате:

+ `Bearer <access_token>`

`<refresh_token>` необходимо использовать в методе `v2/access_token`, когда истёк срок действия `<access_token>` - для
обновления `<access_token>`
:::

## <span id="new_access_token">Выписка нового токена access_token</span>

::: info 
Выписка нового токена access_token

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
