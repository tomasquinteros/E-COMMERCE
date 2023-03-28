import { CartContext } from '../context/cart'
import { useContext } from 'react'
export function useCart () {
  const cart = useContext(CartContext)

  return cart
}
