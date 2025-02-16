import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pinckus Project",
  description: "更好的价格，解锁Pinckus过去与未来的工程。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '工程展示', link: '/what' }
    ],

    sidebar: [
      {
        text: 'menu',
        items: [
          { text: '查看介绍', link: '/show' },
          { text: '工程展示', link: '/what' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/86709966' }
    ],

export default {
  base: '/Web-service/'
 }
})
