import { useFavorites } from '../hooks/useFavorites'
import { RemoveFromFavoritesIcon } from './Icons'

function ItemFavorites ({ favorites, removeFromFavorites }) {
  return (
    favorites.map(product => (
      <li key={product.id} className='bg-slate-700 p-4 flex gap-4 flex-col items-center'>
        <h1 className='text-3xl text-orange-600'>{product.title}</h1>
        <img className='aspect-video object-cover w-64 bg-white' src={product.thumbnail} alt={product.title} />
        <p className='text-xl text-white font-bold'>${product.price}</p>
        <button className='bg-red-600 p-2' onClick={() => removeFromFavorites(product)}>
          <RemoveFromFavoritesIcon />
        </button>
      </li>
    )
    )
  )
}

export const Favorites = () => {
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites()
  return (
    <div className='w-full max-w-6xl mt-32'>
      <ul className='grid grid-cols-3 gap-3'>
        <ItemFavorites favorites={favorites} removeFromFavorites={removeFromFavorites} />
      </ul>
      <button className='bg-red-600 p-4 gap-4 rounded-lg flex text-xl font-bold' onClick={() => clearFavorites()}>
        Clear Favorites <RemoveFromFavoritesIcon />
      </button>
    </div>
  )
}
