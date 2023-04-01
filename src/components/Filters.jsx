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
    <div className='bg-slate-500 py-1 px-2 rounded-xl'>
      <div className='flex gap-16 bg-orange-400 p-1 rounded-xl'>
        <div>
          <ul className='flex gap-2'>
            <li className='flex gap-1'>
              <label htmlFor={minPriceID}>
                Min Price:
              </label>
              <input className='w-16 text-center rounded-xl' type='text' value={filters.minPrice} min='0' onChange={handleChangeMinPrice} />
            </li>
            <li className='flex gap-1'>
              <label htmlFor={maxPriceID}>
                Max Price:
              </label>
              <input className='w-16 text-center rounded-xl' type='text' value={filters.maxPrice} min={filters.minPrice} onChange={handleChangeMaxPrice} />
            </li>
          </ul>
        </div>
        <div>
          <fieldset className='flex gap-2'>
            <div className='flex gap-3'>
              {
                categories.map(category => (
                  <div key={category} className='flex justify-between gap-2'>
                    <span>{category.toUpperCase()}</span>
                    <input type='radio' name='category' id='category' value={category} onChange={handleChangeCategory} className='w-5' />
                  </div>
                ))
              }
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  )
}
