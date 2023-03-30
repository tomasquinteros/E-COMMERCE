import { FavoritesProvider } from './context/favorites'
import { Home } from './components/Home'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { Favorites } from './components/Favorites'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <FavoritesProvider>
      <div className='flex flex-col gap-20 items-center justify-center m-auto'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </FavoritesProvider>
  )
}

export default App
