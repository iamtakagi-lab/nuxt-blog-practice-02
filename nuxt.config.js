const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CMA_ACCESS_TOKEN'
])

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'manji.fun',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '上級国民ブロガーです' },
      { hid: 'og:description', property: 'og:description', content: '上級国民ブロガーです'  },
      { hid: 'og:url', property: 'og:url', content: 'https://manji.fun/' },
      { hid: 'og:title', property: 'og:title', content: 'manji.fun' },
      { hid: 'og:type', property: 'og:type', content: 'website'},
      { hid: 'og:image', property: 'og:image', content: 'https://i.imgur.com/fOmCfav.png' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@notsmatch' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'manji.fun' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fredoka+One&display=swap' }
    ]
  },

  manifest: {
    name: "manji.fun",
    title: "manji.fun",
    'og:title': 'manji.fun',
    description: 'manji.fun',
    'og:description': 'manji.fun',
    lang: 'ja',
  },

  router: {
    middleware: [
      'getContentful'
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {src: '~/assets/scss/style.scss', lang: 'scss'},
    {src: '~/assets/scss/markdown.scss', lang: 'scss'},
    'highlight.js/styles/agate.css',
  ],

  markdownit: {
    preset: 'default',
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true,  // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
    use: ['markdown-it-highlightjs', 'markdown-it-anchor', 'markdown-it-table-of-contents']
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/contentful',
    '~/plugins/moment-filter'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-fontawesome',
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {
      id: 'UA-158068455-1'
    }],
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-7932483299460648'
    }],
  ],
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, { isDev }) {
      if (isDev && process.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: ctfConfig.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  }
}
