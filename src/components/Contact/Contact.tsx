'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from './Contact.module.scss'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Réinitialiser le statut après 5 secondes
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" ref={ref} className={`py-20 ${styles.contactSection}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-theme-primary">
            Travaillons ensemble
          </h2>
          <p className="text-xl text-theme-secondary max-w-2xl mx-auto">
            Une idée de projet ? Une collaboration ? N&apos;hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Informations de contact */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-300">
                Mes coordonnées
              </h3>
              
              <div className="space-y-4">
                <motion.div 
                  className={`flex items-center gap-4 p-4 ${styles['contactCard']} rounded-lg hover:bg-primary/10 transition-colors`}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/nicolas-faraci-495675147"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-theme-secondary hover:text-primary transition-colors"
                    >
                      Nicolas FARACI
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className={`flex items-center gap-4 p-4 ${styles['contactCard']} rounded-lg hover:bg-primary/10 transition-colors`}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold">Localisation</p>
                    <p className="text-theme-secondary">Lille, France</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-4 ${styles['contactCard']} rounded-lg border border-theme text-theme-primary placeholder-theme-muted focus:outline-none focus:border-primary transition-colors`}
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              <div>
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 ${styles['contactCard']} rounded-lg border border-theme text-theme-primary placeholder-theme-muted focus:outline-none focus:border-primary transition-colors`}
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              <div>
                <motion.textarea
                  name="message"
                  rows={5}
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-4 ${styles['contactCard']} rounded-lg border border-theme text-theme-primary placeholder-theme-muted focus:outline-none focus:border-primary transition-colors resize-none`}
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full p-4 ${styles.submitButton} rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
                whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
              >
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
              </motion.button>

              {/* Messages de statut */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-blue-500/15 border-2 border-blue-500 rounded-lg text-blue-600 dark:text-blue-400 font-semibold shadow-lg shadow-blue-500/20"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</span>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/15 border-2 border-red-500 rounded-lg text-red-600 dark:text-red-400 font-semibold shadow-lg shadow-red-500/20"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✗</span>
                    <span>{errorMessage || 'Une erreur est survenue. Veuillez réessayer.'}</span>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}