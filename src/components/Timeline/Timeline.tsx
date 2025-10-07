'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Timeline.module.scss'

const timelineData = [
  {
    year: '2023 - Présent',
    title: 'Développeur Fullstack Senior / DevOps',
    company: 'Decathlon',
    highlights: [
      'Outil de traduction IA (Next.js, Spring Boot, MongoDB)',
      'DevOps : Docker, CI/CD, monitoring',
      'CMS alimentant +80 sites Decathlon'
    ],
    type: 'work'
  },
  {
    year: '2016 - 2023',
    title: 'Ingénieur Logiciel',
    company: 'Kbane (Groupe ADEO)',
    highlights: [
      'Outils métier avec Symfony & React',
      'Infrastructure GCP avec Kubernetes (GKE)',
      'Système de paiement automatisé (Cloud Functions, Terraform)',
      'Management d\'équipe'
    ],
    type: 'work'
  },
  {
    year: '2019',
    title: 'Diplôme d\'Ingénieur',
    company: 'IMT Lille Douai',
    highlights: [
      'Formation en développement logiciel',
      'Spécialisation Big Data en dernière année',
      'Architecture logicielle et systèmes distribués'
    ],
    type: 'education'
  },
  {
    year: '2018 - 2020',
    title: 'CTO',
    company: 'Hellogoodbail',
    highlights: [
      'App de matchmaking immobilier avec géolocalisation',
      'Notifications intelligentes propriétaires/locataires',
      'Stack : Android, Java, PHP Symfony, GCP'
    ],
    type: 'work'
  }
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="timeline" ref={ref} className={`py-20 ${styles['timeline-gradient-bg']}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-theme-primary mb-4">
            Mon Parcours
          </h2>
          <p className="text-xl text-theme-secondary max-w-2xl mx-auto">
            Un voyage à travers mes expériences et apprentissages
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Ligne centrale */}
            <motion.div 
              className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${styles['timeline-line']}`}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              style={{ originY: 0 }}
            />

            {/* Timeline items */}
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0
              
              return (
                <motion.div 
                  key={index}
                  className={`relative flex items-center mb-12 ${isLeft ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                >
                  {/* Card */}
                  <div className={`w-full max-w-md ${isLeft ? 'mr-8 text-right' : 'ml-8 text-left'}`}>
                    <motion.div 
                      className="bg-theme p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-theme"
                      whileHover={{ y: -5 }}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          item.type === 'work' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {item.year}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-theme-primary mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="font-semibold mb-4" style={{ color: 'var(--primary)' }}>
                        {item.company}
                      </p>
                      
                      <ul className={`space-y-2 text-sm text-theme-secondary ${isLeft ? 'text-right' : 'text-left'}`}>
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            {!isLeft && <span className="text-primary mt-0.5">•</span>}
                            <span className="flex-1">{highlight}</span>
                            {isLeft && <span className="text-primary mt-0.5">•</span>}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Point central */}
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-theme border-4 rounded-full z-10"
                    style={{ borderColor: 'var(--primary)' }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                    whileHover={{ scale: 1.3 }}
                  >
                    <div className="absolute inset-1 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}