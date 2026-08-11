# Quick Start Guide - Nitin Kumar's Portfolio

## 🚀 Getting Started (First Time)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio

### 3. Make Changes
Edit files and see changes instantly with hot reload

---

## 📝 How to Update Your Portfolio

### Update Personal Information
**File:** `data/resumeData.js`

```javascript
personal: {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  phone: 'Your Phone',
  bio: 'Your Bio',
  linkedin: 'your-linkedin-url',
}
```

### Add a New Project
**File:** `data/resumeData.js`

```javascript
projects: [
  {
    title: 'Project Name',
    description: 'What you built',
    impact: 'The results/impact',
    tags: ['Tag1', 'Tag2', 'Tag3'],
  },
  // ... more projects
]
```

### Add Experience
**File:** `data/resumeData.js`

```javascript
experience: [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    duration: 'Jan 2024 - Present',
    location: 'City, Country',
    description: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
  },
]
```

### Add Education
**File:** `data/resumeData.js`

```javascript
education: [
  {
    degree: 'Your Degree',
    school: 'School/University Name',
    year: 'Year Range',
    location: 'City',
  },
]
```

### Add Skills
**File:** `data/resumeData.js`

```javascript
skills: [
  {
    category: 'Skill Category',
    items: ['Skill1', 'Skill2', 'Skill3'],
  },
]
```

---

## 🎨 Customizing Design

### Change Colors
**File:** `tailwind.config.js`

Find the colors section and update:
```javascript
"primary": "#001e8d",  // Change primary color
"secondary": "#5f5e5e",
// ... more colors
```

### Change Fonts
**File:** `tailwind.config.js`

```javascript
fontFamily: {
  'headline': ['Your Font Name'],
  'body': ['Your Font Name'],
  'label': ['Your Font Name'],
}
```

### Add Custom Components
1. Create new file in `components/` folder
2. Use Tailwind classes (not plain CSS)
3. Import and use in `pages/index.jsx`

---

## 🔧 Component Reference

### Using Existing Components

**ProjectCard**
```jsx
import ProjectCard from '@/components/ProjectCard';

<ProjectCard 
  title="Title"
  description="Description"
  impact="Impact"
  tags={['tag1', 'tag2']}
/>
```

**ExperienceCard**
```jsx
import ExperienceCard from '@/components/ExperienceCard';

<ExperienceCard
  title="Title"
  company="Company"
  duration="Duration"
  location="Location"
  description={['Point 1', 'Point 2']}
/>
```

**EducationCard**
```jsx
import EducationCard from '@/components/EducationCard';

<EducationCard
  degree="Degree"
  school="School"
  year="Year"
  location="Location"
/>
```

---

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Test Production Build
```bash
npm start
```

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Deploy to Other Services
- **Netlify**: Connect your Git repo
- **GitHub Pages**: Configure next.config.js for static export
- **Any Node.js Server**: Run `npm run build && npm start`

---

## 🎯 Project File Structure (Reference)

```
d:\port_re\
├── pages/
│   ├── index.jsx          ← Main portfolio page
│   ├── _app.jsx           ← Global app wrapper
│   └── _document.jsx      ← HTML setup
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── ProjectCard.jsx
│   ├── ExperienceCard.jsx
│   ├── EducationCard.jsx
│   ├── SkillsSection.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── data/
│   └── resumeData.js      ← ⭐ UPDATE THIS FILE
├── styles/
│   └── globals.css
├── tailwind.config.js     ← Color & font config
├── package.json           ← Dependencies
└── README.md              ← Full documentation
```

---

## ✅ Common Tasks

### Change Navigation Links
Edit `components/Navbar.jsx` - update href attributes

### Change Hero Section Text
Update `data/resumeData.js` - personal bio field

### Add Social Media Links
Edit `data/resumeData.js` - add to personal object, then update `components/Footer.jsx`

### Modify Project Cards
Edit `data/resumeData.js` - projects array, then check `components/ProjectCard.jsx` for styling

### Change Section Order
Edit `pages/index.jsx` - reorder component imports and renders

---

## 🆘 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Changes Not Showing
- Save the file (Ctrl+S)
- Check browser console for errors
- Restart dev server (Ctrl+C and `npm run dev`)

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

---

## 📚 Documentation

- **Full README**: See `README.md`
- **Refactoring Details**: See `REFACTORING_SUMMARY.md`
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

---

## 🎓 Quick Tips

1. **Always update `resumeData.js` first** - components pull data from here
2. **Use Tailwind classes only** - no inline styles in components
3. **Keep components focused** - one job per component
4. **Test locally before deploying** - `npm run build && npm start`
5. **Use dark mode** - test with browser dev tools color scheme

---

## 📞 Contact Support

For any issues:
- Check README.md
- Review component documentation
- Test in development mode first

---

**Happy building! 🚀**
