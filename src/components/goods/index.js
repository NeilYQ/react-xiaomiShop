import React, {Component} from 'react';

import './goods.css'
import { NavLink } from 'react-router-dom';

class Goods extends Component {
  state = {
    name: '',
    top: '',
    data: [],
  }
  componentDidMount(){
    fetch(this.props.url)
      .then(r=>r.json())
      .then(res=>{
        res.code===200 && this.setState({
          name: res.name,
          top: res.top,
          data: res.data
        })
      })
  }
  render (){
    let {name, top, data} = this.state
    return (
      <div className='goods'>
        <div className='top'><img src={top.picUrl} alt={top.alt}/></div>
        <div className='goods-list'>
          {
            data.length>0 && (
              data.map((item, index) => {
                return (
                  <div className='goods-item' key={index}>
                    <NavLink to={'/goodsDetail/'+item.id}>
                      <img src={item.picUrl} alt={item.desc}/>
                      <div className='info'>
                        <div className='title'>{item.title}</div>
                        <div className='desc'>{item.desc}</div>
                        <div className='price'>
                          <span>{item.symbol + item.price}</span>
                          <span className='old'>{item.before && (item.symbol + item.before)}</span>
                        </div>
                        <div className='buyBtn'>立即购买</div>
                      </div>
                    </NavLink>
                  </div>
                )
              })
            )
          }
        </div>
        <div className='moreAbout'>更多{name}产品 ></div>
      </div>
    )
  };
}

export default Goods;
