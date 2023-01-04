# CSS filter 给 img 修改颜色

效果图:

![在这里插入图片描述](https://img-blog.csdnimg.cn/5b9d20472a61492185660e944c835dbb.png)

#### 所有代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 150px;
        height: 50px;
        border: 1px solid black;
        display: flex;
        overflow: hidden;
        margin-bottom: 20px;
      }

      .box-filter img {
        /* 
        filter中的drop-shadow，该滤镜可以给图片非透明区域添加投影 
        -80是因为, 原始图片移动到屏幕外面80px的位置, 它的投影也会跟着走,
        因此需要设置-80px, 把投影放到最初的位置
        */
        filter: drop-shadow(-80px 0 red);
        /* 然后把原始图片移除box外面, 由于设置了超出部分隐藏, 因此看不见 */
        transform: translate(80px);
      }
    </style>
  </head>
  <body>
    <div class="box">
      <span>原始图片</span>
      <img src="imgs/error-icon.png" alt="" />
    </div>
    <div class="box box-filter">
      <span>使用filter换色</span>
      <img src="imgs/error-icon.png" alt="" />
    </div>
  </body>
</html>
```
