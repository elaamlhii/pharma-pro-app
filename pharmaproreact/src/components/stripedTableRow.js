import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import CreateProductForm from './CreateProductForm' // make sure this path is correct

const StripedRows = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts) // product list
  const [showModal, setShowModal] = useState(false) // show/hide popup

  // Handlers
  const handleAddProduct = (newProduct) => {
    setShowModal(false)
  }

  const handleEdit = (product) => {
    alert(`Edit product ${product.refProd}`)
    // You can implement inline edit or another popup
  }

  const handleDelete = async (product) => {
    if (window.confirm(`Delete product ${product.refProd}?`)) {
      try {
        const res = await fetch(
          `http://localhost:5000/products/${product.numPro}`,
          {
            method: 'DELETE',
          },
        )
        if (res.ok) {
          setProducts((prev) => prev.filter((p) => p.numPro !== product.numPro))
          alert('Produit supprimé avec succès.')
        } else {
          alert('Erreur lors de la suppression du produit.')
        }
      } catch (err) {
        alert('Erreur réseau.')
      }
    }
  }

  return (
    <div className='w-full max-w p-4'>
      <div className='bg-white shadow rounded-lg overflow-hidden'>
        {/* Header */}
        <div className='flex justify-between items-center px-6 py-4 border-b border-gray-200'>
          <h5 className='text-lg font-semibold text-gray-800'>
            Gestion des produits
          </h5>
          <button
            onClick={() => setShowModal(true)}
            className='bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition'
          >
            Ajouter produit
          </button>
        </div>

        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider'>
                  Produit
                </th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider'>
                  Reference
                </th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider'>
                  Prix Gros
                </th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider'>
                  Date Nouveau Prix
                </th>
                <th className='px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider'>
                  Stock
                </th>
                <th className='px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {products.map((p, idx) => (
                <tr
                  key={p.numPro}
                  className={idx % 2 === 0 ? 'bg-gray-50' : ''}
                >
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                    {p.numPro}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                    {p.refProd}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                    ${p.nouvPrixGrosHT}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                    {new Date(p.dateNouvPrixGr).toLocaleDateString()}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-center'>
                    <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium'>
                      {p.stocks?.length || 0}
                    </span>
                  </td>
                  <td className='px-6 py-4 text-center flex justify-center gap-2'>
                    <button
                      onClick={() => handleEdit(p)}
                      className='text-blue-600 hover:text-blue-800'
                    >
                      <Icon icon='akar-icons:edit' width='20' />
                    </button>
                    <button
                      onClick={() => handleDelete(p)}
                      className='text-red-600 hover:text-red-800'
                    >
                      <Icon icon='akar-icons:trash-can' width='20' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative'>
            <button
              onClick={() => setShowModal(false)}
              className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
            >
              <Icon icon='akar-icons:cross' width='24' />
            </button>
            <CreateProductForm onSuccess={handleAddProduct} />
          </div>
        </div>
      )}
    </div>
  )
}

export default StripedRows
