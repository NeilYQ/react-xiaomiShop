// 数据

const {tv, host} = require('./data')

exports.tvs = (req, res) => {
  res.send({
    code: 200,
    name: '小米电视',
    top: {picUrl: host+'/images/tv_top.webp', alt: '小米电视'},
    data: tv
  })
};