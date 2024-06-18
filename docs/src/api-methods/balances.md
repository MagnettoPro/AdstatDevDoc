# Балансы

## Общие балансы
:::info
_GET_ `dashboard/balances`

Пример использования:
```http request
https://client.adstat.pro/api/dashboard/balances
```

__Параметры:__`

В заголовках HTTP запроса необходимо передать `<access_token>` в формате:
+ `Authorization: "Bearer <access_token>" `


__Пример успешного ответа:__
```json
{
  "active": {
    "amount": 0,
    "currency": "EUR"
  },
  "available": {
    "amount": 0,
    "currency": "EUR"
  },
  "total": {
    "amount": 0,
    "currency": "EUR"
  }
}
```

__Описание параметров успешного ответа:__

| Параметр    | Описание                                |
|-------------|-----------------------------------------|
| `active`    | Баланс остатка средств в объявлениях    |
| `available` | Свободный баланс кабинета пользователя  |
| `total`     | Общий баланс кабинета пользователя      |
:::




