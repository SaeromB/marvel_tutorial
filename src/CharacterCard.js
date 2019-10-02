import React from 'react';
import styled from 'styled-components';

function CharacterCard ({id, name, thumbnail, description, comics}) {
    return(
        <Wrapper>
            <img src={`${thumbnail.path}/portrait_medium.${thumbnail.extension}` } alt={name}/>
            <h5>{name}</h5>
                {function(){
                    if(description.length === 0){
                        return <p>No description</p>
                    }else{
                        return<p>{description}</p>
                    }
                }
            }
            <h3>Comics</h3>
            {comics.items.map((items, index)=> {
                return(
                    <li key={index}>
                        <i></i>
                        {comics.items[index].name}
                    </li>
                )
                })}
        </Wrapper>
    )
}
export default CharacterCard;

const Wrapper = styled.div`

`


