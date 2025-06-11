import { companyInfo } from '@/data/company'

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

// Google Analytics tracking functions
export const GA_TRACKING_ID = companyInfo.analytics.googleAnalyticsId

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Common event tracking functions
export const trackContactFormSubmit = () => {
  event({
    action: 'form_submit',
    category: 'Contact',
    label: 'Contact Form',
  })
}

export const trackServiceView = (serviceName: string) => {
  event({
    action: 'page_view',
    category: 'Services',
    label: serviceName,
  })
}

export const trackWhatsAppClick = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'WhatsApp Button',
  })
}

export const trackPhoneClick = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'Phone Number',
  })
}

export const trackEmailClick = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'Email Address',
  })
}

export const trackSocialClick = (platform: string) => {
  event({
    action: 'click',
    category: 'Social',
    label: platform,
  })
}

export const trackCTAClick = (ctaLocation: string) => {
  event({
    action: 'click',
    category: 'CTA',
    label: ctaLocation,
  })
} 