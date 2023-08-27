import { createContext, useEffect, useState } from "react";

export const CartContext= createContext({})

export default function CartContextProvider({children}){

    const ls = typeof window !== "undefined" ? window.localStorage : null 

    const [cartProducts, setcartProducts] = useState([]);
    
    
    
    useEffect(() => {
        if(cartProducts?.length > 0 ){
            ls?.setItem('cart', JSON.stringify(cartProducts))
        }
    }, [cartProducts]);
    
    useEffect(() => {
        if(ls && ls.getItem('cart') ){
            setcartProducts(JSON.parse(ls.getItem('cart')))
        }
    }, []);
    
    
    function addProduct(productId){
        setcartProducts(prev => [...prev,productId])
       
    }
    function removeProduct(productId){
        setcartProducts(prev =>{
            const index = prev.indexOf(productId)
            if(index > -1){
                prev.splice(index,1)
                return [...prev]
            }
            return prev
        }
             )
       
    }

    



    return(
        <CartContext.Provider value={{cartProducts,setcartProducts,addProduct,removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}
