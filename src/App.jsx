import { FavoritesProvider } from './context/favorites'
import { Home } from './components/Home'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { Favorites } from './components/Favorites'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Product } from './components/Product'
import { useEffect } from 'react'

function App () {
  const ScrollToTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }, [pathname])
  }
  return (
    <FavoritesProvider>
      <div className='flex flex-col gap-10 items-center justify-center m-auto'>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/product/:title' element={<Product />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </FavoritesProvider>
  )
}

export default App
