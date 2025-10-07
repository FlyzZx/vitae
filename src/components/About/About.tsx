'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    { icon: '💻', title: 'Full-Stack Dev', desc: 'Frontend & Backend' },
    { icon: '🔧', title: 'DevOps & Cloud', desc: 'K8s, Docker, GCP' },
    { icon: '🚀', title: 'Scalable Apps', desc: 'Production-ready' },
    { icon: '⚡', title: 'Flexible', desc: 'Missions & Long-terme' }
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
              Je suis <strong className="text-theme-primary">développeur full-stack</strong> avec de solides compétences DevOps, 
              spécialisé dans la création d&apos;applications web scalables, d&apos;outils internes 
              et de plateformes cloud-ready pour startups et entreprises en croissance.
            </p>
            
            <p>
              Que vous ayez besoin d&apos;une <strong className="text-theme-primary">API sur mesure</strong>, 
              d&apos;un <strong className="text-theme-primary">front-end moderne</strong> ou d&apos;un 
              <strong className="text-theme-primary"> pipeline CI/CD automatisé</strong>, 
              je peux vous accompagner de l&apos;idée à la production.
            </p>
            
            <p>
              Je travaille avec des technologies comme <strong className="text-theme-primary">PHP (Symfony)</strong>, 
              <strong className="text-theme-primary"> JavaScript (React, Next.js)</strong>, 
              <strong className="text-theme-primary"> Java (Spring Boot)</strong>, 
              <strong className="text-theme-primary"> MongoDB</strong>, et je déploie sur 
              <strong className="text-theme-primary"> Google Cloud</strong> avec 
              <strong className="text-theme-primary"> Kubernetes</strong>, 
              <strong className="text-theme-primary"> Docker</strong> et 
              <strong className="text-theme-primary"> Terraform</strong>.
            </p>
            
            <p>
              Je prends en charge l&apos;ensemble de votre projet — du développement à l&apos;infrastructure — 
              en garantissant un code propre, maintenable et prêt pour la production. 
              Que ce soit pour une <strong className="text-theme-primary">mission ponctuelle</strong> ou une 
              <strong className="text-theme-primary"> collaboration long terme</strong>, 
              je m&apos;adapte à vos besoins avec une communication claire et transparente.
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