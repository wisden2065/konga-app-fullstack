import React,{ createContext, useContext, useState } from "react";
import { product_list } from "../assets/images/products";
import { faPersonWalkingDashedLineArrowRight } from "@fortawesome/free-solid-svg-icons";


export const ProductContext = createContext(null)
console.log(React)

const ProductContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState({});
    const [activeProdCat, setActiveProdCat] = useState('all')
    const [prodCount, setProdCount] = useState(0)
    const [itemDesc, setItemDesc] = useState({})

    const addToCart =(itemId)=>{
        console.log('In add to cart function')
        console.log('item Id:', itemId)
        if (!cartItems[itemId]) {
            console.log('Item with id', itemId, 'is not in cart')
            setCartItems((prev)=>{
                return {...prev, [itemId]:1}
            })
            setProdCount((prev)=>prev + 1)
            console.log('added item to cart')
        }
        else{
            console.log('Product already in cart basket')
        }
        // else{
        //     console.log('Item with id', itemId, 'is already in cart')
        //     setCartItems((prev)=>{
        //         return {...prev, [itemId]: prev[itemId] +1}
        //     })
            
        //     console.log('Increase count of item')
        // }
        // console.log(cartItems)
    }
    const removeFromCart =(itemId)=>{
        if (cartItems[itemId]) {
            setCartItems((prev)=>{
                return {...prev, [itemId]:prev[itemId] -1}
            })
            console.log('deleted product with id:', itemId)
        }
   
    }
    const seeProdDesc=(id)=>{
        console.log('Product with id', id, 'clicked')
        const prodInProdDesc = product_list.filter((prod)=>{
            return prod.id == id})
        console.log(prodInProdDesc)
        setItemDesc(prodInProdDesc)
    }

    const pushToCartBasket = (id)=>{
        console.log('clicked product with id:', id)
        console.log(cartItems)
        // check if the item is already in cart
        // if yes, don't

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
        prodCount,
        seeProdDesc,
        itemDesc, 
        pushToCartBasket
    }

    return <ProductContext.Provider value={contextValue}>
                {props.children}
           </ProductContext.Provider>
}

export default ProductContextProvider