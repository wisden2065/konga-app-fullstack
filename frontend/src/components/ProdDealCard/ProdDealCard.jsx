import './ProdDealCard.css'
import { faNairaSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import prodThumbnails  from '../../assets/images/adidasRunners2.avif'
import { useEffect, useState } from 'react'
import { getProducts } from '../../assets/images/products'
import Skeleton from 'react-loading-skeleton'



const ProdDealCard = () => {

        // state to hold products 
    const [prod, setProd] = useState([])
    const [isLoading, setIsaLoading] = useState(false)


    // fetch products as page mounts 
    useEffect(()=>{
        
        let products = getProducts()
        setIsaLoading(true)
        console.log(products)
        products
            .then((res)=>{
                 console.log(res)
                 setProd(res)
                 setIsaLoading(false)
            })

    }, [])

  return (
      <a href="" className='prod-deal-card-cont'>
        <section className='prod-cont'>
            {
            isLoading?
                <Skeleton width={100+ '%'} containerClassName='hell' height={100+'%'} />
                :
                <img  src={prod[0]?.Product_Image[0]} alt='' />
                
            }
            
            <div className='prod-desc'>
                    <h3 className='prod-name'>Starlink Standard Actuated Kit</h3>
                    <div className='price'>
                        <div className='original-price price d-flex align-items-center'>
                            <FontAwesomeIcon icon={faNairaSign}/> 
                            { 
                            isLoading?
                                <Skeleton width={60+ 'px'} height={20+'px'} />
                                :
                                prod[0]?.Product_Price.toLocaleString()
                                
                            }               
                        </div>
                        <div className='discount price d-flex flex-0'>-40%</div>
                    </div>
                    <div>
                        <span className='saved d-flex gap-2 align-items-center'>
                            You save 
                            <FontAwesomeIcon icon={faNairaSign} />
                                                        { 
                            isLoading?
                                <Skeleton width={60+ 'px'} height={20+'px'} />
                                :
                                (prod[0]?.Product_Price * (1 - 40/100)).toLocaleString()
                                
                            }  
                        </span>
                    </div>
                </div>
        </section>
      </a>
  )
}

export default ProdDealCard
