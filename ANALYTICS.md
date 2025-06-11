# Google Analytics 4 Integration

Your LogixBeam Next.js website now includes comprehensive Google Analytics 4 (GA4) tracking.

## 📊 Analytics Setup

### Google Analytics ID
- **Tracking ID**: `G-L54M50FWQC` (configured in `src/data/company.ts`)
- **Implementation**: Google Analytics 4 with gtag.js

### What's Being Tracked

#### 1. **Page Views**
- Automatic tracking for all pages
- Service page views with specific service names
- Homepage and static page views

#### 2. **User Interactions**
- **Contact Form Submissions**: Tracks when users submit the contact form
- **Phone Number Clicks**: Tracks when users click the phone number
- **Email Address Clicks**: Tracks when users click the email address
- **WhatsApp Clicks**: Tracks both floating button and contact section clicks
- **Service Page Views**: Tracks which services users are viewing most

#### 3. **Navigation Events**
- Service-specific page tracking
- Contact interactions
- Social media link clicks (ready to implement)

## 🔧 Technical Implementation

### Core Files

1. **`src/app/layout.tsx`**
   - Google Analytics script loading
   - Global gtag configuration

2. **`src/lib/analytics.ts`**
   - Analytics utility functions
   - Event tracking helpers
   - Custom event definitions

3. **`src/components/analytics/service-tracker.tsx`**
   - Client-side service page tracking
   - Automatic event firing on page load

### Analytics Functions Available

```typescript
// Page view tracking
pageview(url: string)

// Custom event tracking
event({ action, category, label, value })

// Predefined event functions
trackContactFormSubmit()
trackServiceView(serviceName: string)
trackWhatsAppClick()
trackPhoneClick()
trackEmailClick()
trackSocialClick(platform: string)
trackCTAClick(ctaLocation: string)
```

## 📈 Events Being Tracked

### Contact Events
| Event | Category | Label | Trigger |
|-------|----------|-------|---------|
| form_submit | Contact | Contact Form | Contact form submission |
| click | Contact | Phone Number | Phone number clicked |
| click | Contact | Email Address | Email address clicked |
| click | Contact | WhatsApp Button | WhatsApp button clicked |

### Service Events
| Event | Category | Label | Trigger |
|-------|----------|-------|---------|
| page_view | Services | [Service Name] | Service page viewed |

### Social Media Events (Ready)
| Event | Category | Label | Trigger |
|-------|----------|-------|---------|
| click | Social | [Platform] | Social media link clicked |

### CTA Events (Ready)
| Event | Category | Label | Trigger |
|-------|----------|-------|---------|
| click | CTA | [Location] | Call-to-action button clicked |

## 🎯 Adding New Tracking

### For New User Interactions

1. Import the analytics function:
```typescript
import { event } from '@/lib/analytics'
```

2. Add to click handler:
```typescript
const handleClick = () => {
  event({
    action: 'click',
    category: 'Navigation',
    label: 'Header Menu',
  })
}
```

### For New Page Types

1. Create a tracker component:
```typescript
'use client'
import { useEffect } from 'react'
import { pageview } from '@/lib/analytics'

export function PageTracker() {
  useEffect(() => {
    pageview(window.location.href)
  }, [])
  return null
}
```

2. Add to your page component:
```typescript
<PageTracker />
```

## 📊 Google Analytics Dashboard

### Key Metrics to Monitor

1. **Engagement Overview**
   - Total users and sessions
   - Page views and bounce rate
   - Average session duration

2. **Service Performance**
   - Most viewed services
   - Service page engagement
   - Conversion paths from services

3. **Contact Interactions**
   - Contact form completion rate
   - Phone vs email vs WhatsApp preference
   - Geographic distribution of contacts

4. **User Behavior**
   - Top entry pages
   - Exit pages
   - User flow through services

### Custom Reports to Create

1. **Service Popularity Report**
   - Events → Services category
   - Group by service name
   - Track trends over time

2. **Contact Method Preference**
   - Events → Contact category
   - Compare phone, email, WhatsApp clicks
   - Analyze by time period

3. **Conversion Funnel**
   - Service page views → Contact interactions
   - Identify drop-off points
   - Optimize conversion paths

## 🔒 Privacy & Compliance

### GDPR Compliance
- Analytics data collection disclosed in privacy policy
- No personally identifiable information tracked
- IP addresses anonymized by default in GA4

### Cookie Consent
- GA4 cookies automatically managed
- Consider adding cookie consent banner for EU users
- Analytics respect user consent preferences

## 🚀 Deployment Notes

### Static Export Compatibility
- Google Analytics works with static sites
- No server-side requirements
- All tracking happens client-side
- Compatible with GitHub Pages deployment

### Performance Impact
- Scripts loaded with `strategy="afterInteractive"`
- No blocking of page rendering
- Minimal impact on Core Web Vitals
- Lazy loading of analytics scripts

## 🔧 Configuration

### Environment Variables (Optional)
If you want to use different tracking IDs for different environments:

```typescript
// In your environment configuration
const GA_TRACKING_ID = process.env.NODE_ENV === 'production' 
  ? 'G-L54M50FWQC'  // Production ID
  : 'G-XXXXXXXXXX'  // Development ID
```

### Debugging
- Use Google Tag Assistant extension
- Check browser console for gtag events
- Enable debug mode in GA4 interface
- Monitor Real-Time reports for testing

## 📝 Maintenance

### Regular Tasks
1. **Monthly**: Review top performing content
2. **Quarterly**: Analyze user behavior patterns
3. **Annually**: Update tracking strategy based on business goals

### Monitoring
- Set up custom alerts for significant traffic changes
- Monitor for tracking errors in GA4 reports
- Validate tracking after major site updates

## 🎉 Ready to Use!

Your Google Analytics 4 integration is now live and tracking:
- ✅ All page views automatically
- ✅ Contact form submissions
- ✅ Phone and email interactions
- ✅ WhatsApp engagement
- ✅ Service page popularity
- ✅ User behavior patterns

The analytics will start collecting data immediately once deployed to your live site! 