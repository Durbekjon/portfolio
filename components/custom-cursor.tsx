"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseEnter = () => {
      setHidden(false)
      document.body.classList.add("custom-cursor-active")
    }

    const onMouseLeave = () => {
      setHidden(true)
      document.body.classList.remove("custom-cursor-active")
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, [role=button]").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true))
        el.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    addEventListeners()
    handleLinkHoverEvents()
    setHidden(false)

    return () => {
      removeEventListeners()
      document.body.classList.remove("custom-cursor-active")
    }
  }, [])

  return (
    <div className="hidden md:block">
      <motion.div
        className={`fixed top-0 left-0 z-50 pointer-events-none ${hidden ? "opacity-0" : "opacity-100"}`}
        animate={{
          x: position.x - (linkHovered ? 16 : 4),
          y: position.y - (linkHovered ? 16 : 4),
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            linkHovered ? "bg-transparent border-2 border-purple mix-blend-difference" : "bg-purple/50 backdrop-blur-sm"
          }`}
        >
          {linkHovered && <div className="w-1 h-1 bg-white rounded-full"></div>}
        </div>
      </motion.div>
      <motion.div
        className={`fixed top-0 left-0 z-50 pointer-events-none ${hidden ? "opacity-0" : "opacity-100"}`}
        animate={{
          x: position.x,
          y: position.y,
          scale: clicked ? 1 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1500,
          damping: 50,
          mass: 0.3,
        }}
      >
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </motion.div>
    </div>
  )
}

