
import shopTools from '../util/shopTools'

// 购物车功能
export default function(state={}, action){
  let goods = action.data
  switch(action.type){
    case 'CRAT_ADD':
      shopTools.addUpdate(goods);
      return shopTools.get();
    case 'CRAT_DEL':
      shopTools.delete(goods.id);
      return shopTools.get();
    case 'CRAT_GOODS_COUNT':
      return 'CART_GOODS_COUNT';
    default:
      return shopTools.get();
  }
}