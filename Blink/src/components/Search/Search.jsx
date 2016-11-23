import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
       <div id='form-container'>
        <input id="searchForm"
          type="text"
          placeholder="Search Your Bucket List Item"
          />
        <button className="searchButton">Search</button>
        </div>
    );
  }
}

export default Search;
