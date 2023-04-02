export function handleIncrementCount ({ Qty, setCount }) {
  const counter = Qty + 1
  return setCount(counter)
}
export function handleDecrementCount ({ Qty, setCount }) {
  const counter = Qty - 1
  if (Qty === 0) {
    return setCount(Qty)
  }
  return setCount(counter)
}
export function handleClick ({ img, setImage }) {
  return setImage(img)
}
