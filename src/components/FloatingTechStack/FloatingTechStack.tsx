'use client'

import { motion } from 'framer-motion'

interface Tech {
  name: string
  logo: string
  color: string
  delay: number
  position: { x: string; y: string }
}

export default function FloatingTechStack() {
  const technologies: Tech[] = [
    {
      name: 'Next.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      color: '#000000',
      delay: 0.2,
      position: { x: '8%', y: '15%' }
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61dafb',
      delay: 0.4,
      position: { x: '92%', y: '12%' }
    },
    {
      name: 'TypeScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: '#3178c6',
      delay: 0.6,
      position: { x: '12%', y: '80%' }
    },
    {
      name: 'Spring Boot',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      color: '#6db33f',
      delay: 0.8,
      position: { x: '88%', y: '75%' }
    },
    {
      name: 'Symfony',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',
      color: '#000000',
      delay: 1.0,
      position: { x: '5%', y: '50%' }
    },
    {
      name: 'Kafka',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
      color: '#231F20',
      delay: 1.2,
      position: { x: '93%', y: '45%' }
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: '#47A248',
      delay: 1.4,
      position: { x: '15%', y: '35%' }
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      color: '#336791',
      delay: 1.6,
      position: { x: '85%', y: '30%' }
    },
    {
      name: 'Kubernetes',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      color: '#326CE5',
      delay: 1.8,
      position: { x: '10%', y: '65%' }
    },
    {
      name: 'GCP',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
      color: '#4285F4',
      delay: 2.0,
      position: { x: '90%', y: '60%' }
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
          {/* Logo de la techno */}
          <motion.div
            className="relative w-12 h-12 md:w-16 md:h-16 drop-shadow-xl"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 3, -3, 0]
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src={tech.logo} 
              alt={tech.name}
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </motion.div>
          
          {/* Glow effect derrière le logo */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full opacity-15 blur-lg -z-10"
            style={{ backgroundColor: tech.color }}
            animate={{
              opacity: [0.15, 0.25, 0.15],
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
      
      {/* Connexions subtiles entre les badges */}
      <svg className="absolute inset-0 w-full h-full opacity-20 md:opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        {/* Lignes de connexion animées entre les technologies */}
        <motion.path
          d="M 8 15 Q 50 10 92 12"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2.5, delay: 2 }}
        />
        <motion.path
          d="M 12 80 Q 50 70 88 75"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2.5, delay: 2.5 }}
        />
        <motion.path
          d="M 5 50 Q 50 45 93 45"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, delay: 3 }}
        />
        <motion.path
          d="M 15 35 Q 50 25 85 30"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, delay: 3.5 }}
        />
      </svg>
    </div>
  )
}