import { RemoveFromCartIcon } from './Icons'
export function CartList ({ products, addToCart, removeFromCart, decrementCart }) {
  return (
    products.map(product => (
      <li key={product.id} className='flex items-center gap-8 px-8 py-2 border-y-2 rounded-2xl border-slate-500 bg-slate-500'>
        <section className='flex gap-6 items-center'>
          <img className='w-32 aspect-video block object-cover' src={product.thumbnail} alt={product.title} />
          <div>
            <h2 className='text-2xl'>{product.title}</h2>
            <span className='text-xl text-orange-600 font-semibold'>${product.price}</span>
          </div>
        </section>
        <section className='flex gap-6 items-center ml-auto'>
          <div className='text-3xl flex  gap-2 items-center'>
            <button onClick={() => addToCart(product)} className='bg-green-600 p-2 text-white font-extrabold rounded-xl px-5 py-1'>
              +
            </button>
            <span className='text-2xl bg-gray-300 px-4 rounded-lg'>{product.quantity}</span>
            <button onClick={() => decrementCart(product)} className='bg-red-600 text-white font-extrabold rounded-xl px-5 py-1'>
              -
            </button>
          </div>
          <button onClick={() => removeFromCart(product)} className='text-white bg-red-700 p-4 rounded-md'>
            <RemoveFromCartIcon />
          </button>
          <span className='text-l w-32 bg-gray-300 p-4 rounded-lg'>Total: ${product.total}</span>
        </section>
      </li>
    )
    )
  )
}
