import { faChevronRight, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Products.css'
import Product from '../../components/Product/Product'

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
                    <li className="active-sort">Relevance</li>
                    <li id="remove">Price- High To Low</li>
                    <li>Price- Low To High</li>
                </ul>
            </div>
        </div>
        <section id="sect">
        <div className="browseCategory">
            <div id="browseCont">
                <div id="white">
                    <div className="browseFlex">
                        <h3>Browse Categories</h3> 
                        <span><FontAwesomeIcon icon={faMinus} style={{color: "#050505"}} /></span>
                    </div>
                    <ul id="tablets">
                        <li>Mobile Phones and Accessories</li>
                        <li>Mobile Phones</li>
                        <li>Tablet Accessories</li>
                        <li>Desk, Radio & Intercom Phones</li>
                        <li>Tablets</li>
                        <li>Phone & Tablet Bundles</li>
                    </ul>
                    <hr/>
                    <div className="browseFlex">
                        <h3>Price</h3>
                        <span><FontAwesomeIcon icon={faMinus} style={{color: "#050505"}} /></span>
                        {/* <span><i className="fa-solid fa-minus" style="color: #050505;"></i></span> */}
                        
                    </div>
                    <div>
                        <div className="inputP">
                            <input type="radio" name="" id="" />
                            <p>Under N2000</p>
                        </div>
                        <div className="inputP">
                            <input type="radio" name="" id="" />
                            <p>N2000 - N5000</p>
                        </div>
                        <div className="inputP">
                            <input type="radio" name="" id="" />
                            <p>N5000 - N10000</p>
                        </div>
                        <div className="inputP">
                            <input type="radio" name="" id="" />
                            <p>N10000 - N20000</p>
                        </div>
                        <div className="inputP">
                            <input type="radio" name="" id="" />
                            <p>N20000 - N40000</p>
                        </div>
                        <div className="inputP">
                            <input type="radio" name="" id="" />
                            <p>Above N40000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main">
                <div id="top">
                     <img src="pictures/PhonesTen.webp" alt="" />
                </div>
                <div id="productCont">
                    {/* <!-- dynamically insert productItem with JS -->
                        <!-- <div className="productItem">
                            <span className="topSpan">-9%</span>
                            <div className="prodImg">
                            
                            </div>
                            <p>Office 365 Professional</p>
                            <div className="prodPrice">
                                <h3>N27,778</h3>
                                <p>N <s>46,263</s></p>
                                <span className="prodSpan">-29%</span>
                            </div>
                            <p className="p">You save N11,300</p>
                            
                        </div> --> */}
                        <Product />
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Products
