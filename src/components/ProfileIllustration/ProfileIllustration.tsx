'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './ProfileIllustration.module.scss'

interface ProfileIllustrationProps {
  src?: string
  alt?: string
}

export default function ProfileIllustration({ src, alt = "Nicolas FARACI - Portrait" }: ProfileIllustrationProps) {
  return (
    <motion.div 
      className="relative z-10 w-96 h-[28rem] lg:w-[32rem] lg:h-[36rem] xl:w-[38rem] xl:h-[42rem]"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-full flex items-end justify-center">
        {src ? (
          // Votre vraie illustration quand elle sera ajoutée
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain object-bottom"
              priority
              sizes="(max-width: 768px) 384px, (max-width: 1280px) 448px, 512px"
            />
          </div>
        ) : (
          // Placeholder en attendant votre illustration
          <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-2xl relative overflow-hidden">
            {/* Effet de brillance */}
            <motion.div
              className={`absolute inset-0 ${styles['shine-effect']}`}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
            
            {/* Placeholder content */}
            <div className="text-center p-6">
              <div className="text-6xl mb-4">🎨</div>
              <p className="text-gray-600 font-medium">
                Votre illustration
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Portrait 3/4 détouré
              </p>
              <div className="mt-4 text-xs text-gray-400 bg-gray-50 px-3 py-2 rounded-full">
                Ajoutez votre image dans /public/
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}