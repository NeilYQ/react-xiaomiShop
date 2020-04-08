import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/home'
import My from './components/my'
import Tabber from './components/tabbar';
import Shopcart from './components/shopcart'
import GoodsDetail from './components/goodsDetail'
import Not404 from './components/not404'
import Map from './components/map'

class App extends Component {
  render (){
    return (
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/user'} component={My} />
          <Route path={'/shopcart'} component={Shopcart} />
          <Route path={'/map'} component={Map} />
          <Route path={'/goodsDetail/:id'} component={GoodsDetail} />
          <Route  component={Not404}/>
        </Switch>
        <Tabber />
      </Router>
    )
  };
}

export default App;
