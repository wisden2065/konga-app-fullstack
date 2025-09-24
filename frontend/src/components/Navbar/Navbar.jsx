
import React, { useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faChevronDown, faBars, faQuestion, faSearch, faXmark, faL, faEyeSlash, faEye, faUser, faNoteSticky, faCommentDots, faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import {ProductContext} from '../../context/ProductContext'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { UserContext } from '../../context/UserContext'
import {ClipLoader} from 'react-spinners'
import { getItem, setItem } from '../../utils/localStorage'
import { counter } from '@fortawesome/fontawesome-svg-core'
import DropDownButtons from './DropDownButtons'

const Navbar = () => {
  
    const [loadingSpinner, setLoadingSpinner] = useState(false)
    const {activeProdCat, setActiveProdCat} = useContext(ProductContext)

    // state to hide/show password on login form
    const [passwordHidden, setPasswordHidden] = useState(true)
    const { cartItems, addToCart, removeFromCart, prodCount } = useContext(ProductContext)

    // Get loggedIn state from context
    const {loggedIn, setLoggedIn, userData, setUserData} = useContext(UserContext)
    // console.log(userData)

    const navigate = useNavigate()

    // ref to container where the text is display on hover of the nav links
    const sideDisplayText = useRef()
    // ref to container where the text is display on hover of the nav links
    const sideDisplayText2 = useRef()

    // ref to the container where the image will be displayed  on hover
    const imgCont = useRef(null)

    // ref to menu all category
    const allCatBtn = useRef(null)
    // ref to all links in second Navbar
    const drop = useRef([])
    const dropdown = useRef() 
    const closeDown = useRef()
    // ref to all the side bar p elements in dropdown
    let dropDownSideP = useRef([])

    // ref to inputs on login page 
    const loginInputs = useRef([]) 



    // state to hold the value of cart items gotten from localStorage
    // using the defined setter and getter in utils
    const [cart, setCart] = useState(()=>{
                                        let arr = getItem('cart_list') || [];
                                        return arr;
                                    })
    // update state for cart counter in navbar & localstorage when cartItems changes
    useEffect(()=>{
        setItem('cart_list', cart)
        setCart(cartItems);
    }, [cartItems])  
 
    const toggleDropDown = ()=>{
       console.log(dropdown.current)
       console.log(dropdown.current.classList)
       dropdown.current.classList.toggle('show')
    } 
    const closeDropDown =()=>{
        dropdown.current.classList.remove('show')
        setLoadingSpinner(false)
        setPasswordErrorMsg('')
        setEmailErrorMsg('')
        setServerResErr(false)
        // remove data from inputs 
        loginInputs.current.map(e=>e.value = '')
    }

    // get all the nav items
    const navItems = useRef([]);
    // console.log(navItems.current)


   
    //stores dropdownData for product categories to be populated on mount of navbar
    let dropDownData = {};  

    // load data from dropDown.json as soon as navbar mounts & add mouseenter eve
    // nt listener

    // *****************REFACTORED ****************\\
    useEffect(()=>{
            async function fetchPrdData(){
                try{
                    const promise = await fetch('/dropDown.json');
                    if(!promise.ok){
                        throw new Error('Invalid path or url, could not load data for product categories')
                    }
                    else{
                        const data = await promise.json()
                        dropDownData = data;
                    }
                }
                catch(err){
                    console.error(err.message)
                }
            } 
            fetchPrdData()

            // add an event listener to each of the ref elements in navbar
            navItems.current.forEach((element)=>{
              
            })
            // add a hover listener to all categories
            // allCatBtn.current.onmouseenter =(e)=>(handleMouseEnter(e))

            // add event listener to the side bar p elements
            // if(dropDownSideP !== null){
            // dropDownSideP.current.forEach((elem)=>{
            //     // handle display when All categories is hovered
            //     elem.onmouseenter= ()=> (handleMouseEnter(elem));
            // })
        //    }
        //    if(allCatBtn !== null){
                // allCatBtn.current.onmouseenter = ()=> (handleMenu('computers'))

                // mouseenter event to all links in second navbar
                // drop.current.forEach((d)=>{
                //     d.onmouseenter = (e)=>(handleMouseEnter(e))
                // })
            // }
        
    }, [])
   
    // handle mouseEnter event
    const handleMouseEnter =(ele)=>{
        if(ele.target?.className.includes('inner')){
            console.log('Navbar hovered')
            // generate and insert html for each hovered p with the class name
            let className = ele.target.classList[0];
            sideDisplayText2.current.innerHTML = generateContent(className)
            // sideDisplayText.current.dangerouslySetInnerHTML = {__html: generateContent(className)}
        }
        else{
            
            console.log('In Handle mouse enter')

            dropDownSideP.current.forEach(p=>{
                p.classList.remove('selected')
            })
            ele.classList.add('selected')
            // generate and insert html for each hovered p with the class name
            let className = ele.classList[0];
            console.log(ele.className)
            console.log(ele.classList)
            console.log(className)
            sideDisplayText.current.innerHTML = generateContent(className)
            // sideDisplayText.current.dangerouslySetInnerHTML = {__html: generateContent(className)}
            }

       
    }
  
    // state to track the current image
    const [currentDropDownImg2, setCurrentDropDownImg2] = useState(null)
    const [currentDropDownImg, setCurrentDropDownImg] = useState(null)
    const [currentClassName,setCurrentClassName] = useState(null)

    // state for login form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // state for form error
    const [error, setError] = useState(false)
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('')
    const [emailErrorMsg, setEmailErrorMsg] = useState('')
    const [serverResponse, setServerResponse] = useState('')
    const [serverResErr, setServerResErr] = useState(false)

    const handleMenu =(c)=>{
        let className = c;
        sideDisplayText.current.innerHTML = generateContent(className)
    }
    const generateContent=(c)=>{
        console.log('In generate content')
        // where c is the className for the current hovered item
        let html = '';
            setCurrentClassName(c);
            dropDownData[c]?.items.forEach((i)=>{
                html += `<div class='div'>
                            <h4 style={{color:'#000'}}>${i.title}</h4>`
                                i.details.forEach((detail)=>{
                                    html += `<p class="para">${detail}</p>`
                                })
                            html +=`</div>`
                    
            })
            if(dropDownData[c]?.image){

                setCurrentDropDownImg(`/${dropDownData[c].image}`)
                setCurrentDropDownImg2(`/${dropDownData[c].image}`)

                if(currentDropDownImg){
                    console.log('Current dropDown image is true')
                    // imgCont.current.innerHTML = currentDropDownImg
                }
                else{
                    console.log('current dropDown image is false')
                }
                // imgCont.current.innerHTML = img
                // console.log(imgCont.current)
            }
            else{
                console.log('NOO')
            }
        return html;
    }
   
    // handle form submission
    const handleFormSubmit  = (e)=>{
        e.preventDefault();
        try{
            if(email.includes('@gmail.com')|| email.includes('@yahoo.com') ){
                setEmailErrorMsg('')
            }
            else{
                setEmailErrorMsg('Invalid Email address')
            }
            if(password.length >= 5){
                // call authentication API 
                setError(false)
                setPasswordErrorMsg('')
                setLoadingSpinner(true)
                loginUser()
                
                
            }
            else if(password.length < 5){
                setError(true)
                setPasswordErrorMsg('Password must be at least 5 characters')
                setLoadingSpinner(false)
            }

        }
        catch(error){
            console.log(error.message)
        }
    }
    // function to call login or signup
    const loginUser = async ()=>{
        try {
            const res = await fetch('http://localhost:8000/auth/login',
                {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify({email, password}),
                    credentials:'include'  //if this is omitted the browser will ignore the cookies sent by the server side in the res
                    // mode:'no-cors'
                }) 

            if(!res.ok){
                throw new Error('Invalid Credentials') 

            }
            const data = await res.json()
            setLoadingSpinner(false)
            console.log(data)
            if(data.status==='failed'){
                setServerResErr(true)
                setServerResponse(data.reason)
            }
            if(data.status==='success'){
                console.log(data.status)
                setServerResErr(false)
                setLoggedIn(true)
                setUserData(data.userObj)
                closeDropDown()
                

            }
        } catch (error) {
            // console.log(error)
        }
    }

    // state to hold the page
    let page = 0;
    



    // DATA for last Navbar with dropDown 
    const items = [
        {
            name:"All category", 
            path:'',
            icon: (<FontAwesomeIcon icon={faBars} />),
            class:'inner all-cat',
                        children: [
                [
                    {
                        name:"Computers and Accessories",
                        class:"computers selected"
                    },
                    {
                        name:"Phones and Tablet",
                        class:"phones"
                    },
                    {
                        name:"Electronics",
                        class:"electronics"
                    },
                    {
                        name:"Phones and Tablet",
                        class:"phones"
                    },
                    {
                        name:"Konga Fashion",
                        class:"fashion"
                    },
                    {
                        name:"Home and Kitchen",
                        class:"kitchen"
                    },
                    {
                        name:"Baby, kids and Toys",
                        class:"kids"
                    },
                    {
                        name:"Beauty, Health & Personal Care",
                        class:"beauty"
                    },
                    {
                        name:"Drinks and Groceries",
                        class:"drinks"
                    },
                ]

            ]
        },
        {
            name:"Computer and Accessories", 
            path:'',
            class:'computers inner drp',
        },
        {
            name:"Phones and tablets", 
            path:'',
            class:'phones inner drp',
        },
        {
            name:"Electronics", 
            path:'',
            class:'fashion inner drp',
        },
        {
            name:"Konga fashion", 
            path:'',
            class:'kitchen inner drp',
        },
        {
            name:"Home and Kitchen", 
            path:'',
            class:'kids inner drp',
        },
        {
            name:"Baby, Kids and Toys", 
            path:'',
            class:'kids inner drp',
        },
        {
            name:"Beauty, Health and Personal Care", 
            path:'',
            class:'beauty inner drp',
            
        },
]
  
  return (
        // (!location.pathname == '/account/signup')&&
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
                        <input  type="text" placeholder="Search for products, brands and Categories..." className="place" />
                        <div className="searchCont">
                            <FontAwesomeIcon  icon={faSearch} />
                        </div>
                    </div>
                    
                    <a href="" className="help">
                        <span className='border border-rounded d-flex justify-content-center align-items-center'>
                            <FontAwesomeIcon icon={faQuestion} style={{color:'white'}} />
                        </span>
                        Help 
                        <FontAwesomeIcon icon={faChevronDown} style={{color:'white'}} />
                    </a>
                    {
                        !loggedIn?
                        <a href="#" onClick={()=>{toggleDropDown()}}>Login / <br /> Signup</a>
                        :
                        <a href="" className='user-profile-cont gap-2'>Hi, {userData?.name.slice(0,1).toUpperCase()+userData?.name.slice(1)} <span className='border border-rounded d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={faUser} /></span>
                            {/* show on hover when signed in */}
                            <div className='user-profile bg-primary'>
                                <div id='inner' className='d-flex align-items-center justify-content-between bg-white ' style={{height:'56px',}}>
                                    <div id='profilePic' className='rounded rounded-circle bg-black d-flex align-items-center justify-content-center'>
                                        <FontAwesomeIcon icon={faUser} />
                                    </div> 
                                    {userData?.name.slice(0,1).toUpperCase()+userData?.name.slice(1)}
                                </div>
                                <div id='inner' className='d-flex align-items-center justify-content-start gap-2 bg-white ' style={{height:'56px',}}>
                                    <FontAwesomeIcon icon={faNoteSticky} />
                                    Your Orders 
                                </div>
                                <div id='inner' className='d-flex align-items-center justify-content-start gap-2  bg-white ' style={{height:'56px',}}>
                                    <FontAwesomeIcon icon={faCommentDots} />
                                    Your History 
                                </div>
                                <div id='inner' className='d-flex align-items-center justify-content-start gap-2  bg-white ' style={{height:'56px',}}>
                                    <FontAwesomeIcon icon={faDoorOpen} />
                                    Logout 
                                </div>
                            </div>
                        </a>  
                    }
                    <div id="cart-cont" onClick={()=>navigate('/cart-items')}>
                    
                        <FontAwesomeIcon icon={faCartShopping} className='icon'/>
                        My <br />Cart
                        <span id="span">{cart.length}</span>
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
                {/* <!-- dropdown for signup on click --> */}
                <div ref={dropdown} className="drop-down-wrapper" id="drop">
                    <div className="drop-down-container">
                        <div className="drop-down">
                            <div id="login">
                                    <h2 style={{fontSize:'10px,', fontWeight:'600'}}>Login</h2>
                                <span id="closeBtn" style={{cursor:'pointer'}} onClick={()=>{closeDropDown()}}>
                                    <FontAwesomeIcon icon={faXmark}  />Close
                                </span>
                            </div>
                           
                        </div>
                        {
                        serverResErr&&
                            <div class="alert alert-danger  text-center" role="alert">
                                    {serverResponse}!
                            </div>
                        }
                        <div id="form-container">
                            <form action="" onSubmit={handleFormSubmit}>
                                <div className="">
                                    <label for="email">Email Address or Phone Number</label>
                                    <input className={`w-100 mh-100 py-2 border border-black  ${error?'border-danger':'border-black'}`} onChange={(e)=>(setEmail(e.target.value))} type="text" placeholder="Enter email address or phone number" required style={{textIndent:'10px'}} ref={(e)=>loginInputs.current[0] = e} />
                                </div>
                                <span className='text-danger'>{error? emailErrorMsg:''}</span>
                                <br />
                                <div className="w-100">
                                    <label className='d-flex justify-content-between' for="password">Password <a href='' className='text-decoration-underline'>Forgot Password?</a></label>
                                    <div className={`position-relative border ${error?"border-danger":"border-black"}`}>
                                        <input className={`w-100 mh-100 py-2 border-none`} onChange={(e)=>(setPassword(e.target.value))} type={passwordHidden?"password":"text"}  placeholder="Enter Password" required style={{textIndent:'10px'}} ref={(e)=>loginInputs.current[1] = e} />
                                        <FontAwesomeIcon onClick={()=>setPasswordHidden(!passwordHidden)} icon={passwordHidden?faEyeSlash:faEye} role='button' aria-label='Toggle password visibility' className='position-absolute top-50 end-0 translate-middle-y mx-2' />
                                    </div>
                                </div> 
                                <span className='text-danger'>{error? passwordErrorMsg:''}</span>
                                <br />  
                                <div className="">
                                    <button class={`w-100 btn btn-secondary d-flex align-items-center justify-content-center gap-2`} disabled={loadingSpinner} type="submit">
                                        Login <ClipLoader size={18} loading={loadingSpinner} />
                                    </button>
                                </div>
                                    <button onClick={()=>{setError(false); setServerResErr(false)}} disabled={loadingSpinner} className='btn mt-2 bg-dark-subtle' type="reset">Reset</button>
                                <div id="hr">
                                    <hr />
                                    <span className="circle">OR</span>
                                </div>
                                <div id="btn-link">
                                    <span><input className='' type="button" value="Login with Google" /></span>
                                    
                                    <span><input className='' type="button" value="Login with Apple" /></span>
                                </div>

                            </form>
                           
                        </div>
                        <div className='text-center'>
                            Don't have an account?  <NavLink onClick={()=>closeDropDown()} to='/account/signup' className='text-decoration-underline'>Signup</NavLink>
                        </div>
                    </div>
                </div>

                    {/* // *****************REFACTORED ****************\\ */}
                    {/* <div className="inner all-cat"
                                onClick={()=>{
                                    setActiveProdCat('all');
                                console.log("Current category:",activeProdCat)
                            }}
                            ref={allCatBtn}
                    >
                    All category
                    <FontAwesomeIcon icon={faBars} />
                    <div className="dropDown-wrapper">
                        <div className="dropDown">
                            <div className="items left">
                                <p ref={(ele)=>(dropDownSideP.current[0] = ele)} className="computers selected">Computers and Accessories</p>
                                <p ref={(ele)=>(dropDownSideP.current[1] = ele)} className="phones">Phones and Tablet</p>
                                <p ref={(ele)=>(dropDownSideP.current[2] = ele)} className="electronics">Electronics</p>
                                <p ref={(ele)=>(dropDownSideP.current[3] = ele)} className="fashion">Konga Fashion</p>
                                <p ref={(ele)=>(dropDownSideP.current[4] = ele)} className="kitchen">Home and Kitchen</p>
                                <p ref={(ele)=>(dropDownSideP.current[5] = ele)} className="kids">Baby, kids and Toys</p>
                                <p ref={(ele)=>(dropDownSideP.current[6] = ele)} className="beauty">Beauty, Health & Personal Care</p>
                                <p ref={(ele)=>(dropDownSideP.current[7] = ele)} className="drinks">Drinks and Groceries</p>
                            </div>
                            <div class="items right">
                                <div ref={sideDisplayText} class="first" ></div>
                                <div ref={imgCont} class="second">
                                    <img id='img' src={currentDropDownImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='computers inner drp' 
                        onClick={()=>{
                            setActiveProdCat('laptops');
                            console.log("Current category:",activeProdCat)
                        }}
                        ref={(e)=>drop.current[0]=e}
                    >
                        Computer and Accessories
                        <div className="navDrop-wrapper">
                            <div className="navDrop">
                                <div className="cont">
                                    <div ref={sideDisplayText2} className="first"></div>
                                    <div className="second">
                                        <img src={currentDropDownImg2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div href="" className='phones inner drp'
                          onClick={()=>{
                            setActiveProdCat('phones');
                            console.log(activeProdCat)
                        }}

                        ref={(e)=>drop.current[1]=e}
                    >
                        Phones and tablets
                    </div>
                    <div href='' className="electronics inner drp"
                          onClick={()=>{
                            setActiveProdCat('electronics');
                            console.log(activeProdCat)
                        }}

                        ref={(e)=>drop.current[2]=e}
                    >
                        Electronics
                    </div>
                    <div href='' className="fashion inner drp"
                          onClick={()=>{
                            setActiveProdCat('fashion');
                            console.log(activeProdCat)
                        }}

                        ref={(e)=>drop.current[3]=e}
                    >
                        Konga fashion
                    </div>
                    <div href='' className="kitchen inner drp"
                          onClick={()=>{
                            setActiveProdCat('kitchen');
                            console.log(activeProdCat)
                        }}
                        ref={(e)=>drop.current[4]=e}
                    >
                        Home and Kitchen
                    </div>
                    <div href='' className="kids inner drp"
                          onClick={()=>{
                            setActiveProdCat('kids');
                            console.log(activeProdCat)
                        }}
                        ref={(e)=>drop.current[5]=e}
                    >
                        Baby, Kids and Toys
                    </div>
                    <div href='' className="beauty inner drp"
                          onClick={()=>{
                            setActiveProdCat('health');
                            console.log(activeProdCat)
                        }}

                        ref={(e)=>drop.current[6]=e}
                    >
                        Beauty, Health and Personal Care
                    </div> */}
                    <DropDownButtons items={items} />
                 {
                       <div className="inputBox">
                        < input type="text" placeholder='Search for Products, Brands, Categories' name="" id="" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#c4c4c4" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div> 
                 }

                    {/* REPLACED WITH */}
                    
                    
                    
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
