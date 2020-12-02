import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../actions/actions'

import './App.sass';


//import components

import About from '../About/About'
import Registration from '../Registration/Registration'
import UserList from '../UserList/UserList'
import Navigation from '../Navigation/Navigation'

class App extends Component {
 
  //local store + generation of joke
  componentDidMount = () => {
    if (localStorage.getItem('users') !== null) {
      this.props.getLocalUsers(JSON.parse(localStorage.getItem('users')))
    } else {
      localStorage.setItem('users', JSON.stringify([]))
    }
    this.props.getJoke()
  };

  componentDidUpdate = () => {
    localStorage.setItem('users', JSON.stringify(this.props.state))
  }
  
  
  render () {
    return (
      <>
        <Router>
            
            <Navigation />
            
            <Switch>
              <Route path="/About">
                <About />
              </Route>
              <Route path="/User_list">
                <UserList />
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

const mapStateToProps = (state) => ({
  state: state.usersData
});

export default connect(mapStateToProps, actions)(App);