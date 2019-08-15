import React, {Component} from 'react';
import PropTypes from 'prop-types';

const MarvelCharacter = ({marvelcharacter}) => (
    <div>
        <h2>{marvelcharacter.name}</h2>
    </div>
)

export default MarvelCharacter;

MarvelCharacter.protoTypes = {
    marvelcharacter:PropTypes.shape({
        name:PropTypes.string.isRequired,
    }).isRequired,
};