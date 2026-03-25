# 🚀 React Portfolio Setup Guide

## Getting Started

This is a complete React + TypeScript version of your portfolio website. Follow these steps to get it running.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Navigate to project directory**
```bash
cd harishankar.github.io
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## What's New in React Version

✨ **Component-Based Architecture**
- Each section is now a separate reusable component
- Easier to maintain and modify individual sections

📦 **TypeScript Support**
- Full type safety across components
- Better IDE autocompletion and error catching

🎣 **Custom Hooks**
- `useScrollReveal`: Handles intersection observer for scroll animations
- `useNavbarScroll`: Manages navbar scroll state

⚡ **Performance Optimizations**
- Code splitting by component
- Efficient re-renders with proper memoization

🎨 **Same Visual Design**
- All original CSS styles preserved
- Custom cursor animation
- Responsive design maintained

## File Overview

```
src/
├── components/
│   ├── Navigation.tsx    - Top navigation with logo and links
│   ├── Hero.tsx          - Large hero section with CTA
│   ├── About.tsx         - About section with highlights
│   ├── Experience.tsx    - Job history and education
│   ├── Skills.tsx        - Skills grid with progress bars
│   ├── Projects.tsx      - Portfolio projects showcase
│   ├── Contact.tsx       - Contact form
│   ├── Footer.tsx        - Footer copyright
│   └── CustomCursor.tsx  - Custom cursor tracker
├── hooks/
│   └── useScrollReveal.ts - Custom React hooks
├── App.css               - Global styles
├── App.tsx               - Main component
└── index.tsx             - React entry point
```

## Customization

### Update Content

Edit the respective component files to change content:
- **Contact info**: Edit `components/Contact.tsx`
- **Skills list**: Edit `components/Skills.tsx`
- **Projects**: Edit `components/Projects.tsx`
- **Personal info**: Edit `components/About.tsx`, `Hero.tsx`

### Modify Colors

In `App.css`, update CSS custom properties:
```css
:root {
  --accent: #26ffe6;      /* Main accent color */
  --accent2: #ff3d57;     /* Secondary accent */
  --bg: #0a0a0a;          /* Background */
  --text: #f0ede8;        /* Text color */
  /* ... other colors */
}
```

### Form Integration

To enable email sending in the contact form:

1. Choose a service: Formspree, SendGrid, EmailJS, etc.
2. Update `handleSubmit` in `Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Add your API call here
  // fetch('your-backend-url', { method: 'POST', body: JSON.stringify(formData) })
};
```

## Deployment

### Deploy to GitHub Pages

1. Add to `package.json`:
```json
"homepage": "https://harishankar-kumaravel.github.io"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy:
```bash
npm run deploy
```

### Deploy to Vercel

1. Connect repo to Vercel
2. Vercel auto-detects React and builds automatically
3. Your site goes live at provided URL

### Deploy to Netlify

1. Run `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Done!

## Troubleshooting

**Port 3000 already in use?**
```bash
npm start -- --port 3001
```

**Module not found errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Styles not loading?**
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Reload: Hard refresh (Ctrl+F5 or Cmd+Shift+R)

## Performance Tips

- Use React DevTools to profile components
- Consider lazy loading heavy components with `React.lazy()`
- Optimize images before adding to projects
- Use production build for accurate performance metrics

## Next Steps

1. ✅ Customize colors and content
2. ✅ Connect contact form to backend
3. ✅ Add your images and project screenshots
4. ✅ Deploy to live domain
5. ✅ Set up analytics (Google Analytics, Plausible, etc.)

## Support & Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Ready to go live?** Run `npm run build` and deploy! 🎉
