// src/components/MenuList/MenuList.js
import React from 'react';
// import MenuItem from "../MenuItem/MenuItem"
import MenuItem from '../MenuItem/MenuItem';
import './MenuList.css';

import data from '../../menu-data.js'
// import { useState } from 'react';


function MenuList() {
  const items = data
  .map((obj) => {
    const { id, title, images, ingredients, for_diets, nutrition_info, category} = obj
  return (
    <div>
      
      <MenuItem 
        id={id}
        key={`${title}-${id}`} // use id here
        name={title}
        image={images[0]}
        category={category}
      />  
      <h1>{title}</h1>  
    </div>
  )
})


  return (
    <div className="MenuList">
      {items}
    </div>
      
  )
}
  export default MenuList