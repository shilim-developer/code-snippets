---
# 这是文章的标题
title: url去掉域名函数
# 这是页面的图标
icon: fa-solid fa-file-code
# 这是侧边栏的顺序
order: 1
# 设置作者
author: shilim
# 设置写作时间
date: 2024-01-04
tag:
  - javascript
---

## 使用 URL

```ts
function urlRemoveDomain(fullUrl) {
  const url = new URL(fullUrl);
  const pathWithoutDomain = url.pathname;
  return pathWithoutDomain;
}
```

## 使用正则

```ts
function urlRemoveDomain(fullUrl) {
  const regex = /^(https?:\/\/)?[^\/]+(.*)$/;
  const match = fullUrl.match(regex);
  const pathWithoutDomain = match ? match[2] : fullUrl;
  return pathWithoutDomain;
}
```
```ts
function urlRemoveDomain(fullUrl) {
  const pathWithoutDomain = fullUrl.replace(/^https?:\/\/[^\/]+/, '');
  return pathWithoutDomain;
}
```