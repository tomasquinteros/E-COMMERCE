import { useContext } from 'react'
import { FavoritesContext } from '../context/favorites'

export function useFavorites () {
  const favorites = useContext(FavoritesContext)
  return favorites
}
