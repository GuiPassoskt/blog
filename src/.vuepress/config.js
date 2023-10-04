const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Decode Zero',
  base: '/blog/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Kaushan+Script",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.linearicons.com/free/1.0.0/icon-font.min.css",
      },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: "https://guipassoskt.github.io/assets/img/logo.svg",
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Posts',
        link: '/posts/'
      },
      {
        text: 'Portfolio',
        link: 'https://guipassoskt.github.io/'
      },
      {
        text: 'Github',
        link: 'https://github.com/GuiPassoskt'
      }
    ],
    sidebar: {
      '/posts/': [
        {
          title: "Posts",
          collapsable: false,
          children: [
            '',
            'closures',
            "como_capturar_imagem_da_webcam_com_canvas",
            "detectar_links_em_strings",
            "diferenca_entre_for_in_e_for_of",
            "every",
            "extrair_numero_de_strings",
            "fetch",
            "forcar_parametros_obrigatorios",
            "mascara_em_strings",
            "observando_mudancas_em_objetos",
            "obter_o_maior_e_o_menor_numero_do_array",
            "some",
            "upload_de_arquivos_com_js_puro",
            "vuejs_com_typescript",
          ],
        },
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
