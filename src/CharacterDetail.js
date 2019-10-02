import React, {Component} from 'react';
import styled from 'styled-components';
import API_KEY from './config'
import CharacterCard from './CharacterCard';



class CharacterDetail extends Component {
  state = {
    characters: [],
  };

    componentDidMount() {
        this.getCharacter();
    }

    getCharacter = async() => {
      const res = await fetch(`http://gateway.marvel.com/v1/public/characters/${this.props.match.params.id}?ts=1&apikey=${API_KEY}`);
      const {data:{results}} = await res.json()
      this.setState({
      characters:results
    });
  }
  
  render(){
    const {characters} = this.state
    return(
      <Wrapper>
        {characters.map(character => {
          const {id, name, thumbnail, description, comics} = character;
          return (
            <CharacterCard
              key={id}
              id={id}
              name={name}
              thumbnail={thumbnail}
              description={description}
              comics={comics}
            />
          )
        })}
        }
      </Wrapper>
    );
  };
}

const Wrapper = styled.div`
  img {
    margin: auto 0;
    width: 50%;
    padding: 10px;
    text-align: center;
}

`;

export default CharacterDetail;