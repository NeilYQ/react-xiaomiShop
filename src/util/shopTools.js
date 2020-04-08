let shopTools = {}
let shop = JSON.parse(window.localStorage.getItem('shopInfo') || '{}');

// 更新商品
shopTools.addUpdate = function(goods){
  if(shop[goods.id]){
    shop[goods.id] += goods.count
  }else{
    shop[goods.id] = goods.count
  }
  this.save()
}

// 删除
shopTools.delete = function(id){
  delete shop[id];
  this.save()
}

// 获取
shopTools.get = function(){
  return JSON.parse(window.localStorage.getItem('shopInfo') || '{}')
}

// 存储
shopTools.save = function(){
  window.localStorage.setItem('shopInfo', JSON.stringify(shop));
}

export default shopTools