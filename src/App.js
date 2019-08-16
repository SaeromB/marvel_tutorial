// Your public key
// 5d2cbb76e14fbe42f05ec010936c4542
// privet key
// 08f7652ab7a4c12c623122ab6ff8bb6498b13867
// 108f7652ab7a4c12c623122ab6ff8bb6498b138675d2cbb76e14fbe42f05ec010936c4542
// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=5d2cbb76e14fbe42f05ec010936c4542&hash=ffe8962d76a12c5db0198cd0c503fa6cimport 
// http://gateway.marvel.com/v1/public/characters?ts=1&apikey=5d2cbb76e14fbe42f05ec010936c4542&hash=ffe8962d76a12c5db0198cd0c503fa6c

import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './Character';
import SearchBar from './SearchBar';

class App extends Component {
  state = {
    isLoading: true,
    characters: []
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
    const {isLoading,characters} = this.state;
    return(
      <div className="App">
        <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
        </header>
        <SearchBar/>
        <div>{isLoading ? 'Loading...': characters.map(character=>{
        // console.log(character);
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
    )
  }
}


export default App;
