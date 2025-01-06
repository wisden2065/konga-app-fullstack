import { createContext, useContext, useState } from "react";
import { product_list } from "../assets/images/products";


export const ProductContext = createContext(null)

const ProductContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState({});
    const [activeProdCat, setActiveProdCat] = useState('all')

    const addToCart =(itemId)=>{
        if (!cartItems[itemId]) {
            setCartItems((prev)=>{
                return {...prev, [itemId]:1}
            })
        }
        else{
            setCartItems((prev)=>{
                return {...prev, [itemId]: prev[itemId] +1}
            })
        }
    }

    const removeFromCart =(itemId)=>{
        if (cartItems[itemId]) {
            setCartItems((prev)=>{
                return {...prev, [itemId]:prev[itemId] -1}
            })
        }
   
    }

    // const ProductContext = useContext(null);
    const contextValue = {
        product_list,
        cartItems,
        addToCart, 
        removeFromCart,
        activeProdCat,
        setActiveProdCat
    }

    return <ProductContext.Provider value={contextValue}>
                {props.children}
           </ProductContext.Provider>
}

export default ProductContextProvider