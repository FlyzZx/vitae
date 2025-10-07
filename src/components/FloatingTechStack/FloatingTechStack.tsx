'use client'

import { motion } from 'framer-motion'

interface Tech {
  name: string
  icon: string
  color: string
  delay: number
  position: { x: string; y: string }
}

export default function FloatingTechStack() {
  const technologies: Tech[] = [
    {
      name: 'React',
      icon: '⚛️',
      color: '#61dafb',
      delay: 0.2,
      position: { x: '8%', y: '15%' }
    },
    {
      name: 'TypeScript',
      icon: '📘',
      color: '#3178c6',
      delay: 0.4,
      position: { x: '92%', y: '12%' }
    },
    {
      name: 'Node.js',
      icon: '🟢',
      color: '#339933',
      delay: 0.6,
      position: { x: '12%', y: '85%' }
    },
    {
      name: 'Next.js',
      icon: '▲',
      color: '#000000',
      delay: 0.8,
      position: { x: '88%', y: '80%' }
    },
    {
      name: 'Python',
      icon: '🐍',
      color: '#3776ab',
      delay: 1.0,
      position: { x: '95%', y: '50%' }
    },
    {
      name: 'PostgreSQL',
      icon: '🐘',
      color: '#336791',
      delay: 1.2,
      position: { x: '3%', y: '60%' }
    }
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute flex flex-col items-center pointer-events-auto cursor-pointer z-5 scale-50 sm:scale-75 md:scale-100"
          style={{
            left: tech.position.x,
            top: tech.position.y,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            rotate: -180
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: 0
          }}
          transition={{
            duration: 0.6,
            delay: tech.delay,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          whileHover={{
            scale: 1.2,
            rotate: 5,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div
            className="text-2xl md:text-3xl mb-1 drop-shadow-md"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {tech.icon}
          </motion.div>
          <motion.div
            className="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-2 py-1 rounded-md text-xs font-semibold backdrop-blur-sm border border-cyan-400/20 shadow-lg hover:bg-cyan-400/90 hover:text-white transition-all duration-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: tech.delay + 0.3 }}
          >
            {tech.name}
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full opacity-30 blur-lg -z-10"
            style={{ backgroundColor: tech.color }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ))}
      
      {/* Connexions entre les badges */}
      <svg className="absolute inset-0 w-full h-full opacity-40 md:opacity-60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        {/* Lignes de connexion animées */}
        <motion.path
          d="M 8 15 Q 50 8 92 12"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2.5, delay: 1.5 }}
        />
        <motion.path
          d="M 12 85 Q 50 75 88 80"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2.5, delay: 2 }}
        />
        <motion.path
          d="M 3 60 Q 20 30 95 50"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, delay: 2.5 }}
        />
      </svg>
    </div>
  )
}