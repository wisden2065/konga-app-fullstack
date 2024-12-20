
import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faChevronDown, faBars, faQuestion, faSearch} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
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
                    <div className="inner all-cat">
                        All category
                        <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="inner drp">
                    Computer and Accessories
                </div>
                
                <div className="inner drp">
                    Phones and tablets
                </div>
                
                <div className="inner drp">
                    Electronics
                </div>
                
                <div className="inner drp">
                    Konga fashion
                </div>
                
                <div className="inner drp">
                    Home and Kitchen
                </div>
                
                <div className="inner drp">
                    Baby, Kids and Toys
                </div>
                
                <div className="inner drp">
                    Beauty, Health and Personal Care
                </div>
                </div>
            </div>
            
  )
}

export default Navbar
