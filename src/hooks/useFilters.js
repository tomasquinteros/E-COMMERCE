import { useState } from 'react'
export function useFilters () {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    maxPrice: 1000
  })

  const filterProduct = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice & product.price <= filters.maxPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
      )
    })
  }
  return { filters, setFilters, filterProduct }
}
