import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faHeart, faNairaSign, faStar } from '@fortawesome/free-solid-svg-icons'
import iphoneThumbnail from '../../assets/images'
import { useContext, useState } from 'react'
import ProductContextProvider, { ProductContext } from '../../context/ProductContext'
import { useNavigate } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'



const Product = ({name, price, category, image, brand, id}) => {
    const [cartItemCount, setCartItemCount] = useState(0);
    const { activeProdCat, setActiveProdCat} = useContext(ProductContext);
    const { addToCart, removeFromCart} = useContext(ProductContext);
    const { seeProdDesc } = useContext(ProductContext);
    const navigate = useNavigate()
        
        // function to truncate the length of a product name
        const truncateProdName=(prodName, maxLength)=>{
            return prodName.length > maxLength? prodName.substring(0, maxLength) + '...' : prodName;
        }

        return <div onClick={(e)=>{
                                console.log(e.target)
                                if(e.target.matches('.btn')){
                                    e.stopPropagation()
                                    addToCart(id)
                                }
                                else{
                                    seeProdDesc(id)
                                    navigate('/category/product')
                                }}} id={id}>
                    <div className="productItem" category={category} brand={brand} >
                                <div className="saveProduct"><FontAwesomeIcon icon={faHeart} style={{color: '#ffff'}} /></div>
                                <span className="topSpan">-9%</span>
                                <div className="prodImg">
                                    <img src={image || <Skeleton />} /> 
                                </div>
                              <div className='prodDesc'>
                                <p><b>{truncateProdName(name, 23)}</b></p>
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
                                    <div className="prodBtn"><button className='btn'>Add To Cart</button></div>
                              </div>
                    </div>  
               </div>
            
        
}


export default Product
