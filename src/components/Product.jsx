import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../mocks/product.json'
import { NotFoundProduct } from './NotFoundProduct'
import { ProductDetail } from './ProductDetail'
export const Product = () => {
  const { title } = useParams()
  const [product, setProduct] = useState()
  useEffect(() => {
    const searchProduct = products.find(prod => prod.title === title)
    if (searchProduct) {
      return setProduct(searchProduct)
    }
  }, [])
  return (
    <div>
      {
       product ? <ProductDetail product={product} /> : <NotFoundProduct />
      }
    </div>
  )
}
