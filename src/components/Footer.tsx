import { motion } from 'motion/react'
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@mui/material'
import { portfolioData } from '../data'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{portfolioData.personal.name}</h3>
            <p className="text-muted-foreground">
              {portfolioData.personal.title} passionate about creating innovative web applications 
              and beautiful user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Social Links & Back to Top */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Connected</h4>
            <p className="text-sm text-muted-foreground">
              Follow my journey and get updates on new projects and articles.
            </p>
            <div className="flex gap-2 flex-wrap">
              {portfolioData.socialLinks.map((social) => {
                const Icon = social.iconType === 'github' ? Github : 
                           social.iconType === 'linkedin' ? Linkedin : Github;
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md bg-card hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
              <Button
                variant="outlined"
                size="small"
                onClick={scrollToTop}
                className="group"
                sx={{ textTransform: 'none' }}
              >
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} {portfolioData.personal.name}. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <span>and lots of coffee.</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              className="hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}