import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  './ProductDescription.css'
import { faChevronDown, faChevronLeft, faChevronRight, faHandHoldingHeart, faHeart, faMinus, faNairaSign, faPersonWalking, faPersonWalkingArrowLoopLeft, faPlus, faStar, faTruck, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import iphoneThumbnail from '../../assets/images'
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useContext, useState } from 'react'
import { ProductContext } from '../../context/ProductContext'


const Cart = () => {

    const {seeProdDesc, itemDesc} = useContext(ProductContext)
    console.log('In the Product Description page')
    console.log(itemDesc[0])
    // state for the product description images
    const [activeProdImg, setActiveProdImg] = useState('first') 
    // state for product quantity on view of a particular product
    const [ prodQt, setProdQty ] = useState(1)
    // state for picture thumbnails
    const [currentThumbnail, setCurrentThumbnail] = useState(itemDesc[0].Product_Image[0])
   
  return (
          <>
              <div id="phonesTablet">
                <div id="phones">
                  <div id="innerPhone">
                    <a>Home <FontAwesomeIcon icon={faChevronRight} style={{fontSize: 8 + 'px'}} /> {itemDesc[0].Product_category} <FontAwesomeIcon icon={faChevronRight} style={{fontSize: 8 + 'px'}} /><a href="" className='active-cat'> {itemDesc[0].Product_Name}</a></a>
                    {/* <span id='filter'>1 - 4 of <span>1000 results</span></span> */}
                  </div>
                  <h1>iOS Phones</h1>
                </div>
              </div>
              <div>
                <div className="prod-detail-section">
                  <div className="prod-detail-wrapper">
                      <div className="prod-detail-contain">
                          <div className="phone-plus-thumbnail-cont">
                              <div className="phone-contain">
                                  <span className="right"><FontAwesomeIcon icon={faChevronLeft} /></span>
                                  <img src={currentThumbnail} alt="" />
                                  <span className="right"><FontAwesomeIcon  icon={faChevronRight}/></span>
                              </div>
                              <ul className="thumbnail-cont">
                                  <li className={activeProdImg == 'first'? 'active': ''} 
                                    onClick={()=>{setActiveProdImg('first')}}>
                                    <img src={itemDesc[0].Product_Image[0]} alt="" onClick={()=>{setCurrentThumbnail(itemDesc[0].Product_Image[0])}} />
                                  </li>
                                  <li className={activeProdImg == 'second'? 'active': ''}
                                    onClick={()=>{setActiveProdImg('second')}}>
                                    <img src={itemDesc[0].Product_Image[1]} alt="" onClick={()=>{setCurrentThumbnail(itemDesc[0].Product_Image[1])}}  />
                                  </li>
                                  <li className={activeProdImg == 'third'? 'active': ''}
                                    onClick={()=>{setActiveProdImg('third')}}>
                                    <img src={itemDesc[0].Product_Image[2]} alt="" onClick={()=>{setCurrentThumbnail(itemDesc[0].Product_Image[2])}}  />
                                  </li>
                              </ul>
                          </div>
                          <div className="prod-detail">
                              <h4>{itemDesc[0].Product_Name}</h4>
                              <p>Product Code: <span>356475</span></p>
                              <p>Brand: <span>{itemDesc[0].Product_Brand}</span></p>
                              <hr />
                              <h4>
                                  <FontAwesomeIcon icon={faNairaSign} />
                                  <span>1,50002</span>
                              </h4>
                              <hr />
                              <div className="qty">
                                  <p>Quantity:</p>
                                  <ul>
                                      <li><FontAwesomeIcon icon={faMinus} color='#aca5a5' onClick={()=>{setProdQty((preQty)=>preQty -1) }}/></li>
                                      <li><b>{prodQt}</b></li>
                                      <li><FontAwesomeIcon icon={faPlus} color='#aca5a5' onClick={()=>{setProdQty((preQty)=>preQty +1)}} /></li>
                                      
                                  </ul>
                              </div>
                              <div className="bulkPurchase">
                                  <p>Call us for Bulk Purchases:</p>
                                  <p><span>07056783634</span></p>
                              </div>
                              <hr />
                              <div className="add-to-cart">
                                  <button>Add To Cart</button>
                                  <div className="icon-save-cont">
                                      <div className="icon-cont">
                                          <FontAwesomeIcon icon={faHeart} style={{color:'white'}}/>
                                      </div>
                                      <p>Save for later</p>
                                  </div>
                              </div>
                              <hr />
                              <h3>Buy Protection for your device</h3>
                              <div className="protect-plan">
                                  <p>Select Konga Protect Plan</p>
                                  <FontAwesomeIcon icon={faChevronDown} style={{color: '#b1afaf'}} />
                              </div>
                              <hr />
                              <div>
                                  <div className="delivery-icon-cont">
                                      {/* <i className="fa-solid fa-truck-fast"></i> */}
                                      <FontAwesomeIcon icon={faTruck} />
                                      <p>Pickup & Pay on Collection Available</p>
                                  </div>
                              </div>
                              <p>Share With Friends</p>
                              <div className="social-icon-cont">
                                  <div className="icon-cont">
                                      {/* <i className="fa-brands fa-facebook-f"></i> */}
                                      <FontAwesomeIcon icon={faFacebook} />
                                  </div>
                                  <div className="icon-cont">
                                      {/* <i className="fa-brands fa-x-twitter"></i> */}
                                      <FontAwesomeIcon icon={faTwitter} />
                                  </div>
                                  <div className="icon-cont">
                                      {/* <i className="fa-brands fa-whatsapp"></i> */}
                                      <FontAwesomeIcon icon={faWhatsapp} />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div id="shippn-info-wrapper">
                          <div className="prod-shippn-info">
                              <h4>Delivery & Returns</h4>
                              <hr/>
                              <div className="ship-cont">
                                  {/* <i className="fa-solid fa-truck-fast"></i> */}
                                  <FontAwesomeIcon icon={faTruckFast} />
                                  <div>
                                      <h4>Delivery</h4>
                                      <p>Estimated delivery time 1-9 business days</p>
                                      <p><b>Express Delivery Available</b></p>
                                      <p><b>For Same-Day-Delivery: </b><span> Please place your order before 11AM</span></p>
                                      <p><b>Next-Day-Delivery:</b> <span> Orders placed after 11AM will be delievered the next day</span></p>
                                      <p><b>Note:</b> <span>  Availability may vary by location</span></p>
                                  </div>
                              </div>
                              <hr/>
                              <div className="ship-cont">
                                  {/* <i className="fa-solid fa-person-walking-arrow-loop-left"></i> */}
                                  <FontAwesomeIcon icon={faPersonWalking} />
                                  <div>
                                      <h4>Return Policy</h4>
                                      <p><b>Guaranteed 7-Day Return Policy</b></p>
                                      <p>For details about return shipping options, please visit - <span style={{color: '#f16a9c'}}>Konga Return Policy</span></p>
                                      
                                  </div>
                              </div>
                              <hr/>
                              <div className="ship-cont">
                                  {/* <i className="fa-solid fa-hand-holding-heart"></i> */}
                                  <FontAwesomeIcon icon={faHandHoldingHeart} />
                                  <div>
                                      <h4>Return Policy</h4>
                                      <p>Warranty information unavailable for this item.</p>
                                      
                                  </div>
                              </div>
                          </div>
                          <div id="merchant-info-cont">
                              <div className="sellerInfo">
                                  <h4>Seller Information</h4>
                                  <a href="">View Merchant Store</a>
                              </div>
                              <hr/>
                              <div className="seller">
                                  <div id="userIcon">S</div>
                                  <div id="userName">
                                      <h1>Simmy Phones</h1>
                                      <p>1 year of selling on Konga</p>
                                  </div>
                              </div>
                              <div id="merchant-record">
                                  <div className="sales">
                                      <h4>Number of Sales</h4>
                                      <h2>30</h2>
                                      <p>Successful sales</p>
                                  </div>
                                  <div id="bar-cont">
                                      <p>Product Quality:</p>
                                      <div className="__bar">
                                        <div className="count bar1">
                                              <div></div>
                                              <div></div>
                                              <div></div>
                                              <div></div>
                                              <div></div>
                                              <div></div>
                                              <div></div>
                                              <div></div>
                                              <span>100%</span>
                                        </div>
                                        
                                      </div>
                                      <p>Delivery Rate:</p>
                                      <div className="__bar">
                                          <div className="count bar2">
                                              <div></div>
                                              <div></div>
                                              <div></div>
                                              <div></div>
                                              <div></div>
                                              <div></div>
                                              <div></div>
                                              <div></div>
                                              <span>100%</span>
                                        </div>
                                      </div>
                                  </div>
                              </div>
                              <div>
                                  <p>Merchant reviews(50)</p>
                                  <h4>5/5</h4>
                                  <div className="rating">
                                      {/* <i className="fa-solid fa-star" style="color: #f68b1e;"></i> */}
                                      <FontAwesomeIcon icon={faStar} style={{color: '#f68b1e'}} />
                                      <FontAwesomeIcon icon={faStar} style={{color: '#f68b1e'}} />
                                      <FontAwesomeIcon icon={faStar} style={{color: '#f68b1e'}} />
                                      <FontAwesomeIcon icon={faStar} style={{color: '#f68b1e'}} />
                                      <FontAwesomeIcon icon={faStar} style={{color: '#f68b1e'}} />
                                  </div>
                              </div>
              
                          </div>
              
                      </div>
                    </div>
                      </div>
                      <div className="prod-detail-section">
                      <div className="simi-prod">
                          {/* <!-- <span className="left"><i className="fa-solid fa-chevron-left"></i></span> --> */}
                          <h4>Customers who viewed this also viewed</h4>
                          <div className="prod-cont">
                              <div className="prod">
                                  <div>
                                      <img src={iphoneThumbnail} alt="" />
                                      
                                      <h4><FontAwesomeIcon icon={faNairaSign} /> 130000</h4>
                                  </div>
                                  <p>Iphone 13 Pro</p>
                              </div>
                              <div className="prod">
                                  <div>
                                      <img src={iphoneThumbnail} alt="" />
                                      <h4><FontAwesomeIcon icon={faNairaSign} /> 130000</h4>
                                  </div>
                                  <p>Iphone 13 Pro</p>
                              </div>
                              <div className="prod">
                                  <div>
                                      <img src={iphoneThumbnail} alt="" />
                                      <h4><FontAwesomeIcon icon={faNairaSign} /> 130000</h4>
                                  </div>
                                  <p>Iphone 13 Pro</p>
                              </div>
                              <div className="prod">
                                  <div>
                                      <img src={iphoneThumbnail} alt="" />
                                      <h4><FontAwesomeIcon icon={faNairaSign} /> 130000</h4>
                                  </div>
                                  <p>Iphone 13 Pro</p>
                              </div>
                              <div className="prod">
                                  <div>
                                      <img src={iphoneThumbnail} alt="" />
                                      <h4><FontAwesomeIcon icon={faNairaSign} /> 130000</h4>
                                  </div>
                                  <p>Iphone 13 Pro</p>
                              </div>
                              <div className="prod">
                                  <div>
                                      <img src={iphoneThumbnail} alt="" />
                                      <h4><FontAwesomeIcon icon={faNairaSign} /> 130000</h4>
                                  </div>
                                  <p>Iphone 13 Pro</p>
                                  <span className="right"><FontAwesomeIcon icon={faChevronRight} /></span>
                              </div>
                          </div>
                          
                      </div>
                    </div>
                    <div className="prod-detail-section">
                        <div className="simi-prod">
                            {/* <!-- <span className="left"><i className="fa-solid fa-chevron-left"></i></span> --> */}
                            <h4>Recent viewed items</h4>
                            <div className="prod-cont">
                                <div className="prod">
                                    <div>
                                        <img src={iphoneThumbnail} alt="" />
                                        <h4><FontAwesomeIcon icon={faNairaSign} /> 130000</h4>
                                    </div>
                                    <p>Iphone 13 Pro</p>
                                </div>
                                <div className="prod">
                                    <div>
                                        <img src={iphoneThumbnail} alt="" />
                                        <h4><FontAwesomeIcon icon={faNairaSign} /> 130000</h4>
                                    </div>
                                    <p>Iphone 13 Pro</p>
                                </div>
                                <div className="prod">
                                    <div>
                                        <img src={iphoneThumbnail} alt="" />
                                        <h4><FontAwesomeIcon icon={faNairaSign} /> 130000</h4>
                                    </div>
                                    <p>Iphone 13 Pro</p>
                                </div>
                                <div className="prod">
                                    <div>
                                        <img src={iphoneThumbnail} alt="" />
                                        <h4><FontAwesomeIcon icon={faNairaSign} /> 130000</h4>
                                    </div>
                                    <p>Iphone 13 Pro</p>
                                </div>
                                <div className="prod">
                                    <div>
                                        <img src={iphoneThumbnail} alt="" />
                                        <h4><FontAwesomeIcon icon={faNairaSign} /> 130000</h4>
                                    </div>
                                    <p>Iphone 13 Pro</p>
                                </div>
                                <div className="prod">
                                    <div>
                                        <img src={iphoneThumbnail} alt=""  />
                                        <h4><FontAwesomeIcon icon={faNairaSign} /> 130000</h4>
                                    </div>
                                    <p>Iphone 13 Pro</p>
                                    <span className="right"><FontAwesomeIcon icon={faChevronRight} /></span>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                  </div>
          </>
  )
}

export default Cart
