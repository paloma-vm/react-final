// src/Header.js
import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <header>
        <div className='Header-left'>
          <h1>Connected Care Meals</h1>
          <div className="Header-Subheader">Daily Menu and Meal Choices </div>
        </div>
        <div className='Header-right'>
          <div className='a'>
            <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/today"> Today's Menu</NavLink>
            <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/">All Menu Items</NavLink>
            <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/about">About</NavLink>
          </div>
          
        </div>

      </header>
    </div>
  )
}

export default Header