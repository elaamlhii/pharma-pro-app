// src/context/ProductsContext.js
import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:5000/product')
      .then((res) => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <ProductsContext.Provider value={{ products, setProducts, loading }}>
      {children}
    </ProductsContext.Provider>
  )
}

// custom hook
export const useProducts = () => useContext(ProductsContext)
