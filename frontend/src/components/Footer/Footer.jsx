import React from 'react'
import './Footer.css'
import android from '../../assets/android-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faApple, faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
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
  )
}

export default Footer
