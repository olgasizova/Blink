import React, { Component } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
//import DisplayContainer from './components/DisplayContainer/DisplayContainer';
import DisplayListItems from './components/DisplayListItems/DisplayListItems';

import './App.css';

import AjaxAdapter from './HelperUtils/AjaxAdapter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: 'none',
      searchTerms: '',
      googleSearch: []
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
        userProfile: {
          email: data.userProfile.email,
          name: data.userProfile.name,
          bday: data.userProfile.bday,
          profile_img: data.userProfile.profile_img
        }
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
        <DisplayListItems
            googleSearch={this.state.googleSearch}
           />
      </div>
    );
  }
}

export default App;
