import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Products.css'

const Products = () => {
  return (
    <div className='all-products-cont'>
        <div id="innerPhone">
            <a>Home <FontAwesomeIcon icon={faChevronRight} style={{fontSize: 8 + 'px'}} /> <a href="" className='active-cat'>Phones and Tablets</a></a>
            <span id='filter'>1 - 4 of <span>1000 results</span></span>
        </div>
        <div className='current-category'>
            <h1>Phones And Tablets</h1>
            <div id="cont">
                <p>Sort By:</p>
                <ul>
                    <li class="active-sort">Relevance</li>
                    <li id="remove">Price- High To Low</li>
                    <li>Price- Low To High</li>
                </ul>
            </div>
        </div>
                    
    </div>
  )
}

export default Products
