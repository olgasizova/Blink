import React from 'react';
import ListItem from './../ListItem/ListItem';
import './DisplayListItems.css';

const generateResults = (props) =>
  props.googleSearch.map ((goog, i) =>
    <div key={`ListItem${goog.name}${i}`} className="searchResults">
      <ListItem
          Title={goog.name}
          address={goog.formatted_address}
          rating={goog.rating}
          image={goog.place_img}
          />
          </div>
    )

const DisplayListItems = props => (

      <div className="SearchItemContainer">
            {generateResults(props)}
      </div>
);

export default DisplayListItems;
