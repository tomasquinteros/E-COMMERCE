import { createContext, useState } from 'react'

export const CartContext = createContext()

// Creamos el cart provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product, Qty) => {
    const productInIndex = cart.findIndex(item => item.id === product.id)
    if (productInIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInIndex].quantity += Qty
      newCart[productInIndex].total += product.price
      return setCart(newCart)
    }
    const newCart = prevState => ([
      ...prevState,
      { ...product, quantity: Qty, total: product.price }
    ])
    return setCart(newCart)
  }
  const decrementCart = product => {
    const productInIndex = cart.findIndex(item => item.id === product.id)
    if (productInIndex >= 0) {
      const newCart = structuredClone(cart)
      if (newCart[productInIndex].quantity <= 1) {
        const newCart = cart.filter(item => item.id !== product.id)
        return setCart(newCart)
      }
      newCart[productInIndex].quantity -= 1
      newCart[productInIndex].total -= product.price
      return setCart(newCart)
    }
  }
  const removeFromCart = product => {
    const newCart = cart.filter(item => item.id !== product.id)
    return setCart(newCart)
  }

  const clearCart = () => {
    return setCart([])
  }
  function totalPriceFunction () {
    let operation = 0
    cart.map(product => {
      operation += product.total
      return operation
    })
    return operation
  }
  const totalPrice = totalPriceFunction()
  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart, decrementCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}
