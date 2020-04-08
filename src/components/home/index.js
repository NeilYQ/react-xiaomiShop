import React, {Component} from 'react';

import Header from '../header'
import Banner from '../banner'
import Category from '../category'
import Recommend from '../recommend'
import Conference from '../conference'
import Goods from '../goods'

let api = 'http://39.108.56.15:6099/api'

class Home extends Component {
  render (){
    return (
      <div className='App'>
        <Header />
        <Banner />
        <Category />
        <Recommend />
        <Conference />
        <Goods url={api+'/goods/phones'}/>
        <Goods url={api+'/goods/tvs'}/>
        <Goods url={api+'/goods/laptops'}/>
        <div style={{paddingBottom: 1+'rem'}}></div>
      </div>
    )
  };
}

export default Home;
