"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Send, Loader2, CheckCircle2 } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form
    setFormData({ name: "", phone: "", message: "" })
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <div className="ambient-light"></div>

      <div className="container mx-auto max-w-6xl">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="section-heading text-gradient">
            Contact Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Get In Touch</h3>
              <p className="text-foreground/80 mb-10 leading-relaxed">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I'm
                always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-8">
                <motion.div className="flex items-center gap-6 group" whileHover={{ x: 5 }}>
                  <div className="flex items-center justify-center w-14 h-14 rounded-full neomorphism group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
                    <Phone className="h-6 w-6 text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Phone</p>
                    <a href="tel:+998330097978" className="font-medium text-lg hover:text-purple transition-colors">
                      +998 33 009 79 78
                    </a>
                  </div>
                </motion.div>

                <motion.div className="flex items-center gap-6 group" whileHover={{ x: 5 }}>
                  <div className="flex items-center justify-center w-14 h-14 rounded-full neomorphism group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
                    <Mail className="h-6 w-6 text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Email</p>
                    <a
                      href="mailto:saydaliyevdurbek0512@gmail.com"
                      className="font-medium text-lg hover:text-purple transition-colors"
                    >
                      saydaliyevdurbek0512@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="glassmorphism rounded-lg border border-white/10 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                      Name
                    </label>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-background/50 border-white/10 focus:border-purple/50 h-12 pl-4 transition-all duration-300 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground/80">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                        className="bg-background/50 border-white/10 focus:border-purple/50 h-12 pl-4 transition-all duration-300 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                      Message
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                        className="bg-background/50 border-white/10 focus:border-purple/50 min-h-[150px] pl-4 transition-all duration-300 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 liquid-button bg-gradient-to-r from-purple to-accent hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-500"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

