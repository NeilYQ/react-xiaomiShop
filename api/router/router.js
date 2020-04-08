/**
 * @authors ${ Neil-YQ } 
 * @email ${ 360842060@qq.com }
 * @date    2020-04-5 11:43:33
 * @version $Id$
 */
const express = require("express");
const phone = require("./phone");
const tv = require("./tv");
const laptop = require("./laptop");
const detail = require("./detail");
const router = express.Router();

const host = 'http://39.108.56.15:6099'

router.get("/", (req, res) => {
  res.send({name:'Welcome to xiaomi API (fake) !'})
});

router.get("/api/banner", (req, res) => {
  res.send({
    code: 200,
    data: [
      {picUrl: host+'/images/banner1.jpg', alt: '米粉节新品发布会'},
      {picUrl: host+'/images/banner2.jpg', alt: '小米10 信用卡分期享24期免息'},
      {picUrl: host+'/images/banner3.jpg', alt: '小米10周年 米粉节'},
    ]
  });
});

router.get("/api/category", (req, res) => {
  res.send({
    code: 200,
    data: [
      {picUrl: host+'/images/nav1.png', alt: '小米秒杀'},
      {picUrl: host+'/images/nav2.webp', alt: '小米众筹'},
      {picUrl: host+'/images/nav3.gif', alt: 'K30 Pro'},
      {picUrl: host+'/images/nav4.webp', alt: '以旧换新'},
      {picUrl: host+'/images/nav5.webp', alt: '超值特卖'},
      {picUrl: host+'/images/nav6.png', alt: '智能'},
      {picUrl: host+'/images/nav7.png', alt: '笔记本热卖'},
      {picUrl: host+'/images/nav8.png', alt: '电视热卖'},
      {picUrl: host+'/images/nav9.png', alt: '洗衣机热卖'},
      {picUrl: host+'/images/nav10.png', alt: '米粉卡'},
    ]
  });
});

router.get("/api/conference", (req, res) => {
  res.send({
    code: 200,
    data: [
      {picUrl: host+'/images/c1.jpg', alt: 'Redmi K30'},
      {picUrl: host+'/images/c2.jpg', alt: '小米手环4 NFC版'},
      {picUrl: host+'/images/c3.jpg', alt: '小米电视特惠'},
      {picUrl: host+'/images/c4.jpg', alt: '小米10 x Discovery 探素秘境之旅'},
    ]
  });
});

router.get("/api/goods/phones", phone.phones);

router.get("/api/goods/tvs", tv.tvs);

router.get("/api/goods/laptops", laptop.laptops);

router.get("/api/goods/detail/:id", detail.get);

router.get("/*", (req, res) => {
  res.send("404 Not Found !")
})

module.exports = router;