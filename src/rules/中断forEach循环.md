# 中断 forEach 循环

> 使用 return，只会中断当前的回调函数，并不能完全阻断整个 forEach 循环
>
> 使用场景：在循环逻辑中，满足了某个条件需要终止遍历

- 方法 1：将 forEach 改成 for 循环

  ```javascript
  const a = 6;
  const arr = [1, 2, 5, 6, 10, 9];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a) break;
    // 做逻辑处理
    console.log(arr[i]);
  }
  ```

- 方法 2：使用 try, catch 配合 forEach

  > 利用抛出异常会阻止程序运行的特性

  ```javascript
  const a = 6;
  const arr = [1, 2, 5, 6, 10, 9];

  try {
    arr.forEach((v) => {
      if (v === a) throw new Error("满足条件，我要退出了");
      // 做逻辑处理
      console.log(v);
    });
  } catch (e) {
    console.log(e.message);
  }
  ```
