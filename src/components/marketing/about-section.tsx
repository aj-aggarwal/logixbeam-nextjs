'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { companyInfo } from '@/data/company'

// Counter animation hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  const animate = () => {
    if (hasAnimated) return
    setHasAnimated(true)
    
    let startTime: number
    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }

  return { count, animate }
}

function StatCard({ 
  number, 
  suffix = '', 
  label, 
  icon, 
  delay = 0 
}: { 
  number: number
  suffix?: string
  label: string
  icon: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { count, animate } = useCounter(number)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(animate, delay)
      return () => clearTimeout(timer)
    }
  }, [isInView, animate, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <i className={`${icon} text-2xl text-white`}></i>
      </div>
      <motion.div 
        className="text-4xl font-bold text-gray-900 mb-2"
        animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
        transition={{ duration: 0.5, delay: (delay + 1000) / 1000 }}
      >
        {count}{suffix}
      </motion.div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  )
}

export function AboutSection() {
  const stats = [
    { number: 50, suffix: '+', label: 'Projects Completed', icon: 'fas fa-rocket', delay: 0 },
    { number: 5, suffix: '+', label: 'Years Experience', icon: 'fas fa-calendar-alt', delay: 200 },
    { number: 24, suffix: '/7', label: 'Support Available', icon: 'fas fa-headset', delay: 400 },
    { number: 100, suffix: '%', label: 'Client Satisfaction', icon: 'fas fa-heart', delay: 600 },
  ]

  const achievements = [
    { title: '99.9% Uptime', description: 'Guaranteed server reliability' },
    { title: 'Lightning Fast', description: 'Average 2s page load time' },
    { title: 'Secure & Safe', description: 'Enterprise-grade security' },
    { title: 'Global Reach', description: 'Clients across 10+ countries' },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 mb-6 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-purple-500 rounded-full mr-2"
            />
            About LogixBeam
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Transforming Ideas Into Digital Reality
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re a passionate team of developers, designers, and strategists dedicated to creating exceptional digital experiences that drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {companyInfo.about.whoWeAre.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {companyInfo.about.whoWeAre.description}
            </p>
            
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              {companyInfo.about.ourMission.title}
            </h4>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {companyInfo.about.ourMission.description}
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100"
                >
                  <div className="font-bold text-blue-600 text-sm">
                    {achievement.title}
                  </div>
                  <div className="text-gray-600 text-xs mt-1">
                    {achievement.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="/images/about-us.jpg"
                alt="LogixBeam Team"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl"
              >
                <i className="fas fa-code text-2xl text-white"></i>
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl"
              >
                <i className="fas fa-lightbulb text-xl text-white"></i>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-lg text-gray-600">
              Trusted by businesses worldwide to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Certified & Trusted
              </h4>
              <p className="text-sm text-gray-600">
                Industry-recognized standards and partnerships
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['ISO Certified', 'GDPR Compliant', 'SOC 2 Type II', 'AWS Partner', '24/7 Monitoring'].map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm border"
                >
                  <i className="fas fa-shield-alt text-green-500 text-sm"></i>
                  <span className="text-sm font-medium text-gray-700">{badge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 