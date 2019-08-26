import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Character=({id, name, description, thumbnail, comics})=>{
    return(
        <div>
            <Link to = '/test'>
            <h1 className='character_name'>{name}</h1>
            <img src={`${(thumbnail.path)+'/portrait_xlarge.jpg'}` } alt={Character.name}/>
            </Link>
        </div>
    )
}

Character.propTypes = {
    id:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    thumbnail:PropTypes.string.isRequired,
    comics:PropTypes.string.isRequired,
}

export default Character;

