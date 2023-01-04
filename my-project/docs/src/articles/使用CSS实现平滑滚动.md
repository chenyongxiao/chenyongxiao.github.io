# 使用 CSS 实现平滑滚动

实现效果：

![实现效果](https://img-blog.csdnimg.cn/20d7069fbac04ed5ad6629b230c7bdb2.gif)

- 测试用例代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      html,
      body {
        height: 100%;
      }

      body {
        display: flex;
      }

      .left {
        width: 300px;
        background: #e4e4e4;
        text-align: center;
      }

      .right {
        flex: 1;
        overflow: auto;
        /* 不加scroll-behavior属性, 是直接到达指定位置, 没有过渡效果 */
        scroll-behavior: smooth;
      }

      .right div {
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div class="left">
      <ul>
        <li><a href="#section1">section1</a></li>
        <li><a href="#section2">section2</a></li>
        <li><a href="#section3">section3</a></li>
      </ul>
    </div>
    <div class="right">
      <div id="section1">section1</div>
      <div id="section2">section2</div>
      <div id="section3">section3</div>
    </div>
  </body>
</html>
```
