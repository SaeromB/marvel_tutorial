import React from 'react'
import PropTypes from 'prop-types'
import { Router,Link } from 'react-router-dom'

const CharacterCard = ({id, name, img, description, thumbnail, comics, baseLink}) => (
    <div>
        <Router>
        <Link to= {`${baseLink}/${id}`}>
        {/* <div className='card-img' style={{ backgroundImage: `url(${img.path}.${img.extension})` }} /> */}
        <div>{name}</div>
           <div>{description ? description : 'No description'}</div>
        </Link>
        </Router>
        

    </div>
)

export default CharacterCard;