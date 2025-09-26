import React from 'react'
import './Home.css'
import slide1 from '../../assets/images/slider1.webp'
import slide2 from '../../assets/images/slide2.gif'
import slide3 from '../../assets/images/slide3.gif'
import slide4 from '../../assets/images/slide5.webp'
import slide5 from '../../assets/images/slide6.gif'
import slide6  from '../../assets/images/slide7.gif'
import slide7  from '../../assets/images/slide7.webp'
import {images} from '../../assets/images/index'
import { spanImages } from '../../assets/images/index'
import ProdDealCard from '../../components/ProdDealCard/ProdDealCard'
import SponsoredProdCard from '../../components/SponsoredProdCard/SponsoredProdCard'
import CategoryImgCard from '../../components/CategoryImgCard/CategoryImgCard'
import OfficialStores from '../../components/OfficialStores/OfficialStores'
import { barners } from '../../assets/images/index'
import Dealscard from '../../components/DealsCard/Dealscard'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules'


const Home = () => {
  return (
    <>
        <div id='home-section'>
            <div className='carousel-wrapper'>
                <div className="carousel-cont">
                    <div className='slider'>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation= {{
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev'}}
                            pagination={{ clickable: true }}
                            className='swiper-cont'
                            autoplay={{delay:2000, 
                                disableOnInteraction:false
                            }}
                        >
                            <SwiperSlide >
                                <img className='slider-img' src={slide1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='slider-img' src={slide2} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='slider-img' src={slide3} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='slider-img' src={slide4} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='slider-img' src={slide4} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='slider-img' src={slide5} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='slider-img' src={slide6} alt="" />
                            </SwiperSlide>
                        </Swiper>
                        <div className='custom-next'>{'>'}</div>
                        <div className='custom-prev'>{'<'}</div>
                        
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
                    <div className='categories-cont-wrapper'>
                        <div className='product-head'>
                            <h4><span>Today's Deals</span> <a href="">See All Items</a></h4>
                        </div>
                        <div className='product-cont-wrapper'>
                            <div className='product-cont'>
                                <ProdDealCard />
                                <ProdDealCard />
                                <ProdDealCard />
                                <ProdDealCard />
                                {/* <ProdDealCard /> */}
                                {/* <ProdDealCard /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sponsored-categories-cont'>
                    <div>
                        <div className='sponsored-product-head' style={{backgroundColor:'#62468f', color:'white'}}>
                            <h4><span>Sponsored Products</span></h4>
                        </div>
                        <div className='product-cont-wrapper'>
                            <div className='sponsored-product-cont'>
                                <SponsoredProdCard />
                                <SponsoredProdCard />
                                <SponsoredProdCard />
                                <SponsoredProdCard />
                                <SponsoredProdCard />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='category-img'>
                    <div className="category-img-wrapper">
                        <div className="category-cont">
                            <CategoryImgCard />
                        </div>
                    </div>
                </div>
                <div className='featured-brands'>
                    <div className='featured-brand-head'>
                        Official Store
                    </div>
                    <div className="official-brands-wrapper">
                            <OfficialStores />
                    </div>
                </div>
                <div className="categories-cont">
                    <div className='categories-cont-wrapper'>
                        <div className='product-head' id='recommended-head'>
                            <h4><span id='recommended'>Recommended for you</span> <a href="" id='all-recommended'>See All Items</a></h4>
                        </div>
                        <div className='product-cont-wrapper'>
                            <div className='product-cont d-flex flex-wrap'>
                                <ProdDealCard />
                                <ProdDealCard />
                                <ProdDealCard />
                                <ProdDealCard />
                                <ProdDealCard />
                                {/* <ProdDealCard /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="barner1">
                    <img src={barners.barner1} alt="" />
                </div>
                <div className="barner2">
                    <a className='img-cont'><img src={barners.barnerii} alt="" /></a>
                    <a className='img-cont'><img src={barners.barneriii} alt="" /></a>
                </div>
                <div className="deals-wrapper">
                        <Dealscard />
                </div>
            </section>
        </main>
    </>
  )
}

export default Home
