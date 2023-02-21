// src/components/MenuItem/MenuItem.js
import React from 'react';
import './MenuItem.css';
import { Link } from 'react-router-dom';

function MenuItem(props) {
  const {name, image, ingredients, for_diets, nutrition_info, id} = props
  console.log(name)
  return (
    <div className='MenuItem'>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
          width="300"
          height="300"
          alt="Hello"
        />
      </Link>
      <h1>
        <Link
          className='MenuItem-title'
          to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div className='MenuItem-info'>
        {/* <div>{address}</div> */}
        <div className='hours'>{for_diets}</div>
      </div>
    </div>
  )
}


export default MenuItem