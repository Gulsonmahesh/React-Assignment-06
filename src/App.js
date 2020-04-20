import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigator from './product/naviagator';
import About from './product/about';
import Addproduct from './product/addproduct';
import Allproduct from './product/allproduct';

class App extends Component {
  render() {
    return (
      <Fragment>
      <div className="container">
        <BrowserRouter>
        <div>
          <Navigator />
          <Switch>
            <Route path="/" component={About} exact/>
            <Route path="/about/:product" component={About} />
            <Route path="/addproduct" component={Addproduct} />
            <Route path="/products" component={Allproduct} />
          </Switch>
        </div>
        </BrowserRouter>
        </div>
      </Fragment>
    )
  }
}

export default App;
