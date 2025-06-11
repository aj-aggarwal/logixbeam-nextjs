# LogixBeam Next.js Development Prompt

## Context
I'm building a modern Next.js website for LogixBeam (a software development company) to replace their legacy HTML/CSS website. The Next.js project structure is already set up with configuration, design system, and content data.

## Current Status
✅ **Completed:**
- Next.js 14 project structure with App Router
- Tailwind CSS + design system configuration
- All legacy website assets copied to `public/images/`
- Company data extracted to `src/data/company.ts`
- Service data extracted to `src/data/services.ts`
- Project context documented in `DEVELOPMENT_CONTEXT.md`
- Basic UI components and utilities set up

## What I Need Help With
Please help me build the complete LogixBeam website. The priority is:

1. **Homepage** - Build the main landing page with:
   - Hero section with banner image
   - Services grid (6 services)
   - About section
   - Contact section with form

2. **Service detail pages** - Dynamic pages for each service at `/services/[slug]`

3. **Performance optimization** - Image optimization and Core Web Vitals

4. **SEO implementation** - Meta tags, structured data, sitemap

## Key Requirements
- Use the existing design system (blue/purple gradient theme)
- Optimize large images (currently 1-16MB files)
- Implement responsive design (mobile-first)
- Add contact form functionality
- Include WhatsApp integration
- Target 95+ Lighthouse scores
- Use TypeScript throughout

## Important Files to Reference
- `DEVELOPMENT_CONTEXT.md` - Complete project context and business info
- `src/data/services.ts` - All service data extracted from legacy site
- `src/data/company.ts` - Company info and contact details
- `tailwind.config.ts` - Design system configuration
- `src/lib/utils.ts` - Utility functions

All legacy website content and assets have been migrated. Let's build this modern, high-performance website! 