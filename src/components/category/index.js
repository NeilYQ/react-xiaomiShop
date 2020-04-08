import React, {Component} from 'react';

import './category.css'

class Category extends Component {
  state = {
    data: []
  }
  componentDidMount(){
    fetch('http://39.108.56.15:6099/api/category')
      .then(r=>r.json())
      .then(res=>{
        if(res.code===200){
          this.setState({data: res.data});
        }
      })
  }
  render (){
    let data = this.state.data
    return (
      <div className='category'>
        {
          data.length>0 && (
            data.map((item, index) => {
              return (
                <a className='nav' key={index} href='/'><img src={item.picUrl} alt={item.alt} /></a>
              )
            })
          )
        }
      </div>
    )
  };
}

export default Category;
