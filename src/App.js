import React, { Component } from 'react';
import './App.scss';
import Landing from './Landing'
import DisplayingData from './DisplayingData'
import {BrowserRouter as Router, Route, Link, NavLink, Switch,} from "react-router-dom";


class App extends Component {


  render(){
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Route path="/data" component={DisplayingData} />
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    );
  }
}

export default App;
