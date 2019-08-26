// Your public key
// 5d2cbb76e14fbe42f05ec010936c4542
// privet key
// 08f7652ab7a4c12c623122ab6ff8bb6498b13867
// fetch key
// 108f7652ab7a4c12c623122ab6ff8bb6498b138675d2cbb76e14fbe42f05ec010936c4542

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CharacterList from './CharacterList';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch>
        <Route path="/" component={CharacterList}/>
        <Route path="/test" component={CharacterList}/>
      </Switch>
    </div>
  </Router>
);


export default App;

const test = () => (
  <h1>test</h1>
)


