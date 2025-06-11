'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { companyInfo } from '@/data/company'

export function AboutSection() {
  const achievements = [
    { title: 'Modern Tech Stack', description: 'Latest technologies and frameworks' },
    { title: 'Agile Methodology', description: 'Flexible and iterative development' },
    { title: 'Quality Assurance', description: 'Comprehensive testing and optimization' },
    { title: 'Continuous Support', description: 'Ongoing maintenance and updates' },
  ]

  const coreValues = [
    { title: 'Quality First', description: 'Every line of code is crafted with precision and attention to detail', icon: 'fas fa-gem' },
    { title: 'Client-Focused', description: 'Your success is our priority - we listen, understand, and deliver', icon: 'fas fa-user-friends' },
    { title: 'Modern Solutions', description: 'Latest technologies and best practices for future-ready applications', icon: 'fas fa-rocket' },
    { title: 'Transparent Process', description: 'Clear communication and regular updates throughout your project journey', icon: 'fas fa-eye' },
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
            className="inline-flex items-center px-4 py-2 mb-6 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-blue-600 rounded-full mr-2"
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
                  className="p-4 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl border border-blue-100"
                >
                  <div className="font-bold text-blue-700 text-sm">
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
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl flex items-center justify-center shadow-xl"
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
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-xl"
              >
                <i className="fas fa-lightbulb text-xl text-white"></i>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 via-white to-sky-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose LogixBeam
            </h3>
            <p className="text-lg text-gray-600">
              Our commitment to excellence drives everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Technologies We Work With
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[
                'React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL',
                'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'Python', 'Django',
                'Laravel', 'Livewire', 'Vue.js'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.6, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  className="text-sm font-medium text-gray-600 px-3 py-1 bg-white rounded-full border border-gray-200 hover:border-blue-300 transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 