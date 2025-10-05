import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import BackToTop from "@/components/BackToTop";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Nicolas FARACI - CV Dynamique",
  description: "CV interactif de Nicolas FARACI - Développeur passionné",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
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
