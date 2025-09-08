import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import { FaBox, FaChartLine, FaHistory } from 'react-icons/fa'
import axios from 'axios'
import StripedRows from '../components/stripedTableRow'

const Home = () => {
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
  }, [])
  // the total products with

  const totalStock = products.length

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 p-6 bg-gray-100 min-h-screen'>
        <Header
          onLogout={() => {
            // Clear any authentication tokens or user data here if needed
            window.location.href = '/sign-in' // Redirect to login page}
          }}
        />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
          <Card title='Produits en stock' value={totalStock} icon={<FaBox />} />
          <Card title='Compensations' value='32' icon={<FaChartLine />} />
          <Card title='Historique TStock' value='120' icon={<FaHistory />} />
        </div>

        <div className='mt-8'>
          <h2 className='text-2xl font-bold mb-4'>Liste des Produits</h2>
          {loading ? (
            <p>Chargement...</p>
          ) : (
           <StripedRows initialProducts={products}></StripedRows>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
