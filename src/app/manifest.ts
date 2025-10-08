import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nicolas FARACI - Développeur Full-Stack & DevOps',
    short_name: 'Nicolas FARACI',
    description: 'Portfolio de Nicolas FARACI, Développeur Full-Stack Senior spécialisé en React, Next.js, Spring Boot et DevOps',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0f',
    theme_color: '#0066FF',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
