import React, {Component} from 'react';

import './my.css'

class My extends Component {
  state = {
    navList: [
      {cssName: 'n1', name: '会员中心', url: '/'},
      {cssName: 'n2', name: '我的优惠', url: '/'},
      {cssName: 'n3', name: '服务中心', url: '/'},
      {cssName: 'n4', name: '小米之家', url: '/'},
      {cssName: 'n5', name: '我的F码', url: '/'},
      {cssName: 'n6', name: '礼物码兑换', url: '/'},
      {cssName: 'setting', name: '设置', url: '/'},
    ]
  }
  render (){
    let navList = this.state.navList
    return (
      <div className='user'>
        <div className='head'>
          <div className='user-info'>
            <div className='avator'><img src={require('./img/default.png')} alt='avator' /></div>
            <div className='control'>
              <span className='loginBt'>登录</span>
              <span className='symbol'>/</span>
              <span className='loginBt'>注册</span>
            </div>
          </div>
        </div>
        
        <div className='order'>
          <div className='box'>
            <div className='myOrder'>我的订单</div>
            <div className='allOrder to'>全部订单</div>
          </div>
          <div className='o-list'>
            <div className='item'>
              <div><img src={require('./img/1.png')} alt='待付款' /></div>
              <div>待付款</div>
            </div>
            <div className='item'>
              <div><img src={require('./img/2.png')} alt='待收货' /></div>
              <div>待收货</div>
            </div>
            <div className='item'>
              <div><img src={require('./img/nav-4.png')} alt='退换修' /></div>
              <div>退换修</div>
            </div>
          </div>
        </div>
      
        <div className='nav-list'>
        {
          navList.map((item, index) => {
            return (<div className={'nav-item '+ item.cssName} key={index}><a href={item.url}>{item.name}</a></div>)
          }) 
        }
        </div>

      </div>
    )
  };
}

export default My;
