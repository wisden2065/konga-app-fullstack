import React from 'react'
import './Home.css'
import slide1 from '../../assets/images/slider1.webp'
import {images} from '../../assets/images/index'
import { spanImages } from '../../assets/images/index'
import ProdDealCard from '../../components/ProdDealCard/ProdDealCard'
const Home = () => {
  return (
    <>
        <div id='home-section'>
            <div className='carousel-wrapper'>
                <div className="carousel-cont">
                    <div className='slider'>
                        <img src={slide1} alt="" />
                    </div>
                    <div className='side-cont'>
                        <div className='side-cont-inner'>
                            <img src={images.sideImg1} alt="" />
                        </div>
                        <div className='side-cont-inner'>
                            <img src={images.sideImg2} alt="" />
                        </div>
                        <div className='side-cont-inner'>
                            <img src={images.sideImg3} alt="" />
                        </div>
                        <div className='side-cont-inner'>
                            <img src={images.sideImg4} alt="" />
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        <main>
            <section id='categories'>
                <div className='explore-categories'>
                    <span><img src={spanImages.blogImg} alt="" /></span>
                    <span><img src={spanImages.billsImg} alt="" /></span>
                    <span><img src={spanImages.storeImg} alt="" /></span>
                    <span><img src={spanImages.brandImg} alt="" /></span>
                    <span><img src={spanImages.flightImg} alt="" /></span>
                    <span><img src={spanImages.watchImg} alt="" /></span>
                </div>
                <div className='categories-cont'>
                    <div>
                        <div className='product-head'>
                            <h4><span>Today's Deals</span> <a href="">See All Items</a></h4>
                        </div>
                        <div className='product-cont-wrapper'>
                            <div className='product-cont'>
                                <ProdDealCard />
                                <ProdDealCard />
                                <ProdDealCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Home
