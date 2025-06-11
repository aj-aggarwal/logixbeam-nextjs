export const companyInfo = {
  name: 'LogixBeam',
  tagline: 'Modern Software Solutions',
  description: 'LogixBeam is a leading software development company dedicated to delivering innovative and scalable solutions for businesses worldwide. With a team of experienced developers, designers, and strategists, we help businesses transform their ideas into reality.',
  mission: 'Our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and success. We believe in building long-term partnerships with our clients by delivering exceptional value and results.',
  
  contact: {
    phone: '+91 6280252020',
    email: 'contact@logixbeam.com',
    whatsapp: '+91 6280252020',
    address: {
      street: '12364, Main Street, Tibba Rd',
      area: 'Kabir Nagar',
      city: 'Ludhiana',
      state: 'Punjab',
      pincode: '141007',
      country: 'India',
      full: '12364, Main Street, Tibba Rd, Kabir Nagar, Ludhiana, Punjab 141007, India'
    }
  },
  
  social: {
    facebook: 'https://www.facebook.com/LogixBeam',
    twitter: 'https://x.com/logixbeam',
    linkedin: 'https://www.linkedin.com/company/logixbeam',
    instagram: 'https://www.instagram.com/logixbeam/'
  },
  
  analytics: {
    googleAnalyticsId: 'G-L54M50FWQC'
  },
  
  hero: {
    title: 'Innovative Software Solutions for Your Business',
    subtitle: 'We specialize in web development, mobile app development, and eCommerce solutions to help your business grow.',
    ctaText: 'Explore Our Services'
  },
  
  about: {
    title: 'About Us',
    whoWeAre: {
      title: 'Who We Are',
      description: 'LogixBeam is a leading software development company dedicated to delivering innovative and scalable solutions for businesses worldwide. With a team of experienced developers, designers, and strategists, we help businesses transform their ideas into reality.'
    },
    ourMission: {
      title: 'Our Mission',
      description: 'Our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and success. We believe in building long-term partnerships with our clients by delivering exceptional value and results.'
    }
  },
  
  contactForm: {
    fields: [
      { name: 'name', type: 'text', placeholder: 'Your Name', required: true },
      { name: 'email', type: 'email', placeholder: 'Your Email', required: true },
      { name: 'subject', type: 'text', placeholder: 'Subject', required: true },
      { name: 'message', type: 'textarea', placeholder: 'Your Message', required: true }
    ],
    successMessage: "Thank you for contacting us! We'll get back to you soon."
  }
}

export const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": companyInfo.name,
  "description": companyInfo.description,
  "url": "https://logixbeam.com",
  "logo": "https://logixbeam.com/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": companyInfo.contact.phone,
    "contactType": "customer service",
    "email": companyInfo.contact.email,
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": companyInfo.contact.address.street,
    "addressLocality": companyInfo.contact.address.city,
    "addressRegion": companyInfo.contact.address.state,
    "postalCode": companyInfo.contact.address.pincode,
    "addressCountry": companyInfo.contact.address.country
  },
  "sameAs": [
    companyInfo.social.facebook,
    companyInfo.social.twitter,
    companyInfo.social.linkedin,
    companyInfo.social.instagram
  ],
  "foundingDate": "2020",
  "numberOfEmployees": "10-50",
  "industry": "Software Development"
} 