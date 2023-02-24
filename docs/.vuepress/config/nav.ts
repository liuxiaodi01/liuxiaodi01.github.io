// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "首页", link: "/" },
  {
    text: "前端",
    items: [
      { text: "JavaScript", link: "/pages/87ff0b/" }, // 注意link结尾有斜杠和没有斜杠的区别
      { text: "Vue", link: "/pages/ad3c1c/" },
    ],
  },
  {
    text: "后端",
    items: [
      {
        text: "NestJS",
        link: "/pages/ea8999/",
      },
      {
        text: "Express",
        link: "/pages/94dcf9/",
      },
      {
        text: "数据库",
        link: "/pages/fabe13/",
      },
    ],
  },
  {
    text: "技术",
    items: [
      {
        text: "webpack",
        link: "/pages/602b1a/",
      },
      {
        text: "vite",
        link: "/pages/97221b/",
      },
      {
        text: "工具类封装",
        link: "/pages/b58d10/",
      },
    ],
  },
  {
    text: "关于",
    link: "/about/",
  },
  {
    text: "更多",
    link: "/more/",
  },
];
