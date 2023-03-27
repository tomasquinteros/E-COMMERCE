import { AddFavorites, AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart()
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <section className='max-w-4xl'>
      <ul className='grid grid-cols-1 gap-3'>
        {
          products.map(product => {
            const itemInCart = checkProductInCart(product)
            return (
              <li className=' bg-slate-500 flex flex-col items-center justify-center p-3' key={product.id}>
                <img className='rounded-md w-full aspect-video block object-cover bg-white' src={product.thumbnail} alt={product.id} />
                <h1>{product.title} - {product.price}</h1>
                <section className='p-4'>
                  <button
                    className='rounded-md border-2 border-gray-600 p-2'
                    onClick={() => { itemInCart ? removeFromCart(product) : addToCart(product) }}
                  >
                    {
                      itemInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                  <button className='rounded-md border-2 border-gray-600 p-2'>
                    <AddFavorites />
                  </button>
                </section>
              </li>
            )
          }
          )
        }
      </ul>
    </section>
  )
}
