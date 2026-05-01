import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/impact', label: 'Impact' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setIsOpen(false) }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-plum-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-plum-600 to-rose-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Heart className="w-4 h-4 text-white" fill="white" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-plum-800 leading-none block">Vibhu</span>
              <span className="text-xs font-body text-rose-500 font-medium tracking-wide leading-none">Manaswini</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-plum-100 text-plum-700'
                      : 'text-slate-600 hover:text-plum-700 hover:bg-plum-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/donate"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-plum-600 to-rose-500 text-white text-sm font-medium font-body shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Heart className="w-3.5 h-3.5" fill="currentColor" />
              Connect
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-plum-700 hover:bg-plum-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-b border-plum-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm font-body font-medium transition-colors ${
                      isActive ? 'bg-plum-100 text-plum-700' : 'text-slate-600 hover:bg-plum-50 hover:text-plum-700'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/donate"
                className="block mt-3 px-4 py-3 rounded-xl text-sm font-medium text-center bg-gradient-to-r from-plum-600 to-rose-500 text-white"
              >
                Connect Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
