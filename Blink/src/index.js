import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './App';
import BucketDisplay from './components/BucketDisplay/BucketDisplay';
import './index.css';

ReactDOM.render(
      <Router history={browserHistory}>
        <Route path="/" component={App} />

        <Route path="/BucketDisplay" component={BucketDisplay}/>

    </Router>,
  document.getElementById('root')
);
