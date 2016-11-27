import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
  /* header display render on EACH page of application
    header includes logo & application name */

      <div className="header">
           <style>
                  @import url('https://fonts.googleapis.com/css?family=Baloo+Bhaina|Open+Sans');
           </style>
      <div className="logo"></div>
      <div className="logo-text"> Blink </div>

      <h1>What's in your bucket list?</h1>
      </div>

    );
  }
}

export default Header;
