"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "Narosoft",
    position: "Software Engineer",
    period: "November 2024 - Present",
    description:
      "Working on backend development for enterprise applications, focusing on API optimization and scalable architecture.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Redis"],
  },
  {
    company: "Codevision",
    position: "Backend Developer",
    period: "September 2023 - Present",
    description:
      "Developed and maintained RESTful APIs, implemented RBAC systems, and worked on CRM development for various clients.",
    technologies: ["Node.js", "Nest.js", "MongoDB", "AWS S3"],
  },
  {
    company: "IT Progress Software",
    position: "Intern Backend Developer",
    period: "July 2023 - September 2023",
    description:
      "Assisted in developing backend services, learned about database design, and contributed to file storage management systems.",
    technologies: ["JavaScript", "Express.js", "MySQL"],
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="experience" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <div className="ambient-light"></div>

      <div className="container mx-auto max-w-5xl">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="section-heading text-gradient">
            Experience
          </motion.h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="group" whileHover={{ scale: 1.02 }}>
                <div className="glassmorphism rounded-lg overflow-hidden border border-white/10 group-hover:border-purple/30 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                  <div className="p-8 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple to-accent"></div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                      <h3 className="text-2xl font-bold">{exp.position}</h3>
                      <Badge
                        variant="outline"
                        className="w-fit px-3 py-1 text-sm bg-background/50 backdrop-blur-sm border-white/10"
                      >
                        {exp.period}
                      </Badge>
                    </div>

                    <p className="text-xl font-medium text-gold mb-4">{exp.company}</p>

                    <p className="text-foreground/80 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="px-3 py-1 text-xs bg-purple/10 text-purple border border-purple/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

