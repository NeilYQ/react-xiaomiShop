// 数据
var {laptop, host} = require('./data')

exports.laptops = (req, res) => {
  res.send({
    code: 200,
    name: '小米笔记本',
    top: {picUrl: host+'/images/laptop_top.jpg', alt: 'Redmi Book13全查屏 让高性能全面展现'},
    data: laptop
  })
};