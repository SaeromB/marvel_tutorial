import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Character=({id, name, description, thumbnail, comics})=>{
    return(
        <div>
            <Link to = {`/${id}`}>
            <h1>{name}</h1>
            <img src={`${thumbnail.path}/portrait_medium.${thumbnail.extension}` } alt={name}/>
            <p>{description}</p>
            {/* <p>{comics}</p>  */}
            </Link>
        </div>
    )
}

Character.propTypes = {
    id:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    thumbnail:PropTypes.object.isRequired,
    comics:PropTypes.object.isRequired,
}

export default Character;
