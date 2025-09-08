import React from 'react'
import {
  FaShoppingCart,
  FaHandHolding,
  FaMoneyBillWave,
  FaWallet,
} from 'react-icons/fa'

const stats = [
  {
    title: 'Ventes brutes',
    value: '40 000 00 DT',
    icon: <FaShoppingCart />,
    change: '+80%',
    changeType: 'up',
    changeColor: 'text-green-600 bg-green-100',
    gradient: 'from-blue-100 to-blue-200',
  },
  {
    title: 'Achats totaux',
    value: '35 000 00 DT',
    icon: <FaHandHolding />,
    change: '+95%',
    changeType: 'up',
    changeColor: 'text-green-600 bg-green-100',
    gradient: 'from-purple-100 to-purple-200',
  },
  {
    title: 'Revenu total',
    value: '30 000 00 DT',
    icon: <FaMoneyBillWave />,
    change: '-30%',
    changeType: 'down',
    changeColor: 'text-red-600 bg-red-100',
    gradient: 'from-green-100 to-green-200',
  },
  {
    title: 'Dépenses totales',
    value: '7 000 00 DT',
    icon: <FaWallet />,
    change: '+60%',
    changeType: 'up',
    changeColor: 'text-green-600 bg-green-100',
    gradient: 'from-yellow-100 to-yellow-200',
  },
]

const UnitCountSeven = () => {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-r ${item.gradient} p-5 rounded-xl shadow-md relative`}
          >
            {/* Header */}
            <div className='flex justify-between items-center mb-3'>
              <div>
                <p className='text-sm text-gray-600'>{item.title}</p>
                <h4 className='text-xl font-bold'>{item.value}</h4>
              </div>
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg text-2xl ${item.changeColor}`}
              >
                {item.icon}
              </div>
            </div>

            {/* Change info */}
            <p className='text-sm text-gray-700'>
              <span
                className={`px-2 py-0.5 rounded font-medium 00 DT{item.changeColor}`}
              >
                {item.changeType === 'up' ? '▲' : '▼'} {item.change}
              </span>{' '}
              Par rapport au mois dernier
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UnitCountSeven
