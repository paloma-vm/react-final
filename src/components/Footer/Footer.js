// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

function Footer(props) {
  const {name, copyright_year} = props
  return (
    <div className='Footer'>
      <div>{name}</div>
      <div>{copyright_year}</div>
    </div>

  )
}

export default Footer