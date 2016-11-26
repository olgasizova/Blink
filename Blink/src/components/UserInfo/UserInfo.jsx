import React, { Component } from 'react';
import './UserInfo.css';

class UserInfo extends Component {
  render() {
    return (
      <div className="user-input-container">

      <input type="number" placeholder="Enter Age" value={this.props.userAge} onChange={this.props.updateFormAge}/>
      <input type="text" placeholder="Your Gender" value={this.props.userGender} onChange={this.props.updateFormGender}/>
      <input type="date" value={this.props.userDOB} onChange={this.props.updateFormDOB} />

      <button> Add My Info </button>
      </div>
    );
  }
}

export default UserInfo;
