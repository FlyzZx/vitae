'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    { icon: '🚀', title: 'Innovation', desc: 'Solutions créatives' },
    { icon: '⚡', title: 'Performance', desc: 'Code optimisé' },
    { icon: '🎨', title: 'Design', desc: 'UX/UI moderne' },
    { icon: '🔧', title: 'Technique', desc: 'Stack moderne' }
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-theme">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-theme-primary mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            À propos de moi
          </motion.h2>
          
          <motion.div 
            className="text-lg lg:text-xl text-theme-secondary leading-relaxed space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              Passionné par le développement web et les nouvelles technologies, 
              je transforme les idées en solutions digitales innovantes et performantes.
            </p>
            
            <p>
              Mon approche combine créativité technique et attention aux détails, 
              toujours dans l&apos;objectif de créer des expériences utilisateur exceptionnelles.
            </p>
            
            <p>
              Curieux et en veille technologique constante, j&apos;aime relever de nouveaux défis 
              et collaborer avec des équipes dynamiques pour donner vie aux projets les plus ambitieux.
            </p>
          </motion.div>

          {/* Skills highlight */}
          <motion.div 
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.title}
                className="p-6 bg-theme-secondary rounded-xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-semibold text-theme-primary mb-1">{skill.title}</h3>
                <p className="text-sm text-theme-secondary">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}