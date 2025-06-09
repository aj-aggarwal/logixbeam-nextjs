import Link from 'next/link'
import Image from 'next/image'
import { companyInfo } from '@/data/company'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-8 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/logo.png"
                alt={companyInfo.name}
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">{companyInfo.name}</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {companyInfo.description}
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt w-4"></i>
                <span>{companyInfo.contact.address.full}</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone w-4"></i>
                <a href={`tel:${companyInfo.contact.phone}`} className="hover:text-blue-400">
                  {companyInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-envelope w-4"></i>
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-blue-400">
                  {companyInfo.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-blue-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="hover:text-blue-400 transition-colors">
                  Mobile Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/ecommerce-solutions" className="hover:text-blue-400 transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integrations" className="hover:text-blue-400 transition-colors">
                  AI Integrations
                </Link>
              </li>
              <li>
                <Link href="/services/saas-applications" className="hover:text-blue-400 transition-colors">
                  SaaS Applications
                </Link>
              </li>
              <li>
                <Link href="/services/third-party-integrations" className="hover:text-blue-400 transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href={companyInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href={companyInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href={companyInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href={companyInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white hover:from-purple-700 hover:to-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ in India</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 