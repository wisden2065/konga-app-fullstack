import React, { useContext } from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faHeart, faHeartbeat, faMinus, faNairaSign, faPlus, faRecycle, faShoppingBasket, faTrash } from '@fortawesome/free-solid-svg-icons'
import {faHeart as farHeart} from "@fortawesome/free-regular-svg-icons";
import '../../components/Navbar/Navbar.css'
import { ProductContext } from '../../context/ProductContext'
import Product from '../../components/Product/Product'

function Cart() {

  window.scrollTo(0,0)
  const {cartItems, product_list,setCartItems, decrementCartProd, findProdAndIncrement, removeFromCart} = useContext(ProductContext)

  const incrementCartProd =(id)=>{
        // find prod and increment 
        // debugger;
        // const prod = cartItems.filter((p)=>p.id == id);
        // console.log(prod)
        // setCartItems((preCart)=>[{...preCart, ['count']:preCart.count +1}])
        setCartItems((prevCart)=>
              prevCart.map(c=>c.id == id? {...c, count:c.count +1}:c)
        )
  }

  // const decrementCartProd =(id)=>{

  // }
  let filterCartProd;
  filterCartProd = cartItems?.map(item=> {
    let proMatch = product_list.filter((prod, index)=> prod.id == item.id) 
    proMatch.forEach((prod)=>{
      prod.count = item.count
    })
    return proMatch
  })
   
     
  return (
    <div>
      <div className='current-prod-active position-relative'>
        <div className='' id="innerPhone" >
            <a className='d-flex align-items-center gap-2 text-center text-body-tertiary'>Home <FontAwesomeIcon icon={faChevronRight} style={{fontSize: 8 + 'px'}} /> <a  className='active-cat'>Cart Items</a></a>
        </div>
      </div>
      {
        !cartItems.length == 0?
     
      <div className='container  mt-3'>
        <div className='row gap-4 '>
          <div className='col-sm-6 border rounded bg-white' style={{height:'max-content'}}>
              <ul className='d-block cart-list-cont'>
                {
                    
                      filterCartProd.map((cart)=>{
                        console.log(filterCartProd)
                        return <>
                                  <li className='d-flex justify-content-between cart-item' >
                                    <div className='d-flex gap-2'>
                                      <img src={cart[0].Product_Image[0]} alt="" />
                                      <div className='prod-desc text-align-start'>
                                        <h4>{cart[0].Product_Name}</h4>
                                        <p><FontAwesomeIcon icon={faNairaSign} />{cart[0].Product_Price}</p>
                                      </div>
                                    </div>
                                    <div className='position-relative' style={{width:'120px'}}>
                                      <div className='position-absolute d-flex gap-4' style={{height:'15px', width:'50px', top:0, right:0}} >
                                        <FontAwesomeIcon style={{cursor:'pointer'}} icon={farHeart} />
                                        <FontAwesomeIcon onClick={()=>removeFromCart(cart[0].id)} style={{cursor:'pointer', color:'darkred'}} icon={faTrash} />
                                      </div>
                                      <div className='position-absolute' style={{bottom:'10px', right:0, }}>
                                        <span className='bg-body-secondary rounded p-2' style={{cursor:'pointer'}} onClick={()=>decrementCartProd(cart[0].id)}><FontAwesomeIcon icon={faMinus} /></span><span className='border rounded ms-1 me-1' style={{padding:'2px 15px', margin:''}}>{cart[0].count}</span><span onClick={()=>{incrementCartProd(cart[0].id)}} className='bg-body-secondary rounded p-2' style={{height:'30px', width:'30px',cursor:'pointer'}}><FontAwesomeIcon className='cursor-pointer' icon={faPlus} /></span>
                                      </div> 
                                    </div>
                                  </li>
                                  <hr />
                               </>
                               
                      })
                    }
               
              </ul>
          </div>
          <div className='col-sm-5 border rounded bg-white' style={{padding:'15px'}}> 
                     <h4>Order Summary</h4>
                    <hr />
                    <div className='d-flex justify-content-between align-items-center'>
                      <p>Items Total Price</p>
                      <span><FontAwesomeIcon icon={faNairaSign} />1234</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p>Delivery Charge</p>
                      <span>FREE</span>
                    </div>
                    <hr />
                    <form action="" className='text-center'>
                      <input className='rounded border p-1 me-2'placeholder='Enter Coupon No.' type="text" />
                      <input className='bg-secondary rounded'  type="button" value='Apply Code' />
                    </form>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p>Sub Total</p>
                      <span><FontAwesomeIcon icon={faNairaSign} />1234</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p>Total</p>
                      <span className='text-danger'><FontAwesomeIcon icon={faNairaSign} />1234</span>
                    </div>
                    <button className='d-block bg-primary rounded-pill text-light p-2' style={{width:'100%'}}>Proceed to Checkout</button> <br />
                    <button className='d-block bg-body-secondary rounded-pill text-dark p-2' style={{width:'100%'}}>Continue to Shopping</button>
              {/* </div> */}
          </div>
        </div>
      </div>
      :
      
      <div className='d-flex justify-content-center align-items-center mt-4'>
        <div className='bg-white px-4 no-cart-item text-center' >
            <FontAwesomeIcon style={{color:'tomato', fontSize:'30px'}} icon={faShoppingBasket} />
            <h3>Your Cart is empty.</h3>
            <p>You have not added any Products yet.</p>
        </div>
      </div>
       }
    </div>
  )
}

export default Cart
