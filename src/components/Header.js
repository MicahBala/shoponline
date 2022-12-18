import React, { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'
import { BiCart } from 'react-icons/bi'
import { GiWorld } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Header = () => {
  const { cartItems } = useContext(ProductsContext)
  return (
    <div className='header'>
      <div className='container'>
        <div className='header-content'>
          <Link to='/'>
            <GiWorld className='icons glob' />
          </Link>
          <h1>Shop Online</h1>
          {cartItems.length > 0 ? (
            <Link to='/cart'>
              <div className='circle'>{cartItems.length}</div>
            </Link>
          ) : (
            ''
          )}
          <Link to='/cart'>
            <BiCart className='icons cart' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
