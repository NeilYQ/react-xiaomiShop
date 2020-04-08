/**
 * 
 * @authors ${ Neil-YQ } 
 * @email ${ 360842060@qq.com }
 * @date    2020-04-5 11:41:33
 * @version $Id$
 */

let express = require('express');
let router = require("./router/router");

let app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 获取post参数
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// 静态资源目录
app.use(express.static(__dirname + "/public"));

// 路由
app.use("/", router);


app.listen(6099);
console.log("listen on port 6099")
