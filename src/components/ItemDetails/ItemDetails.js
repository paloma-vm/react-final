// src/components/ItemDetails/ItemDetails.js
import React from 'react'
import { useParams } from 'react-router'
import data from '../../menu-data.js'
import './ItemDetails.css'

function ItemDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, ingredients, for_diet, nutrition_info, allergens } = data[id]
  
  return (
    <div className="ItemDetails">
      <div className="ItemDetails-image">
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={title} />
      </div>
      <div className="ItemDetails-info">
        <h1 className="ItemDetails-title">{ title }</h1>
        <p className="ItemDetails-desc">{ desc }</p>
        <p className="ItemDetails-for_diet">{ for_diet }</p>
        <p className="ItemDetails-allergens">{ allergens }</p>
        <p className="ItemDetails-nutrition_info">{ nutrition_info }</p>
        <p className="ItemDetails-ingredients">{ ingredients }</p>
        {/* <POPOSFeatureList features={ features }/> */}
      </div>
    </div>
  )
}

export default ItemDetails