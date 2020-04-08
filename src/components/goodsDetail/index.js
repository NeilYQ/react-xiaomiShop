import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCart} from '../../action/cart';

import { NavLink, Redirect } from 'react-router-dom';
import './goodsDetail.css';

@connect(
  state => ({shop: state}),
  {addCart}
)

class Details extends Component {
  state = {
    id: 0,
    detail: {},
    count: 0,
    map: "",
    toShopcart: false
  }
  addCount(){
    let num = this.state.count+1
    this.setState({count: num});
  }
  delCount(){
    let num = this.state.count
    if(num){
      num--;
      this.setState({count: num})
    }
  }
  addShopcart(){
    let {count, id} = this.state
    let {addCart} = this.props
    count && (
      addCart({ id, count })
    )
  }
  buy(){
    let {count, id} = this.state
    let {addCart} = this.props
    if(count){
      addCart({ id, count })
      this.setState({toShopcart: true})
    }else{
      alert('请选择购买数量')
    }
  }
  componentDidMount(){
    let id = this.props.match.params.id
    fetch('http://39.108.56.15:6099/api/goods/detail/'+id)
      .then(r=>r.json())
      .then(res=>{
        res.code===200 && this.setState({id, detail: res.data});
      })
  }
  render (){
    const {detail, count, toShopcart} = this.state
    if(toShopcart) 
      return (<Redirect to='/shopcart'/>)
    return (
      <div className='goodDetail'>
        <div className='back'><NavLink to='/'><img src={require('../../common/images/back.png')} alt=''/></NavLink></div>
        <div className='img'>
          <img src={detail.picUrl} alt={detail.title} />
        </div>
        <div className='info'>
          <div className='title'>{detail.title}</div> 
          <div className='desc'>{detail.desc}</div> 
          <div className='price'>
            <span>{detail.symbol + detail.price + ''}</span>
            <span className='before'>{detail.before && (detail.symbol + detail.before)}</span>
          </div>
          <div className='count'>
            <span>购买数量：</span>
            <span className='countBox'>
              <span onClick={this.delCount.bind(this)}>-</span>
              <span>{count}</span>
              <span onClick={this.addCount.bind(this)}>+</span>
            </span>
          </div>
          <div className='btn'>
            <div className='bt addShopcartBtn' onClick={this.addShopcart.bind(this)}>添加到购物车</div>
            <div className='bt buyBtn' onClick={this.buy.bind(this)}>立即购买</div>
          </div>
        </div>
      </div>
    )
  };
}

export default Details;
