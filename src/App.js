import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
      <Link to = "/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      </header>
      <Switch>
        <Route exact path="/" component={CharacterList}/>
        <Route path="/:id" component={CharacterDetail}/>
      </Switch>
    </div>
  </Router>
);


export default App;

