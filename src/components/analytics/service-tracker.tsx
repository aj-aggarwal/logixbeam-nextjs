'use client'

import { useEffect } from 'react'
import { trackServiceView } from '@/lib/analytics'

interface ServiceTrackerProps {
  serviceName: string
}

export function ServiceTracker({ serviceName }: ServiceTrackerProps) {
  useEffect(() => {
    // Track service page view on component mount
    trackServiceView(serviceName)
  }, [serviceName])

  // This component doesn't render anything
  return null
} 