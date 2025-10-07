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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
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
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-theme-secondary">nicolas.faraci@email.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className={`flex items-center gap-4 p-4 ${styles['contactCard']} rounded-lg hover:bg-primary/10 transition-colors`}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-theme-secondary">+33 X XX XX XX XX</p>
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
                    <p className="text-theme-secondary">France</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="font-semibold mb-4">Retrouvez-moi sur :</h4>
              <div className="flex gap-4">
                {['LinkedIn', 'GitHub', 'Twitter'].map((social, index) => (
                  <motion.button
                    key={social}
                    className={`w-12 h-12 ${styles['contactCard']} rounded-lg flex items-center justify-center hover:bg-primary/15 transition-colors`}
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <span className="text-xl">🔗</span>
                  </motion.button>
                ))}
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
                className={`w-full p-4 ${styles.submitButton} rounded-lg font-semibold transition-all duration-200`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}