---
# 这是文章的标题
title: 获取文件后缀名
# 这是页面的图标
icon: fa-solid fa-file-code
# 这是侧边栏的顺序
order: 1
# 设置作者
author: shilim
# 设置写作时间
date: 2024-03-27
tag:
  - javascript
---

## 使用 URL

```ts
function getSuffix(fullUrl) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}
```

## 使用正则

```ts
function getSuffix(filename) {
  const regex = /(?:\.([^.]+))?$/;
  return regex.exec(filename)[1];
}
```
