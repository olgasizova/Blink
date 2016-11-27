import React, { Component } from 'react';
import './UserInfo.css';

class UserInfo extends Component {
  render() {
    if(this.props.dob === null) {
      return (
        <div className="user-input-container">

          <input type="number" placeholder="Enter Age" value={this.props.userAge} onChange={this.props.updateFormAge}/>
          <input type="text" placeholder="Your Gender" value={this.props.userGender} onChange={this.props.updateFormGender}/>
          <input type="date" value={this.props.userDOB} onChange={this.props.updateFormDOB} />

          <button
            onClick={this.props.handleDOBSubmit}
            > Add My Info </button>
          </div>
        );

    } else {
      return null
    }
  }
}

export default UserInfo;
