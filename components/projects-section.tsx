"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Manageme",
    description:
      "A comprehensive project management system with task tracking, team collaboration, and reporting features.",
    longDescription:
      "Manageme is a full-featured project management platform designed to streamline workflow and enhance team collaboration. The system includes task tracking with priority levels, team member assignment, real-time updates, and comprehensive reporting tools. The backend architecture is built with scalability in mind, utilizing Node.js and Express.js with a PostgreSQL database for data persistence and Redis for caching frequently accessed data.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYjId7SlzKH7LLy35zZAN0x0pCs4gRq5y7zw&s",
    height: 300,
  },
  {
    title: "Akfamakon",
    description: "E-commerce platform with product catalog, shopping cart, payment integration, and order management.",
    longDescription:
      "Akfamakon is a robust e-commerce solution that provides businesses with a complete online shopping experience. The platform features a comprehensive product catalog system, user authentication, shopping cart functionality, secure payment processing integration, and order management. The backend is built with Nest.js for a modular architecture, MongoDB for flexible data storage, and AWS S3 for efficient product image management.",
    technologies: ["Nest.js", "MongoDB", "AWS S3", "TypeScript"],
    github: "#",
    demo: "https://akfamakon.uz/",
    image: "https://akfamakon.s3.ap-south-1.amazonaws.com/folder_name/1721386277690.jpeg",
    height: 400,
  },
  {
    title: "NSPI",
    description:
      "University DevOps process automation tool for streamlining deployment pipelines and infrastructure management.",
    longDescription:
      "NSPI is a specialized DevOps automation tool developed for university environments to streamline deployment processes and infrastructure management. The system automates CI/CD pipelines, manages infrastructure configurations, and provides monitoring capabilities. Built with Node.js and Express.js, it integrates with Git for version control and uses MySQL for storing configuration and deployment data.",
    technologies: ["Node.js", "Express.js", "MySQL", "Git"],
    github: "#",
    demo: "https://nsu.uz/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLu0t6lHK8xjLl9g_t6mzvU9tQEfoDkcqaQ&s",
    height: 350,
  },
  {
    title: "Enterprise-management-crm",
    description: "Ongoing CRM system with customer management, sales tracking, and reporting capabilities.",
    longDescription:
      "Enterprise-management-crm is a comprehensive customer relationship management system designed for enterprise-level businesses. The platform includes customer data management, sales pipeline tracking, task management, and advanced reporting capabilities. The backend is built with Nest.js for a scalable architecture, PostgreSQL for relational data storage, and Redis for caching to ensure optimal performance even with large datasets.",
    technologies: ["Nest.js", "PostgreSQL", "Redis", "TypeScript"],
    github: "https://github.com/Durbekjon/Eventify",
    demo: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeT4foUogZK5POuy8AUFucpPiShcnPnCFYQ&s",
    height: 320,
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

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

  return (
    <section id="projects" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <div className="ambient-light"></div>

      <div className="container mx-auto max-w-6xl">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="section-heading text-gradient">
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }} className="h-full">
                <div
                  className="glassmorphism h-full rounded-lg overflow-hidden border border-white/10 hover:border-purple/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden h-[200px]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Button variant="outline" size="sm" className="bg-background/20 backdrop-blur-md border-white/10">
                        View Details
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="px-2 py-1 text-xs bg-background/50 backdrop-blur-sm border-white/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-end space-x-4">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/50 hover:text-purple transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/50 hover:text-purple transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="glassmorphism rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="relative h-[300px]">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>

                <button
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/50 backdrop-blur-sm text-foreground/70 hover:text-white transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gradient">{selectedProject.title}</h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} className="px-3 py-1 text-xs bg-purple/10 text-purple border border-purple/30">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="text-foreground/80 mb-8 leading-relaxed">{selectedProject.longDescription}</p>

                <div className="flex justify-between items-center">
                  <div className="space-x-4">
                    <Button asChild>
                      <Link
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="liquid-button"
                      >
                        Live Demo
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        View Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

