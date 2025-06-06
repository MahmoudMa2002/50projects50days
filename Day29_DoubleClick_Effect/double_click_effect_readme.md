# Double Click Effect - Interactive Circle Animation

A smooth interactive effect that creates animated circle icons when double-clicking on an image, featuring real-time click counting and dynamic positioning with  fade-out animations.

## What I Learned

- **Event Handling** - Using addEventListener for double-click events with proper event object manipulation
- **DOM Manipulation** - Creating and dynamically adding elements to the DOM with appendChild and remove methods
- **Coordinate Calculations** - Converting global mouse coordinates to relative positions using clientX/Y and offset values
- **CSS Animation Integration** - Implementing keyframe animations with JavaScript-triggered elements for smooth visual effects
- **Timeout Management** - Using setTimeout for automatic element cleanup after animation completion
- **Position Calculations** - Computing precise element positioning relative to container boundaries using offset properties

## Key Improvements Made

- **Enhanced Visual Design** - Implemented a dark theme with custom CSS variables and modern color palette
- **Improved Image Styling** - Added hover effects with smooth transforms and elevated shadow effects

## Features

- Interactive double-click detection that responds to user input with precise coordinate tracking
- Real-time click counter that increments with each double-click interaction
- Smooth circle animation with grow effect that scales from 0 to 8x size with opacity fade
- Dynamic positioning system that places circles exactly where the user double-clicks
- Automatic cleanup with 1-second timeout to remove circles after animation completion
- Responsive image container with hover effects and professional styling

## Usage

Simply open `index.html` in your browser to see the double-click effect in action. Double-click anywhere on the image to create animated circles at the exact click location. Watch the counter increment with each interaction as circles appear and fade away automatically.

---

*Built as part of Brad Traversy's [`50 Projects in 50 Days`] course to practice event handling, DOM manipulation, and CSS animations.*