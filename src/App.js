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
import Character from './Character';


class App extends Component {
  state = {
    isLoading: true,
    characters: [],
    selectedCharacterUrl: null,
    selectedCharacterData: null,
  };
  getCharacters= async()=>{
    const res = await fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=5d2cbb76e14fbe42f05ec010936c4542&hash=ffe8962d76a12c5db0198cd0c503fa6c');
    const {data:{results}} = await res.json()
    this.setState({characters:results, isLoading:false})
    console.log(results);
  }
  componentDidMount(){
    this.getCharacters();
  }

  render(){
    const {isLoading, characters} = this.state;
    return(
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Route path="/comicBook" component={comicBook}/>
          <div>{isLoading ? 'Loading...': characters.map(character=>{
          // always return something after map
          return <Character
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  description={character.description}
                  thumbnail={character.thumbnail}
                  comics={character.comics}/>}
          )}
          </div>
        </div>
      </Router>
    )
  }
}


export default App;

const comicBook = () => (
  <h1>comicBook</h1>
)


