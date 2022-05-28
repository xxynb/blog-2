import { defineUserConfig } from "vuepress";
import theme from "./theme";

const userBase = 'blog-2';

export default defineUserConfig({
  lang: "zh-CN",
  title: "理塘旅游大使官方博客", // TODO: 主题演示
  description: "vuepress-theme-hope 的演示",

  base: `/${userBase}/`,

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  theme,
});
