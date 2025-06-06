# Sound Board - Interactive Audio Player

An interactive sound board application that dynamically generates buttons with images and plays corresponding audio files when clicked.

## What I Learned

- **DOM Manipulation** - Creating elements dynamically with `createElement()` and `appendChild()`
- **Audio API** - Using HTML5 audio elements with JavaScript controls (`play()`, `pause()`, `currentTime`)
- **Event Delegation** - Adding click event listeners to dynamically created elements
- **Array Iteration** - Using for loops to generate multiple UI elements from data arrays
- **Audio State Management** - Implementing stop functionality to prevent overlapping audio playback

## Key Improvements Made

- **Enhanced Visual Design** - Applied dark theme with custom color scheme and images
- **Interactive Feedback** - Added hover effects with opacity changes and smooth transforms
- **Professional Typography** - Integrated Google Fonts (Roboto) for clean, modern appearance

## Features

- Dynamic button generation from JavaScript arrays
- Click-to-play audio functionality with automatic stopping of other sounds
- Hover effects with smooth CSS transitions and transform animations
- Image-based button design with custom styling
- Responsive layout that adapts to different screen sizes

## Usage

Simply open `index.html` in your browser and click any button to play its associated sound. Each click automatically stops any currently playing audio before starting the new one.

---

*Built as part of Brad Traversy's [`50 Projects in 50 Days`] course to practice DOM manipulation, audio APIs, and dynamic content generation.*