import React from 'react'
import './CategoryImgCard.css'
import { categories_Imgs } from '../../assets/images'
const CategoryImgCard = () => {
  return (
    <div className='category-card'>
        {categories_Imgs.map((category)=>{
                return <a href='' className='img-cont'>
                        <div>
                            <img src={category} alt="" />
                        </div>
                      </a>
          })} 
    </div>
  )
}

export default CategoryImgCard
