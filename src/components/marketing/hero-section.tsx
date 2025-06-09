'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { companyInfo } from '@/data/company'

export function HeroSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-32">
      {/* Hero Banner Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-banner.jpg')`,
          }}
        />
        {/* Professional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/85 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-blue-900/80" />
      </div>

      {/* Subtle Geometric Accents */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Professional floating elements */}
        {isClient && [...Array(8)].map((_, i) => {
          const positions = [
            { x1: 15, y1: 20, x2: 25, y2: 30 },
            { x1: 80, y1: 25, x2: 85, y2: 35 },
            { x1: 10, y1: 60, x2: 20, y2: 70 },
            { x1: 75, y1: 70, x2: 85, y2: 80 },
            { x1: 90, y1: 15, x2: 95, y2: 25 },
            { x1: 5, y1: 85, x2: 15, y2: 90 },
            { x1: 40, y1: 10, x2: 50, y2: 20 },
            { x1: 60, y1: 85, x2: 70, y2: 95 }
          ];
          
          const pos = positions[i] || positions[0];
          
          return (
            <motion.div
              key={i}
              initial={{ 
                x: `${pos.x1}vw`,
                y: `${pos.y1}vh`,
                opacity: 0 
              }}
              animate={{
                x: [`${pos.x1}vw`, `${pos.x2}vw`, `${pos.x1}vw`],
                y: [`${pos.y1}vh`, `${pos.y2}vh`, `${pos.y1}vh`],
                opacity: [0, 0.15, 0],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 15 + (i * 2),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
              className={`absolute w-4 h-4 ${
                i % 3 === 0 
                  ? 'bg-blue-400/20 rounded-sm rotate-45' 
                  : i % 3 === 1 
                  ? 'bg-sky-400/20 rounded-full' 
                  : 'bg-slate-300/20 rounded-sm'
              } blur-sm`}
            />
          )
        })}

        {/* Subtle grid pattern */}
        <motion.div
          animate={{ opacity: [0.02, 0.08, 0.02] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight"
          >
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-white drop-shadow-2xl"
            >
              {companyInfo.hero.title.split(' ').slice(0, -3).join(' ')}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="block bg-gradient-to-r from-blue-400 via-sky-400 to-slate-300 bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 4s ease infinite',
              }}
            >
              {companyInfo.hero.title.split(' ').slice(-3).join(' ')}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-body text-lg sm:text-xl lg:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
            >
              {companyInfo.hero.subtitle}
            </motion.span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 80px rgba(30, 64, 175, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-sky-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Button 
                size="xl" 
                variant="gradient" 
                className="relative text-base px-8 py-4 font-bold rounded-xl transform transition hover:scale-105 bg-gradient-to-r from-blue-800 to-sky-500"
                asChild
              >
                <Link href="/#services" className="font-poppins flex items-center">
                  <motion.i 
                    className="fas fa-code mr-3 text-xl"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 4 }}
                  />
                  {companyInfo.hero.ctaText}
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Button 
                size="xl" 
                variant="outline" 
                className="text-base px-8 py-4 font-semibold bg-white/10 border-2 border-slate-300/30 text-white hover:bg-white/15 backdrop-blur-lg transition-all duration-300 hover:border-slate-300/60 rounded-xl"
                asChild
              >
                <Link href="/#contact" className="font-poppins flex items-center">
                  <motion.i 
                    className="fas fa-handshake mr-3 text-xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                  Get Free Consultation
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Professional Company Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="pt-4 pb-8 relative"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="w-24 h-px bg-gradient-to-r from-transparent via-slate-300/30 to-transparent mx-auto mb-6"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto">
              {[
                { title: 'Expert Development', description: 'Cutting-edge solutions with modern technologies', icon: 'fas fa-laptop-code' },
                { title: 'Dedicated Support', description: '24/7 technical assistance and maintenance', icon: 'fas fa-headset' },
                { title: 'Scalable Solutions', description: 'Built to grow with your business needs', icon: 'fas fa-chart-line' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.7 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2
                  }}
                  className="text-center group cursor-pointer p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-sky-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-blue-500/30 group-hover:to-sky-500/30 transition-all duration-300"
                  >
                    <i className={`${item.icon} text-blue-300 text-xl group-hover:text-white transition-colors duration-300`}></i>
                  </motion.div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-slate-300 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>


    </section>
  )
} 