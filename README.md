# Landing Page - Active Aid Fitness Academy

This folder contains the landing page components for the AAFA (Active Aid Fitness Academy) project.

## Files

- **LandingPage.jsx** - Main React component for the landing page
- **LandingPage.css** - Stylesheet with all the styling for the landing page

## Features

- Modern, responsive design inspired by Luminar Touch
- Hero section with animated gradient orbs
- Features section showcasing key benefits
- Services grid (3x2 layout) displaying all services
- Service Provider section with benefits and CTA
- Call-to-action section
- Footer with links and branding

## Color Scheme

The landing page uses the AAFA color scheme:
- **Primary Colors**: Purple (#7c3aed), Orange (#ff8f3f), Cyan (#09FFFF)
- **Background**: Dark (#0c0e15, #0f1117)
- **Text**: Light (#f8fafc, #c7c9d3)

## Usage

To use this landing page in your React application:

1. Copy both files to your `src` directory
2. Import the component:
   ```jsx
   import LandingPage from './LandingPage'
   ```
3. Use it in your app:
   ```jsx
   <LandingPage 
     onGetStarted={() => {/* handle user registration */}}
     onProviderJoin={() => {/* handle provider registration */}}
   />
   ```

## Props

- `onGetStarted` (function) - Callback when user clicks "Get Started as User"
- `onProviderJoin` (function) - Callback when user clicks "Join as Service Provider"

## Responsive Design

The landing page is fully responsive and adapts to:
- Desktop (1200px+)
- Tablet (768px - 1200px)
- Mobile (480px - 768px)
- Small Mobile (< 480px)

## Dependencies

- React
- Images: `/aafa-bg.png` and `/carevector.png` should be in your public folder

