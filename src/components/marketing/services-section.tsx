'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { services } from '@/data/services'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
            className="inline-flex items-center px-4 py-2 mb-6 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-blue-600 rounded-full mr-2"
            />
            Our Services
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we deliver cutting-edge technology solutions that drive business growth and digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              variants={itemVariants}
              onHoverStart={() => setHoveredService(service.slug)}
              onHoverEnd={() => setHoveredService(null)}
              className="group"
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      animate={{
                        scale: hoveredService === service.slug ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full h-full"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                    
                    {/* Overlay */}
                    <motion.div
                      animate={{
                        opacity: hoveredService === service.slug ? 0.6 : 0.3,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-700/30 to-transparent"
                    />
                    
                    {/* Icon */}
                    <motion.div
                      animate={{
                        scale: hoveredService === service.slug ? 1.2 : 1,
                        rotate: hoveredService === service.slug ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center"
                    >
                      <i className={`${service.features[0]?.icon || 'fas fa-cog'} text-xl text-blue-600`}></i>
                    </motion.div>

                    {/* Hover Effect Overlay */}
                    <motion.div
                      animate={{
                        opacity: hoveredService === service.slug ? 1 : 0,
                        y: hoveredService === service.slug ? 0 : 20,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/90 backdrop-blur-sm text-blue-600 border-white/50 hover:bg-white hover:scale-105 transition-all duration-200"
                        asChild
                      >
                        <Link href={`/services/${service.slug}`}>
                          Learn More →
                        </Link>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <motion.h3
                      animate={{
                        color: hoveredService === service.slug ? '#1e40af' : '#111827',
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-xl font-bold mb-3 group-hover:text-blue-800 transition-colors"
                    >
                      {service.title}
                    </motion.h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Technologies */}
                    {service.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.technologies.slice(0, 3).map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {service.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full font-medium">
                            +{service.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Spacer to push button to bottom */}
                    <div className="flex-grow"></div>

                    {/* Learn More Button */}
                    <motion.div
                      animate={{
                        scale: hoveredService === service.slug ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 border-t border-gray-100 mt-auto"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-blue-600 hover:bg-blue-50"
                        asChild
                      >
                        <Link href={`/services/${service.slug}`}>
                          View Details →
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="gradient" 
              className="text-lg px-8 py-4 shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
              asChild
            >
              <Link href="/#contact">
                Discuss Your Project
              </Link>
            </Button>
          </motion.div>
          <p className="text-sm text-gray-500 mt-4">
            Free consultation • No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  )
} 