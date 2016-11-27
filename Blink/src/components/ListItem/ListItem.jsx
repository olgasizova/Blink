import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  render() {
    return (

<div><h1>{this.props.Title}</h1></div>
    );
  }
}

export default ListItem;
