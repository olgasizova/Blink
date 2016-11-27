import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  render() {
    return (

<div className="list-item"><span className="title">{this.props.Title}</span>
    <p className="address">{this.props.address}</p>
    <p className="rating">rating  {this.props.rating}</p>
    <img src={this.props.image}/>
</div>
    );
  }
}

export default ListItem;
