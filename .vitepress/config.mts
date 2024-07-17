import { defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar"; //使用插件，将会根据文章目录生成侧边栏
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dada在线文档",
  base: "/Note-Blogs/",
  description: "笔记",
  srcDir: ".", // 存放文档的路径（index.md 的父目录），VitePress 会基于这个目录来编译和生成静态网站；如果配置为 ., 则是对应的项目根目录，scDir 下 必须要有一个 index.md，配置主页布局
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" }, // 链接路径，这个路径应该是相对于 `srcDir` 的。比如 `/docs/test` 指向的是 `scDir/docs/test.md`
      { text: "学习笔记", link: "/Notes/学习笔记/2.md" }, // 指向笔记库的文档路径
    ],
    // 详情页侧边栏
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" }, // 指向笔记库的文档路径
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://ccldada.github.io/Note-Blogs/" }],
  },
  // 根据文章目录生成侧边栏
  vite: {
    plugins: [
      AutoSidebar({
        path: ".",
        collapsed: false,
        ignoreList: [".obsidian", ".git", "node_modules"],
      }),
    ],
  },
});
