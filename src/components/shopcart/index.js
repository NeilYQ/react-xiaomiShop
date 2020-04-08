import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCart, delCart} from '../../action/cart';

import './shopcart.css'

@connect(
  state => ({shop: state}),
  {addCart, delCart }
)

class Shopcart extends Component {
  state = {
    goods: [],
    nums: 0,
    sum: 0,
    address: ''
  }
  addCount = (index) => {
    let {addCart} = this.props
    let {goods, sum, nums} = this.state
    let item = goods[index]
    item.count++
    nums++;
    sum += item.price-0;
    this.setState({goods, nums, sum});
    addCart({id: item.id, count: 1})
  }
  delCount = (index) => {
    let {addCart} = this.props
    let {goods, sum, nums} = this.state
    let item = goods[index]
    if(item.count>1){
      item.count--
      nums--;
      sum -= item.price-0;
      this.setState({goods, nums, sum});
      addCart({id: item.id, count: -1})
    }
  }
  deleteItem = (index) => {
    let delCart = this.props.delCart
    let {goods, sum, nums} = this.state
    let item = goods[index]
    sum -= item.price * item.count
    nums -= item.count
    goods.splice(index, 1);
    this.setState({goods, nums, sum});
    delCart({id: item.id })
  }
  choose = (index) => {
    let {goods, sum, nums} = this.state
    let item = goods[index]
    item.choose = !item.choose
    if(item.choose){
      sum += item.count*item.price
      nums += item.count
    }else{
      sum -= item.count*item.price
      nums -= item.count
    }
    this.setState({goods, nums, sum});
  }
  openPosition =() => {
    console.log('开启定位')
    let {BMap, BMAP_STATUS_SUCCESS} = window
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,12);
  
    var that = this;
    var geolocation = new BMap.Geolocation();
    var geoc = new BMap.Geocoder(); 
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() === BMAP_STATUS_SUCCESS){
        var pt = r.point;
        geoc.getLocation(pt, function(rs){
          var addComp = rs.addressComponents;
          that.setState({
            address: addComp.province + " " + addComp.city + " " + addComp.district + " " + addComp.street + " " + addComp.streetNumber
          })
        });        
      }    
    },{enableHighAccuracy: true})
  }
  componentDidMount(){
    let {goods, sum, nums} = this.state
    let cartCount = this.props.shop.shopcart;
    let shopIds = Object.keys(cartCount)
    
    shopIds.map((item, index) => {
      fetch('http://39.108.56.15:6099/api/goods/detail/'+item)
        .then(r=>r.json())
        .then(res=>{
          var data = res.data
          data.count = cartCount[item]
          data.choose = true;
          goods.push(data)
          sum += cartCount[item] * data.price
          nums += cartCount[item];
          this.setState({ goods, sum, nums });
        })
    })
  }
  render (){
    let {goods, sum, nums, address} = this.state
    return (
      <div className='shopcart'>
        <div id='allmap'></div>
        {
          goods.length>0 && (
            <div className='map'>
              <span>送货地址：</span>
            {
              address && (<div className='address'>{address}</div>) 
                || (<div className='openPosition' onClick={this.openPosition.bind(this)}>开启定位</div>)
            }
            </div>
          )
        }
        <div className='list'>
          {
            goods.length>0 && (
              goods.map((item, index) => {
                return (
                  <div className='good' key={index}>
                    <div className={'choose ' + (item.choose? 'checked' : 'uncheck')} onClick={this.choose.bind(this, index)}></div>
                    <div className='img'><img src={item.picUrl} alt={item.title} /></div>
                    <div className='msg'>
                      <div className='info'>
                        <div className='title'>{item.title}</div>
                        <div className='desc'>{item.desc}</div>
                        <div className='price'>售价：{item.price}</div>
                      </div>
                      <div className='control'>
                        <div className='count'>
                          <span className='delCount' onClick={this.delCount.bind(this, index)}>-</span>
                          <span>{item.count}</span>
                          <span className='addCount' onClick={this.addCount.bind(this, index)}>+</span>
                        </div>
                        <div className='delItem' onClick={this.deleteItem.bind(this, index)}></div>
                      </div>
                    </div>
                  </div>
                )
              })
            ) || (
              <div className='empty'>
                <span>购物车为空<a className='back' href='/'>去逛逛</a></span>
              </div>
            )
          }
        </div>
        <div className='tips'>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</div>
        <div className='caculate'>
          <div className='sum'>共 {nums} 件 金额：<span className='total'>{sum}</span> 元</div>
          <div className='finsh'>去结算</div>
        </div>
      </div>
    )
  };
}

export default Shopcart;
