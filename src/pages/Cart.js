import React, { useContext } from 'react'
import CartItems from '../components/CartItems'
import TotalPrice from '../components/TotalPrice'
import { ProductsContext } from '../context/productsContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, placeOrder, sendingOrder } = useContext(ProductsContext)

  const orderButton = (
    <button className='btn-order' onClick={placeOrder}>
      {sendingOrder ? 'Ordering...' : 'Place Order'}
    </button>
  )
  const addItem = <button className='btn-order'>Add Items</button>
  const link = cartItems.length === 0 ? '/' : ''

  return (
    <div className='container'>
      <div className='cart-items-container'>
        <CartItems />
        <TotalPrice cartItems={cartItems} />
        <div className='btn'>
          <Link to={link}>
            {cartItems.length !== 0 ? orderButton : addItem}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
