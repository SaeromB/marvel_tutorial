import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Character=({id, name, description, thumbnail, comics})=>{
    return(
        <Wrapper>
            <Link to = {`/${id}`}>
                <h2>{name}</h2>
                <img src={`${thumbnail.path}/portrait_medium.${thumbnail.extension}` } alt={name}/>
                <p>{description}</p>
                {/* <p>{comics}</p>  */}
            </Link>
        </Wrapper>
    )
}

Character.propTypes = {
    id:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    thumbnail:PropTypes.object.isRequired,
    comics:PropTypes.object.isRequired,
}

const Wrapper = styled.div`
    // overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 500px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
    border-radius: 5px;

`;

export default Character;
