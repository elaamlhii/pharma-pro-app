import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

const RecentTransactionOne = () => {
    return (
        <div className='col-span-12'>
            <div className='bg-white rounded-xl shadow h-full'>
                <div className='p-6'>
                    <div className='flex flex-wrap items-center justify-between gap-2 mb-5'>
                        <h6 className='text-lg font-bold mb-0'>Transaction récente</h6>
                        <Link
                            to='#'
                            className='text-blue-600 hover:text-blue-500 flex items-center gap-1'
                        >
                            Voir tout
                            <Icon icon='sol     ar:alt-arrow-right-linear' className='text-xl' />
                        </Link>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className='min-w-full divide-y divide-gray-200 text-sm'>
                            <thead className='bg-gray-50'>
                                <tr>
                                    <th className='px-4 py-2 text-left'>Actif</th>
                                    <th className='px-4 py-2 text-left'>Date &amp; Heure</th>
                                    <th className='px-4 py-2 text-left'>Montant</th>
                                    <th className='px-4 py-2 text-left'>Adresse</th>
                                    <th className='px-4 py-2 text-center'>Statut</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-100'>
                                {[
                                    {
                                        type: 'up',
                                        name: 'Bitcoin',
                                        time: '10:34',
                                        date: '27 Mars 2024',
                                        amountBTC: '0.431 BTC',
                                        amountUSD: '3 480,90 $',
                                        address: 'Abc.........np562',
                                        status: 'Terminée',
                                        statusColor: 'green',
                                    },
                                    {
                                        type: 'down',
                                        name: 'Bitcoin',
                                        time: '10:34',
                                        date: '27 Mars 2024',
                                        amountBTC: '0.431 BTC',
                                        amountUSD: '3 480,90 $',
                                        address: 'Abc.........np562',
                                        status: 'Annulée',
                                        statusColor: 'red',
                                    },
                                    {
                                        type: 'up',
                                        name: 'Bitcoin',
                                        time: '10:34',
                                        date: '27 Mars 2024',
                                        amountBTC: '0.431 BTC',
                                        amountUSD: '3 480,90 $',
                                        address: 'Abc.........np562',
                                        status: 'Terminée',
                                        statusColor: 'green',
                                    },
                                    {
                                        type: 'down',
                                        name: 'Bitcoin',
                                        time: '10:34',
                                        date: '27 Mars 2024',
                                        amountBTC: '0.431 BTC',
                                        amountUSD: '3 480,90 $',
                                        address: 'Abc.........np562',
                                        status: 'Annulée',
                                        statusColor: 'red',
                                    },
                                    {
                                        type: 'up',
                                        name: 'Bitcoin',
                                        time: '10:34',
                                        date: '27 Mars 2024',
                                        amountBTC: '0.431 BTC',
                                        amountUSD: '3 480,90 $',
                                        address: 'Abc.........np562',
                                        status: 'Terminée',
                                        statusColor: 'green',
                                    },
                                ].map((tx, idx) => (
                                    <tr key={idx} className='hover:bg-gray-50'>
                                        <td className='px-4 py-2'>
                                            <div className='flex items-center gap-2'>
                                                <span
                                                    className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
                                                        tx.type === 'up' ? 'bg-green-500' : 'bg-red-500'
                                                    }`}
                                                >
                                                    <Icon
                                                        icon={
                                                            tx.type === 'up'
                                                                ? 'tabler:arrow-up-right'
                                                                : 'tabler:arrow-down-left'
                                                        }
                                                        className='text-lg'
                                                    />
                                                </span>
                                                <span className='font-medium'>{tx.name}</span>
                                            </div>
                                        </td>
                                        <td className='px-4 py-2'>
                                            <span className='block font-medium text-blue-500'>
                                                {tx.time}
                                            </span>
                                            <span className='text-gray-400 text-sm'>{tx.date}</span>
                                        </td>
                                        <td className='px-4 py-2'>
                                            <span className='block font-medium text-blue-500'>
                                                {tx.type === 'up'
                                                    ? `+ ${tx.amountBTC}`
                                                    : `- ${tx.amountBTC}`}
                                            </span>
                                            <span className='text-gray-400 text-sm'>
                                                {tx.amountUSD}
                                            </span>
                                        </td>
                                        <td className='px-4 py-2'>{tx.address}</td>
                                        <td className='px-4 py-2 text-center'>
                                            <span
                                                className={`px-4 py-1 rounded text-sm font-medium ${
                                                    tx.statusColor === 'green'
                                                        ? 'bg-green-100 text-green-600'
                                                        : 'bg-red-100 text-red-600'
                                                }`}
                                            >
                                                {tx.status}
                                            </span>
                                        </td>
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

export default RecentTransactionOne
