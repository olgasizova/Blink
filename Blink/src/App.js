import React, { Component } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import DisplayContainer from './components/DisplayContainer/DisplayContainer';
import UserInfo from './components/UserInfo/UserInfo';

import './App.css';

import AjaxAdapter from './HelperUtils/AjaxAdapter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: 'none',
      searchTerms: '',
      userAge: '',
      userGender: '',
      userDOB: ''
    }
  }

  updateFormAge(e) {
  console.log("blahh")
    this.setState({
      userAge: e.target.value,
    });
  }
   updateFormGender(e) {
    this.setState({
      userGender: e.target.value,
    });
  }
  updateFormDOB(e) {
    this.setState({
      userDOB: e.target.value,
    });
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

        <UserInfo
          updateFormAge={event => this.updateFormAge(event)}
          updateFormGender={event => this.updateFormGender(event)}
          updateFormDOB={event => this.updateFormDOB(event)}
          //handle form submit?
          />

        <Search
          handleSearchSubmit={() => this.handleSearchSubmit()}
          handleSearchInput={(event) => this.handleSearchInput(event)}
        />

        <DisplayContainer
         />

      </div>
    );
  }
}

export default App;
