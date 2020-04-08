import React, {Component} from 'react';
import './header.css'

import logo from '../../common/images/logo.png'
import user from '../../common/images/user.png'
import search from '../../common/images/search.png'

class Header extends Component {
  render (){
    return (
      <div className='header'>
        <div className='logo'><img src={logo} alt='' /></div>
        <div className='search'><img src={search} alt='' />搜索商品名称</div>
        <div className='user'><img src={user} alt='' /></div>
      </div>
    )
  };
}

export default Header;
