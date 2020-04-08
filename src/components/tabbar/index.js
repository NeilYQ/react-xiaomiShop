import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

import './tabber.css'

import n1 from '../../common/images/bottomNav1.png'
import n2 from '../../common/images/bottomNav2.png'
import n3 from '../../common/images/bottomNav3.png'
import n4 from '../../common/images/bottomNav4.png'
import n5 from '../../common/images/user.png'
import n1_on from '../../common/images/bottomNav1_on.png'
import n2_on from '../../common/images/bottomNav2_on.png'
import n3_on from '../../common/images/bottomNav3_on.png'
import n4_on from '../../common/images/bottomNav4_on.png'
import n5_on from '../../common/images/user_on.png'

class Tabber extends Component {
  render (){
    return (
      <div className='tabber'>
        <NavLink to={'/'}>
          <div className='tab-item on'><img src={n1_on} alt=''/><span>首页</span></div>
        </NavLink>

        <NavLink to={'/'}>
          <div className='tab-item'><img src={n2} alt=''/><span>分类</span></div>
        </NavLink>
        
        <NavLink to={'/map'}>
          <div className='tab-item'><img src={n3} alt=''/><span>星球</span></div>
        </NavLink>
        
        <NavLink to={'/shopcart'}>
          <div className='tab-item'><img src={n4} alt=''/><span>购物车</span></div>
        </NavLink>
        
        <NavLink to={'/user'}>
          <div className='tab-item'><img src={n5} alt=''/><span>我的</span></div>
        </NavLink>
      
      </div>
    )
  };
}

export default Tabber;
