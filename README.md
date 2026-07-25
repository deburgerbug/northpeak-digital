# NorthPeak Digital

A responsive one-page agency website built for the Digital Heroes
Web Development qualification task.

## Live Demo

[https://northpeak-digital-65m9.vercel.app/]

## Features

- Responsive layout optimized for 360px, 768px and 1440px
- Six-service agency grid
- Results section
- Three-tier pricing
- Accessible contact form with client-side validation
- Responsive navigation
- Lighthouse optimized
- Semantic HTML structure

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- Vercel

## Running Locally

npm install
npm run dev

## Production Build

npm run build

## Design Decisions

### Performance-first visual design

The hero dashboard and visual elements are built primarily with HTML
and CSS rather than large image assets. This keeps the visual identity
distinct while minimizing asset weight.

### Responsive layout

The page was designed and manually tested around the assignment's
required 360px, 768px and 1440px viewport sizes.

### Accessible form validation

The contact form uses explicit labels, field-level validation,
aria-invalid and aria-describedby attributes, visible focus states,
and validation feedback.

## Lighthouse

Performance: 97
Accessibility: 96
Best Practices: 100
SEO: 100

Tested against the deployed production build.

## AI Usage

[I used ChatGPT primarily to assist with CSS styling, responsive design, and debugging during development. I reviewed and adapted the suggestions based on the site's requirements, tested the implementation across the required screen sizes, and made the final accessibility, performance, and deployment decisions myself.]    