"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SkillCard from "@/components/skill-card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const skills = {
  languages: ["JavaScript", "TypeScript"],
  backend: ["Node.js", "Express.js", "Nest.js"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  cloud: ["AWS S3", "Git"],
}

const experiences = [
  {
    year: "2024",
    title: "Software Engineer",
    company: "Narosoft",
    description:
      "Working on backend development for enterprise applications, focusing on API optimization and scalable architecture.",
  },
  {
    year: "2023",
    title: "Backend Developer",
    company: "Codevision",
    description:
      "Developed and maintained RESTful APIs, implemented RBAC systems, and worked on CRM development for various clients.",
  },
  {
    year: "2023",
    title: "Intern Backend Developer",
    company: "IT Progress Software",
    description:
      "Assisted in developing backend services, learned about database design, and contributed to file storage management systems.",
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <div className="ambient-light"></div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-heading text-gradient">
            About Me
          </motion.h2>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a Backend Software Engineer with expertise in building scalable and efficient server-side
                applications. My focus is on creating robust APIs, optimizing performance, and implementing secure
                authentication systems.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With experience in API optimization, RBAC systems, CRM development, and file storage management, I
                strive to deliver high-quality solutions that meet business requirements while maintaining clean,
                maintainable code.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm passionate about learning new technologies and continuously improving my skills to stay at the
                forefront of backend development.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SkillCard title="Programming Languages" skills={skills.languages} />
              <SkillCard title="Backend" skills={skills.backend} />
              <SkillCard title="Databases" skills={skills.databases} />
              <SkillCard title="Cloud & DevOps" skills={skills.cloud} />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-gradient">
            Career Timeline
          </motion.h3>

          <ScrollArea className="w-full whitespace-nowrap rounded-md border border-white/10 glassmorphism">
            <div className="flex p-4 gap-8">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} className="flex-shrink-0 w-[300px] md:w-[400px]">
                  <div className="glassmorphism rounded-lg p-6 h-full border border-white/10 hover:border-purple/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                    <div className="text-purple font-bold text-lg mb-2">{exp.year}</div>
                    <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                    <div className="text-gold mb-4">{exp.company}</div>
                    <p className="max-h-32 overflow-hidden text-ellipsis break-words">
  {exp.description}
</p>

                  </div>
                </motion.div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </motion.div>
      </div>
    </section>
  )
}

