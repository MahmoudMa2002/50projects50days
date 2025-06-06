# GitHub Profiles - Enhanced User Search Application

A sleek GitHub user profile viewer with error handling, enhanced visual design, and comprehensive user information display featuring real-time API integration and responsive layout.

## What I Learned

- **API Integration** - Using Axios library for HTTP requests to GitHub's REST API with async/await patterns
- **Error Handling** - Implementing comprehensive try-catch blocks with specific error status code responses
- **Dynamic DOM Manipulation** - Creating and updating HTML content dynamically based on API responses
- **Async JavaScript** - Managing multiple asynchronous operations for user data and repository fetching
- **Form Handling** - Processing form submissions and preventing default browser behavior for custom functionality
- **Array Methods** - Using slice() to limit repository display and forEach() for dynamic element creation

## Key Improvements Made

- **Enhanced Visual Design** - Implemented a modern dark theme with custom CSS variables and improved color palette
- **Better Error Handling** - Added specific error messages for 404 (user not found) and 403 (rate limit) responses with visual feedback
- **Repository Display Enhancement** - Added improved styling with hover effects and background color
- **Professional Card Design** - Added fade-in animations, better avatar styling, and improved information hierarchy
- **Enhanced Input Experience** - Added focus states, box shadows, and better visual feedback for search functionality

## Features

- Real-time GitHub user search with comprehensive profile information display
- User statistics showing followers, following count, and public repository numbers
- Top 10 recent repositories with direct links to GitHub pages and hover animations
- Comprehensive error handling for non-existent users and API rate limiting
- Responsive design that adapts to mobile devices with flexible layout
- Smooth animations and transitions for better user experience including fade-in effects

## Usage

Simply open `index.html` in your browser, enter a GitHub username in the search field, and press Enter or submit the form. The application will display the user's profile information, including avatar, bio, statistics, and recent repositories. Click on any repository to visit it on GitHub in a new tab.

---

*Built as part of Brad Traversy's [`50 Projects in 50 Days`] course to practice API integration, async JavaScript, and dynamic content generation.*