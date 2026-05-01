import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/* ─── Page Wrapper (fade + slide on mount) ─── */
export function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Section Wrapper with scroll-reveal ─── */
export function Section({ children, className = '', id = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

/* ─── Button ─── */
export function Button({ children, variant = 'primary', to, href, onClick, className = '', size = 'md', icon }) {
  const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-sm', lg: 'px-8 py-4 text-base' }
  const variants = {
    primary: 'bg-gradient-to-r from-plum-600 to-rose-500 text-white shadow-md hover:shadow-lg',
    secondary: 'border-2 border-plum-600 text-plum-700 hover:bg-plum-50',
    outline: 'border border-white/40 text-white hover:bg-white/10',
    ghost: 'text-plum-700 hover:bg-plum-50',
  }
  const base = `inline-flex items-center gap-2 rounded-full font-medium font-body transition-all duration-200 hover:scale-105 ${sizes[size]} ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={base}>{icon}{children}</Link>
  if (href) return <a href={href} className={base}>{icon}{children}</a>
  return <button onClick={onClick} className={base}>{icon}{children}</button>
}

/* ─── Card ─── */
export function Card({ children, className = '', hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`bg-white rounded-2xl card-shadow transition-shadow duration-300 hover:card-shadow-hover ${className}`}
    >
      {children}
    </motion.div>
  )
}

/* ─── Animated Counter ─── */
export function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

/* ─── Section Header ─── */
export function SectionHeader({ badge, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-plum-100 text-plum-700 text-xs font-medium font-body tracking-wide mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 max-w-2xl font-body text-base leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

/* ─── Stagger container for lists of cards ─── */
export function StaggerContainer({ children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
