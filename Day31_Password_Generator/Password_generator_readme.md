# Password Generator - Secure Password Creation Tool

A robust password generator with customizable character sets and clipboard functionality, featuring real-time generation with adjustable length and multiple character type options for enhanced security.

## What I Learned

- **Character Set Management** - Using String.fromCharCode() with ASCII values to generate specific character ranges
- **Clipboard API Integration** - Implementing navigator.clipboard.writeText() for seamless password copying functionality
- **Form Validation Logic** - Processing checkbox states and numeric inputs to determine password composition
- **Algorithm Design** - Creating balanced password generation that ensures all selected character types are included
- **Event-Driven Programming** - Handling multiple user inputs and button clicks with proper event listener management

## Key Improvements Made

- **Enhanced Visual Design** - Implemented a dark theme with custom CSS variables and professional container styling
- **Improved User Interface** - Added FontAwesome icons for better visual hierarchy and intuitive control identification

## Features

- Customizable password length ranging from 4 to 25 characters with numeric input validation
- Multiple character set options including uppercase letters, lowercase letters, numbers, and symbols
- Password generation algorithm that ensures balanced character distribution
- One-click clipboard functionality with user feedback confirmation via alert notifications
- Real-time password generation with immediate visual feedback in the result container

## Usage

Simply open `index.html` in your browser to access the password generator. Adjust the length using the number input, select your desired character types using the checkboxes, and click "Generate Password" to create a secure password. Use the clipboard button to copy the generated password instantly.

---

*Built as part of Brad Traversy's [`50 Projects in 50 Days`] course to practice form handling, string manipulation, and modern web APIs.*