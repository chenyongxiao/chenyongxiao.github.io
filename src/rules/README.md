# 函数中不需要的参数用占位代替

```javascript
// 优化前

function test(a, b, c) {
  console.log(c);
}

// 优化后
function test(_, __, c) {
  console.log(c);
}
```
