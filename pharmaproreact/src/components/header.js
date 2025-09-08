import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ user, onLogout }) => {
  return (
    <header className='flex justify-between items-center bg-white p-4 shadow rounded'>
      {user ? (
        // Cas où l’utilisateur est connecté
        <div className='flex items-center gap-6 w-full justify-between'>
          <div className='flex gap-4'>
            <h1 className='text-xl font-bold text-gray-800'>
              Bienvenue, {user}
            </h1>
            <span className='text-gray-600 font-bold text-xl'>
              {user.email}
            </span>
          </div>
          <button
            onClick={onLogout}
            className='bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition'
          >
            Déconnexion
          </button>
        </div>
      ) : (
        // Cas où aucun utilisateur
        <div className='flex gap-4'>
          <Link
            to='/sign-in'
            className='bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition'
          >
            Se connecter
          </Link>
          <Link
            to='/sign-up'
            className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'
          >
            S’inscrire
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
