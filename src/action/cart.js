// action
export function addCart(data){
  return {
    type: 'CRAT_ADD',
    data
  }
}

export function delCart(data){
  return {
    type: 'CRAT_DEL',
    data
  }
}

export function goodsCount(data){
  return {
    type: 'CRAT_GOODS_COUNT',
    data
  }
}