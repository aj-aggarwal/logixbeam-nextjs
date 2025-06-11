export interface Service {
  id: string
  title: string
  description: string
  image: string
  slug: string
  hero: {
    title: string
    subtitle: string
  }
  introduction: {
    title: string
    description: string
  }
  features: Array<{
    icon: string
    title: string
    description: string
  }>
  technologies?: string[]
  process?: Array<{
    step: number
    title: string
    description: string
  }>
  benefits?: Array<{
    icon: string
    title: string
    description: string
  }>
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web solutions tailored to your business needs. We build responsive, user-friendly websites.',
    image: '/images/web-dev.jpg',
    slug: 'web-development',
    hero: {
      title: 'Web Development Services',
      subtitle: 'Building powerful, scalable, and user-friendly web solutions'
    },
    introduction: {
      title: 'Transform Your Digital Presence',
      description: 'Our expert web development team creates innovative, responsive, and high-performance websites that help businesses establish a strong online presence and achieve their digital goals.'
    },
    features: [
      {
        icon: 'fas fa-code',
        title: 'Custom Development',
        description: 'Tailored web solutions that perfectly match your business requirements and objectives.'
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Responsive Design',
        description: 'Mobile-first websites that provide seamless experiences across all devices and screen sizes.'
      },
      {
        icon: 'fas fa-shopping-cart',
        title: 'E-commerce Solutions',
        description: 'Secure and scalable online stores with seamless payment gateway integration.'
      },
      {
        icon: 'fas fa-pencil-alt',
        title: 'CMS Integration',
        description: 'User-friendly content management systems for easy website updates and maintenance.'
      },
      {
        icon: 'fas fa-tachometer-alt',
        title: 'Performance Optimization',
        description: 'Fast-loading websites optimized for search engines and user experience.'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Security Features',
        description: 'Advanced security measures to protect your website and user data.'
      }
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'PHP']
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Build scalable and user-friendly mobile applications for iOS and Android platforms.',
    image: '/images/mobile-app.jpg',
    slug: 'mobile-development',
    hero: {
      title: 'Mobile App Development',
      subtitle: 'Creating powerful, user-friendly mobile experiences for iOS and Android'
    },
    introduction: {
      title: 'Transform Your Ideas into Mobile Reality',
      description: 'Our expert mobile development team crafts innovative, scalable, and engaging mobile applications that help businesses reach their audience effectively across all platforms.'
    },
    features: [
      {
        icon: 'fas fa-mobile-alt',
        title: 'Native Apps',
        description: 'High-performance native applications for iOS and Android platforms using Swift, Kotlin, and Java.'
      },
      {
        icon: 'fas fa-code',
        title: 'Cross-Platform',
        description: 'Cost-effective solutions using React Native and Flutter for multiple platform deployment.'
      },
      {
        icon: 'fas fa-paint-brush',
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces that follow platform-specific design guidelines and best practices.'
      },
      {
        icon: 'fas fa-cloud',
        title: 'Backend Integration',
        description: 'Robust backend services, APIs, and cloud infrastructure for scalable applications.'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Security',
        description: 'Advanced security measures to protect user data and ensure safe transactions.'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Analytics',
        description: 'Built-in analytics and monitoring tools to track user behavior and app performance.'
      }
    ],
    technologies: ['Swift', 'Kotlin', 'Java', 'React Native', 'Flutter', 'Firebase']
  },
  {
    id: 'ecommerce-solutions',
    title: 'Ecommerce Solutions',
    description: 'Create seamless online shopping experiences with our custom eCommerce solutions.',
    image: '/images/ecommerce.jpg',
    slug: 'ecommerce-solutions',
    hero: {
      title: 'E-commerce Solutions',
      subtitle: 'Transform Your Business with Powerful Online Store Solutions'
    },
    introduction: {
      title: 'Complete E-commerce Solutions',
      description: 'We deliver comprehensive e-commerce solutions that help businesses create powerful online stores, manage inventory efficiently, and provide seamless shopping experiences to their customers.'
    },
    features: [
      {
        icon: 'fas fa-store',
        title: 'Custom Store Development',
        description: 'Fully customized online stores built to match your brand identity and business requirements.'
      },
      {
        icon: 'fas fa-credit-card',
        title: 'Payment Integration',
        description: 'Secure payment gateway integration supporting multiple payment methods and currencies.'
      },
      {
        icon: 'fas fa-boxes',
        title: 'Inventory Management',
        description: 'Advanced inventory tracking system with real-time updates and automated notifications.'
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile Commerce',
        description: 'Responsive design ensuring perfect shopping experience across all devices.'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Analytics & Reporting',
        description: 'Comprehensive analytics dashboard for tracking sales, customer behavior, and performance.'
      },
      {
        icon: 'fas fa-users',
        title: 'Customer Management',
        description: 'Built-in CRM tools for managing customer relationships and support.'
      }
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'Custom Solutions'],
    benefits: [
      {
        icon: 'fas fa-rocket',
        title: 'High Performance',
        description: 'Lightning-fast loading speeds and optimized performance for better user experience and higher conversions.'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Enhanced Security',
        description: 'Advanced security measures to protect your store and customer data from threats.'
      },
      {
        icon: 'fas fa-expand-arrows-alt',
        title: 'Scalable Solution',
        description: 'Flexible architecture that grows with your business and handles increased traffic.'
      },
      {
        icon: 'fas fa-tools',
        title: 'Easy Management',
        description: 'User-friendly admin panel for easy store management and content updates.'
      }
    ]
  },
  {
    id: 'ai-integrations',
    title: 'AI Integrations',
    description: 'Integrate AI solutions like chatbots, computer vision, and predictive analytics into your systems.',
    image: '/images/ai-integrations.jpg',
    slug: 'ai-integrations',
    hero: {
      title: 'AI Integration Services',
      subtitle: 'Transform Your Business with Intelligent AI Solutions'
    },
    introduction: {
      title: 'Intelligent Solutions for Modern Businesses',
      description: 'We help businesses leverage the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions that drive growth and innovation.'
    },
    features: [
      {
        icon: 'fas fa-robot',
        title: 'Chatbot Integration',
        description: 'Intelligent conversational AI solutions for customer support and engagement.'
      },
      {
        icon: 'fas fa-brain',
        title: 'Machine Learning',
        description: 'Custom ML models for prediction, classification, and pattern recognition.'
      },
      {
        icon: 'fas fa-eye',
        title: 'Computer Vision',
        description: 'Image and video analysis solutions for object detection and recognition.'
      },
      {
        icon: 'fas fa-language',
        title: 'NLP Solutions',
        description: 'Natural Language Processing for text analysis and understanding.'
      },
      {
        icon: 'fas fa-chart-bar',
        title: 'Predictive Analytics',
        description: 'Data-driven insights and forecasting for business intelligence.'
      },
      {
        icon: 'fas fa-cogs',
        title: 'Process Automation',
        description: 'Intelligent automation solutions for business processes.'
      }
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'AWS AI', 'Google Cloud AI', 'Azure AI'],
    process: [
      {
        step: 1,
        title: 'Assessment',
        description: 'Evaluate your needs and identify AI opportunities for your business'
      },
      {
        step: 2,
        title: 'Data Preparation',
        description: 'Collect, clean, and prepare data for AI model training'
      },
      {
        step: 3,
        title: 'Development',
        description: 'Build and train custom AI models for your specific needs'
      },
      {
        step: 4,
        title: 'Integration',
        description: 'Seamlessly integrate AI solutions into your existing systems'
      }
    ]
  },
  {
    id: 'saas-applications',
    title: 'SaaS Applications',
    description: 'Build scalable and secure SaaS platforms tailored to your business needs.',
    image: '/images/saas-applications.jpg',
    slug: 'saas-applications',
    hero: {
      title: 'SaaS Application Development',
      subtitle: 'Build scalable and secure Software-as-a-Service platforms'
    },
    introduction: {
      title: 'Enterprise-Grade SaaS Solutions',
      description: 'We design and develop comprehensive SaaS applications that help businesses scale their operations, reduce costs, and deliver value to their customers through cloud-based solutions.'
    },
    features: [
      {
        icon: 'fas fa-cloud',
        title: 'Cloud-Native Architecture',
        description: 'Scalable cloud infrastructure designed for high availability and performance.'
      },
      {
        icon: 'fas fa-users',
        title: 'Multi-Tenant Systems',
        description: 'Secure multi-tenant architecture with data isolation and customization options.'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Analytics Dashboard',
        description: 'Comprehensive reporting and analytics for business insights and decision making.'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Enterprise Security',
        description: 'Advanced security features including SSO, encryption, and compliance standards.'
      },
      {
        icon: 'fas fa-cogs',
        title: 'API Integration',
        description: 'RESTful APIs and third-party integrations for seamless workflow automation.'
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile Ready',
        description: 'Responsive design and mobile applications for on-the-go access.'
      }
    ],
    technologies: ['Node.js', 'React', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL']
  },
  {
    id: 'third-party-integrations',
    title: 'Third-Party Integrations',
    description: 'Seamlessly integrate third-party services like payment gateways, APIs, and analytics tools.',
    image: '/images/third-party-integrations.jpg',
    slug: 'third-party-integrations',
    hero: {
      title: 'Third-Party Integration Services',
      subtitle: 'Connect your systems with powerful third-party services and APIs'
    },
    introduction: {
      title: 'Seamless System Integration',
      description: 'We help businesses integrate with leading third-party services and APIs to extend functionality, automate workflows, and create comprehensive digital ecosystems.'
    },
    features: [
      {
        icon: 'fas fa-credit-card',
        title: 'Payment Gateways',
        description: 'Integration with payment processors like Stripe, PayPal, and regional payment solutions.'
      },
      {
        icon: 'fas fa-envelope',
        title: 'Email Marketing',
        description: 'Connect with email marketing platforms like Mailchimp, SendGrid, and campaign management tools.'
      },
      {
        icon: 'fas fa-chart-bar',
        title: 'Analytics Tools',
        description: 'Integrate Google Analytics, Mixpanel, and custom analytics solutions for data insights.'
      },
      {
        icon: 'fas fa-users',
        title: 'CRM Systems',
        description: 'Seamless integration with Salesforce, HubSpot, and other customer relationship management platforms.'
      },
      {
        icon: 'fas fa-comments',
        title: 'Communication APIs',
        description: 'Integration with WhatsApp Business, Twilio, and other communication service providers.'
      },
      {
        icon: 'fas fa-cloud',
        title: 'Cloud Services',
        description: 'Connect with AWS, Google Cloud, Azure, and other cloud infrastructure services.'
      }
    ],
    technologies: ['REST APIs', 'GraphQL', 'Webhooks', 'OAuth', 'JSON', 'XML']
  }
]

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug)
}

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id)
} 