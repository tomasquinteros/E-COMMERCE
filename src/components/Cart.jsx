import { useCart } from '../hooks/useCart'
import { ClearCartIcon } from './Icons'
import { CartList } from './CartList'
export function Cart () {
  const { cart, addToCart, removeFromCart, clearCart, decrementCart, totalPrice } = useCart()
  return (
    <aside className='mt-32'>
      <ul className='flex flex-col gap-2'>
        <CartList products={cart} addToCart={addToCart} removeFromCart={removeFromCart} decrementCart={decrementCart} />
      </ul>
      <div className='flex px-8 py-2 items-center text-white gap-20'>
        <button onClick={() => clearCart()} className='bg-red-600 p-4 gap-4 rounded-lg flex text-xl font-bold'>
          <span>Clear Cart</span> <ClearCartIcon />
        </button>
        <span className='ml-auto bg-orange-600 p-4 rounded-md'>Total: ${totalPrice}</span>
      </div>
    </aside>
  )
}
