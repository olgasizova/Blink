import React from 'react';
import ListItem from './../ListItem/ListItem';
import './BucketDisplayItems.css';

const generateCompleted =(props) =>
  props.bucket.completed.map((event,i) =>
    <div key={`CListItem${event.name}${i}`} className="flex-items">
      <ListItem
        Title={event.name}
        address={event.formatted_address}
        rating={event.rating}
        image={event.place_img}
        />
        <button> delete </button>
      </div>
)

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
        <div className="pendingContainer">
              {generateSaved(props)}
        </div>
        <div className="completedContainer">
              {generateCompleted(props)}
        </div>

      </div>

);

export default BucketDisplayItems;
