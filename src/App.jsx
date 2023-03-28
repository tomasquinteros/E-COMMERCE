import { useState } from 'react'
import { useFilters } from './hooks/useFilters'
import { products as initialState } from './mocks/product.json'
import { FavoritesProvider } from './context/favorites'

import { Products } from './components/Products'
import { Header } from './components/Header'
import { Filters } from './components/Filters'
import { Cart } from './components/Cart'
import { Favorites } from './components/Favorites'
import { Footer } from './components/Footer'

function App () {
  const [products] = useState(initialState)
  const { filterProduct, filters, setFilters } = useFilters()
  const filteredProduct = filterProduct(products)

  return (
    <FavoritesProvider>
      <div className='flex flex-col gap-20 items-center justify-center'>
        <Header />
        <div className='grid grid-cols-2 w-full gap-10 max-w-7xl'>
          <Filters setFilters={setFilters} filters={filters} />
          <Products products={filteredProduct} />
        </div>
        <Cart />
        <Favorites />
        <Footer />
      </div>
    </FavoritesProvider>
  )
}

export default App
