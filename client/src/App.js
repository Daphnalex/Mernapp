import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link} from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import {Button, Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

import {PrivateRoute} from "./components/PrivateRoute";
import API from './utils/API';

class App extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout = () => {
    console.log('function logout');
    API.logout();
    window.location = "/";                                                                                
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              MERN Application
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            {(localStorage.token) ?
              <NavDropdown eventKey={3} title="Profil utilisateur" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} href='/dashboard'>Espace membre</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.2} onClick={this.logout}>Se déconnecter</MenuItem>
              </NavDropdown>
            :
              <NavItem eventKey={2} href="/login">
                Se connecter
              </NavItem>
            }
          </Nav>
        </Navbar>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup}/>
          <PrivateRoute path='/dashboard' component={Dashboard}/>
        </Switch>
      </div>
    );
  }
}

export default App;
