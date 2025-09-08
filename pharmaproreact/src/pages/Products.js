import Header from '../components/header'
import Sidebar from '../components/Sidebar'
import StripedRows from '../components/stripedTableRow'
import { useProducts } from '../providers/ProductsContext'

const Products = () => {
  const { products, loading } = useProducts()
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 p-6 bg-gray-100 min-h-screen'>
        <Header  />
        <StripedRows initialProducts={products}></StripedRows>
        {/* Ici tu peux ajouter une table ou une liste de produits */}
      </div>
    </div>
  )
}

export default Products
