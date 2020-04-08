// 数据
var {phone, host} = require('./data')

exports.phones = (req, res) => {
  res.send({
    code: 200,
    name: '小米手机',
    top: {picUrl: host+'/images/phone_top.jpg', alt: '每日精选'},
    data: phone
  })
};
