import { useState } from 'react'
import { useFilters } from '../hooks/useFilters'
import { products as initialState } from '../mocks/product.json'
import { Products } from '../components/Products'
import { Filters } from '../components/Filters'

export const Home = () => {
  const [products] = useState(initialState)
  const { filterProduct, filters, setFilters } = useFilters()
  const filteredProduct = filterProduct(products)
  return (
    <div className='flex flex-col items-center justify-center w-full gap-10 max-w-7xl'>
      <Filters setFilters={setFilters} filters={filters} />
      <Products products={filteredProduct} />
    </div>
  )
}
