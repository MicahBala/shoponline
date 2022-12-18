import React from 'react'

const TotalPrice = ({ cartItems }) => {
  let itemPrice = [],
    totalPrice
  if (cartItems.length !== 0) {
    cartItems.map((item) => itemPrice.push(item.price))
    totalPrice = itemPrice.reduce((acc, value) => {
      return acc + value
    })
  }

  return (
    <div className='total-price'>
      <h2>Total</h2>
      <h2>
        {totalPrice
          ? totalPrice.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })
          : '$00.00'}
      </h2>
    </div>
  )
}

export default TotalPrice
