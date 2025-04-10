"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-gradient font-bold text-2xl">
              Durbek Saydaliyev
            </Link>
            <p className="text-foreground/60 mt-2">Software Engineer | API Performance Specialist | Cloud Architect</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/Durbekjon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-purple/20 transition-colors border border-white/10 hover:border-purple/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://linkedin.com/in/durbek-saydaliyev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-purple/20 transition-colors border border-white/10 hover:border-purple/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="mailto:saydaliyevdurbek0512@gmail.com"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-purple/20 transition-colors border border-white/10 hover:border-purple/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Durbek Saydaliyev. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-purple/20 transition-colors border border-white/10 hover:border-purple/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

