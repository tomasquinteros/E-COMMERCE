import { checkProductInCart, checkProductInFavorites } from '../functions/checkProduct'
import { useFavorites } from '../hooks/useFavorites'
import { useCart } from '../hooks/useCart'
import { ProductList } from './ProductList'

export const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart()
  const { favorites, removeFromFavorites, addToFavorites } = useFavorites()

  return (
    <section className='max-w-4xl'>
      <ul className='grid grid-cols-1 gap-3'>
        {
          products.slice(0, 10).map(product => {
            const itemInCart = checkProductInCart(product, cart)
            const itemInFav = checkProductInFavorites(product, favorites)
            return (
              <ProductList
                key={product.id}
                product={product}
                itemInCart={itemInCart}
                itemInFav={itemInFav}
                addToCart={addToCart}
                addToFavorites={addToFavorites}
                removeFromCart={removeFromCart}
                removeFromFavorites={removeFromFavorites}
              />
            )
          }
          )
        }
      </ul>
    </section>
  )
}
