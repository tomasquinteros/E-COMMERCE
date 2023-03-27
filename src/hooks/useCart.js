import { useState } from 'react'
export function useCart () {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    return setCart(prevState => ([
      ...prevState, { ...product, quantity: 1 }
    ]))
  }
  const removeFromCart = product => {
    const newCart = cart.filter(item => item.is !== product.id)
    return setCart(newCart)
  }

  return { cart, setCart, addToCart, removeFromCart }
}
