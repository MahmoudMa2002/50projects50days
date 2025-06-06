# Auto Text Effect - Dynamic Typewriter Animation

A smooth typewriter effect with real-time speed control, featuring continuous text animation that builds characters progressively with customizable timing intervals.

## What I Learned

- **String Manipulation** - Using slice() method to progressively reveal characters from a text string
- **setTimeout Management** - Implementing recursive setTimeout calls with clearTimeout for dynamic timing control
- **Real-time Input Handling** - Processing input events to update animation speed without interrupting the flow
- **Mathematical Speed Calculations** - Converting user-friendly speed values to millisecond intervals using division
- **Event-Driven Programming** - Responding to user input changes to modify ongoing animations dynamically
- **Continuous Animation Loops** - Creating infinite loops with index reset for seamless text cycling

## Key Improvements Made

- **Better Input Validation** - Enhanced form styling with focus states and invalid input visual feedback

## Features

- Continuous typewriter animation that cycles through the entire text infinitely
- Real-time speed adjustment with range from 1 (slowest) to 5 (fastest) without animation interruption
- Smooth character-by-character text revelation with consistent timing intervals
- Dark theme design with custom CSS variables for consistent color management
- Responsive control panel positioned at the bottom of the screen
- Input validation with visual feedback for invalid speed values

## Usage

Simply open `index.html` in your browser to see the typewriter effect in action. Use the speed control at the bottom to adjust the animation speed from 1 to 5 in real-time. The text will continuously cycle through the message, restarting from the beginning each time it completes.

---

*Built as part of Brad Traversy's [`50 Projects in 50 Days`] course to practice CSS animations, Flexbox layouts, and interactive UI design.*