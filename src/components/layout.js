import React, { Component } from 'react';
import Header from './header-navbar/header';
import Navbar from './header-navbar/navbar';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default Layout;