import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Character=({id, name, description, thumbnail, comics})=>{
    return(
        <div>
            <Link to = {`/${id}`}>
            <h1 className='character_name'>{name}</h1>
            <img src={`${(thumbnail.path)+'/portrait_xlarge.jpg'}` } alt={name}/>
            {/* <img src={`${thumbnail.path}.${thumbnail.extension})`} alt={Character.name}></img> */}
            <p>{description}</p>
            <p>{comics}</p>
            </Link>
        </div>
    )
}

Character.propTypes = {
    id:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    thumbnail:PropTypes.object.isRequired,
    comics:PropTypes.string.isRequired,
}

export default Character;