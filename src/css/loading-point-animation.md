---
# 这是文章的标题
title: 加载中小点点动画
# 这是页面的图标
icon: fa-solid fa-file-code
# 设置作者
author: shilim
# 设置写作时间
date: 2024-07-15
tag:
  - css
---

## 加载中小点点动画
```html
<html>
  <style>
    button {
      background-color: black;
      color: #ffffff;
      padding: 6px 20px;
      padding-right: 26px;
      border: none;
    }
    .loading {
      height: 2px;
      width: 2px;
      display: inline-block;
      animation: loading-animation 2.4s infinite steps(1, start);
    }
    @keyframes loading-animation {
      25% {
        box-shadow: 2px 0 0 white;
      }
      50% {
        box-shadow: 2px 0 0 white, 7px 0 0 white;
      }
      75% {
        box-shadow: 2px 0 0 white, 7px 0 0 white, 12px 0 0 white;
      }
    }
  </style>
  <button>
    加载中
    <span class="loading"></span>
  </button>
</html>
```