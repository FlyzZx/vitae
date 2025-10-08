'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ProfileIllustration from '../ProfileIllustration'
import TerminalPrompt from '../TerminalPrompt'
import FloatingTechStack from '../FloatingTechStack'
import styles from './Hero.module.scss'



export default function Hero() {
  const [showContent, setShowContent] = useState(false)

  const handleTypingComplete = () => {
    setShowContent(true)
  }

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center relative ${styles.heroSection}`}>
      
      {/* Stack techno flottante sur tout le background */}
      <FloatingTechStack />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 xl:gap-24 items-center">
          
          {/* Illustration à gauche avec stack techno */}
          <motion.div 
            className={`${styles.illustrationColumn} flex justify-center lg:justify-end relative order-2 lg:order-1`}
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
            className="w-full flex flex-col justify-start order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Container avec taille fixe pour le terminal ET les boutons */}
            <div className="w-full text-left">
              {/* Terminal - taille absolue fixe avec plus de hauteur */}
              <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full mb-4 md:mb-6">
                <TerminalPrompt onComplete={handleTypingComplete} />
              </div>

              {/* Espace réservé pour les boutons - hauteur fixe pour éviter le mouvement */}
              <div className="h-[130px] sm:h-[70px] flex items-center justify-center lg:justify-start">
                {showContent && (
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start w-full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                  <motion.button 
                    className={`px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base ${styles.primaryButton} rounded-full font-semibold transition-all duration-200 whitespace-nowrap`}
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
                    className={`px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base ${styles.secondaryButton} rounded-full font-semibold transition-all duration-200 whitespace-nowrap`}
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
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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