// src/components/MenuList/MenuList.js
import React from 'react';
// import MenuItem from "../MenuItem/MenuItem"
import MenuItem from '../MenuItem/MenuItem';
import './MenuList.css';

// import data from '../../menu-data.js'
import data from '../../todays-menu.js'
// import AddToMenu from '../../../AddToMenu/AddToMenu';
import { useState } from 'react';



function MenuList() {
  const [menu, setMenu] = useState([]);
  const addToMenu = (obj) => {
    setMenu([...menu, obj])
  }
  // const useEffect(() => )
  const todays_items = data
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
      <input type="submit" value="add" onClick = {() => addToMenu(obj)}/>
    </div>
  )
})
//   .map((obj) => {
//     const { id, title, images, ingredients, for_diets, nutrition_info, category} = obj

//   return (
//     <div>
      
//       <MenuItem 
//         id={id}
//         key={`${title}-${id}`} // use id here
//         name={title}
//         image={images[0]}
//         category={category}
//       />  
//     </div>
//   )
// })


  return (
    <div className="MenuList">
      {todays_items}
    </div>
      
  )
}
  export default MenuList