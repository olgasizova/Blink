import React from 'react';
import './AddBtn.css';
const AddBtn = props => (
  <button
    onClick={() => props.handleAddClick(props.details)}
    >Add to Bucket</button>
);

export default AddBtn;
