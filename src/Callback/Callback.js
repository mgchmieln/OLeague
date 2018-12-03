import React, { Component } from 'react';
import loading from './loading.svg';
import PowerRankingsGrid from './components/PowerRankingsGrid';
import UrlEntryModal from './components/UrlEntryModal';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class Callback extends Component {
  render() {
    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    }

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

export default Callback;