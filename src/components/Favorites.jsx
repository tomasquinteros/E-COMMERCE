import { useFavorites } from '../hooks/useFavorites'
import { RemoveFromFavoritesIcon } from './Icons'

function ItemFavorites ({ favorites, removeFromFavorites }) {
  return (
    favorites.map(product => (
      <li key={product.id}>
        <h1>{product.title}</h1>
        <span>${product.price}</span>
        <button onClick={() => removeFromFavorites(product)}>
          <RemoveFromFavoritesIcon />
        </button>
      </li>
    )
    )
  )
}

export const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites()
  return (
    <div>
      <ul>
        <ItemFavorites favorites={favorites} removeFromFavorites={removeFromFavorites} />
      </ul>
    </div>
  )
}
