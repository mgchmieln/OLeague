import React, { Component } from 'react';
import PowerRankingsGrid from './components/PowerRankingsGrid';
import UrlEntryModal from './components/UrlEntryModal';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={UrlEntryModal}/>
        <Route exact path="/:error" component={UrlEntryModal}/>
        <Route exact path="/espn/:leagueId/:seasonId" component={PowerRankingsGrid}/>
      </div>
    </Router>
    );
  }
}

export default Home;
