import { NavLink } from 'react-router-dom'
import { CartIcon, AddFavoritesIcon } from './Icons'
export const Header = () => {
  return (
    <header className='bg-slate-900 w-full'>
      <nav className='max-w-7xl flex justify-between p-4 items-center m-auto'>
        <NavLink className='text-6xl text-orange-500' to='/'> SHOPPING CART </NavLink>
        <section className='flex gap-20'>
          <NavLink className='flex gap-4 items-center text-green-400' to='/cart'>
            <span className='text-2xl'>Cart</span>
            <CartIcon />
          </NavLink>
          <NavLink className='flex gap-4 items-center text-red-400' to='/favorites'>
            <span className='text-2xl'>Favorites</span>
            <AddFavoritesIcon />
          </NavLink>
        </section>

      </nav>
    </header>
  )
}
