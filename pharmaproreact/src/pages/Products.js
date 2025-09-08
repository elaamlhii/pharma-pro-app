import Header from '../components/header'
import Sidebar from '../components/Sidebar'
import StripedRows from '../components/stripedTableRow'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      axios
        .get('http://localhost:5000/product') // NestJS endpoint
        .then((res) => {
          setProducts(res.data)
          setLoading(false)
        })
        .catch((err) => {
          console.error(err)
          setLoading(false)
        })
    }, [products])
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 p-6 bg-gray-100 min-h-screen'>
        <Header  />
        <StripedRows initialProducts={products}></StripedRows>
        {/* Ici tu peux ajouter une table ou une liste de produits */}
      </div>
    </div>
  )
}

export default Products
