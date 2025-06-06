# Notes App - Markdown-Powered Note Taking

A feature-rich note-taking application with markdown support and local storage persistence, featuring real-time preview, edit/view modes, and an intuitive empty state interface for enhanced user experience.

## What I Learned

- **Local Storage Management** - Using localStorage to persist notes data across browser sessions with JSON serialization
- **Markdown Integration** - Implementing marked.js library for real-time markdown parsing and HTML rendering
- **Dynamic DOM Manipulation** - Creating, inserting, and removing note elements with proper event listener attachment
- **Toggle State Management** - Implementing edit/view mode switching with CSS class manipulation and visibility control
- **Event Delegation** - Handling multiple dynamic elements with individual event listeners for edit and delete functionality
- **Conditional Rendering** - Managing empty state visibility based on application content using display property toggling

## Key Improvements Made

- **Enhanced Visual Design** - Implemented a dark theme with custom CSS variables and modern color palette
- **Improved User Experience** - Added comprehensive empty state with icon, heading, and descriptive text for better onboarding

## Features

- Real-time markdown editing with instant preview rendering using marked.js library integration
- Persistent local storage that automatically saves and restores notes across browser sessions
- Individual note management with edit and delete functionality including confirmation prompts
- Responsive card-based layout that adapts to different screen sizes with proper spacing
- Empty state interface that guides new users with clear call-to-action messaging

## Usage

Simply open `index.html` in your browser to start taking notes. Click "Add note" to create a new note, then start typing in markdown format. Click the edit button to switch between edit and preview modes, or the delete button to remove notes with confirmation. All notes are automatically saved to your browser's local storage.

---

*Built as part of Brad Traversy's [`50 Projects in 50 Days`] course to practice local storage, markdown processing, and dynamic UI management.*