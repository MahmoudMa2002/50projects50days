# Random Choice Picker - Interactive Decision Making Tool

A dynamic choice selection tool that helps users make decisions by randomly picking from a list of user-defined options with engaging visual animations and highlights.

## What I Learned

- **Dynamic DOM Manipulation** - Creating and removing HTML elements programmatically based on user input
- **Array Methods** - Using split(), filter(), map(), and trim() to process and clean user input data
- **SetInterval & SetTimeout** - Implementing timed animations and delays for visual effects
- **Event Handling** - Responding to keyup events and detecting specific key presses (Enter key)
- **CSS Animations** - Creating smooth scaling effects and glowing highlights with transform and box-shadow
- **Random Number Generation** - Using Math.random() and Math.floor() for true randomization

## Key Improvements Made

- **Enhanced Visual Feedback** - Added scaling and glowing effects when tags are highlighted during selection
- **Input Validation** - Added filtering to remove empty entries and trim whitespace from choices

## Features

- Text input parsing that converts comma-separated values into individual choice tags
- Real-time tag creation as users type their options
- Animated random selection process with highlighting effects
- Final choice highlight with scaling and glow effects
- Automatic textarea clearing after selection
- Clean dark theme with contrasting colors
- Keyboard-driven interaction (Enter key to start selection)

## Usage

Simply open `index.html` in your browser, type your choices separated by commas, and press Enter to start the random selection animation.

---

*Built as part of Brad Traversy's [`50 Projects in 50 Days`] course to practice DOM manipulation, animation timing, and interactive user interface design.*