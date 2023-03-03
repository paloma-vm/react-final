import React from 'react';
import { useState } from 'react';
// used this reference for help: https://codesandbox.io/s/r6bdg?file=/src/App.js
function AddToMenu() {
  const [menu, setMenu] = useState([]);
  const [menuItems, setmenuItems] = useState('');
  return (
    <div className='AddToMenu'>
      {menu.length === 0 && <p>Add items to the menu to see them here.</p>}
      {menu.length > 0 && <p>On the menu: {menu.toString()}</p>}
      <button
        onClick={() => {
        setMenu([...menu, `items on menu ${menuItems}`])
        setmenuItems(menuItems.append(MenuItem));
        }}
      >
        Add to Menu
      </button>
    </div>
  );
}

export default AddToMenu;
