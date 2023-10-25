// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "首页", link: "/" },
  {
    text: "前端",
    items: [
      { text: "JavaScript", link: "/pages/87ff0b/" }, // 注意link结尾有斜杠和没有斜杠的区别
      { text: "Vue", link: "/pages/ad3c1c/" },
      { text: "React", link: "/pages/22cb67/" },
    ],
  },
  {
    text: "后端",
    items: [
      {
        text: "NestJS",
        link: "/pages/a0a2e3/",
      },
      {
        text: "Express",
        link: "/pages/94dcf9/",
      },
      {
        text: "Koa",
        link: "/pages/a74457/",
      },
      {
        text: "数据库",
        link: "/pages/fabe13/",
      },
    ],
  },
  {
    text: "大前端",
    items: [
      {
        text: "解锁“大前端思维”",
        link: "/pages/3c808d/",
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
