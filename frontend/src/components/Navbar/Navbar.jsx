
import React, { useContext, useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faChevronDown, faBars, faQuestion, faSearch} from '@fortawesome/free-solid-svg-icons'
import {ProductContext} from '../../context/ProductContext'

const Navbar = () => {
    
    // const [activeProdCat, setActiveProdCat] = useState('all')
    const {activeProdCat, setActiveProdCat} = useContext(ProductContext)
    console.log(activeProdCat)
    const { cartItems, addToCart, removeFromCart } = useContext(ProductContext)
  return (
            <div id='nav-sect-wrapper'>
                <div id="nav-section">
                    <div className='logo-cont'>
                        <img src={Logo} alt="App logo" className="logo" />                                 
                    </div>
                    <a id="store" className='menu-icons'>Store <br /> Locator</a>
                    <a id="sell">Sell on <br /> Konga</a>
                    <div id="input-cont">
                        <input type="text" placeholder="Search for products, brands and Categories..." className="place" />
                        <div className="searchCont">
                            <FontAwesomeIcon  icon={faSearch} />
                        </div>
                    </div>
                    <a href="" className="help">
                        <span className='help-icon-cont'>
                            <FontAwesomeIcon icon={faQuestion} style={{color:'white'}} />
                        </span>
                        Help 
                        <FontAwesomeIcon icon={faChevronDown} style={{color:'white'}} />
                    </a>
                    <a href="">
                        Login / <br /> Signup
                    </a>
                    <div id="cart-cont">
                        <FontAwesomeIcon icon={faCartShopping} className='icon'/>
                        My <br />Cart
                        <span id="span">0</span>
                    </div>
                </div>
                <div id='secondNav'>
                    <div className="inner all-cat"
                        onClick={()=>{
                            setActiveProdCat('all');
                            console.log("Current category:",activeProdCat)
                        }}
                    >
                        All category
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className='inner drp' 
                        onClick={()=>{
                            setActiveProdCat('laptops');
                            console.log("Current category:",activeProdCat)
                        }}
                    >
                        Computer and Accessories
                    </div>
                    <div href="" className='inner drp'
                          onClick={()=>{
                            setActiveProdCat('phones');
                            console.log(activeProdCat)
                        }}
                    >
                        Phones and tablets
                    </div>
                    <div href='' className="inner drp"
                          onClick={()=>{
                            setActiveProdCat('electronics');
                            console.log(activeProdCat)
                        }}
                    >
                        Electronics
                    </div>
                    <div href='' className="inner drp"
                          onClick={()=>{
                            setActiveProdCat('fashion');
                            console.log(activeProdCat)
                        }}
                    >
                        Konga fashion
                    </div>
                    <div href='' className="inner drp"
                          onClick={()=>{
                            setActiveProdCat('kitchen');
                            console.log(activeProdCat)
                        }}
                    >
                        Home and Kitchen
                    </div>
                    <div href='' className="inner drp"
                          onClick={()=>{
                            setActiveProdCat('kids');
                            console.log(activeProdCat)
                        }}
                    >
                        Baby, Kids and Toys
                    </div>
                    <div href='' className="inner drp"
                          onClick={()=>{
                            setActiveProdCat('health');
                            console.log(activeProdCat)
                        }}
                    >
                        Beauty, Health and Personal Care
                    </div>
                </div>
            </div>
  )
}

export default Navbar
