import { createContext, useState } from 'react'

export const CartContext = createContext()

// Creamos el cart provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    const productInIndex = cart.findIndex(item => item.id === product.id)
    if (productInIndex >= 1) {
      const newCart = structuredClone(cart)
      newCart[productInIndex].quantity += 1
      return setCart(newCart)
    }
    const newCart = prevState => ([
      ...prevState,
      { ...product, quantity: 1 }
    ])
    return setCart(newCart)
  }

  const removeFromCart = product => {
    const newCart = cart.filter(item => item.id !== product.id)
    return setCart(newCart)
  }

  const clearCart = () => {
    return setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
