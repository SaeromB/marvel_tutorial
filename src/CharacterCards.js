import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function CharacterCards({id, name, thumbnail, description}) {
    return(
        <Wrapper>
            <img src={`${thumbnail.path}/portrait_medium.${thumbnail.extension}` } alt={name}/>
                <h5>{name}</h5>
                <button>
                    <Link to={`/${id}`}> More informations </Link>
                </button>
        </Wrapper>
    )
}

export default CharacterCards;

const Wrapper = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 300px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
    border-radius: 5px;
`

