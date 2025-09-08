import React, { useState } from 'react'
import axios from 'axios'

const CreateProductForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    refProd: '',
    nouvPrixGrosHT: '',
    dateNouvPrixGr: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Simple client-side validation
    if (
      !formData.refProd ||
      !formData.nouvPrixGrosHT ||
      !formData.dateNouvPrixGr
    ) {
      setError('All fields are required.')
      return
    }
    if (parseFloat(formData.nouvPrixGrosHT) < 0) {
      setError('Price cannot be negative.')
      return
    }

    setLoading(true)
    try {
      await axios.post('http://localhost:5000/product', {
        ...formData,
        nouvPrixGrosHT: parseFloat(formData.nouvPrixGrosHT),
        dateNouvPrixGr: new Date(formData.dateNouvPrixGr).toISOString(),
      })

      // Clear form and notify parent
      setFormData({ refProd: '', nouvPrixGrosHT: '', dateNouvPrixGr: '' })
      onSuccess?.()
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='max-w-md mx-auto bg-white p-6 rounded-lg '>
      <h2 className='text-xl font-bold mb-4'>Create Product</h2>
      {error && <p className='text-red-500 mb-4'>{error}</p>}

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium mb-1'>Reference</label>
          <input
            type='text'
            name='refProd'
            value={formData.refProd}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none'
            placeholder='Product reference'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>
            Wholesale Price
          </label>
          <input
            type='number'
            name='nouvPrixGrosHT'
            value={formData.nouvPrixGrosHT}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none'
            placeholder='Enter price'
            step='0.01'
            min='0'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>
            Date of New Price
          </label>
          <input
            type='date'
            name='dateNouvPrixGr'
            value={formData.dateNouvPrixGr}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none'
            required
          />
        </div>

        <button
          type='submit'
          disabled={loading}
          className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition flex justify-center items-center gap-2'
        >
          {loading && (
            <svg
              className='animate-spin h-5 w-5 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z'
              ></path>
            </svg>
          )}
          {loading ? 'Submitting...' : 'Create Product'}
        </button>
      </form>
    </div>
  )
}

export default CreateProductForm
