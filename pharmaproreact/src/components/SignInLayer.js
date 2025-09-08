import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import axios from 'axios'

const SignInLayer = () => {
  const navigate = useNavigate()

  // State
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await axios.post('http://localhost:3000/auth/login', {
        email: formData.email,
        password: formData.password,
      })

      // Save token (localStorage or cookie)
      localStorage.setItem('token', res.data.access_token)

      // Redirect to home/dashboard
      navigate('/')
    } catch (err) {
      console.error(err)
      setError(err.response?.data?.message || 'Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='min-h-screen flex flex-col md:flex-row'>
      {/* Right Side (Form) */}
      <div className='flex-1 flex items-center justify-center p-8 md:p-16 bg-white'>
        <div className='w-full max-w-md'>
          {/* Logo */}
          <div className='mb-10 text-center'>
            <Link to='/'>
              <img src='/logo.png' alt='Logo' className='mx-auto w-40' />
            </Link>
            <h4 className='text-2xl font-bold mb-2'>Sign In to your Account</h4>
            <p className='text-gray-500'>
              Welcome back! Please enter your details.
            </p>
          </div>

          {/* Form */}
          <form className='space-y-6' onSubmit={handleSubmit}>
            {/* Email */}
            <div className='relative'>
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                <Icon icon='mage:email' width='20' />
              </span>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                required
                className='w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none'
              />
            </div>

            {/* Password */}
            <div className='relative'>
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                <Icon icon='solar:lock-password-outline' width='20' />
              </span>
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Password'
                required
                className='w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none'
              />
            </div>

            {/* Remember + Forgot */}
            <div className='flex items-center justify-between'>
              <label className='flex items-center gap-2 text-sm text-gray-600'>
                <input
                  type='checkbox'
                  className='rounded border-gray-300 text-green-600 focus:ring-green-500'
                />
                Remember me
              </label>
              <Link
                to='#'
                className='text-sm text-green-600 hover:underline font-medium'
              >
                Forgot Password?
              </Link>
            </div>

            {/* Error */}
            {error && <p className='text-red-500 text-sm'>{error}</p>}

            {/* Submit */}
            <button
              type='submit'
              disabled={loading}
              className='w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50'
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>

            {/* Divider */}
            <div className='relative my-6'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='bg-white px-2 text-gray-500'>
                  Or sign in with
                </span>
              </div>
            </div>

            {/* Sign Up link */}
            <p className='text-center text-sm text-gray-600'>
              Don’t have an account?{' '}
              <Link
                to='/sign-up'
                className='text-green-600 hover:underline font-semibold'
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignInLayer
