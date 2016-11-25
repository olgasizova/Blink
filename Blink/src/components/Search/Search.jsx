import React from 'react';
import './Search.css';

const Search = props => (
  /* Search Google API for activities to add to
  form will search google places API and save search parameters to later dispay these results */
  <div id='form-container'>
    <input id="searchForm"
      type="text"
      placeholder="Search Your Bucket List Item"
      onChange={props.handleSearchInput}
    />
    <button
      className="searchButton"
      onClick={props.handleSearchSubmit}
      >Search</button>
  </div>
);

export default Search;
