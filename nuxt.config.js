module.exports = {
  modules: [
       '@nuxtjs/pwa',
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cómo indexar una PWA y no morir en el intento',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Esta es una PWA desarrollada con Nuxt.js para comprobar el comportamiento de Google con este tipo de páginas' },
      { name: 'theme-color', content: '#46B784'},
      { name: 'lang', content: 'es'},
      { property: 'og:title','content': 'Cómo indexar una PWA y no morir en el intento'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
/*
** Customize manifest
*/
  manifest: {
    name: 'NUXT PWA',
    short_name: 'NUXT PWA',
    description: 'PWA desarrollada con Nuxt.js + pwa-module para analizar comportamiento de Google con las distintas páginas y enlaces',
    lang: 'es',
    start_url: '.',
    theme_color: '#46B784',
    background_color: '#46B784'
},
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
