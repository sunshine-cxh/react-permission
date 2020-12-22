import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutPage from './pages/layout';
import './App.less';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={LayoutPage} />
        </Switch>
      </Router>
    );
  }
}
