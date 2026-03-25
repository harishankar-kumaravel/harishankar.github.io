# Harishankar K — Portfolio (React Version)

A modern React + TypeScript portfolio built from the original HTML design. This version provides a component-based architecture with improved maintainability and scalability.

## Features

- **React 18** with TypeScript
- **Custom Hooks** for scroll reveal and navbar effects
- **Responsive Design** with CSS Grid and Flexbox
- **Smooth Animations** using CSS transitions
- **Component-Based Architecture** for easy maintenance
- **Custom Cursor** with smooth trailing animation

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Navigation bar component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience & Education sections
│   ├── Skills.tsx          # Skills grid with animated bars
│   ├── Projects.tsx        # Portfolio projects grid
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   └── CustomCursor.tsx    # Custom cursor tracking
├── hooks/
│   └── useScrollReveal.ts  # Custom scroll reveal hooks
├── App.tsx                 # Main app component
├── App.css                 # Global styles
└── index.tsx               # Entry point
public/
└── index.html              # HTML template
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Key Components

### CustomCursor
Tracks mouse movement and displays a smooth custom cursor with a trailing ring effect.

### useScrollReveal Hook
Implements intersection observer for scroll-based animations and text reveals.

### Responsive Design
The layout automatically adapts to smaller screens by stacking components vertically. Breakpoint at 900px.

## Styling

All styles are in `src/App.css` using CSS custom properties for consistent theming. Color variables:
- `--accent`: #26ffe6 (Cyan)
- `--accent2`: #ff3d57 (Red)
- `--bg`: #0a0a0a (Dark)
- `--text`: #f0ede8 (Off-white)

## Form Integration

The contact form currently logs submissions to the console. To enable email sending, connect to a backend service (Formspree, SendGrid, etc.) in the `handleSubmit` function in `Contact.tsx`.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Future Enhancements

- [ ] Backend integration for contact form
- [ ] Image optimization and lazy loading
- [ ] Animations library (Framer Motion)
- [ ] Dark/Light mode toggle
- [ ] Blog section with markdown support
- [ ] Analytics integration
