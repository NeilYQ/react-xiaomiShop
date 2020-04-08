import React, {Component} from 'react';

import './conference.css'

import c1 from '../../common/images/c1.jpg'
import c2 from '../../common/images/c2.jpg'
import c3 from '../../common/images/c3.jpg'
import c4 from '../../common/images/c4.jpg'

class Conference extends Component {
  render (){
    return (
      <div className='conference'>
        <div className='top'>
          <div className='left'><img src={c1} alt=''/></div>
          <div className='right'>
            <img src={c2} alt=''/>
            <img src={c3} alt=''/>
          </div>
        </div>
        <div className='bottom'><img src={c4} alt='' /></div>
      </div>
    )
  };
}

export default Conference;
