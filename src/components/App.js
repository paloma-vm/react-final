import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MenuList from './MenuList/MenuList';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MenuList /> */}
      <Outlet />
      <Footer 
        name="Paloma Valdez-Marsh"
        copyright_year="copyright 2023"
      />
    </div>
  );
}

export default App;
