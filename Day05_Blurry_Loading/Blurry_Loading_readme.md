# Blurry Loading - Dynamic Image Effect

A dynamic loading screen with simultaneous blur reduction and text fade-out effects using scaling functions.

## What I Learned

- **CSS Filter Properties** - Implementing blur effects with dynamic pixel values
- **Mathematical Scaling** - Understanding custom scale functions for value mapping taken from stack-overflow
- **Opacity Manipulation** - Dynamically controlling element transparency
- **CSS Positioning** - Using absolute positioning for full-screen background coverage
- **Performance Optimization** - Managing interval cleanup to prevent memory leaks

## Key Improvements Made

- Not many improvements were made, as it's a fairly simple project

## Features

- Dynamic blur effect that reduces from 30px to 0px as loading progresses
- Simultaneous text opacity fade from 100% to 0% opacity
- Real-time percentage counter from 0% to 100%
- Mathematical scaling function for smooth value transitions
- Automatic interval cleanup when loading completes

## Usage

Simply open `index.html` in your browser and watch the blurred background image gradually come into focus as the percentage counter fades away.

---

*Built as part of Brad Traversy's [`50 Projects in 50 Days`] course to practice CSS animations, Flexbox layouts, and interactive UI design.*