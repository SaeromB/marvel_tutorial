import React, {Component} from 'react';
import PropTypes from 'prop-types';

function Character({id, name, description, thumbnail, comics}){
    return <h1>{name}</h1>
}

Character.propTypes = {
    id:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    thumbnail:PropTypes.string.isRequired,
    comics:PropTypes.string.isRequired,
}

export default Character;

