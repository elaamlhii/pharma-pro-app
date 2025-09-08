import UnitCountSeven from './child/UnitCountSeven'
import IncomeVsExpense from './child/IncomeVsExpense'

import TopSuppliers from './child/TopSuppliers'
import TopCustomer from './child/TopCustomer'
import OverallReport from './child/OverallReport'
import PurchaseAndSales from './child/PurchaseAndSales'
import RecentTransactions from './child/RecentTransactions'

const DashBoardLayerEight = () => {
  return (
    <div className='row gy-4'>
      {/* UnitCountSeven */}
      <UnitCountSeven />

      {/* IncomeVsExpense */}
      <IncomeVsExpense />
      <div className='flex flex-wrap gap-4'>
        <div className='flex-1 w-[300px]'>
          <TopSuppliers />
        </div>
        <div className='flex-1 w-[300px]'>
          <TopCustomer />
        </div>
        <div className='flex-1 w-[300px]'>
          <OverallReport />
        </div>
      </div>

      {/* PurchaseAndSales */}
      <PurchaseAndSales />

      {/* RecentTransactions */}
      <RecentTransactions />
    </div>
  )
}

export default DashBoardLayerEight
