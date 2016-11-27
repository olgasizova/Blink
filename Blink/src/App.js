import React, { Component } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
<<<<<<< HEAD
//import DisplayContainer from './components/DisplayContainer/DisplayContainer';
import DisplayListItems from './components/DisplayListItems/DisplayListItems';

=======
import DisplayListItems from './components/DisplayListItems/DisplayListItems';
import UserInfo from './components/UserInfo/UserInfo';
>>>>>>> 5dcf0607cf4e1156d0d63fd78f1924b9b125df5a
import './App.css';

import AjaxAdapter from './HelperUtils/AjaxAdapter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: 'none',
      searchTerms: '',
<<<<<<< HEAD
      googleSearch: []
=======
      googleSearch:[]
      dobInput: {
        userAge: 'none',
        userGender: 'none',
        userDOB: 'none'
      }
>>>>>>> 5dcf0607cf4e1156d0d63fd78f1924b9b125df5a
    }
  }

  updateFormAge(e) {
    this.setState({
      dobInput: {
        userAge: e.target.value,
        userGender: this.state.dobInput.userGender,
        userDOB: this.state.dobInput.userDOB
      }
    });
  }
   updateFormGender(e) {
    this.setState({
      dobInput: {
        userAge: this.state.dobInput.userAge,
        userGender: e.target.value,
        userDOB: this.state.dobInput.userDOB
      }
    });
  }
  updateFormDOB(e) {
    this.setState({
      dobInput: {
        userAge: this.state.dobInput.userAge,
        userGender: this.state.dobInput.userGender,
        userDOB: e.target.value
      }
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
  handleDOBSubmit() {
    AjaxAdapter.saveDOB(this.state.dobInput)
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
          handleDOBSubmit={() => this.handleDOBSubmit()}
          />

        <Search
          handleSearchSubmit={() => this.handleSearchSubmit()}
          handleSearchInput={(event) => this.handleSearchInput(event)}
        />
        <DisplayListItems
<<<<<<< HEAD
            googleSearch={this.state.googleSearch}
           />
=======
          googleSearch={this.state.googleSearch}
          />
>>>>>>> 5dcf0607cf4e1156d0d63fd78f1924b9b125df5a
      </div>
    );
  }
}

export default App;
