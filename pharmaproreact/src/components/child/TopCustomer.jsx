import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const TopCustomer = () => {
  const customers = [
    { id: 1, name: 'Savannah Nguyen', amount: '30 000,00 00 DT' },
    { id: 2, name: 'Annette Black', amount: '40 000,00 00 DT' },
    { id: 3, name: 'Theresa Webb', amount: '50 000,00 00 DT' },
    { id: 4, name: 'Marvin McKinney', amount: '60 000,00  DT' },
    { id: 5, name: 'Brooklyn Simmons', amount: '70 000,00  DT' },
    { id: 6, name: 'Dianne Russell', amount: '80 000,00  DT' },
  ]

  return (
    <div className='col-span-4 md:col-span-6 mt-6'>
      <div className='bg-white rounded-2xl shadow-md h-full flex flex-col'>
        {/* Header */}
        <div className='flex items-center justify-between p-4 border-b border-gray-200'>
          <h6 className='font-bold text-lg'>Meilleurs clients</h6>
          <Link
            to='#'
            className='text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium'
          >
            Voir tout
            <ArrowRight className='w-4 h-4' />
          </Link>
        </div>

        {/* Table */}
        <div className='flex-1 overflow-x-auto p-4'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='text-gray-600 text-sm border-b border-gray-200'>
                <th className='py-2 px-3'>N°</th>
                <th className='py-2 px-3'>Nom</th>
                <th className='py-2 px-3'>Montant</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className='border-b border-gray-100 hover:bg-gray-50'
                >
                  <td className='py-2 px-3 text-gray-500'>{customer.id}</td>
                  <td className='py-2 px-3 text-gray-700'>{customer.name}</td>
                  <td className='py-2 px-3 text-gray-700'>{customer.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TopCustomer
