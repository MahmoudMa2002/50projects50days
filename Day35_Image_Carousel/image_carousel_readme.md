# Image Carousel - Interactive Slideshow Component

An image carousel with smooth transitions, clickable indicators, and automatic slideshow functionality, featuring visual design and responsive user experience.

## What I Learned

- **DOM Manipulation Mastery** - Dynamically creating indicator elements and managing their active states based on current slide index
- **Event-Driven Carousel Logic** - Implementing click events for navigation buttons and indicator dots with automatic slideshow progression
- **CSS Transform Animations** - Using translateX transforms with smooth transitions for seamless slide movement effects
- **Interval Management** - Creating and resetting intervals for automatic slideshow functionality while maintaining user interaction responsiveness
- **Responsive Image Handling** - Managing image display with object-fit properties and consistent sizing across different viewport dimensions
- **State Synchronization** - Coordinating multiple UI elements (images, indicators, buttons) to reflect the current carousel state accurately

## Key Improvements Made

- **Enhanced Visual Design** - Implemented a modern dark theme with custom CSS variables and professional color palette
- **Interactive Indicator Dots** - Added clickable circular indicators with smooth transitions and active state highlighting
- **Improved Button Styling** - Enhanced navigation buttons with FontAwesome icons, hover effects, and active state animations

## Features

- Smooth carousel navigation with translateX animations and configurable transition timing
- Interactive indicator dots that allow direct navigation to any slide with visual active state feedback
- Automatic slideshow progression with 2-second intervals that resets when users manually navigate
- Navigation buttons with prev/next functionality and professional icon integration
- Responsive design with mobile-friendly viewport adjustments and overflow handling
- Seamless infinite loop functionality that cycles smoothly from last to first slide

## Usage

Simply open `index.html` in your browser to view the interactive image carousel. The slideshow will automatically progress every 2 seconds, but you can manually navigate using the prev/next buttons or click any indicator dot to jump directly to a specific slide. Manual interactions will reset the automatic timer for optimal user experience.

---

*Built as part of Brad Traversy's [`50 Projects in 50 Days`] course to practice DOM manipulation, event handling, and interactive slideshow component development.*