# Event KeyCodes - Interactive Key Detection Tool

A dynamic key detection application that displays key information and allows users to copy key codes when any keyboard key is pressed.

## What I Learned

- **Event Listeners** - Implementing window-level keydown event listeners for global key detection
- **Event Object Properties** - Accessing key, keyCode, and code properties from keyboard events
- **Clipboard API** - Using navigator.clipboard.writeText() for copying text to clipboard
- **Dynamic HTML Generation** - Creating and updating DOM content with template literals
- **CSS State Management** - Adding/removing classes for visual feedback during interactions

## Key Improvements Made

- **Enhanced Visual Design** - Applied dark theme with custom color scheme
- **Interactive Feedback** - Added hover effects and copy confirmation with smooth transitions
- **Copy Functionality** - Implemented click-to-copy feature with visual feedback and success messages
- **Responsive Design** - Enhanced mobile layout with stacked key display and optimized spacing

## Features

- Real-time key detection displaying key name, keyCode, and code values
- Click-to-copy functionality for key codes with visual confirmation
- Hover effects with smooth CSS transitions and transform animations
- Special handling for space key display
- Responsive layout that adapts to mobile devices
- Clean, modern interface with rounded key displays

## Usage

Simply open `index.html` in your browser and press any key to see its key information displayed. Click on the keyCode box to copy the key value to your clipboard.

---

*Built as part of Brad Traversy's [`50 Projects in 50 Days`] course to practice event handling, clipboard API, and dynamic DOM manipulation.*