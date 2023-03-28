import { RemoveFromCartIcon } from './Icons'
export function CartList ({ products, addToCart, removeFromCart }) {
  return (
    products.map(product => (
      <li key={product.id}>
        <img src={product.thumbnail} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <span>{product.quantity} - {product.price}</span>
        </div>
        <div>
          <button onClick={() => addToCart(product)}>
            +
          </button>
          <button onClick={() => removeFromCart(product)}>
            <RemoveFromCartIcon />
          </button>
          <span>Total: ${product.total}</span>
        </div>
      </li>
    )
    )
  )
}
