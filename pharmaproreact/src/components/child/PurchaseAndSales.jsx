import React, { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const PurchaseAndSales = () => {
  const [filter, setFilter] = useState('This Month')

  const categories = ['Week 1', 'Week 2', 'Week 3', 'Week 4']

  // mock data depending on filter
  const getSeries = () => {
    switch (filter) {
      case 'This Week':
        return {
          purchase: [50, 70, 30, 40],
          sales: [80, 90, 60, 100],
        }
      case 'This Year':
        return {
          purchase: [400, 300, 500, 450],
          sales: [600, 700, 800, 750],
        }
      default: // This Month
        return {
          purchase: [100, 200, 150, 250],
          sales: [300, 400, 350, 500],
        }
    }
  }

  const series = getSeries()

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Purchase',
        data: series.purchase,
        backgroundColor: '#facc15', // yellow
      },
      {
        label: 'Sales',
        data: series.sales,
        backgroundColor: '#22c55e', // green
      },
    ],
  }

  const totals = {
    purchase: series.purchase.reduce((a, b) => a + b, 0),
    sales: series.sales.reduce((a, b) => a + b, 0),
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }

  return (
    <div className='col-xl-4 col-md-6'>
      <div className='bg-white card shadow rounded-lg'>
        <div className='p-4 flex justify-between items-center border-b border-gray-200'>
          <h6 className='text-lg font-bold'>Purchase and Sales</h6>
          <select
            className='form-select form-select-sm w-auto bg-gray-100 text-gray-600 p-1 rounded'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>This Month</option>
            <option>This Week</option>
            <option>This Year</option>
          </select>
        </div>
        <div className='p-6'>
          <ul className='flex flex-wrap items-center justify-center gap-4 my-3'>
            <li className='flex items-center gap-2'>
              <span className='w-3 h-2 rounded-full bg-yellow-400' />
              <span className='text-gray-500 text-sm font-semibold'>
                Purchase:{' '}
                <span className='text-gray-900 font-bold'>
                  ${totals.purchase}
                </span>
              </span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='w-3 h-2 rounded-full bg-green-500' />
              <span className='text-gray-500 text-sm font-semibold'>
                Sales:{' '}
                <span className='text-gray-900 font-bold'>${totals.sales}</span>
              </span>
            </li>
          </ul>

          <div className='mt-4'>
            <Bar data={data} options={options}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseAndSales
