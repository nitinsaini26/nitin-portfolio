# Nitin Kumar's Portfolio

A modern, reusable component-based portfolio built with Next.js, React, and Tailwind CSS.

## 🎯 Features

- **Responsive Design**: Fully responsive across all devices
- **Reusable Components**: Modular component architecture for easy maintenance
- **Dark Mode Support**: Built-in dark mode with Tailwind CSS
- **Optimized Performance**: Next.js optimization with image compression
- **Data-Driven Content**: Centralized resume data management
- **Accessibility**: Semantic HTML and ARIA labels
- **Modern Stack**: Next.js 14, React 18, Tailwind CSS 3

## 📁 Project Structure

```
nitin-portfolio/
├── pages/
│   ├── _app.jsx              # Next.js app wrapper
│   ├── index.jsx             # Home/main page
│   └── _document.jsx         # Custom document (optional)
├── components/
│   ├── Navbar.jsx            # Navigation component
│   ├── HeroSection.jsx       # Hero/intro section
│   ├── ProjectCard.jsx       # Reusable project card
│   ├── ExperienceCard.jsx    # Experience card component
│   ├── EducationCard.jsx     # Education card component
│   ├── SkillsSection.jsx     # Skills section
│   ├── ContactForm.jsx       # Contact form
│   └── Footer.jsx            # Footer component
├── data/
│   └── resumeData.js         # Centralized resume data
├── styles/
│   └── globals.css           # Global styles & utilities
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will run at `http://localhost:3000`

## 📝 Updating Content

All portfolio content is managed in `data/resumeData.js`. Simply update the data structure with your information:

```javascript
export const resumeData = {
  personal: {
    name: 'Your Name',
    title: 'Your Title',
    email: 'your@email.com',
    // ... more fields
  },
  projects: [
    // Add your projects
  ],
  experience: [
    // Add your experience
  ],
  education: [
    // Add your education
  ],
  skills: [
    // Add your skills
  ],
};
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme. All Material Design 3 colors are pre-configured.

### Fonts
The portfolio uses:
- **Headlines**: Plus Jakarta Sans
- **Body**: Inter
- **Labels**: Space Grotesk

Change these in `tailwind.config.js` fontFamily section.

### Components
Each component is self-contained and reusable:

```jsx
import ProjectCard from '@/components/ProjectCard';

<ProjectCard 
  title="Project Name"
  description="Description"
  impact="Impact statement"
  tags={['tag1', 'tag2']}
/>
```

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet**: md (768px+)
- **Desktop**: lg (1024px+)
- **Large Desktop**: xl (1280px+)

## 🔧 Configuration Files

### tailwind.config.js
- Color palette (Material Design 3)
- Custom font families
- Border radius utilities
- Dark mode configuration

### next.config.js
- Image optimization
- Compression settings
- Build optimization

### postcss.config.js
- Tailwind CSS processing
- Autoprefixer for cross-browser compatibility

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## 📦 Dependencies

- **next**: React framework
- **react**: UI library
- **tailwindcss**: CSS framework
- **postcss**: CSS processing
- **autoprefixer**: Browser compatibility

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is open source and available for personal use.

## 👤 About

Created by Nitin Kumar - Data Analyst & Software Engineer
- Email: nitinsaini7455@gmail.com
- LinkedIn: linkedin.com/in/nitin-kumar-69a7b7324

---

**Happy coding! 🚀**
