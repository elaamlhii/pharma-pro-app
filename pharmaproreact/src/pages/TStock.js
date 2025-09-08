import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/Sidebar'

const TStock = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 p-6 bg-gray-100 min-h-screen'>
        <Header user='Agent Pharma' />
        <h2 className='text-xl font-bold mt-4'>Historique TStock</h2>
        {/* Ajouter le tableau d’historique ici */}
      </div>
    </div>
  )
}

export default TStock
