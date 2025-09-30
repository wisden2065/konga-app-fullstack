import './ProdDealCard.css'
import { faNairaSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import prodThumbnails  from '../../assets/images/adidasRunners2.avif'
import { useEffect, useState } from 'react'
import { getProducts } from '../../assets/images/products'
import Skeleton from 'react-loading-skeleton'



const ProdDealCard = ({img, name, price, isLoading}) => {




  return (
      <a href="" className='prod-deal-card-cont'>
        <section className='prod-cont'>
            {
            isLoading?
                <Skeleton width={100+ '%'} containerClassName='hell' height={100+'%'} />
                :
                <img  src={img} alt='' />
                
            }
            
            <div className='prod-desc'>
                    <h3 className='prod-name'>
                        {
                            isLoading?
                            <Skeleton />
                            :
                            name
                        }</h3>
                    <div className='price'>
                        <div className='original-price price d-flex align-items-center'>
                            <FontAwesomeIcon icon={faNairaSign}/> 
                            { 
                            isLoading?
                                <Skeleton width={60+ 'px'} height={20+'px'} />
                                :
                                price.toLocaleString()
                                
                            }               
                        </div>
                        <div className='discount price d-flex flex-0'>
                            {
                                isLoading?
                                    <Skeleton />
                                    :
                                    "-40%"
                            }
                        </div>
                    </div>
                    <div>
                        <span className='saved d-flex gap-2 align-items-center'>
                            You save 
                            <FontAwesomeIcon icon={faNairaSign} />
                                                        { 
                            isLoading?
                                <Skeleton width={60+ 'px'} height={20+'px'} />
                                :
                                (price * (1 - 40/100)).toLocaleString()
                                
                            }  
                        </span>
                    </div>
                </div>
        </section>
      </a>
  )
}

export default ProdDealCard
