import { useCart } from '../hooks/useCart'

function CartItem ({ products }) {
  return (
    products.map(product => (
      <li key={product.id}>
        <img src={product.thumbnail} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <span>{product.quantity} - {product.price}</span>
        </div>
      </li>
    )
    )
  )
}
export function Cart () {
  const { cart } = useCart()
  return (
    <aside>
      <ul>
        <CartItem products={cart} />
      </ul>
    </aside>
  )
}
