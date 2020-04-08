import { combineReducers } from 'redux'

import shopcart from './shopcart'
import user from './user'

export default combineReducers({
  shopcart,
  user
});

// 随着应用变得复杂，需要对reducer函数进行拆分，拆分后的每一块独立负责state的一部分
// 把一个由多个不同的reducer函数作为 value 的 object 合并成一个最终的 reducer函数
// 然后就可以对这个 reducer 调用createStore