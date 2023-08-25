import { createContext, useState } from "react";

export const CartContext= createContext({})

export default function CartContextProvider({children}){
    const [cartProducts, setcartProducts] = useState([]);
    function addProduct(productId){
        setcartProducts(prev => [...prev,productId])
       
    }
    return(
        <CartContext.Provider value={{cartProducts,setcartProducts,addProduct}}>
            {children}
        </CartContext.Provider>
    )
}
