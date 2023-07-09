---
# 这是文章的标题
title: 节流-去抖函数
# 这是页面的图标
icon: fa-solid fa-file-code
# 这是侧边栏的顺序
order: 1
# 设置作者
author: shilim
# 设置写作时间
date: 2023-07-08
tag:
  - javascript
---

## 节流函数
```ts
/**
* 频率控制，返回函数连续调用时，fn执行周期控制为delay/次
* @param fn {function} 需要调用的函数
* @param delay {number} 延迟时间，单位毫秒
* @return {function} 实际调用函数
*/
throttle(fn, delay) {
    let last = 0

    return function(...args) {
      let cur = +new Date()
      if((cur - last) > delay) {
          fn.apply(this,arguments)
          last = cur
      }
    }
}
```

## 去抖函数
```ts
/**
* 空闲控制，返回函数连续调用时，空闲时间必须大于等于delay才会执行fn
* @param fn {function} 需要调用的函数
* @param delay {number} 空闲时间，单位毫秒
* @return {function} 实际调用函数
*/
debounce(fn, delay) {
    let timer = null

    return function(...args) {
      if (timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
    }
}
```