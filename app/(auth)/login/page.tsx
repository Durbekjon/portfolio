"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    await new Promise((resolve) => setTimeout(resolve, 1500))

    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-circle absolute top-1/4 -left-[300px] w-[600px] h-[600px] rounded-full border border-purple/10 opacity-20"></div>
        <div className="bg-circle absolute bottom-1/4 -right-[200px] w-[400px] h-[400px] rounded-full border border-accent/10 opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-purple/30 animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-accent/30 animate-pulse-glow"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="glassmorphism rounded-lg border border-white/10 p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-bold text-gradient mb-2">DS</h1>
            </Link>
            <p className="text-foreground/60">Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="bg-background/50 border-white/10 focus:border-purple/50 h-12 pl-4 transition-all duration-300 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground/80">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                className="bg-background/50 border-white/10 focus:border-purple/50 h-12 pl-4 transition-all duration-300 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 liquid-button bg-gradient-to-r from-purple to-accent hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-500"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-foreground/60 hover:text-purple transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

