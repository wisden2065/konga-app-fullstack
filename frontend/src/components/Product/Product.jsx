import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faHeart, faNairaSign, faStar } from '@fortawesome/free-solid-svg-icons'
import iphoneThumbnail from '../../assets/images'
const Product = () => {
  return (
        <div className="productItem">
            <div className="saveProduct"><FontAwesomeIcon icon={faHeart} style={{color: '#ffff'}} /></div>
            <span className="topSpan">-9%</span>
            <div className="prodImg">
                <img src={iphoneThumbnail} />
            </div>
            <p>Name</p>
            <div className="prodPrice">
                <h3><FontAwesomeIcon icon={faNairaSign} />N12345</h3>
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
  )
}

export default Product
