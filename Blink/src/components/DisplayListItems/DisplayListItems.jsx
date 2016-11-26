import React from 'react';
import ListItem from './../ListItem/ListItem';
import './DisplayListItems.css';

const generateResults = (props) =>
  props.googleSearch.map ((goog) =>
    <div key={`ListItem${goog.name}`} className="searchResults">
      <ListItem
          Title={goog.name}
          address={goog.formatted_address}
          rating={goog.rating}
          />
          </div>
    )

const DisplayListItems = props => (

      <div className="SearchItemContainer">
            {generateResults(props)}
      </div>
);

export default DisplayListItems;
