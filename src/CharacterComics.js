// import React, {Component} from 'react';
// import Character from './Character';

// class CharacterComics extends Component {
//     state = {
//       characters: [],
//       comics: []
//     };
  
//       componentDidMount() {
//           this.getCharacter();
//       }
  
//       getCharacter = async() => {
//       const res = await fetch(`http://gateway.marvel.com/v1/public/characters/${this.props.match.params.id}?ts=1&apikey=5d2cbb76e14fbe42f05ec010936c4542&hash=ffe8962d76a12c5db0198cd0c503fa6c`);
//       const {data:{results}} = await res.json()
//       this.setState({
//         characters:results
//       });
//     }
// }