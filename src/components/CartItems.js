import React, { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'

const CartItems = () => {
  const { cartItems } = useContext(ProductsContext)

  const items = cartItems.map((item) => {
    const { id, image, title, price, description } = item

    return (
      <div key={id} className='cart-image-container'>
        <div className='cart-image'>
          <img src={image} alt={title} />
        </div>
        <div className='item-title'>
          <small>{title}</small>
        </div>
        <h4 className='item-price'>
          {price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </h4>
      </div>
    )
  })
  return <>{items}</>
}

export default CartItems
