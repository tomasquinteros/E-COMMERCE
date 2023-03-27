import { useCart } from '../hooks/useCart'

function CartItem (product) {
  const { title, thumbnail, price, quantity } = product
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <h1>{title}</h1>
      <p>Quantity: {quantity}</p>
      <span>${price}</span>
    </li>
  )
}

export function Cart () {
  const { cart } = useCart()
  return (
    <aside>
      <ul>
        {
          cart.map(product => (<CartItem key={product} product={product} />))
        }
      </ul>
    </aside>
  )
}
