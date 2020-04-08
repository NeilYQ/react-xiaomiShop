import React, {Component} from 'react';

import Swiper from 'swiper'

import './banner.css'

class Banner extends Component {
  state = {
    data: []
  }
  componentDidMount(){
    new Swiper('.swiper-container', {
      autoplay: true,//可选选项，自动滑动
    });
    
    fetch('http://39.108.56.15:6099/api/banner')
      .then(r=>r.json())
      .then(res=>{
        res.code===200 && this.setState({data: res.data});
      })
  }
  render (){
    let data = this.state.data
    return (
      <div className='banner swiper-container'>
        <ul className='banner-list swiper-wrapper'>
          {
            data.length>0 && (
              data.map((item, index) => {
                return (<li key={index} className='banner-item swiper-slide'><img src={item.picUrl} alt={item.alt} /></li>)
              })
            )
          }
        </ul>
      </div>
    )
  };
}

export default Banner;
