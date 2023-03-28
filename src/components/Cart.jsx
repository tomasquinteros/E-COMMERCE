import { useCart } from '../hooks/useCart'
import { ClearCartIcon } from './Icons'
import { CartList } from './CartList'
export function Cart () {
  const { cart, addToCart, removeFromCart, clearCart } = useCart()
  return (
    <aside>
      <ul>
        <CartList products={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
      </ul>
      <button onClick={() => clearCart()}>
        <ClearCartIcon />
      </button>
    </aside>
  )
}
