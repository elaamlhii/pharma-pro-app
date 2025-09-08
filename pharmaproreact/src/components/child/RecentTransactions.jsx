import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const RecentTransactions = () => {
  const transactions = [
    {
      sl: 1,
      date: '21 Juin 2024',
      type: 'Espèces',
      paid: '0,00 DT',
      due: '150,00 DT',
      payable: '150,00 DT',
    },
    {
      sl: 2,
      date: '21 Juin 2024',
      type: 'Banque',
      paid: '570,00 00 DT',
      due: '0,00 00 DT',
      payable: '570,00 00 DT',
    },
    {
      sl: 3,
      date: '21 Juin 2024',
      type: 'PayPal',
      paid: '300,00 00 DT',
      due: '100,00 00 DT',
      payable: '200,00 00 DT',
    },
    {
      sl: 4,
      date: '21 Juin 2024',
      type: 'Espèces',
      paid: '0,00 00 DT',
      due: '150,00 00 DT',
      payable: '150,00 00 DT',
    },
    {
      sl: 5,
      date: '21 Juin 2024',
      type: 'PayPal',
      paid: '300,00 00 DT',
      due: '100,00 00 DT',
      payable: '200,00 00 DT',
    },
  ]

  return (
    <div className='col-span-8'>
      <div className='bg-white shadow rounded-xl h-full'>
        <div className='p-6'>
          <div className='flex flex-wrap items-center justify-between gap-2 mb-5'>
            <h6 className='text-lg font-bold'>Transactions récentes</h6>
            <Link
              to='#'
              className='text-blue-600 hover:text-blue-500 flex items-center gap-1'
            >
              Voir tout
              <Icon icon='solar:alt-arrow-right-linear' className='text-lg' />
            </Link>
          </div>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200 text-sm'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-4 py-2 text-left'>N°</th>
                  <th className='px-4 py-2 text-left'>Date</th>
                  <th className='px-4 py-2 text-left'>Type de paiement</th>
                  <th className='px-4 py-2 text-left'>Montant payé</th>
                  <th className='px-4 py-2 text-left'>Montant dû</th>
                  <th className='px-4 py-2 text-left'>Montant à payer</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100'>
                {transactions.map((tx) => (
                  <tr key={tx.sl} className='hover:bg-gray-50'>
                    <td className='px-4 py-2 text-gray-500'>{tx.sl}</td>
                    <td className='px-4 py-2 text-gray-500'>{tx.date}</td>
                    <td className='px-4 py-2 text-gray-500'>{tx.type}</td>
                    <td className='px-4 py-2 text-gray-500'>{tx.paid}</td>
                    <td className='px-4 py-2 text-gray-500'>{tx.due}</td>
                    <td className='px-4 py-2 text-gray-500'>{tx.payable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentTransactions
