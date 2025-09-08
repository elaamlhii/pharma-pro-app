import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUpLayer = () => {
  const navigate = useNavigate()

  // Local state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    terms: false,
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await axios.post('http://localhost:3000/auth/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })

      navigate('/sign-in')
    } catch (err) {
      console.error(err)
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='min-h-screen flex flex-col md:flex-row bg-white'>
      {/* Right Form Section */}
      <div className='flex flex-col justify-center py-16 px-6 w-full'>
        <div className='w-full max-w-md mx-auto'>
          {/* Logo + Title */}
          <div className='text-center mb-10'>
            <Link to='/' className='inline-block mb-6'>
              <img
                src='/logo.png'
                alt='logo'
                className='max-w-[180px] mx-auto'
              />
            </Link>
            <h4 className='text-2xl font-bold mb-2'>Sign Up to your Account</h4>
            <p className='text-gray-500 text-lg'>
              Welcome! Please enter your details
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className='relative mb-4'>
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                <Icon icon='f7:person' />
              </span>
              <input
                type='text'
                name='username'
                value={formData.username}
                onChange={handleChange}
                placeholder='Username'
                className='w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none'
                required
              />
            </div>

            {/* Email */}
            <div className='relative mb-4'>
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                <Icon icon='mage:email' />
              </span>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                className='w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none'
                required
              />
            </div>

            {/* Password */}
            <div className='relative mb-2'>
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                <Icon icon='solar:lock-password-outline' />
              </span>
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Password'
                className='w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none'
                required
              />
            </div>
            <span className='text-sm text-gray-400 block mb-4'>
              Your password must have at least 8 characters
            </span>

            {/* Terms */}
            <div className='flex items-start mb-4'>
              <input
                type='checkbox'
                name='terms'
                checked={formData.terms}
                onChange={handleChange}
                id='condition'
                className='mt-1 mr-2 h-4 w-4 border-gray-300 rounded'
                required
              />
              <label htmlFor='condition' className='text-sm text-gray-600'>
                By creating an account you agree to the{' '}
                <Link to='#' className='text-green-600 font-semibold'>
                  Terms &amp; Conditions
                </Link>{' '}
                and our{' '}
                <Link to='#' className='text-green-600 font-semibold'>
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Error */}
            {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}

            {/* Submit Button */}
            <button
              type='submit'
              disabled={loading}
              className='w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50'
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>

            {/* Divider */}
            <div className='flex items-center my-6'>
              <hr className='flex-grow border-gray-300' />
              <span className='mx-2 text-gray-400 text-sm'>
                Or sign up with
              </span>
              <hr className='flex-grow border-gray-300' />
            </div>

            {/* Already have account */}
            <div className='text-center text-sm'>
              <p>
                Already have an account?{' '}
                <Link to='/sign-in' className='text-green-600 font-semibold'>
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUpLayer
