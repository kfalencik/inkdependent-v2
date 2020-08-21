
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Inkdependent - Tattoo & Piercing, Edinburgh',
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'x-ua-compatible', content: 'ie-edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Inkdependent is a tattoo & piercing studio based in Edinburgh, Scotland.' },
      { property: 'og:title', content: 'Inkdependent - Tattoo & Piercing, Edinburgh' },
      { property: 'og:type', content: 'webiste' },
      { property: 'og:url', content: 'https://inkdependent.eu' },
      { property: 'og:image', content: 'https://inkdependent.eu/images/logo.png' },
      { property: 'og:description', content: 'Inkdependent is a tattoo & piercing studio based in Edinburgh, Scotland.' },
      { property: 'fb:app_id', content: '1700806313540957' },
      { name: 'twitter:card', content: 'summary_large_image' },
		  { name: 'twitter:title', content: 'Inkdependent - Tattoo & Piercing, Edinburgh' },
		  { name: 'twitter:description', content: 'Inkdependent is a tattoo & piercing studio based in Edinburgh, Scotland.' },
      { name: 'twitter:image', content: 'https://inkdependent.eu/images/slideshow/slide-1.jpg' },
      { name: 'google-site-verification', content: 'SmYckbKgvHa-5sRWHHLZaLTVJhPAc3fCofM6N0KWGu0' },
      { name: 'theme-color', content: '#000000' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: 'icon.png' },
      { rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css' },
      { rel: 'manifest', href: '/manifest.json' }

    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['nuxt-fontawesome', {
      component: 'fa', 
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }]
  ],
  styleResources: {
    scss: [
      './assets/styles/*.scss',
    ]
  },
  fontawesome: {
    component: 'fa'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
