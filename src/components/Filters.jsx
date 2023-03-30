import { useId } from 'react'
const categories = ['all', 'laptops', 'smartphones', 'groceries', 'home-decoration', 'fragrances', 'skincare']

export function Filters ({ filters, setFilters }) {
  const minPriceID = useId()
  const maxPriceID = useId()
  function handleChangeMinPrice (event) {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }
  function handleChangeMaxPrice (event) {
    setFilters(prevState => ({
      ...prevState,
      maxPrice: event.target.value
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
        <ul className='flex gap-4'>
          <li>
            <label htmlFor={minPriceID}>
              Min Price:
            </label>
            <input className='bg-slate-900 w-16 text-center' type='text' value={filters.minPrice} min='0' onChange={handleChangeMinPrice} />
          </li>
          <li>
            <label htmlFor={maxPriceID}>
              Max Price:
            </label>
            <input className='bg-slate-900 w-16 text-center' type='text' value={filters.maxPrice} min={filters.minPrice} onChange={handleChangeMaxPrice} />
          </li>
        </ul>
      </div>
      <div>
        <fieldset className='flex gap-4'>
          <div className='flex gap-6'>
            {
              categories.map(category => (
                <div key={category} className='flex justify-between gap-2'>
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
