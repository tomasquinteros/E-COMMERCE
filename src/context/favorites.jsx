import { createContext, useState } from 'react'
// creamos el context
export const FavoritesContext = createContext()

// creamos el provider

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const addToFavorites = product => {
    const productInFavorites = favorites.findIndex(item => item.id === product.id)
    if (productInFavorites) {
      const newFav = prevState => ([...prevState, { ...product }])
      return setFavorites(newFav)
    }
  }
  const removeFromFavorites = product => {
    const newFav = favorites.filter(item => item.id !== product.id)
    return setFavorites(newFav)
  }
  const clearFavorites = () => {
    return setFavorites([])
  }
  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
