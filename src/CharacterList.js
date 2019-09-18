import React, {Component} from 'react';
import Character from './Character';


class CharacterList extends Component {
  state = {
    isLoading: true,
    characters: [],
  };

  componentDidMount() {
    // so do this!
    this.getCharacters();
  }

  // componentWillUnmount() {
  //   // so do this!
  //   this.getCharacters();
  // }

  getCharacters = async() => {
    const res = await fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=5d2cbb76e14fbe42f05ec010936c4542&hash=ffe8962d76a12c5db0198cd0c503fa6c');
    const {data:{results}} = await res.json()
    this.setState({
      characters:results
    });
  }

  
  render(){
    const {characters} = this.state
    return(
      <div>
        {characters.map(character => {
          const { id, name, thumbnail } = character;
          return (
            <Character
              key={id} 
              id={id} 
              name={name} 
              thumbnail={thumbnail}/>
            )
        })}
      </div>
    );
  }
}

export default CharacterList;

  // 
  // render(){
  //   const {isLoading, characters} = this.state;
  //   return(      
  //         <div>{isLoading ? 'Loading...': characters.map(character=>{
  //         // always return something after map
  //         return <Character
  //                 key={character.id}
  //                 id={character.id}
  //                 name={character.name}
  //                 thumbnail={character.thumbnail}
  //                 />}
  //         )}
  //         </div>
  //  



