import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {connect} from 'react-redux';

import './App.sass';




//import components

import About from '../About/About'
import Registration from '../Registration/Registration'
import UserList from '../UserList/UserList'
import Navigation from '../Navigation/Navigation'

class App extends Component {
  constructor() {
    super();
    this.state = {
      users : [],
      searchQuery: ''
    }
    this.maxId = 0;
    
  }

  

  //local store
  componentDidMount = () => {
    if (localStorage.getItem('users') !== null) {
      const localUsers = JSON.parse(localStorage.getItem('users'))
      this.setState(() => {
        return {users: localUsers}
      });
      this.maxId = JSON.parse(localStorage.getItem('id'))
    } else {
      localStorage.setItem('users', JSON.stringify([]))
    }
  };
  


  componentDidUpdate = () => {
    localStorage.setItem('users', JSON.stringify(this.state.users))
    localStorage.setItem('id', JSON.stringify(this.maxId))
  }
  
 
  //functions


    
  searchQuery = (searchQuery) => {
    this.setState({searchQuery})
  }

  searchResults = (users, searchQuery) => {
    if (searchQuery.length === 0) {
        return users;
    }

    return users.filter((users) => {
        return JSON.stringify(users).toLowerCase().indexOf(searchQuery) > -1;
    })
}

  //render
  
  render () {
    const {users, searchQuery} = this.state
    const visibleUsers = this.searchResults(users, searchQuery)
    
    
    return (
      <>
        <Router>
            
            <Navigation />
            
            <Switch>
              <Route path="/About">
                <About />
              </Route>
              <Route path="/User_list">
                <UserList searchQuery={this.searchQuery} />
              </Route>
              <Route path="/New_user">
                <Registration/>
              </Route>
              <Route path="/">
                <Redirect to="/New_user" />
              </Route>
            </Switch>
        </Router>
      </>
    )
  }
}

export default connect()(App);