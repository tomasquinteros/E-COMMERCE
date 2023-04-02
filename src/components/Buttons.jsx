import { RemoveFromCartIcon, AddToCartIcon, RemoveFromFavoritesIcon, AddFavoritesIcon } from './Icons'

const styleButtons = 'rounded-md border-2 p-2 text-white'

export function ButtonAddOrRemoveCart ({ itemInCart, removeFromCart, addToCart, product }) {
  const Qty = 1
  return (
    <button
      className={`${styleButtons} bg-green-500 border-green-500 hover:bg-green-700 transition-all hover:scale-95`}
      onClick={() => { itemInCart ? removeFromCart(product) : addToCart(product, Qty) }}
    >
      {
       itemInCart
         ? <div className='flex items-center'><RemoveFromCartIcon /> <span>Remove from cart</span></div>
         : <div className='flex items-center'><AddToCartIcon /><span>Add to cart</span></div>
      }
    </button>
  )
}

export function ButtonAddOrRemoveFavorites ({ itemInFav, removeFromFavorites, addToFavorites, product }) {
  return (
    <button className={`${styleButtons} bg-red-500 border-red-500 hover:bg-red-700 transition-all`} onClick={() => itemInFav ? removeFromFavorites(product) : addToFavorites(product)}>
      {
        itemInFav
          ? <div className='flex items-center'><RemoveFromFavoritesIcon /><span>Remove from Favorites</span></div>
          : <div className='flex items-center'><AddFavoritesIcon /><span>Add to Favorites</span></div>
      }
    </button>
  )
}
