import React, { useState, useEffect } from 'react'

const ProductsContext = React.createContext()

function ContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [sendingOrder, setSendingOrder] = useState(false)

  const url = 'https://fakestoreapi.com/products'

  useEffect(() => {
    setIsLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllProducts(data))
      .finally(() => setIsLoading(false))
  }, [])

  function addItemToCart(itemId) {
    const newCartItem = allProducts.find((product) => product.id === itemId)
    setCartItems((prevCartItems) => [...prevCartItems, newCartItem])
  }

  function removeCartItem(itemId) {
    const itemsLetfInCart = cartItems.filter((item) => item.id !== itemId)
    setCartItems(itemsLetfInCart)
  }

  function isItemInCart(itemId) {
    const itemFound = cartItems.find((item) => item.id === itemId)
    if (itemFound) {
      return true
    } else {
      return false
    }
  }

  function placeOrder() {
    setSendingOrder(true)
    setTimeout(() => {
      setCartItems([])
      alert('Congratulations your Order has been placed!')
      setSendingOrder(false)
    }, 2000)
  }

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        isLoading,
        cartItems,
        addItemToCart,
        removeCartItem,
        isItemInCart,
        placeOrder,
        sendingOrder,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export { ContextProvider, ProductsContext }
