import { defineConfig } from 'vitepress'
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  cleanUrls: true,
  title: "Adstat Docs",
  description: "Добро пожаловать в Adstat Docs",
  base: "/AdstatDocs/",
  srcDir: "src",
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Начало работы', link: '/get-started/get-started' },
      {
        text: '1.0.0',
        items: [
          { text: 'Swagger', link: 'https://client.adstat.pro/api/docs' },
        ]
      }
    ],
    outline: {
      level: "deep",
      label: "На этой странице",
    },
    sidebar: [
      {
        text: 'Начало работы',
        items: [
          { text: 'Параметры подключения', link: '/get-started/get-started' },
        ]
      },
      {
        text: 'Методы API',
        items: [
          { text: 'Авторизация', link: '/api-methods/authorization' },
          { text: 'Балансы', link: '/api-methods/balances' },
          { text: 'Кабинеты', link: '/api-methods/cabinets' },
          { text: 'Статистика', link: '/api-methods/statistics' },
          { text: 'Кампании', link: '/api-methods/campaigns' },
          { text: 'Объявления', link: '/api-methods/advertisements' },
        ]
      }
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Поиск",
            buttonAriaLabel: "Поиск",
          },
          modal: {
            noResultsText: "Ничего не найдено для",
            resetButtonTitle: "для сброса",

            footer: {
              selectText: "для выбора",
              navigateText: "для навигации",
              closeText: "для закрытия окна",
            },
          },
        },
      },
    },
  },
})
