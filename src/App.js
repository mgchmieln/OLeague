import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import Auth from './Auth/Auth.js';
import PowerRankingsGrid from './components/PowerRankingsGrid';
import UrlEntryModal from './components/UrlEntryModal';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const auth = new Auth();
auth.login();

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
        <Router>
          <div>
            <Route exact path="/" component={UrlEntryModal}/>
            <Route exact path="/:error" component={UrlEntryModal}/>
            <Route exact path="/espn/:leagueId/:seasonId" component={PowerRankingsGrid}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;