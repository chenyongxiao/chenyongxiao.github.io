const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "技术文档",
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
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "开发规范",
        link: "/rules/",
      },
      {
        text: "技术文档",
        link: "/articles/",
      },
    ],
    sidebar: {
      "/rules/": [
        {
          title: "开发规范",
          collapsable: false,
          children: [
            "",
            "开关简化",
            "善于用解构",
            "用对象代替switch, case选择结构",
            "中断forEach循环",
            "if条件中存在多个或运算符的优化",
          ],
        },
      ],
      "/articles/": [
        {
          title: "技术文档",
          collapsable: false,
          children: [
            "",
            "CSS filter给img修改颜色",
            "使用CSS实现平滑滚动",
            "JavaScript数组转树and树转数组",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
