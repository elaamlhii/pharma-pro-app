import React from 'react'
import useReactApexChart from '../../hook/useReactApexChart'
import ReactApexChart from 'react-apexcharts'

const IncomeVsExpense = () => {
  let { incomeExpenseOptions, incomeExpenseSeries } = useReactApexChart()

  return (
    <div className='col-span-8 mt-5'>
      <div className='bg-white rounded-2xl shadow-md h-full'>
        <div className='p-6 mb-4'>
          {/* Header */}
          <div className='flex flex-wrap items-center justify-between gap-2 mb-4'>
            <h6 className='font-bold text-lg'>Revenu Vs Dépenses</h6>
            <select className='bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg px-2 py-1'>
              <option>Annuel</option>
              <option>Mensuel</option>
              <option>Hebdomadaire</option>
              <option>Aujourd'hui</option>
            </select>
          </div>

          {/* Stats */}
          <ul className='flex flex-wrap items-center justify-center my-3 gap-8'>
            {/* Income */}
            <li className='flex flex-col gap-1'>
              <div className='flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-blue-600'></span>
                <span className='text-gray-500 text-sm font-semibold'>
                  Revenu
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <h6 className='font-semibold text-gray-900'>$26,201</h6>
                <span className='text-green-600 flex items-center gap-1 text-sm font-bold'>
                  10%
                  <i className='ri-arrow-up-s-fill flex' />
                </span>
              </div>
            </li>

            {/* Expenses */}
            <li className='flex flex-col gap-1'>
              <div className='flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-yellow-600'></span>
                <span className='text-gray-500 text-sm font-semibold'>
                  Dépenses
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <h6 className='font-semibold text-gray-900'>$18,120</h6>
                <span className='text-red-600 flex items-center gap-1 text-sm font-bold'>
                  10%
                  <i className='ri-arrow-down-s-fill flex' />
                </span>
              </div>
            </li>
          </ul>

          {/* Chart */}
          <div id='incomeExpense' className='apexcharts-tooltip-style-1'>
            <ReactApexChart
              options={incomeExpenseOptions}
              series={incomeExpenseSeries}
              type='area'
              height={270}
              width='100%'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IncomeVsExpense
