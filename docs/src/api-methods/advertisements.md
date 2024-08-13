# Работа с объявлениями

## <span id="advertisements">Список объявлений</span>

:::info
_GET_ `v2/advertisement/?show_deleted=false&period=today&offset=0&limit=50&advertisement_titles=&campaign_names=`

Пример использования:
```http request
https://client.adstat.pro/api/v2/advertisement/?show_deleted=false&period=today&offset=0&limit=50&advertisement_titles=&campaign_names=
```

__Описание query-параметров:__


| Параметр               | Тип     | Описание                                                                                                                                                                                   |
|------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `show_deleted`         | Boolean | Параметр, определяющий, нужно ли показывать удаленные объявления. Возможные значения: `true` или `false`.                                                                                  |
| `period`               | Строка  | Период, за который необходимо получить данные. <br/>Значения могут быть - `today` ( За сегодня ) , `all` ( За весь период ), `yesterday` (За вчера) , `starts_month` ( За текущий месяц ). |
| `offset`               | Число   | Смещение в результирующем списке объявлений.                                                                                                                                               |
| `limit`                | Число   | Максимальное количество объявлений в ответе.                                                                                                                                               |
| `advertisement_titles` | Строка  | Фильтрация по названию объявления.                                                                                                                                                         |
| `campaign_names`       | Строка  | Фильтрация по названию объявления.                                                                                                                                                         |




__Пример успешного ответа:__
```json
{
  "data": [
    {
      "id": 1364756,
      "account_name": "SOME_test",
      "campaign_name": "Default",
      "advertisement_title": "example title",
      "status": "stopped",
      "object": "t.me/example",
      "ad_text": "example text",
      "cpm": 3.0,
      "target_topics": [],
      "balance": 0.0,
      "cps": 0,
      "created_dt": "09.01.1998 09:04:26",
      "status_updated_dt": "1998-01-09T09:29:27.311931+00:00",
      "ad_type": "target_channels",
      "goals": 0,
      "impressions": 0,
      "cpc": 0,
      "ctr": 0,
      "spent": 0,
      "clicks": 0
    }
  ]
}
```


__Описание параметров успешного ответа:__

| Поле                          | Тип          | Описание                                                                  |
|-------------------------------|--------------|---------------------------------------------------------------------------|
| `id`                          | Число        | Уникальный идентификатор объявления.                                      |
| `account_name`                | Строка       | Название аккаунта, которому принадлежит объявление.                       |
| `campaign_name`               | Строка       | Название кампании, к которой относится объявление.                        |
| `advertisement_title`         | Строка       | Название объявления.                                                      |
| `status`                      | Строка       | Текущий статус объявления.                                                |
| `object`                      | Строка       | Объект рекламирования.                                                    |
| `ad_text`                     | Строка       | Текст креатива объявления.                                                |
| `cpm`                         | Число        | Стоимость тысячи показов (CPM).                                           |
| `target_topics`               | Массив строк | Список топиков, на которые таргетируется объявление.                      |
| `balance`                     | Число        | Баланс объявлением.                                                       |
| `cps`                         | Число        | Стоимость за цель (CPS).                                                  |
| `created_dt`                  | Строка       | Дата и время создания объявления в формате строки.                        |
| `status_updated_dt`           | Строка       | Дата и время последнего обновления статуса объявления в формате ISO 8601. |
| `ad_type`                     | Строка       | Тип объявления <br/>(например, `"target_channels"`, `target_users`).      |
| `goals`                       | Число        | Количество достигнутых целей.                                             |
| `impressions`                 | Число        | Количество показов объявления.                                            |
| `cpc`                         | Число        | Стоимость за клик (CPC).                                                  |
| `ctr`                         | Число        | Коэффициент кликабельности (CTR).                                         |
| `spent`                       | Число        | Сумма потраченных средств.                                                |
| `clicks`                      | Число        | Количество кликов по объявлению.                                          |
| `successfully_created_ad_ids` | Число        | Cписок id созданых объявлений                                             |

:::


## Создание объявлений

:::info
_POST_ `/api/advertisement/{platform}`

Пример использования:
```http request
https://client.adstat.pro/api/advertisement/telegram/ 
```

__Описание query-параметров:__

| Параметр            | Тип      | Описание          |
|---------------------|----------|-------------------|
| `platform`          | Default  | Всегда Telegram   |
                                                                                                                                                       |

__Пример успешного ответа:__
```json
{
  "campaign_id": 0,
  "title": "string",
  "text": "string",
  "promote_url": "string",
  "cpm": 1000,
  "budget": 0,
  "langs": [
    "string"
  ],
  "topics": [
    0
  ],
  "topics_verbose": [
    "string"
  ],
  "channels": [
    0
  ],
  "channels_verbose": [
    "string"
  ],
  "exclude_topics": [
    0
  ],
  "exclude_topics_verbose": [
    "string"
  ],
  "exclude_channels": [
    0
  ],
  "exclude_channels_verbose": [
    "string"
  ],
  "other_info": "",
  "split_by": [
    "langs"
  ],
  "ad_source": "string",
  "ad_type": "target_channels",
  "countries": [
    "string"
  ],
  "locations": [
    "string"
  ],
  "locations_verbose": [
    "string"
  ],
  "audiences": [
    0
  ],
  "exclude_audiences": [
    0
  ],
  "website_name": "string",
  "views_per_user": 1,
  "show_picture": false,
  "promote_url_picture_id": "",
  "exclude_politic": false,
  "all_topics_interested_users": false,
  "device": "all",
  "target_user_channels": [],
  "target_user_channels_verbose": [],
  "exclude_target_user_channels": [],
  "exclude_target_user_channels_verbose": [],
  "button_type": "open_website",
  "daily_budget": 0,
  "after_moderation_status": "active",
  "start_date": "2024-08-13T06:48:05.266Z",
  "end_date": "2024-08-13T06:48:05.266Z",
  "schedule": {
    "mon": [
      23
    ],
    "tue": [
      23
    ],
    "wed": [
      23
    ],
    "thu": [
      23
    ],
    "fri": [
      23
    ],
    "sat": [
      23
    ],
    "sun": [
      23
    ]
  },
  "use_selected_timezone": true,
  "schedule_timezone": 0,
  "promote_url_type": "website",
  "currency_code": "EUR",
  "use_account_currency": false
}
```


__Описание параметров успешного ответа:__

