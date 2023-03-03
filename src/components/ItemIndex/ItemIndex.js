// src/components/ItemIndex/ItemIndex.js
import React from 'react';
// import MenuItem from "../MenuItem/MenuItem"
import MenuItem from '../MenuItem/MenuItem';
import './ItemIndex.css';

import data from '../../menu-data.js'
import { useState } from 'react';


function ItemIndex() {
  const [ query, setQuery ] = useState('')  
  const [menu, setMenu] = useState([]);
  const addToMenu = (obj) => {
    setMenu([...menu, obj])
  } // add the item to the menu list
  
  const items = data
  .filter((obj) => {
    // true if query is in title
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
    // true if query is in address
    const inCategory = obj.category.toLowerCase().includes(query.toLowerCase())
    // return true if either is true
    return inTitle || inCategory
  })
  .map((obj) => {
    const { id, title, images, ingredients, for_diets, nutrition_info, category, menu} = obj
  return (
    <div>
      
      <MenuItem 
        id={id}
        key={`${title}-${id}`} // use id here
        name={title}
        image={images[0]}
        category={category}
      />  
      <input type="submit" value="Add to Menu" onClick = {() => addToMenu(obj)}/>
  
    </div>
  )
})


  return (
    <div className="MenuList">
      	<form>
				<input
					value={query}
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
      {items}
    </div>
      
  )
}
  export default ItemIndex