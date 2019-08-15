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
    const {isLoading} = this.state;
    return(
      <div className="App">
        <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
         </header>
      <div>{isLoading ? 'Loading...': 'Ready'}</div>
      </div>
    )
  }
}
  // state ={
  //   charactersInfo:[]
  // }

//   async componentDidMount(){
//     try {
//       const res = await fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=5d2cbb76e14fbe42f05ec010936c4542&hash=ffe8962d76a12c5db0198cd0c503fa6c');
//       const charactersInfo = await res.json();
//       console.log(charactersInfo)
//       this.setState({
//         charactersInfo:charactersInfo.results,
//       })
//     } catch(e){
//       console.log(e);
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </header>
//         {this.state.charactersInfo.map(marvelcharacter=><MarvelCharacter key={marvelcharacter.id} marvelcharacter={marvelcharacter}/>)}
//       </div>
//     );
//   }
// }

export default App;
