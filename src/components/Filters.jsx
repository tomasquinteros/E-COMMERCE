import { useId } from 'react'
const categories = ['all', 'laptops', 'smartphones', 'groceries', 'home-decoration', 'fragrances', 'skincare']

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
        <fieldset className='flex flex-col gap-4'>
          <label htmlFor={categoryID}>
            CATEGORY: {filters.category}
          </label>
          <div>

            {
              categories.map(category => (
                <div key={category} className='flex justify-between'>
                  <span>{category}</span>
                  <input type='radio' name='category' id='category' value={category} onChange={handleChangeCategory} className='w-5' />
                </div>
              ))
            }
          </div>
        </fieldset>
      </div>
    </div>
  )
}
