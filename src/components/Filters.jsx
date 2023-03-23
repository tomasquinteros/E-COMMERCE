/* import { useFilters } from '../hooks/useFilters'
import { useId } from 'react' // Lo usamos para que siempre nuestra referencia sea exacta */

import { useId } from 'react'
const categories = ['all', 'laptops', 'smartphones', 'groceries']

export function Filters ({ filters, setFilters }) {
  const minPriceID = useId()
  const categoryID = useId()
  function handleChangePrice (event) {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  function handleChangeCategory (event) {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <div>
      <div>
        <label htmlFor={minPriceID}>
          Min Price: {filters.minPrice}
        </label>
        <input type='range' value={filters.minPrice} min='0' max='1000' onChange={handleChangePrice} />
      </div>
      <div>
        <fieldset>
          <label htmlFor={categoryID}>
            CATEGORY: {filters.category}
          </label>
          {
            categories.map(category => (
              <div key={category}>
                <span>{category}</span>
                <input type='radio' name='category' id='category' value={category} onChange={handleChangeCategory} />
              </div>
            ))
          }
        </fieldset>
      </div>
    </div>
  )
}
