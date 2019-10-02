import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={CharacterList}/>
            <Route path="/:id" component={CharacterDetail}/>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;

