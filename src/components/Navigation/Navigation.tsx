'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navigation.module.scss'

interface NavigationItem {
  id: string
  label: string
  icon: string
}

const navigationItems: NavigationItem[] = [
  { id: 'hero', label: 'Accueil', icon: '🏠' },
  { id: 'about', label: 'À propos', icon: '👨‍💻' },
  { id: 'timeline', label: 'Parcours', icon: '🚀' },
  { id: 'contact', label: 'Contact', icon: '📧' }
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calcul de la progression du scroll
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (totalScroll / windowHeight) * 100

      setScrollProgress(progress)
      setIsVisible(totalScroll > 100)

      // Détection de la section active
      const sections = navigationItems.map(item => document.getElementById(item.id))
      const scrollPosition = totalScroll + window.innerHeight / 2

      // Si on est en bas de page, activer la dernière section
      const isAtBottom = window.innerHeight + totalScroll >= document.documentElement.scrollHeight - 10
      
      if (isAtBottom) {
        setActiveSection(navigationItems[navigationItems.length - 1].id)
      } else {
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i]
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navigationItems[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className={`fixed left-4 md:left-6 top-1/2 z-40 px-2 md:px-3 py-3 md:py-4 rounded-2xl transform -translate-y-1/2 ${styles.navigationSticky}`}
          initial={{ opacity: 0, x: -20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.9 }}
          transition={{ 
            duration: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
        >
          {/* Barre de progression verticale */}
          <motion.div
            className={`absolute left-0 top-0 w-1 rounded-l-2xl ${styles.progressBar}`}
            style={{ height: `${scrollProgress}%` }}
            initial={{ height: 0 }}
            animate={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />

          {/* Navigation items verticaux */}
          <div className="flex flex-col items-center gap-2 md:gap-3 ml-1 md:ml-2">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative w-8 h-8 md:w-10 md:h-10 rounded-xl transition-all duration-300 flex items-center justify-center ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-theme-secondary hover:text-primary hover:bg-primary/5'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                title={item.label}
                aria-label={item.label}
              >
                {/* Point indicateur central */}
                <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${styles.navDot} ${
                  activeSection === item.id ? styles.active : ''
                }`} />

                {/* Indicateur actif */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-primary/5 rounded-xl border border-primary/20"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Tooltip au hover */}
                <div className="absolute left-full ml-3 px-2 py-1 bg-theme-secondary/90 backdrop-blur-sm rounded-lg text-xs text-theme-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {item.label}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}