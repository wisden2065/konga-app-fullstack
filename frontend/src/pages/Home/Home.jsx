import React, { useEffect, useState, useContext } from 'react'
import './Home.css'
import slide1 from '../../assets/images/slider1.webp'
import slide2 from '../../assets/images/slide2.gif'
import slide3 from '../../assets/images/slide3.gif'
import slide4 from '../../assets/images/slide5.webp'
import slide5 from '../../assets/images/slide6.gif'
import slide6  from '../../assets/images/slide7.gif'
import slide7  from '../../assets/images/slide7.gif'
import {images} from '../../assets/images/index'
import { spanImages } from '../../assets/images/index'
import ProdDealCard from '../../components/ProdDealCard/ProdDealCard'
import SponsoredProdCard from '../../components/SponsoredProdCard/SponsoredProdCard'
import CategoryImgCard from '../../components/CategoryImgCard/CategoryImgCard'
import OfficialStores from '../../components/OfficialStores/OfficialStores'
import { barners } from '../../assets/images/index'
import Dealscard from '../../components/DealsCard/Dealscard'
import { ProductContext } from '../../context/ProductContext'

import { ChevronRight } from 'lucide-react'
import { ChevronLeft } from 'lucide-react'

// Import Core Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Core swiper css
import 'swiper/css';
import 'swiper/css/thumbs';


// import swiper modules
import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules'

// Import Swiper modules styles

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { getProducts } from '../../assets/images/products'


const Home = () => {

    

    // state to hold products 
    const [prod, setProd] = useState([])
    const [isLoading, setIsaLoading] = useState(false)

    // get all products from context 
    const { allProducts, setAllProducts } = useContext(ProductContext)
        // fetch products as page mounts 
    useEffect(()=>{
        
        let products = getProducts()
        setIsaLoading(true)
        console.log(products)
        products
            .then((res)=>{
                 console.log(res)
                 setProd(res)
                 
                 setIsaLoading(false)

            })

    }, [])

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
                            navigation= {
                                {
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev'}
                            }

                            pagination={{ clickable: true, type:'bullets', }}
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
                                <img className='slider-img' src={slide7} alt="" />
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
                        <div className='custom-next'>{<ChevronRight />}</div>
                        <div className='custom-prev'>{<ChevronLeft />}</div>
                        
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
                            <div className='product-cont pt-2' >
                                {
                                    isLoading?
                                    Array(6).fill(0).map((prod, i)=>{
                                        return <ProdDealCard key={i} isLoading={isLoading} />
                                    })
                                    :
                                    prod.filter((prod)=>prod.sales === "today").map((prod, i)=>{
                                        return <ProdDealCard isLoading={isLoading} name={prod.Product_Name} img={prod.Product_Image[0]} price={prod.Product_Price} />
                                    })

                                }
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
                                {
                                    isLoading?
                                    Array(7).fill(0).map((a, i)=>{
                                        return <SponsoredProdCard isLoading={isLoading}/>
                                    })
                                    :
                                    prod.filter((prod)=>prod.sales === "sponsored").map((prod, i)=>{
                                        return <SponsoredProdCard name={prod.Product_Name} img={prod.Product_Image[0]} price={prod.Product_Price} />
                                    })
                                }
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
                                {
                                    isLoading?
                                    Array(6).fill(0).map((prod, i)=>{
                                        return <ProdDealCard key={i} isLoading={isLoading} />
                                    })
                                    :
                                    prod.filter((prod)=>prod.sales === "recommended").map((prod, i)=>{
                                        return <ProdDealCard isLoading={isLoading} name={prod.Product_Name} img={prod.Product_Image[0]} price={prod.Product_Price} />
                                    })

                                }
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
