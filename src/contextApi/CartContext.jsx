import React, { createContext, useState } from 'react'
export const cartProductData=createContext()
const CartContext = ({children}) => {
    const[cartProducts,setCartProducts]=useState([])
  return (
    <div>
       <cartProductData.Provider value={{cartProducts,setCartProducts}}>
              {children}
       </cartProductData.Provider>
    </div>
  )
}

export default CartContext