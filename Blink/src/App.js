import React, { Component } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import DisplayContainer from './components/DisplayContainer/DisplayContainer';
import './App.css';

import AjaxAdapter from './HelperUtils/AjaxAdapter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: 'none'
    }
  }
  componentDidMount() {
    AjaxAdapter.getUserData().then((data) => {
      this.setState({
        user: data.userProfile.id,
        bday: data.userProfile.bday
      })
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>

        <Search />

        <DisplayContainer />
      </div>
    );
  }
}

export default App;
