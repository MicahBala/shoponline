import React, { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'
import { BsPlusCircleFill } from 'react-icons/bs'
import { AiFillMinusCircle } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Products = () => {
  const {
    allProducts,
    isLoading,
    addItemToCart,
    removeCartItem,
    isItemInCart,
  } = useContext(ProductsContext)
  // console.log('Products: ', allProducts)

  const products = allProducts.map((product) => {
    const { id, title, price, image } = product
    return (
      <div key={id} className='image-container'>
        {isItemInCart(id) ? (
          <AiFillMinusCircle
            className='icon-minus'
            onClick={() => removeCartItem(id)}
          />
        ) : (
          <BsPlusCircleFill
            className='icon-plus'
            onClick={() => addItemToCart(id)}
          />
        )}
        {isItemInCart(id) ? (
          <Link to='/cart'>
            <FaShoppingCart className='icon-cart' />
          </Link>
        ) : (
          ''
        )}

        <img src={image} alt={title} />
        <h5>{title}</h5>
        <h6>
          {price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </h6>
      </div>
    )
  })

  return <>{isLoading ? <h1>Loading...</h1> : products}</>
}

export default Products
