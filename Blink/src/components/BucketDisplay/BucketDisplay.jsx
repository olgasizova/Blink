import React, { Component } from 'react';
import './BucketDisplay.css';

/* container in which each Bucket List-Saved* Search results will show  */

class BucketDisplay extends Component {
  constructor(props) {
    super(props)
    this.state= {
      open: false
    }
  }
  toggle(){
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    if(this.state.open === false){
      return (<span/>)
    }
    return (
      <div className="bucketList">
        Bucket List Stuff Goes Here (passed in as prop)
      </div>
    );

  }
}

export default BucketDisplay;
