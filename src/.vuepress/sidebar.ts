import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Vue",
      icon: "fab fa-vuejs",
      prefix: "vue/",
      link: "vue/",
      children: "structure",
    },
    {
      text: "React",
      icon: "fab fa-react",
      prefix: "react/",
      children: "structure",
    },
    {
      text: "Angular",
      icon: "fab fa-angular",
      prefix: "angular/",
      children: "structure",
    },
    {
      text: "Javascript",
      icon: "fab fa-js-square",
      prefix: "javascript/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Css",
      icon: "fab fa-css3-alt",
      prefix: "css/",
      link: "css/",
      children: "structure",
    },
    {
      text: "其他",
      icon: "fa fa-border-all",
      prefix: "other/",
      children: "structure",
    },
  ],
});
