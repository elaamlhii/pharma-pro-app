
import { NavLink } from 'react-router-dom'
import { FaHome, FaBox, FaHistory, FaCalculator } from 'react-icons/fa'

const Sidebar = () => {
  const links = [
    { to: '/', name: 'Accueil', icon: <FaHome /> },
    { to: '/products', name: 'Produits', icon: <FaBox /> },
    { to: '/tstock', name: 'Historique TStock', icon: <FaHistory /> },
    { to: '/compensation', name: 'Compensation', icon: <FaCalculator /> },
  ]

  return (
    <div
      className='w-54  text-white flex flex-col p-4'
      style={{ backgroundColor: '#047857' }}
    >
      <h1 className='text-3xl font-bold mb-6'>PharmaPro</h1>
      <nav className='flex flex-col gap-4'>
        {' '}
        {/* gap between each link */}
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-2 p-3 ${
                isActive
                  ? 'bg-white text-green-700 font-semibold rounded-xl' // rounded when active
                  : 'hover:bg-gray-700 rounded-lg text-white'
              } transition-all duration-200`
            }
          >
            {link.icon} <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
