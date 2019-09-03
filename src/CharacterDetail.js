import React, {Component} from 'react';
import Character from './Character';


class CharacterDetail extends Component {
  state = {
    characters: [],
  };

    componentDidMount() {
        this.getCharacter();
    }

    getCharacter = async() => {
    const res = await fetch(`http://gateway.marvel.com/v1/public/characters/${this.props.match.params.id}?ts=1&apikey=5d2cbb76e14fbe42f05ec010936c4542&hash=ffe8962d76a12c5db0198cd0c503fa6c`);
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
          const { id, name, thumbnail, description, comics } = character;
          return (
            <Character
              key={id} 
              id={id} 
              name={name} 
              thumbnail={thumbnail}
              description={description}
              // comics = {comics.toString()}
            />
          )
        })}
      </div>
    );
  }
}

export default CharacterDetail;