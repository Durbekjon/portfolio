"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Analytics() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Add smooth scrolling to all sections
    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll("h2, h3, p, .animate-gsap"),
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Add parallax effect to background elements
    const bgElements = document.querySelectorAll(".bg-circle")
    bgElements.forEach((el) => {
      gsap.to(el, {
        y: -50,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    })
  }, [])

  return null
}

