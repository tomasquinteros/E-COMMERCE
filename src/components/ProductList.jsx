import { AddFavoritesIcon, AddToCartIcon, RemoveFromCartIcon, RemoveFromFavoritesIcon } from './Icons'

export const ProductList = ({ product, removeFromCart, removeFromFavorites, itemInCart, itemInFav, addToCart, addToFavorites }) => {
  const { title, id, price, thumbnail } = product
  return (
    <li className=' bg-slate-500 flex flex-col items-center justify-center p-3' key={id}>
      <img className='rounded-md w-full aspect-video block object-cover bg-white' src={thumbnail} alt={id} />
      <h1>{title} - {price}</h1>
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
        <button className='rounded-md border-2 border-gray-600 p-2' onClick={() => itemInFav ? removeFromFavorites(product) : addToFavorites(product)}>
          {
            itemInFav
              ? <RemoveFromFavoritesIcon />
              : <AddFavoritesIcon />
          }
        </button>
      </section>
    </li>
  )
}
