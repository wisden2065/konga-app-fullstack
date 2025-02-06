import { faChevronRight, faL, faMinus, faNairaSign, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProductDisplay.css'
import Product from '../../components/Product/Product'
import { useContext, useEffect, useRef, useState } from 'react'
import ProductContextProvider, { ProductContext } from '../../context/ProductContext'
import topBanner from '../../assets/images/productsWebBanner.webp'
// import { product_list } from '../../assets/images/products'
import {Helmet} from "react-helmet";
import { getProducts } from '../../assets/images/products.js'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import loading from '../../../src/assets/images/loading.gif'



const Products = ({category}) => {
    // holds the state of all the displayed checkbox-if checked or not 
    const [checked, setChecked] = useState([])
    
    // holds a unique set of current filtered brands dynamically generated by performBrandFiltering function
    const [currentFilteredBrands, setCurrentFilteredBrands] = useState(new Set())

    // checks if any of the checkbox is checked or not
    const [isActiveCheckBox, setActiveCheckBox] = useState(false);

    // state to sort products by relevance
    const [sortState, setSortState] = useState('relevance')


    // holds and sets the state and value of the current product category
    const { activeProdCat, setActiveProdCat } = useContext(ProductContext)

    // hold the values of all product list to be rendered in the this component
    // const {product_list} = useContext(ProductContext);   // commented this to implement loading state --uncomment 


    // loading states
    const [isLoading, setIsLoading] = useState(true)

    const [product_list, setProductList] = useState([])

    useEffect(()=>{
        getProducts()
            .then((prod)=>{
                setProductList(prod)
                setIsLoading(false)
            })
        
    }, [])

    const performBrandFiltering=()=>{

        const filteredBrands = new Set();
        product_list.map((prod)=>{
            if(prod.Product_category == activeProdCat || activeProdCat == 'all'){
                filteredBrands.add(prod.Product_Brand)
            }
        setCurrentFilteredBrands(filteredBrands)
    })}

    //::function invocation to dynamically update the available brands for a category
    // avoid product brand duplicate
    // performBrandFiltering() 
    
    useEffect(()=>{
        performBrandFiltering() //::function invocation to dynamically update the available brands for a category
        // isAnyChecked()
    }, [activeProdCat, product_list])

    // Handler for click on the dynamically updated product brands on click of any of the checkboxes in brand categories
    const handleChange =(brand)=>{
        // remove target checkbox from our array of checked list if target is already in the array
        if(checked.includes(brand)){
            setChecked(checked.filter(c=> c !== brand))
        }
        else{
            setChecked([...checked, brand])
        }
        // anyActiveCheckbox()
    }
    // find if there is any active checkbox
   useEffect(()=>{
        if(checked.length == 0){
            setActiveCheckBox(false)
        }
        else if(checked.length > 0){
            setActiveCheckBox(true)
        }
    }, [checked])

    const findBrand =(brand)=>{
    //   only do this when the input search is not empty
        if(brand != ''){
            let brandsArray = Array.from(currentFilteredBrands);
            let filter = brandsArray.filter((b)=>{
                return b.toLowerCase().includes(brand.toLowerCase())
            })
            console.log(filter)
            setCurrentFilteredBrands(filter)
        }
        else{
            performBrandFiltering()
        }
    }
  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name='title' content='Prodcut Display - Apple'/>
                <meta name='description' content='This page display all of the Apple IOs dat mdjfdkfdfd'/>
                <title>Product Display - Apple</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className='all-products-cont'>
            <div className='current-prod-active'>
                <div id="innerPhone">
                    <a>Home <FontAwesomeIcon icon={faChevronRight} style={{fontSize: 8 + 'px'}} /> <p  className='active-cat'>Phones and Tablets</p></a>
                    <span id='filter'>1 - 4 of <span>1000 results</span></span>
                </div>
                <div className='current-category'>
                    <h1>Phones And Tablets</h1>
                    <div id="cont">
                        <p>Sort By:</p>
                        <ul>
                            <li className={sortState=='relevance'? "active-sort": ''}
                                onClick={()=>{setSortState('relevance')}}
                            >Relevance</li>
                            <li id="remove" className={sortState=='high'? "active-sort": ''}
                                onClick={()=>{setSortState('high')}}
                            >Price - High To Low</li>
                            <li className={sortState=='low'? "active-sort": ''}
                                onClick={()=>{setSortState('low')}}
                            >Price - Low To High</li>
                        </ul>
                    </div>
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
                                <input type="checkbox" name="" id="" />
                                <p>Under N2000</p>
                            </div>
                            <div className="inputP">
                                <input type="checkbox" name="" id="" />
                                <p>N2000 - N5000</p>
                            </div>
                            <div className="inputP">
                                <input type="checkbox" name="" id="" />
                                <p>N5000 - N10000</p>
                            </div>
                            <div className="inputP">
                                <input type="checkbox" name="" id="" />
                                <p>N10000 - N20000</p>
                            </div>
                            <div className="inputP">
                                <input type="checkbox" name="" id="" />
                                <p>N20000 - N40000</p>
                            </div>
                            <div className="inputP">
                                <input type="checkbox" name="" id="" />
                                <p>Above N40000</p>
                            </div>
                            <div className='price-filter'>
                                <h4>Custom Price Range</h4>
                                <form action="">
                                    <div>
                                        <FontAwesomeIcon icon={faNairaSign} />
                                        <input type="text" placeholder='Min' name="" id="" />
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faNairaSign} />
                                        <input type="text" placeholder='Max' name="" id="" />
                                    </div>
                                    <button>GO</button>
                                </form>
                            </div>
                            <div className="browseFlex">
                            <h3>Brand</h3>
                            <span><FontAwesomeIcon icon={faMinus} style={{color: "#050505"}} /></span>
                            {/* <span><i className="fa-solid fa-minus" style="color: #050505;"></i></span> */}
                            </div>
                            <div className="searchBrand-cont">
                                <input type="text" onChange={(e)=>{findBrand(e.target.value)}} placeholder='Search Brand...' />
                                <FontAwesomeIcon icon={faSearch} style={{color: '#b1acaf'}} />
                            </div>
                            <div className='sort-checkbox'>
                                {
                                    
                                    product_list.length == 0?
                                    Array(2).fill(0).map((_, i)=>{

                                        return <div key={i}>
                                                    <span><Skeleton width={30+'%'} count={5} /></span>
                                                 </div>
                                    })
                                    :
                                    Array.from(currentFilteredBrands).map((brand,index)=>{
                                        // if(product_list.length > 0){
                                        //         console.log('empty')
                                        // }
                                        // console.log(Array.from(currentFilteredBrands).length)
                                        
                                             return <div className="inputP" key={index}>
                                                        <input type="checkbox" value={brand} name="chk" key={index} checked={checked.includes(brand)}
                                                            onChange={()=>{handleChange(brand)}}
                                                        />
                                                        <p>{brand}</p>
                                                   </div>

                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div id="main">
                    <div id="top">
                        <img src={topBanner} alt="" />
                    </div>
                    <div id="productCont">
                            {product_list.length === 0?
                                Array(10)
                                .fill(0).map((_, i)=>{
                                    // return <Product key={i} name={<Skeleton/>} price={<Skeleton/>}  image={<Skeleton />} id={<Skeleton/>}/>
                                    return  <div key={i}>
                                                <div>
                                                    <div className="prodImg">
                                                        {/* {<Skeleton />} */}
                                                    </div>
                                                    <div className='prodDesc'>
                                                        <p>{<Skeleton />}</p>
                                                        <div className="prodPrice">
                                                            <h3>{<Skeleton />}</h3>
                                                            <p>{<Skeleton />}</p>
                                                        </div>
                                                        <p className="soldBy">{<Skeleton />}</p>
                                                        <div className="ratingCont">
                                                            <div>
                                                                <FontAwesomeIcon icon={<Skeleton />} style={{color: '#dedede'}} />
                                                                <FontAwesomeIcon icon={<Skeleton />} style={{color: '#dedede'}} />
                                                                <FontAwesomeIcon icon={<Skeleton />} style={{color: '#dedede'}} />
                                                                <FontAwesomeIcon icon={<Skeleton />} style={{color: '#dedede'}} />
                                                                <FontAwesomeIcon icon={<Skeleton />} style={{color: '#dedede'}} />
                                                            </div>
                                                            <p>{<Skeleton />}</p>
                                                        </div>
                                                        <div className="prodBtn">{<Skeleton />}</div>
                                                    </div>
                                                </div>  
                                            </div>
                                })
                                :
                                product_list.map((prod, index)=>{
                                    if(isActiveCheckBox){
                                            // const brand = [...checked]
                                            let brands
                                            if( activeProdCat == 'all' || activeProdCat == prod.Product_category ){
                                                brands = checked.map((b, i)=>{
                                                    if(prod.Product_Brand==b){
                                                        // render product based on sortState- if sortState filter is off, that is; == 'relevance'
                                                        if(sortState == 'relevance'){
                                                            return <Product key={i} name={prod.Product_Name} price={prod.Product_Price}  image={prod.Product_Image[0]} index={index} id={prod.id} />
                                                        }
                                                        
                                                    }
                                                })
                                            }
                                            return <>{brands}</>
                                    }
                                
                                    else{
                                        if( activeProdCat == 'all' || activeProdCat == prod.Product_category ){
                                            let sortedList;
                                                    if(sortState == 'relevance'){
                                                        console.log('sortState:', sortState)
                                                        return <Product key={index} name={prod.Product_Name} price={prod.Product_Price} category={prod.Product_category} image={prod.Product_Image[0]}  index={index} id={prod.id} />
                                                    }
                                                    else if(sortState == 'high'){
                                                        console.log('sortState:', sortState)
                                                        sortedList = product_list.sort((a, b)=>{
                                                            return a.Product_Price - b.Product_Price
                                                             
                                                        })
                                                        
                                                        sortedList.map((list, i)=>{
                                                            return <Product key={list.id} name={list.Product_Name} price={list.Product_Price} category={list.Product_category} image={list.Product_Image[0]}  index={index} id={list.id} />
                                                        })
                                                      
                                                    }
                                                    // else if(sortState == 'low'){
                                                    //     const newList = product_list.sort((a, b)=>{
                                                           
                                                    //         return  b.Product_Price - a.Product_Price
                                                             
                                                    //     })
                                                    //     newList.map((list, i)=>{
                                                    //         return <Product key={list.id} name={list.Product_Name} price={list.Product_Price} category={list.Product_category} image={list.Product_Image}  index={index} id={list.id} />
                                                    //     })
                                                    // }
                                            }
                                            
                                    }
                                })
                           
                        }
                            
                    </div>
                </div>
            </div>
        </section>
        </div>
    </>

  )
}

export default Products
