import { RemoveFromCartIcon } from './Icons'
export function CartList ({ products, addToCart, removeFromCart, decrementCart }) {
  return (
    products.map(product => (
      <li key={product.id} className='flex items-center gap-6 p-2 border-y-2 border-slate-500'>
        <img className='w-32 aspect-video block object-cover' src={product.thumbnail} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <span>${product.price}</span>
        </div>
        <div className='text-2xl flex gap-6 items-center'>
          <button onClick={() => addToCart(product)} className='bg-green-600 p-4 text-white font-extrabold'>
            +
          </button>
          <span>{product.quantity}</span>
          <button onClick={() => decrementCart(product)} className='bg-red-600 p-4 text-white font-extrabold'>
            -
          </button>
        </div>
        <button onClick={() => removeFromCart(product)}>
          <RemoveFromCartIcon />
        </button>
        <span>Total: ${product.total}</span>
      </li>
    )
    )
  )
}
