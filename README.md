### 仿小米商城（React）

这是一次仿小米商城的React实战，项目的预览地址是 <a href='http://39.108.56.15:6028'>点击预览</a> ，项目的后台数据地址 <a href='http://39.108.56.15:6099'>点击查看</a> 。

##### 项目环境

`Node`	10.16.2

##### 快速启动

```
git clone https://github.com/NeilYQ/react-xiaomiShop.git
cd react-xiaomiShop
// 启动项目
$ npm start
// 打包项目
$ npm run build
// build文件下的文件可部署到服务器

// api启功
cd api
// 安装项目依赖
$ npm install
// 启动API
$ node app.js
```

##### 项目完成的页面及功能：

1. 首页：使用Swiper实现轮播，封装商品列表组件

2. 分类页：使用第三方懒加载组件

3. 详情页：添加购物车，从redux获取所需数据

4. 购物车：实现逆向解析地理位置，封装需求功能函数

5. 用户页

   

##### 后台数据API

在项目实现的过程中，简易的实现小米商城后台的数据获取，其中获取的数据均为静态数据。以下是后台的请求路由：

- 获取轮播图

   `/api/banner`
   
- 获取分类详情

   `/api/category`
   
- 获取发布会信息

   `/api/conference`
   
- 获取手机产品
   
   `/api/goods/phones`
   
- 获取手机产品详情

   `/api/goods/phone/:id`
   
- 获取电视产品

   `/api/goods/tvs`
   
- 获取电视产品详情

   `/api/goods/tv/:id`
   
- 获取笔记本产品

   `/api/goods/laptops`
   
- 获取笔记本产品详情

   `/api/goods/laptop/:id`


