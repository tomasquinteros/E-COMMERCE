import { ExternalLink } from './Icons'
import { ButtonAddOrRemoveCart, ButtonAddOrRemoveFavorites } from './Buttons'
import { useCart } from '../hooks/useCart'
import { useFavorites } from '../hooks/useFavorites'
export const ProductList = ({ product, itemInCart, itemInFav }) => {
  const { title, id, price, thumbnail } = product
  const { addToCart, removeFromCart } = useCart()
  const { removeFromFavorites, addToFavorites } = useFavorites()
  return (
    <li className=' bg-gray-900 p-3 rounded-md grid gap-4' key={id}>
      <div className='flex justify-center items-center flex-col gap-2'>
        <img className='rounded-md w-full aspect-video block object-cover bg-white' src={thumbnail} alt={id} />
        <h1 className='text-2xl text-center text-orange-600'>{title}</h1>
        <h3 className='text-2xl text-slate-200'>${price}</h3>
      </div>
      <section className='flex gap-3'>
        <div className='flex flex-col gap-2 w-full'>
          <ButtonAddOrRemoveCart
            product={product}
            itemInCart={itemInCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
          <ButtonAddOrRemoveFavorites
            product={product}
            itemInFav={itemInFav}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        </div>
        <button className='rounded-md border-2 bg-zinc-400 border-zinc-400 p-2 flex items-center w-2/5'>
          More<ExternalLink />
        </button>
      </section>
    </li>
  )
}
