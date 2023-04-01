import { useCart } from '../hooks/useCart'
import { ClearCartIcon } from './Icons'
import { CartList } from './CartList'
export function Cart () {
  const { cart, addToCart, removeFromCart, clearCart, decrementCart } = useCart()
  return (
    <aside>
      <ul className='flex flex-col gap-6'>
        <CartList products={cart} addToCart={addToCart} removeFromCart={removeFromCart} decrementCart={decrementCart} />
      </ul>
      <button onClick={() => clearCart()}>
        <ClearCartIcon />
      </button>
    </aside>
  )
}
