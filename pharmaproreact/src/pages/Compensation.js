import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/Sidebar'

const Compensation = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 p-6 bg-gray-100 min-h-screen'>
        <Header user='Agent Pharma' />
        <h2 className='text-xl font-bold mt-4'>Calcul des compensations</h2>
        {/* Ajouter la logique de calcul ici */}
      </div>
    </div>
  )
}

export default Compensation
