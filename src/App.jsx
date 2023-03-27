import { Products } from './components/Products'
import { Header } from './components/Header'
import { Filters } from './components/Filters'
import { Footer } from './components/Footer'
import { useState } from 'react'
import { products as initialState } from './mocks/product.json'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'

function App () {
  const [products] = useState(initialState)
  const { filterProduct, filters, setFilters } = useFilters()
  const filteredProduct = filterProduct(products)

  return (
    <div className='flex flex-col gap-20 items-center justify-center'>
      <Header />
      <div className='grid grid-cols-2 w-full'>
        <Filters setFilters={setFilters} filters={filters} />
        <Products products={filteredProduct} />
      </div>
      <Cart />
      <Footer />
    </div>
  )
}

export default App
