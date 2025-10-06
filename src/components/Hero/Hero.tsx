'use client'

import { motion } from 'framer-motion'
import ProfileIllustration from '../ProfileIllustration'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center relative ${styles.heroSection}`}>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center">
          
          {/* Illustration à gauche */}
          <motion.div 
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Effets d'arrière-plan subtils pour l'illustration */}
              <motion.div 
                className="absolute -inset-8 blur-3xl opacity-10"
                style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 60%)' }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.08, 0.15, 0.08],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Container de l'illustration */}
              <ProfileIllustration src="/profile.png" />
            </div>
          </motion.div>

          {/* Message à droite - texte direct sans card */}
          <motion.div 
            className="text-center lg:text-left space-y-8 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-theme-primary">Bonjour,</div>
              <div className="whitespace-nowrap">
                <span className="text-theme-secondary">je suis </span>
                <span className="text-gradient-primary">
                  Nicolas FARACI
                </span>
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl xl:text-2xl leading-relaxed lg:pr-8 text-theme-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Développeur passionné par la création d&apos;expériences numériques innovantes
            </motion.p>

            <motion.div 
              className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start lg:pr-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button 
                className="px-6 py-3 bg-gradient-primary text-white rounded-full font-semibold transition-transform duration-200 shadow-lg whitespace-nowrap"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir mon parcours
              </motion.button>
              <motion.button 
                className="px-6 py-3 border-2 border-theme rounded-full font-semibold transition-all duration-200 whitespace-nowrap text-theme-primary hover:border-opacity-60"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Me contacter
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}