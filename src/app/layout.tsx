import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import BackToTop from "@/components/BackToTop";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Nicolas FARACI - Développeur Full-Stack & DevOps | React, Node.js, Kubernetes",
  description: "Développeur Full-Stack Senior spécialisé en React, Next.js, Spring Boot et DevOps (Kubernetes, Docker, GCP). +7 ans d'expérience chez Decathlon & Kbane. Disponible pour missions freelance à Lille.",
  keywords: [
    "développeur full-stack",
    "développeur React",
    "développeur Next.js",
    "DevOps Kubernetes",
    "ingénieur logiciel",
    "freelance développeur Lille",
    "Symfony PHP",
    "Spring Boot Java",
    "MongoDB",
    "GCP Google Cloud",
    "Docker",
    "CI/CD",
    "développeur Decathlon",
    "développeur freelance France",
    "Nicolas FARACI"
  ],
  authors: [{ name: "Nicolas FARACI" }],
  creator: "Nicolas FARACI",
  publisher: "Nicolas FARACI",
  metadataBase: new URL('https://nicolas-faraci.dev'), // À remplacer par votre domaine
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://nicolas-faraci.dev",
    siteName: "Nicolas FARACI - Portfolio",
    title: "Nicolas FARACI - Développeur Full-Stack & DevOps",
    description: "Développeur Full-Stack Senior avec +7 ans d'expérience. Expert React, Next.js, Spring Boot et DevOps (Kubernetes, GCP). Créateur d'applications scalables et performantes.",
    images: [
      {
        url: "/og-image.jpg", // À créer : image 1200x630px
        width: 1200,
        height: 630,
        alt: "Nicolas FARACI - Développeur Full-Stack & DevOps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas FARACI - Développeur Full-Stack & DevOps",
    description: "Expert React, Next.js, Spring Boot et Kubernetes. +7 ans d'expérience chez Decathlon & Kbane.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-google-search-console', // À remplacer
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const theme = savedTheme || systemTheme;
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
        {/* Schema.org structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nicolas FARACI",
              "url": "https://nicolas-faraci.dev",
              "image": "https://nicolas-faraci.dev/profile.png",
              "jobTitle": "Développeur Full-Stack Senior & DevOps Engineer",
              "description": "Développeur Full-Stack avec +7 ans d'expérience spécialisé en React, Next.js, Spring Boot et DevOps (Kubernetes, Docker, GCP)",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lille",
                "addressCountry": "FR"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "IMT Lille Douai"
              },
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "PHP Symfony",
                "Spring Boot",
                "MongoDB",
                "Kubernetes",
                "Docker",
                "Google Cloud Platform",
                "DevOps",
                "CI/CD"
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Decathlon"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/in/nicolas-faraci",
                "https://github.com/FlyzCorp"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Navigation />
          <ThemeToggle />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
