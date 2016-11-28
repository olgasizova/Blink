import React from 'react';
import ListItem from './../ListItem/ListItem';
import './BucketDisplayItems.css';

const generateSaved =(props) =>
  props.bucket.pending.map((event,i) =>
    <div key={`ListItem${event.name}${i}`} className="flex-items">
      <ListItem
        Title={event.name}
        address={event.formatted_address}
        rating={event.rating}
        image={event.place_img}
        />
        <button> completed </button>
      </div>
)

const BucketDisplayItems = props => (
      <div className="flex-container">
            {generateSaved(props)}
      </div>
);

export default BucketDisplayItems;
