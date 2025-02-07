import React, { useState } from 'react'
import './Footer.css'
import android from '../../assets/android-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faApple, faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {

    const [ activeFooterTab, setActiveFooterTab ] = useState('home')

  return (
    <>
           <div className='footer-nav'>
             <a className={`icon-cont ${activeFooterTab == 'home'? 'active': ''}`}
                onClick={()=>{setActiveFooterTab('home')}}
             >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                </svg>
                <span>Home</span>
             </a>
             <a className={`icon-cont ${activeFooterTab == 'deals'? 'active': ''}`}
                onClick={()=>{setActiveFooterTab('deals')}}
             >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                    <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"/>
                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"/>
                </svg>
                <span>Deals</span>
             </a>
             <a 
                className={`icon-cont ${activeFooterTab == 'cart'? 'active': ''}`}
                onClick={()=>{setActiveFooterTab('cart')}}
             >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
                <span>Cart</span>
             </a>
             <a className={`icon-cont ${activeFooterTab == 'more'? 'active': ''}`}
                onClick={()=>{setActiveFooterTab('more')}}
             >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter-right" viewBox="0 0 16 16">
                    <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5"/>
                </svg>
                <span>More</span>
             </a>
        </div>
        
    <div id='footer-section'>
     
        <div id="summary">
            <div id="sum">
                <h3>Phones and tablets</h3>
                <h3>Buy Mobile Phones Online on Konga</h3>
                <p>Communication and entertainment have been taken to another level with the invention of smartphones and its inbuilt innovative operating systems such as Android, iOS, Windows mobile and Blackberry platforms. With the availability of memory cards, you can store as much information as you want, be it official documents for keeps or those memorable moments you captured in videos and photos You can get to listen to downloaded songs with your mobile phone device and you could say it has replaced some of the portable music players in the market at the moment. Also get to enjoy movies on your phones either online with the use of the YouTube app installed or offline with the use of the large memory space included in the mobile phones. Online shopping is also made possible on mobile smartphones and with the Konga App installed, you can shop online without the use of a desktop computer. </p>
                <h3>Where to Buy Smarphones in Nigeria</h3>
                <p>The latest mobile phones & tablets help you capture moments that mean so much to you with the use of video camera, it helps you to work from anywhere and anytime with the availability of internet connection whereby you can work on word and excel documents then afterwards, send these documents as reports via email right on your phone while you are on the go. If you are more of an entertainment personality and not business, you are definitely not left out as modern phones come with powerful inbuilt cameras that can capture clear images in high definition so when your friends are taking all the selfies for the “looking good” moment, you can bring yours to the party as well. In case you are still not sure of what phone to buy, feel free to check Konga’s buying guide that will help make the right choices by going through the latest phone reviews and have a better choice made and also get to discover brands Microsoft Lumia, Samsung, Apple iphones, HTC,Infinix, and many more.Once you know what mobile device to go for, buy on Konga at the best prices in Nigeria and you will have no regrets doing so. Also shop on Konga for a wide range of other products from Laptops, Kitchen Appliances, Electronics, etc as well as flight tickets and vacation packages on Konga Travels</p>
            </div>
        </div>
        <div id="footer-cont">
            <div id="ash-cont-wrapper">
                <div className="ash-cont">
                    <div className="ash-inner">
                        <div className="icon-cont">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="text">
                            <h4>EMAIL SUPPORT</h4>
                            <p>help@konga.com</p>
                        </div>
                    </div>
                    <div className="ash-inner">
                        <div className="icon-cont">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="text">
                            <h4>PHONE SUPPORT</h4>
                            <p>07080635700, 02018883435</p>
                        </div>
                    </div>
                    <div className="ash-inner">
                        <div className="icon-cont">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>
                        <div className="text">
                            <h4>WHATSAPP</h4>
                            <p>0907 0038 400, 0809 460 5555</p>
                        </div>
                    </div>
                    <div className="ash-inner deals">
                        <div className="text">
                            <h4>GET THE LATEST DEALS</h4>
                            <p>Our best promotions sent to your inbox.</p>
                        </div>

                    </div>
                    <div className="ash-inner deals">
                        <div className="sub">
                            <input type="text" placeholder="Email Address" />
                            <a href="">Subscribe</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-links-cont-wrapper">
                <div className="nav-links-cont">
                    <div className="nav-links links">
                        <h4>ABOUT KONGA</h4>
                        <p>Contact Us</p>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Our Blog</p>
                        <p>Forum</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className="lagal-links links">
                        <h4>Payment</h4>
                        <p>KongaPay</p>
                        <p>Wallet</p>
                        <p>Verve</p>
                        <p>Mastercard</p>
                        <p>Visa</p>
                    </div>
                    <div className="about-link links">
                        <h4>Buying on konga</h4>
                        <p>Buyer Safety Centre</p>
                        <p>FAQs</p>
                        <p>Delivery</p>
                        <p>Konga Return Policy</p>
                        <p>Digital Services</p>
                        <p>Bulk Purchase</p>
                    </div>
                    <div className="privacy-link links">
                        <h4>More Info</h4>
                        <p>Site Map</p>
                        <p>Track My Order</p>
                        <p>Privacy Policy</p>
                        <p>Authentic Items Policy</p>
                    </div>
                    <div className="partner-link links">
                        <h4>MAKE MONEY ON KONGA</h4>
                        <p>Become a Konga Affiliate</p>
                    </div>
                    <div id="icons-cont-wrapper">
                        <div id="download-on-store-cont">
                            <div id="apple-store">
                                <FontAwesomeIcon icon={faApple} style={{color: "white", fontSize:2 + 'rem'}} />
                                <div>
                                    <p>Download on</p>
                                    <h3>App Store</h3>
                                </div>
                            </div>
                            <div id="google-store">
                                <img src={android} alt="" />
                                <div>
                                    <p>Download on</p>
                                    <h3>Google Play</h3>
                                </div>
                            </div>
                        </div>
                            <div id="__socials">
                            <h3>CONNECT WITH US</h3>
                            <div id="all-icons-cont">
                                <div className="social_icon-cont">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </div>
                                <div className="social_icon-cont">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                                <div className="social_icon-cont">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div className="social_icon-cont">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            <div id="hr"><h4></h4><p>Copyright &copy;2024 konga.com. All right reserved</p><h4></h4></div>
        </div>
    </div>
    </>
       
  )
}

export default Footer
