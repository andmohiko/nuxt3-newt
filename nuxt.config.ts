// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  ssr: true,
  target: 'static',
  app: {
    head: {
      title: 'サイトのタイトル',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: ['@/assets/styles/reset.css'],
  runtimeConfig: {
    newt: {
      spaceUid: process.env.NUXT_NEWT_SPACE_UID ?? '',
      cdnApiToken: process.env.NUXT_NEWT_CDN_API_TOKEN ?? '',
      appUid: process.env.NUXT_NEWT_APP_UID ?? '',
      modelUid: process.env.NUXT_NEWT_MODEL_UID ?? '',
    },
  },
  typescript: {
    typeCheck: true,
  },
})
