import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const OverallReport = () => {
  const [filter, setFilter] = useState('Yearly')

  // Labels for the chart
  const labels = ['Achats', 'Ventes', 'Dépenses', 'Bénéfice Brut']

  // Dynamic data based on filter
  const getSeries = () => {
    switch (filter) {
      case 'Monthly':
        return [20, 35, 15, 30]
      case 'Weekly':
        return [10, 25, 20, 45]
      case 'Today':
        return [5, 10, 5, 80]
      default: // Yearly
        return [50, 70, 40, 100]
    }
  }

  const data = {
    labels,
    datasets: [
      {
        data: getSeries(),
        backgroundColor: ['#2563eb', '#a78bfa', '#facc15', '#22c55e'], // Tailwind-like colors
        borderWidth: 0,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  }

  return (
    <div className='col-xxl-4 col-md-6 mt-6 mb-6'>
      <div className='bg-white shadow rounded-lg h-full'>
        <div className='p-4 flex justify-between items-center border-b border-gray-200'>
          <h6 className='text-lg font-bold'>Overall Report</h6>
          <select
            className='form-select form-select-sm w-auto bg-gray-100 text-gray-600 p-1 rounded'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>Yearly</option>
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Today</option>
          </select>
        </div>

        <div className='p-6 flex flex-col items-center'>
          <div className='w-64 h-64'>
            <Doughnut data={data} options={options} />
          </div>

          {/* Legend */}
          <div className='flex flex-wrap gap-5 justify-center mt-6'>
            <div className='flex items-center gap-2'>
              <span className='w-4 h-4 rounded bg-blue-600' />
              <span className='text-gray-500 text-sm'>Achats</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='w-4 h-4 rounded bg-purple-400' />
              <span className='text-gray-500 text-sm'>Ventes</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='w-4 h-4 rounded bg-yellow-400' />
              <span className='text-gray-500 text-sm'>Dépenses</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='w-4 h-4 rounded bg-green-500' />
              <span className='text-gray-500 text-sm'>Bénéfice Brut</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverallReport
