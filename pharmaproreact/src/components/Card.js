import React from 'react'

const Card = ({ title, value, icon }) => {
  return (
    <div className='bg-white shadow rounded p-4 flex items-center gap-4'>
      {icon && <div className='text-2xl'>{icon}</div>}
      <div>
        <h3 className='text-gray-500'>{title}</h3>
        <p className='text-xl font-bold'>{value}</p>
      </div>
    </div>
  )
}

export default Card
