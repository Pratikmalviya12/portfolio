import { useEffect } from 'react'
import { ThemeProvider } from './components/ThemeProvider'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { SnackbarProvider } from 'notistack'

export default function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = target.getAttribute('href')?.substring(1)
        const element = document.getElementById(id!)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <ThemeProvider>
      <SnackbarProvider maxSnack={3}>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <section id="hero">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  )
}