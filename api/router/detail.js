
const {data} = require('./data')

var temp = []
for(var item in data){
  temp.push(...data[item])
}

exports.get = (req, res) => {
  var t = temp.filter(item=>item.id==req.params.id)[0]
  res.send({ code: 200, data: t });
}