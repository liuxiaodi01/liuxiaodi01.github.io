/** 插入自定义html模块 (可用于插入广告模块等)
 * {
 *   homeSidebarB: htmlString, 首页侧边栏底部
 *
 *   sidebarT: htmlString, 全局左侧边栏顶部
 *   sidebarB: htmlString, 全局左侧边栏底部
 *
 *   pageT: htmlString, 全局页面顶部
 *   pageB: htmlString, 全局页面底部
 *   pageTshowMode: string, 页面顶部-显示方式：未配置默认全局；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *   pageBshowMode: string, 页面底部-显示方式：未配置默认全局；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *
 *   windowLB: htmlString, 全局窗口左下角②
 *   windowRB: htmlString, 全局窗口右下角②
 * }
 *
 * ①注：在.md文件front matter配置`article: false`的页面是自定义页，未配置的默认是文章页（首页除外）。
 * ②注：windowLB 和 windowRB：1.展示区块宽高最大是200*200px。2.请给自定义元素定一个不超过200px的固定宽高。3.在屏宽小于960px时无论如何都不会显示。
 */

export default {
  homeSidebarB: `<div style="padding: 0.95rem">
      <p style="
        color: var(--textColor);
        opacity: 0.9;
        font-size: 1.2rem;
        margin: 0 0 8px 0;
        display: flex;
        align-items: center;
      ">
      <svg t="1677139342753" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31240" width="1.2rem" height="1.2rem"><path d="M783.7184 316.3648v310.8352c85.8624 0 155.4432-69.5808 155.4432-155.4432 0-85.8112-69.5808-155.392-155.4432-155.392zM241.664 945.8688h-10.0352c-42.24 0-76.4928-34.2528-76.4928-76.4928v-214.4768h163.072v214.4768c0 42.24-34.304 76.4928-76.544 76.4928z" fill="#FFE37B" p-id="31241"></path><path d="M379.4432 688.1792H213.8112c-64.768 0-117.248-55.04-117.248-122.9312V357.632c0-67.8912 52.48-122.9312 117.248-122.9312h165.632L716.8 78.4384c35.6864-16.5376 75.776 10.8544 75.776 51.7632v668.9792c0 41.2672-40.7552 68.6592-76.544 51.4048l-336.5888-162.4064z" fill="#8C7BFD" p-id="31242"></path><path d="M318.9248 234.752v453.4272h60.5184l48.5888 23.4496V212.224l-48.5888 22.528z" fill="#FFE37B" p-id="31243"></path></svg>
      公告</p>
      <p style="font-size:14px">妄想进入虚空，却被虚空吞噬。 --DreamStars</p>
      </div>`,
  // `<!-- 纵向自适应 -->
  // <ins class="adsbygoogle"
  //     style="display:block;padding: 0.95rem;"
  //     data-ad-client="ca-pub-7828333725993554"
  //     data-ad-slot="7802654582"
  //     data-ad-format="auto"
  //     data-full-width-responsive="true"></ins>
  // <script>
  //     (adsbygoogle = window.adsbygoogle || []).push({});
  // </script>`,
  // sidebarT:
  //   `<!--  固定100% * 150px可显示，max-height:150px 未见显示-->
  //   <ins class="adsbygoogle"
  //         style="display:inline-block;width:100%;max-height:150px"
  //         data-ad-client="ca-pub-7828333725993554"
  //         data-ad-slot="6625304284"></ins>
  //     <script>
  //         (adsbygoogle = window.adsbygoogle || []).push({});
  //     </script>`,
  sidebarB: `<!-- 正方形 -->
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-7828333725993554"
            data-ad-slot="3508773082"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>`,
  pageT: `<!-- 固定100% * 90px可显示，max-height:90px未见显示-->
       <ins class="adsbygoogle"
            style="display:inline-block;width:100%;max-height:90px"
            data-ad-client="ca-pub-7828333725993554"
            data-ad-slot="6625304284"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>`,
  // pageTshowMode: 'article',
  pageB: `<!-- 横向自适应 -->
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-7828333725993554"
            data-ad-slot="6620245489"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>`,
  // pageBshowMode: 'article',
  // windowLB: // 会遮挡部分侧边栏
  //   `<!-- 固定200*200px -->
  //     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  //     <ins class="adsbygoogle"
  //         style="display:inline-block;width:200px;height:200px"
  //         data-ad-client="ca-pub-7828333725993554"
  //         data-ad-slot="6625304284"></ins>
  //     <script>
  //         (adsbygoogle = window.adsbygoogle || []).push({});
  //     </script>`,
  windowRB: `<!-- 固定160*160px -->
        <ins class="adsbygoogle"
            style="display:inline-block;max-width:160px;max-height:160px"
            data-ad-client="ca-pub-7828333725993554"
            data-ad-slot="8377369658"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        `,
};
