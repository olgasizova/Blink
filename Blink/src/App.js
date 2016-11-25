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
      user: 'none',
      searchTerms: ''
    }
  }
  searchGooglePlaces() {
    AjaxAdapter.googleSearch(this.state.searchTerms)
    .then((data) => {
      this.setState({
        googleSearch: data.results
      })
    })
  }
  handleSearchSubmit() {
    this.searchGooglePlaces()
  }
  handleSearchInput(e) {
    this.setState({
      searchTerms: e.target.value
    })
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

        <Search
          handleSearchSubmit={() => this.handleSearchSubmit()}
          handleSearchInput={(event) => this.handleSearchInput(event)}
        />

        <DisplayContainer />
      </div>
    );
  }
}

export default App;
