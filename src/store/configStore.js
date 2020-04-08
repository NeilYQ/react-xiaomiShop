
import {createStore} from 'redux'
import Reducers from '../reducers'

/*
*   params {init} state的初始值
*   return {store}
*/ 
export default function (init){
  const store = createStore(
    Reducers,
    init,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store
}