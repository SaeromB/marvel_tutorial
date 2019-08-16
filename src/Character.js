import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Character=({id, name, description, thumbnail, comics})=>{
    return(
        <div className='character'>
            <img src={thumbnail} alt={name}/>
            <div className='character_data'>
                <h1 className='character_name'>{name}</h1>
                <h2 className='character_description'>{description}</h2>
                <img src={`${(thumbnail.path)+'/portrait_xlarge.jpg'}`} alt={Character.name}/>
            </div>
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

