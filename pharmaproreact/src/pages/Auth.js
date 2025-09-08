import React, { useState } from 'react'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Connexion:', { email, password })
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded shadow w-80 flex flex-col gap-4'
      >
        <h2 className='text-2xl font-bold text-center'>Connexion</h2>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border p-2 rounded'
          required
        />
        <input
          type='password'
          placeholder='Mot de passe'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border p-2 rounded'
          required
        />
        <button className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700'>
          Se connecter
        </button>
      </form>
    </div>
  )
}

export default Auth
