import React from 'react'
import './CategoryImgCard.css'
import { categories_Imgs } from '../../assets/images'
const CategoryImgCard = () => {
  return (
    <div className='category-card'>
        {categories_Imgs.map((category, index)=>{
                return <a href='' className='img-cont' key={index}>
                          <div>
                              <img src={category} alt="" />
                          </div>
                       </a>
          })} 
    </div>
  )
}

export default CategoryImgCard
