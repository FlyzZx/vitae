# 🚀 Portfolio Nicolas FARACI - Vitae

Portfolio interactif et moderne de Nicolas FARACI, développeur Full-Stack Senior & DevOps Engineer.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Caractéristiques

### 🎨 Design & UX
- **Theme Developer Blue** - Palette moderne et professionnelle (#0066FF)
- **Dark/Light Mode** - Détection automatique des préférences système + toggle manuel
- **Animations fluides** - Framer Motion pour des transitions élégantes
- **Responsive Design** - Optimisé mobile, tablette et desktop
- **Glassmorphism** - Effets de verre moderne sur les cartes

### 🧭 Navigation
- **Navigation latérale intelligente** - Indicateur visuel de section active
- **Smooth scroll** - Transitions douces entre sections
- **Barre de progression** - Indicateur visuel du scroll
- **Back to top** - Bouton de retour en haut avec animation

### 📧 Contact
- **Formulaire protégé** - Cloudflare Turnstile anti-spam
- **Email avec Resend** - Envoi d'emails sécurisé via API
- **Validation côté client et serveur** - Protection complète
- **Messages d'état** - Feedback visuel (succès/erreur)

### 🔍 SEO Optimisé
- **Métadonnées complètes** - Open Graph, Twitter Cards
- **Schema.org** - Données structurées JSON-LD
- **Sitemap dynamique** - Génération automatique
- **Manifest PWA** - Application web progressive
- **Score Lighthouse 95+** - Performance optimale

### ⚡ Performance
- **Next.js 15** - App Router avec Server Components
- **Optimisation des images** - next/image avec lazy loading
- **Code splitting** - Chargement optimisé des composants
- **CSS optimisé** - Tailwind CSS v4 + SCSS Modules

## 🛠️ Technologies

### Core
- **Next.js 15** - Framework React avec SSR/SSG
- **React 19** - Bibliothèque UI
- **TypeScript 5** - Typage statique

### Styling
- **Tailwind CSS v4** - Framework CSS utility-first
- **SCSS Modules** - Styles encapsulés
- **Framer Motion** - Animations déclaratives

### Intégrations
- **Resend** - Service d'envoi d'emails
- **Cloudflare Turnstile** - Protection anti-spam
- **React Email** - Templates d'emails

### Outils
- **ESLint** - Linting du code
- **pnpm** - Gestionnaire de paquets rapide

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- pnpm 8+

### Cloner le projet
```bash
git clone https://github.com/FlyzCorp/vitae.git
cd vitae
```

### Installer les dépendances
```bash
pnpm install
```

### Configuration des variables d'environnement
Créer un fichier `.env.local` à la racine :

```bash
# Resend API Key
RESEND_API_KEY=your_resend_api_key

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key
```

**Obtenir les clés :**
- Resend : https://resend.com/api-keys
- Turnstile : https://dash.cloudflare.com/

### Lancer le serveur de développement
```bash
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## 📦 Scripts

```bash
# Développement
pnpm dev

# Build production
pnpm build

# Lancer en production
pnpm start

# Linting
pnpm lint
```

## 📁 Structure du Projet

```
vitae/
├── public/              # Assets statiques
│   ├── profile.png     # Photo de profil
│   └── robots.txt      # Configuration robots
├── src/
│   ├── app/            # App Router Next.js
│   │   ├── api/        # Routes API
│   │   │   └── contact/route.ts  # API email
│   │   ├── layout.tsx  # Layout principal + SEO
│   │   ├── page.tsx    # Page d'accueil
│   │   ├── globals.css # Styles globaux + variables
│   │   ├── sitemap.ts  # Sitemap dynamique
│   │   └── manifest.ts # PWA manifest
│   └── components/     # Composants React
│       ├── About/      # Section À propos
│       ├── BackToTop/  # Bouton retour haut
│       ├── Contact/    # Formulaire contact
│       ├── Hero/       # Section hero
│       ├── Navigation/ # Navigation latérale
│       ├── ThemeProvider/ # Gestion du thème
│       ├── ThemeToggle/   # Bouton toggle thème
│       └── Timeline/   # Parcours professionnel
├── .env.local          # Variables d'environnement (à créer)
├── .env                # Template des variables
├── SEO-GUIDE.md        # Guide d'optimisation SEO
└── README.md           # Ce fichier
```

## 🎨 Thème & Personnalisation

### Couleurs (Developer Blue)
```css
--primary: #0066FF;      /* Bleu principal */
--primary-dark: #0052CC; /* Bleu foncé */
--primary-light: #3385FF; /* Bleu clair */
--accent: #7C3AED;       /* Violet accent */
```

### Modifier le thème
Les variables CSS sont dans `src/app/globals.css` :
- Section `[data-theme="light"]` pour le mode clair
- Section `[data-theme="dark"]` pour le mode sombre

## 📧 Configuration Email

### Resend
1. Créer un compte sur [resend.com](https://resend.com)
2. Obtenir une API key
3. Ajouter dans `.env.local` : `RESEND_API_KEY=re_xxx`
4. (Optionnel) Vérifier un domaine pour un email personnalisé

### Cloudflare Turnstile
1. Créer un site sur [dash.cloudflare.com](https://dash.cloudflare.com)
2. Obtenir Site Key et Secret Key
3. Ajouter dans `.env.local`

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installation Vercel CLI
pnpm i -g vercel

# Déploiement
vercel
```

### Configuration des variables d'environnement
Dans le dashboard Vercel, ajouter :
- `RESEND_API_KEY`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`

### Autres plateformes
- **Netlify** : Compatible avec Next.js
- **Cloudflare Pages** : Nécessite adapter la configuration
- **Docker** : Créer un Dockerfile avec `next build` et `next start`

## 📊 SEO

### Checklist avant déploiement
- [ ] Créer `og-image.jpg` (1200x630px) dans `/public`
- [ ] Remplacer `https://nicolas-faraci.dev` par votre domaine
- [ ] Configurer Google Search Console
- [ ] Soumettre le sitemap
- [ ] Vérifier les métadonnées avec [opengraph.xyz](https://www.opengraph.xyz/)

Voir `SEO-GUIDE.md` pour plus de détails.
