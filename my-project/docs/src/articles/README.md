# div 实现拉伸效果

效果图:

![请添加图片描述](https://img-blog.csdnimg.cn/37a1643087f343008806f608b861e123.gif)

**核心点:**

1. div 宽度自适应

   > 宽度自适应 width 默认情况下, 块级元素不设置宽度, 默认为整个屏幕宽度或者和父级同宽, 如果元素脱离了文档流`(浮动或者定位)`, 那么元素的宽度由元素的内容决定

2. css resize 属性
   > 相关介绍: [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/resize)
   > resize 生效的条件: 不支持内联元素; 块级元素，需要 overflow 属性的计算值不是 visible。

整体布局

```html
<div class="container">
  <!-- resizable 用于拉伸的工具 -->
  <div class="resizable"></div>
  <!-- content 要展示的内容区域 -->
  <div class="content">content</div>
</div>
```

> container 父容器, 用于控制脱离文档流, 然其宽度随着拉伸大小而决定
> resizable 可以拉伸的容器, 从而可以控制父容器的宽度
> content 真正展示的容器, 其宽度随着父级而定

基础知识, 拉伸区域的实现, 右下角出现可拉伸图标

```html
.content { width: 200px; height: 200px; resize: horizontal; cursor: ew-resize;
overflow: hidden; // 必须要配合overflow来使用resize, 否则拉伸图标无法显示
border: 1px solid red; }
<div class="content">content</div>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/837d9c7e07c54983bc9038f4386f77e9.png)
限制拉伸尺寸

> 通过设置 min-width、min-height、max-width 和 max-height 可以限制拉伸尺寸。

所有代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        position: relative;
        /* 脱离文档流 */
        float: left;
      }

      /*  */
      .resizable {
        width: 200px;
        height: 200px;
        overflow: scroll;
        resize: horizontal;
        cursor: ew-resize;
        opacity: 0;
        min-width: 200px; // 盒子宽度最小为200px
      }
      /* 更改拖拽图标的大小和父容器一样大 */
      .resizable::-webkit-scrollbar {
        width: 20px;
        height: 200px;
      }

      /* 使用定位, 将容器定位到父容器的正中间, 跟着父容器的大小改变而改变 */
      .content {
        margin: 0;
        height: 200px;
        position: absolute;
        top: 0;
        /* 留出5px为了鼠标放上去可以显示拖拽 */
        right: 5px;
        bottom: 0;
        left: 0;
        border: 1px solid;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <!-- resizable 用于拖拽的工具 -->
      <div class="resizable"></div>
      <!-- content 要展示的内容区域 -->
      <div class="content">content</div>
    </div>
  </body>
</html>
```

层级图
![请添加图片描述](https://img-blog.csdnimg.cn/c5a0d26ca20b4cada68e831e91dff637.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5LiA5Liq54is5Z2R55qEQ29kZXI=,size_16,color_FFFFFF,t_70,g_se,x_16)
