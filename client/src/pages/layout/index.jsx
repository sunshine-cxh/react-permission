import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthLayout from './authLayout';
import Login from '../login';
@connect((state) => ({ token: state.login }))
class LayoutPage extends Component {
  componentDidMount() {}
  render() {
    const token = this.props.token;
    if (token) {
      return <AuthLayout />;
    } else {
      return <Login />;
    }
  }
}
export default LayoutPage;
