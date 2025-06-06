# Toast Notification - Notification System

A toast notification system with customizable message types, smooth animations, and improved user experience featuring auto-dismiss functionality and manual close controls.

## What I Learned

- **Dynamic DOM Creation** - Using createElement and appendChild to generate toast elements programmatically
- **CSS Animations** - Implementing keyframe animations for smooth slide-in and slide-out effects
- **setTimeout Management** - Handling automatic dismissal with clearTimeout to prevent memory leaks
- **Event Delegation** - Adding event listeners to dynamically created elements for interactive functionality
- **Animation State Management** - Preventing duplicate animations and managing element removal timing

## Key Improvements Made

- **Enhanced Visual Design** - Implemented a dark theme with custom CSS variables and modern Poppins font
- **Icon Integration** - Added Font Awesome icons for different notification types (info, success, error) with proper styling
- **Improved Animation System** - Added slide animations with better timing and smooth transitions
- **Professional Styling** - Added box shadows, border accents, and refined typography for a polished look
- **Better User Experience** - Implemented proper close button functionality with hover effects and accessibility labels
- **Robust State Management** - Added prevention for duplicate removal operations and improved cleanup logic

## Features

- Multiple notification types with distinct visual styling and icons (info, success, error)
- Smooth slide-in animations from the right side of the screen with opacity transitions
- Auto-dismiss functionality after 4 seconds with manual close option via close button
- Stacked notification layout in bottom-right corner with proper spacing
- Responsive design with flexible width constraints and proper text wrapping
- Random message and type selection for demonstration purposes with realistic notification content

## Usage

Simply open `index.html` in your browser and click the "Show Message" button to generate random toast notifications. Each notification will automatically disappear after 4 seconds, or you can manually close them using the × button. The system supports multiple simultaneous notifications with proper stacking.

---

*Built as part of Brad Traversy's [`50 Projects in 50 Days`] course to practice CSS animations, Flexbox layouts, and interactive UI design.*