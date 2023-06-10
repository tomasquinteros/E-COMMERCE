import { useState } from 'react'
import { useFavorites } from '../hooks/useFavorites'
import { ButtonAddOrRemoveFavorites } from './Buttons'
import { AddToCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
import { checkProductInFavorites } from '../functions/checkProduct'
import { handleClick, handleDecrementCount, handleIncrementCount } from '../functions/functionProductDetail'

export function ProductDetail ({ product }) {
  const { addToCart } = useCart()
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites()
  const { title, price, thumbnail, images, description, brand } = product
  const [image, setImage] = useState(thumbnail)
  const [Qty, setCount] = useState(1)
  const itemInFav = checkProductInFavorites(product, favorites)
  console.log(product)
  return (
    <section className='max-w-6xl'>
      <div className='flex gap-20 items-center justify-evenly'>
        <div className='w-2/5 flex flex-col gap-4'>
          <img className='w-full aspect-square object-contain' src={image} alt={title} />
          <ul className='grid grid-cols-3 gap-1'>
            {
              images.map(img => (
                <li key={img}>
                  <button onClick={() => handleClick({ img, setImage })}>
                    <img className={image === img ? 'opacity-50 bg-orange-300 border-2 border-orange-400 w-full aspect-video object-contain ' : 'bg-white border-2 border-orange-400 w-full aspect-video object-contain '} src={img} alt={title} />
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <section className='flex flex-col h-full gap-32 justify-between'>
          <div className='flex flex-col gap-10'>
            <h1 className='text-orange-600 text-6xl'>{title}</h1>
            <div className='text-xl flex flex-col gap-5'>
              <p>Description: {description}</p>
              <p>Brand: {brand}</p>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <span className='text-2xl'>Price: ${price}</span>
            <div className='flex items-center gap-2'>
              <button onClick={() => handleIncrementCount({ Qty, setCount })} className='bg-green-400 p-2 px-4 text-white rounded-md hover:bg-green-600 transition-all'> + </button>
              <p className='bg-gray-400 p-2 px-4 text-white rounded-md'>{Qty}</p>
              <button onClick={() => handleDecrementCount({ Qty, setCount })} className='bg-red-500 p-2 px-4 text-white rounded-md hover:bg-red-600 transition-all'> - </button>
              <button className='flex gap-2 rounded-md border-2 p-2 text-white bg-green-400 hover:bg-green-700 transition-all' onClick={() => addToCart(product, Qty)}>
                Add To cart <AddToCartIcon />
              </button>
            </div>
          </div>
          <ButtonAddOrRemoveFavorites
            product={product}
            itemInFav={itemInFav}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        </section>
      </div>
    </section>
  )
}
