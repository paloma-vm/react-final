// src/components/ItemIndex/ItemIndex.js
import React from 'react';
// import MenuItem from "../MenuItem/MenuItem"
import MenuItem from '../MenuItem/MenuItem';
import './ItemIndex.css';

import data from '../../menu-data.js'
import { useState } from 'react';


function ItemIndex() {
  const [menu, setMenu] = useState([]);
  const addToMenu = (obj) => {
    setMenu([...menu, obj])
  }

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
      <input type="submit" value="add" onClick = {() => addToMenu(obj)}/>
  
    </div>
  )
})


  return (
    <div className="MenuList">
      {items}
    </div>
      
  )
}
  export default ItemIndex