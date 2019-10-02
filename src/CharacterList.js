import React, {Component} from 'react';
import styled from 'styled-components';
import CharacterCards from './CharacterCards'
import API_KEY from './config'



class CharacterList extends Component {
  state = {
    isLoading: true,
    characters: [],
  };

  componentDidMount() {
    // so do this!
    this.getCharacters();
  }

  getCharacters = async() => {
    const res = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}` );
    // Inside data there is results
    // so we are going to put the results in the state characters array
    const {data:{results}} = await res.json()
    // by using setState we can put results in to characters
    this.setState({
      characters:results
    });
  }

  
  render(){
    const {characters} = this.state
    return(
      <Wrapper>
        {characters.map(character => {
          const { id, name, thumbnail } = character;
          return (
            <CharacterCards
              key={id} 
              id={id} 
              name={name} 
              thumbnail={thumbnail}/>
            )
        })}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  img {
    width: 50%;
    height: 50%;
    display: center;
  }
`;


export default CharacterList;





