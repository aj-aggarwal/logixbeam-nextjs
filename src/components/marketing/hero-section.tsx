'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { companyInfo } from '@/data/company'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full blur-lg"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >


          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="block text-white">
              {companyInfo.hero.title.split(' ').slice(0, 2).join(' ')}
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {companyInfo.hero.title.split(' ').slice(2).join(' ')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed font-light"
          >
            {companyInfo.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="xl" 
                variant="gradient" 
                className="text-lg px-10 py-5 font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 animate-pulse-glow"
                asChild
              >
                <Link href="/#services" className="font-poppins">
                  <i className="fas fa-rocket mr-2"></i>
                  {companyInfo.hero.ctaText}
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="xl" 
                variant="outline" 
                className="text-lg px-10 py-5 font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:border-white/50"
                asChild
              >
                <Link href="/#contact" className="font-poppins">
                  <i className="fas fa-comment-dots mr-2"></i>
                  Get Free Consultation
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="pt-8 pb-20 border-t border-white/20"
          >
            <p className="font-body text-sm text-blue-200 mb-6 font-medium">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {[
                { number: '50+', label: 'Projects Delivered', icon: 'fas fa-rocket' },
                { number: '5+', label: 'Years Experience', icon: 'fas fa-calendar-alt' },
                { number: '24/7', label: 'Support Available', icon: 'fas fa-headset' },
                { number: '100%', label: 'Client Satisfaction', icon: 'fas fa-heart' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <i className={`${item.icon} text-blue-300 text-lg group-hover:text-white transition-colors`}></i>
                    <span className="font-heading text-2xl font-bold text-white">{item.number}</span>
                  </div>
                  <span className="font-body text-xs text-blue-200 font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="font-body text-xs text-blue-200 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
} 