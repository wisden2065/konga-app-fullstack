import React,{ createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import { product_list } from "../assets/images/products";
import { faChevronLeft, faChevronRight, faPersonWalkingDashedLineArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getItem, setItem } from "../utils/localStorage";


export const ProductContext = createContext(null)



const ProductContextProvider = (props)=>{

    // cartItems now sate gotten from localStorage of empty if not exist
    const [cartItems, setCartItems] = useState(()=>{
        const cartVal = getItem('cart_list') || [];
        return cartVal;
    });
    const [activeProdCat, setActiveProdCat] = useState('all')
    // state for number of items in cart

    // ass soon as state changes and component mounts, set Cart list to local Storage
    useEffect(()=>{
                setItem('cart_list', cartItems)
            }, [cartItems])

    // state for current prod we are viewing its details
    const [itemDesc, setItemDesc] = useState({})
    // state for product quantity on view of a particular product
    // ********
    const [ currentProd, setCurrentProd ] = useState({
                                                id: itemDesc[0]?.['id'],
                                                count: 1
                                            })

    const addToCart =(itemId, count)=>{
        // check if prod already in cart
        if(count){
            setCartItems((prev)=>[...prev, {id:itemId, count:count} ])
        }
        console.log(cartItems)
        console.log(cartItems.filter((c,i)=>c.id ==itemId))
        if(cartItems.filter((c,i)=>c.id ==itemId).length == 0){
            
            setCartItems((prev)=>[...prev, {id:itemId, count:1}])
            // increment the prod count
        }
        else{
            // check if in cart already and increment prod
            const index = cartItems.findIndex((c)=>c.id== itemId)
            const prod = cartItems.filter(p=>p.id == itemId)
            prod[0].count ++
            setCartItems((prev)=> ([...prev]))
        }      

    }
    const removeFromCart =(itemId)=>{
        setCartItems((prevCart)=>
            prevCart.filter(c=>c.id !== itemId)
        )
   
    }
    // ********
    const seeProdDesc=(id)=>{
        const prodInProdDesc = product_list.filter((prod)=>{
            return prod.id == id})
        setItemDesc(prodInProdDesc)
    }
  
    const pushToCartBasket =(id, count)=>{
        if(!cartItems[id]){
            addToCart(id, count)
        }
        else{
            // console.log('Product already exist in cart')
        }
    }
   const findProdAndIncrement = (id)=>{
    debugger;
        // console.log('In FindProdAnd Increment Function')
        // increase the number of item for this current product in description page
        setCurrentProd((preProd)=>({...preProd, ['count']:preProd.count +1}))
        // console.log('Prod count incremented')

        const prod = cartItems.filter(c=>c.id == id);
        const prodIndex = cartItems.findIndex(c=>c.id == id);
        if(prod.id == undefined){
            // If product is not yet in cart. increment and push
            // console.log('Prod not yet in cart')
            setCartItems((prevC)=>[...prevC, itemDesc])
        }
        else{
            // increment count if prod already in cart
            setCartItems((prevC)=>[...prevC, prevC[prodIndex].count = currentProd.count])
        }
        // console.log('updated count with setCartItem')
 
    }
    // const incrementCartProd =(id)=>{
    //     // find prod and increment 
    //     const prod = cartItems.filter((p)=>p.id == id);
    //     console.log(prod)
    //     setCartItems((preCart)=>[{...preCart, ['count']:preCart.count +1}])
    // }
    const decrementCartProd =(id)=>{
        // find prod and increment 

        const prod = cartItems.filter((p)=>p.id == id);
        console.log(prod)
        if(prod[0].count == 1){
            removeFromCart(id)
        }
        // setCartItems((prevCart)=>[...prevCart, ...prod, prod[0].count =prod.count+1])
        setCartItems((prevCart)=>
            prevCart.map(c=>c.id === id?{...c, count:c.count - 1}: c)
        )
    }

    const findProdAndDecrement = (id)=>{
        setCurrentProd((preProd)=>({...preProd, ['count']:preProd['count'] -1}));
        if(cartItems[id]){
            // console.log('Product found in cart with id', id)
          

        }
        else{
            // console.log('Product not yet in cart')
              setCartItems((prev)=>{
                return {...prev, currentProd}
            })
           
        }
    }

 
    
    // const ProductContext = useContext(null);
    const contextValue = {
        product_list,
        cartItems,
        setCartItems,
        addToCart, 
        removeFromCart,
        activeProdCat,
        setActiveProdCat,
        seeProdDesc,
        itemDesc, 
        currentProd, 
        setCurrentProd,
        pushToCartBasket, 
        findProdAndIncrement, 
        findProdAndDecrement,
        // incrementCartProd, 
        decrementCartProd
    }

    return <ProductContext.Provider value={contextValue}>
                {props.children}
           </ProductContext.Provider>
}

export default ProductContextProvider