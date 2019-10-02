import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from './LinkStyles';


function CharacterCards({id, name, thumbnail}) {
    return(
        <Wrapper>
            <Link to = {`/${id}`}>
                <h5>{name}</h5>
                <img src={`${thumbnail.path}/portrait_medium.${thumbnail.extension}` } alt={name}/>
                <button>
                    Click for more information 
                </button>
            </Link>
        </Wrapper>
    )
}

CharacterCards.propTypes = {
    id:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    thumbnail:PropTypes.object.isRequired,
    comics:PropTypes.object.isRequired,
}

export default CharacterCards;

const Wrapper = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 300px;
    font-family: 'NanumSquare', sans-serif !important;
    box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
    border-radius: 5px;
    text-align: center;
`;




