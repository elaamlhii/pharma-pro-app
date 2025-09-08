import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import { FaBox, FaChartLine, FaHistory } from 'react-icons/fa'
import DashBoardLayerEight from '../components/Dashboard'

import StripedRows from '../components/stripedTableRow'
import { useProducts } from '../providers/ProductsContext'

const Home = () => {
  const { products, loading } = useProducts()
  // the total products with

  const totalStock = products.length

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 p-6 bg-gray-100 min-h-screen overflow-y-auto'>
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
          <DashBoardLayerEight />
        </div>
      </div>
    </div>
  )
}

export default Home
