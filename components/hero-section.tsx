"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { gsap } from "gsap"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  // 3D Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { width, height, left, top } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // GSAP animations for background elements
  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(".bg-circle", {
      duration: 20,
      rotation: 360,
      repeat: -1,
      ease: "none",
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-20 px-6"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-circle absolute top-1/4 -left-[300px] w-[600px] h-[600px] rounded-full border border-purple/10 opacity-20"></div>
        <div className="bg-circle absolute bottom-1/4 -right-[200px] w-[400px] h-[400px] rounded-full border border-accent/10 opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-purple/30 animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-accent/30 animate-pulse-glow"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-gold/30 animate-pulse-glow"></div>
      </div>

      <motion.div
        style={{
          opacity,
          scale,
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="text-sm md:text-base uppercase tracking-widest text-purple">Welcome to my portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight glow"
          style={{
            transform: `perspective(1000px) 
                       rotateX(${mousePosition.y * 5}deg) 
                       rotateY(${-mousePosition.x * 5}deg)`,
          }}
        >
          Durbek Saydaliyev
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-foreground/80 mb-8 h-[60px] md:h-[40px]"
        >
          <TypeAnimation
            sequence={["Software Engineer", 1000, "API Performance Specialist", 1000, "Cloud Architect", 1000]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
            className="text-gradient"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10"
        >
          Building robust backend systems and optimizing API performance with a focus on scalability and efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <Button
            className="liquid-button group bg-gradient-to-r from-purple to-accent hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-500"
            size="lg"
            asChild
          >
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Link>
          </Button>

          <div className="flex space-x-4 items-center">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }} className="relative">
              <Link
                href="https://github.com/Durbekjon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-purple/20 transition-colors border border-white/10 hover:border-purple/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.95 }} className="relative">
              <Link
                href="https://linkedin.com/in/durbek-saydaliyev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-purple/20 transition-colors border border-white/10 hover:border-purple/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }} className="relative">
              <Link
                href="mailto:saydaliyevdurbek0512@gmail.com"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-purple/20 transition-colors border border-white/10 hover:border-purple/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float"
      >
        <Link href="#about" aria-label="Scroll to About section">
          <ChevronDown className="h-8 w-8 text-foreground/50 hover:text-purple transition-colors" />
        </Link>
      </motion.div>
    </section>
  )
}

