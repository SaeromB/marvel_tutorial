import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
require('dotenv').config()


function App () {
  return(
  <div className="App">
    <Router>
      <header className="App-header">
        <Link to = "/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
        <Switch>
          <Route exact path="/" component={CharacterList}/>
          <Route path="/:id" component={CharacterDetail}/>
        </Switch>
    </Router>
  </div>
  )};


export default App;

