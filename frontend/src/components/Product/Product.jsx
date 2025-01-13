import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faHeart, faNairaSign, faStar } from '@fortawesome/free-solid-svg-icons'
import iphoneThumbnail from '../../assets/images'
import { useContext, useState } from 'react'
import ProductContextProvider, { ProductContext } from '../../context/ProductContext'


const Product = ({name, price, category, image, brand}) => {
    const [cartItemCount, setCartItemCount] = useState(0);
    const { activeProdCat, setActiveProdCat } = useContext(ProductContext)

        return <>
                    <div className="productItem" category={category} brand={brand} >
                                <div className="saveProduct"><FontAwesomeIcon icon={faHeart} style={{color: '#ffff'}} /></div>
                                <span className="topSpan">-9%</span>
                                <div className="prodImg">
                                    <img src={image} />
                                </div>
                              <div className='prodDesc'>
                                <p>{name}</p>
                                    <div className="prodPrice">
                                        <h3><FontAwesomeIcon icon={faNairaSign} />{price}</h3>
                                        <p>N <s>46,263</s></p>
                                        <span className="prodSpan">-29%</span>
                                    </div>
                                    <p className="p">You save N11,300</p>
                                    <hr/>
                                    <p className="soldBy">Sold by <span>Official Apple Store</span></p>
                                    <div className="ratingCont">
                                        <div>
                                        <FontAwesomeIcon icon={faStar} style={{color: '#dedede'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color: '#dedede'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color: '#dedede'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color: '#dedede'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color: '#dedede'}} />
                                        </div>
                                        <p>No reviews yet</p>
                                    </div>
                                    <div className="prodBtn"><a><button>Add To Cart</button></a></div>
                              </div>
                    </div>  
                    {/* } */}
               </>
            
        
}

export default Product
