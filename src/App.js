import React, { Component } from 'react';

import { 
    Router,
    Route,
    IndexRoute,
    browserHistory

} from 'react-router';
import {Provider} from 'react-redux';
import store from './shared/store';
import Layout from './Layout/Layout';
import Home from "./Home/Home";
import ProductManagement from "./ProductManagement/ProductManagement";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="productmngmt" component={ProductManagement} />
          </Route>
        </Router>        
      </Provider>

    );
  }
}

export default App;
