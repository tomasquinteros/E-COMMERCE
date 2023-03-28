export const checkProductInCart = (product, cart) => {
  return cart.some(item => item.id === product.id)
}

export const checkProductInFavorites = (product, favorites) => {
  return favorites.some(item => item.id === product.id)
}