| Поле                                   | Тип             | Описание                                                            |
|----------------------------------------|-----------------|---------------------------------------------------------------------|
| `campaign_id`                          | Число           |                                                                     |
| `text`                                 | Строка          | Текст объявления                                                    |
| `promote_url`                          | Строка          | URL канала/бота/сайта                                               |
| `cpm`                                  | Число           | Стоимость тысячи показов (CPM                                       |
| `langs`                                | Массив строк    | Список языков                                                       |
| `budget`                               | Число           | Лимит                                                               |
| `topics`                               | Массив строк    | Топики                                                              |
| `topics_verbose`                       | Массив строк    | Включаемые топики, название текстом                                 |
| `channels`                             | Строка          | Каналы                                                              |
| `channels_verbose`                     | Массив строк    |                                                                     |
| `exclude_topics`                       | Число           |                                                                     |
| `exclude_topics_verbose`               | Массив строк    | Исключаемые топики, название текстом                                |
| `exclude_channels`                     | Число           |                                                                     |
| `exclude_channels_verbose`             | Строка          |                                                                     |
| `other_info`                           | Строка          |                                                                     |
| `split_by`                             | Строка          |                                                                     |
| `ad_source`                            | Строка          |                                                                     |
| `ad_type`                              | Строка          | Тип объявления <br/>(например, `"target_channels"`, `target_users`) |
| `countries`                            | Строка          | Страны                                                              |
| `locations`                            | Массив строк    | Список местоположений                                               |
| `locations_verbose`                    | Строка          |                                                                     |
| `audiences`                            | Число           |                                                                     |
| `exclude_audiences`                    | Число           |                                                                     |
| `website_name`                         | Строка          | Название веб-сайта                                                  |
| `views_per_user`                       | Число           | Дневной лимит просмотров на пользователя                            |
| `show_picture`                         | Строка          | Показать аватарку сайта/канала                                      |
| `promote_url_picture_id`               | Строка          | Путь к аватарке                                                     |
| `exclude_politic`                      | Строка          | галочка в "Исключить показы в политических каналах"                 |
| `all_topics_interested_users`          | Строка          |                                                                     |
| `device`                               | Строка          | Устройство                                                          |
| `target_user_channels`                 | Строка          | Список каналов, на которые таргетируется объявление                 |
| `target_user_channels_verbose`         | Строка          | Включаемые каналы без t.me                                          |
| `exclude_target_user_channels`         | Строка          | Исключаемые id каналы с установленной локацией                      |
| `exclude_target_user_channels_verbose` | Строка          | Исключаемые каналы без t.me                                         |
| `button_type`                          | Строка          | Название кнопки для перехода по рекламируемому обьявлению           |
| `daily_budget`                         | Число           | Дневной лимит                                                       |
| `after_moderation_status`              | Строка          | Статус после модерации                                              |
| `start_date`                           | Массив строк    | Дата  запуска обьявления                                            |
| `end_date`                             | Массив строк    | Дата остановки обьявления                                           | 
| `schedule`                             | Массив строк    | Расписание                                                          |
| `use_selected_timezone`                | Строка          | Используется заданая таймзона                                       |
| `schedule_timezone`                    | Число           | Время таймзоны, часы переведенные в секунды                         |
| `promote_url_type`                     | Строка          |                                                                     |
| `currency_code`                        | Строка          |                                                                     |
| `use_account_currency`                 | Строка          |                                                                     |

:::

## Детали объявлений

:::info
_GET_ `/api/advertisement/{platform}/{ad_id}`

Пример использования:
```http request
https://client.adstat.pro/api/advertisement/telegram/1798111?use_account_currency=false
```

__Описание query-параметров:__

| Параметр                | Тип     | Описание                                       |
|-------------------------|---------|------------------------------------------------|
| `platform`              | Default | Всегда Telegram                                |
| `ad_id`                 | Число   | Идентификатор обьявления                       |
| `currency`              | Строка  | Валюта, в которой будут представлены данные    |
| `use_account_currency`  |         |                                                |


__Пример успешного ответа:__
```json
{
  "ad_id": 1798111,
  "account_id": "ACC06163",
  "account_name": "GD_SS / annamatari.ru / 11664",
  "campaign_id": 1663,
  "campaign_name": "Default",
  "title": "Соф | сайт4 т49+канЛал6",
  "text": "![✏️]",
  "promote_url": "https://annamatari.ru/practical-course_gd/?utm_source=",
  "promote_url_title": null,
  "promote_url_photo": null,
  "cpm": 3,
  "budget": 3,
  "langs": [],
  "topics": [],
  "channels": [
    "https://t.me/"
  ],
  "exclude_topics": [],
  "exclude_channels": [],
  "other_info": "erid: 2VSb5",
  "decline_reason": [],
  "status": "in_review",
  "status_updated_dt": "2024-08-12T11:31:07.944939+00:00",
  "cannot_edit_fields": [],
  "ad_type": "target_channels",
  "countries": [],
  "user_locations": [],
  "audiences": [],
  "exclude_audiences": [],
  "is_audiences": false,
  "is_exclude_audiences": false,
  "website_name": "Бесплатный мини-курс по психологии 👇",
  "is_website": false,
  "views_per_user": 1,
  "show_picture": false,
  "exclude_politic": null,
  "promote_url_picture_id": "https://ads.telegram.org/file/>/photo.jpg",
  "all_topics_interested_users": null,
  "device": null,
  "target_user_channels": [],
  "exclude_target_user_channels": [],
  "button_type": "open_website",
  "daily_budget": 0,
  "after_moderation_status": "active",
  "start_date": null,
  "end_date": null,
  "schedule": null,
  "use_selected_timezone": null,
  "schedule_timezone": null,
  "website_photo_url": "",
  "tg_account_type": 1,
  "currency": "EUR"
}
```


__Описание параметров успешного ответа:__

| Поле                           | Тип                 | Описание                                                                 |
|--------------------------------|---------------------|--------------------------------------------------------------------------|
| `ad_id`                        | Число               | Уникальный идентификатор объявления                                      |
| `account_id`                   | Строка              | Уникальный идентификатор кабинета                                        |
| `account_name`                 | Строка              | Название аккаунта                                                        |
| `campaign_id`                  | Число               |                                                                          |
| `campaign_name`                | Строка              | Название кампании, к которой относится объявление                        |
| `title`                        | Строка              | Название объявления                                                      |
| `text`                         | Строка              | Текст объявления                                                         |
| `promote_url`                  | Строка              | URL канала/бота/сайта                                                    |
| `promote_url_title`            | Строка              |                                                                          |
| `promote_url_photo`            | Строка              |                                                                          |
| `cpm`                          | Число               | Стоимость тысячи показов (CPM                                            |
| `budget`                       | Число               | Лимит                                                                    |
| `langs`                        | Массив строк        | Список языков                                                            |
| `topics`                       | Массив строк        | Топики                                                                   |
| `channels`                     | Строка              | Каналы                                                                   |
| `exclude_topics`               |                     |                                                                          |
| `exclude_channels`             |                     |                                                                          |
| `other_info`                   | Строка              |                                                                          |
| `decline_reason`               |                     |                                                                          |
| `status`                       | Строка              | Текущий статус объявления                                                |
| `status_updated_dt`            | Строка              | Дата и время последнего обновления статуса объявления в формате ISO 8601 |
| `cannot_edit_fields`           |                     |                                                                          |
| `ad_type`                      | Строка              | Тип объявления <br/>(например, `"target_channels"`, `target_users`)      |
| `countries`                    | Строка              | Страны                                                                   |
| `user_locations`               |                     |                                                                          |
| `audiences`                    |                     |                                                                          |
| `exclude_audiences`            |                     |                                                                          |
| `is_audiences`                 | Строка              |                                                                          |
| `is_exclude_audiences`         | Строка              |                                                                          |
| `website_name`                 | Строка              | Название веб-сайта                                                       |
| `is_website`                   | Строка              |                                                                          |
| `views_per_user`               | Число               | Дневной лимит просмотров на пользователя                                 |
| `show_picture`                 | Строка              | Показать аватарку сайта/канала                                           |
| `exclude_politic`              | Строка              | галочка в "Исключить показы в политических каналах"                      |
| `promote_url_picture_id`       | Строка              | Путь к аватарке                                                          |
| `all_topics_interested_users`  | Строка              |                                                                          |
| `device`                       | Строка              | Устройство                                                               |
| `target_user_channels`         |                     | Список каналов, на которые таргетируется объявление                      |
| `exclude_target_user_channels` |                     | Исключаемые id каналы с установленной локацией                           | 
| `button_type`                  | Строка              | Название кнопки для перехода по рекламируемому обьявлению                |
| `daily_budget`                 | Число               | Дневной лимит                                                            |
| `after_moderation_status`      | Строка              | Статус после модерации                                                   |
| `start_date`                   | Массив строк        | Дата  запуска обьявления                                                 |
| `end_date`                     | Массив строк        | Дата остановки обьявления                                                |
| `schedule`                     | Массив строк        | Расписание                                                               |
| `use_selected_timezone`        | Строка              | Используется заданая таймзона                                            |
| `schedule_timezone`            | Число               | Время таймзоны, часы переведенные в секунды                              |
| `website_photo_url`            | Строка              |                                                                          |
| `tg_account_type`              | Число               |                                                                          |
| `currency`                     | Строка              | Валюта, в которой будут представлены данные                              |

:::


## Редактирование объявлений

:::info
_PUT_ `/api/advertisement/{platform}/{ad_id}`

Пример использования:
```http request
https://client.adstat.pro/api/advertisement/telegram/1803354/
```

__Описание query-параметров:__

| Параметр                | Тип     | Описание                 |
|-------------------------|---------|--------------------------|
| `platform`              | Default | Всегда Telegram          |
| `ad_id`                 | Число   | Идентификатор обьявления |



__Пример успешного ответа:__
```json
{
  "title": "string",
  "text": "string",
  "promote_url": "string",
  "other_info": "",
  "website_name": "",
  "cpm": 0,
  "views_per_user": 1,
  "show_picture": false,
  "promote_url_picture_id": "",
  "button_type": "open_website",
  "daily_budget": 0,
  "after_moderation_status": "active",
  "start_date": "2024-08-13T07:53:41.402Z",
  "end_date": "2024-08-13T07:53:41.402Z",
  "schedule": {
    "mon": [
      23
    ],
    "tue": [
      23
    ],
    "wed": [
      23
    ],
    "thu": [
      23
    ],
    "fri": [
      23
    ],
    "sat": [
      23
    ],
    "sun": [
      23
    ]
  },
  "use_selected_timezone": true,
  "schedule_timezone": 0,
  "currency_code": "EUR",
  "use_account_currency": false
}
```


__Описание параметров успешного ответа:__

| Поле                           | Тип                | Описание                                                  |
|--------------------------------|--------------------|-----------------------------------------------------------|
| `title`                        | Строка             | Название объявления                                       |
| `text`                         | Строка             | Текст объявления                                          |
| `promote_url`                  | Строка             | URL канала/бота/сайта                                     |
| `other_info`                   | Строка             |                                                           |
| `website_name`                 | Строка             | Название веб-сайта                                        |
| `cpm`                          | Число              | Стоимость тысячи показов (CPM                             |
| `views_per_user`               | Число              | Дневной лимит просмотров на пользователя                  |
| `show_picture`                 | Строка             | Показать аватарку сайта/канала                            |
| `promote_url_picture_id`       | Строка             | Путь к аватарке                                           |
| `button_type`                  | Строка             | Название кнопки для перехода по рекламируемому обьявлению |
| `daily_budget`                 | Число              | Дневной лимит                                             |
| `after_moderation_status`      | Строка             | Статус после модерации                                    |
| `start_date`                   | Массив строк       | Дата  запуска обьявления                                  |
| `end_date`                     | Массив строк       | Дата остановки обьявления                                 |
| `schedule`                     | Массив строк       | Расписание                                                |
| `use_selected_timezone`        | Строка             | Используется заданая таймзона                             |
| `schedule_timezone`            | Число              | Время таймзоны, часы переведенные в секунды               |
| `currency_code`                | Строка             |                                                           |
| `use_account_currency`         | Строка             |                                                           |


:::