export default {
  components: true,
  buildModules: ["@nuxtjs/svg"],
  modules: ["@nuxt/content", "nuxt-i18n"],
  css: [
    "~/assets/css/shared.css",
    "~/assets/css/header.css",
    "~/assets/css/article.css",
    "~/assets/css/index-page.css",
  ],
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr',
      messages: {
        en: {
          welcome: 'Welcome',
          readMore: 'Read more',
          company: 'Company',
        },
        fr: {
          welcome: 'Bienvenue',
          readMore: 'Lire la suite',
          company: 'L\'entreprise'
        }
      }
    }
  }
};
