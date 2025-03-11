
import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faChevronDown, faBars, faQuestion, faSearch} from '@fortawesome/free-solid-svg-icons'
import {ProductContext} from '../../context/ProductContext'
import { useNavigate } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

const Navbar = () => {
    
    // const [activeProdCat, setActiveProdCat] = useState('all')
    const {activeProdCat, setActiveProdCat} = useContext(ProductContext)
    console.log(activeProdCat)
    const { cartItems, addToCart, removeFromCart, prodCount } = useContext(ProductContext)
    const navigate = useNavigate()
    
    useEffect(()=>{
        console.log(cartItems)
        // console.log(cartItems.length)
    }, [cartItems])
  return (
            <div id='nav-sect-wrapper'>
                <div id="nav-section">
                    <div className='logo-cont'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                        <img src={Logo} alt="App logo" className="logo"
                            onClick={()=>{navigate('/')}}
                        />                                 
                    </div>
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
                        <span id="span">{prodCount}</span>
                        {/* <span id="span">{Array.from(cartItems.keys).length}</span> */}
                    </div>
                    <div className='basket-sm'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                    </div>
                </div>
                <div id='secondNav' onClick={
                    (e)=>{
                        if(e.target.matches('.inner')){
                            navigate('/category/products')
                        }
                    }
                    }>
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
                    <div className="inputBox">
                        < input type="text" placeholder='Search for Products, Brands, Categories' name="" id="" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#c4c4c4" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                    
                </div>
                <div className='nav-icons' 
                    onClick={()=>{navigate('/category/products')}}
                >
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-menu-down" viewBox="0 0 16 16">
                            <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793zM1 7v3h14V7zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                        </svg>
                        <span>Browse All</span>
                    </a>
                    <a href=""
                      onClick={()=>{navigate('/category/products')}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-standing-dress" viewBox="0 0 16 16">
                            <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 12.25V12h1v3.25a.75.75 0 0 0 1.5 0V12h1l-1-5v-.215a.285.285 0 0 1 .56-.078l.793 2.777a.711.711 0 1 0 1.364-.405l-1.065-3.461A3 3 0 0 0 8.784 3.5H7.216a3 3 0 0 0-2.868 2.118L3.283 9.079a.711.711 0 1 0 1.365.405l.793-2.777a.285.285 0 0 1 .56.078V7l-1 5h1v3.25a.75.75 0 0 0 1.5 0Z"/>
                        </svg>
                        <span>Fashion</span>
                    </a>
                    <a href=""
                          onClick={()=>{navigate('/category/products')}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                        </svg>
                        <span>Computers</span>
                    </a>
                    <a href=""
                          onClick={()=>{navigate('/category/products')}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                        </svg>
                        <span>Phones</span>
                    </a>
                    <a href=""
                          onClick={()=>{navigate('/category/products')}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                            <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"/>
                            <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"/>
                        </svg>
                        <span>All Deals</span>
                    </a>
                </div>
             
            </div>
            
  )
}

export default Navbar
