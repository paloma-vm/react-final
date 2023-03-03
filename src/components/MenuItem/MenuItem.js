// src/components/MenuItem/MenuItem.js
import React from 'react';
import './MenuItem.css';
import { Link } from 'react-router-dom';

function MenuItem(props) {
  const {name, image, ingredients, for_diets, nutrition_info, category, id} = props
  console.log(name)
  return (
    <div className='MenuItem'>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
          width="300"
          height="300"
          alt="Menu Item"
        />
      </Link>
      <Link
        className='MenuItem-title'
        to={`/details/${id}`}>
        {category}
      </Link>
  
      <div className='dish-name'>
        {name}
      </div>
   
      {/* <div className='MenuItem-info'>
        <div className='diets'>{for_diets}</div>
      </div> */}
    </div>
  )
}


export default MenuItem