---
# 这是文章的标题
title: 文字超出显示省略号
# 这是页面的图标
icon: fa-solid fa-file-code
# 设置作者
author: shilim
# 设置写作时间
date: 2023-11-02
tag:
  - css
---

## 单行文字超出
```css
.text-overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## 多行文字超出
```css
.text-overflow {
   overflow: hidden;
  text-overflow: ellipsis;
  display:-webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; // 多少行进行换行
  word-wrap: break-word;
}
```