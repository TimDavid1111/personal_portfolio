# Personal Portfolio Website

A modern, sleek personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Inspired by the Fey design aesthetic with a focus on extensibility and easy content management.

## 🚀 Features

- **Modern Design**: Sleek black theme with green accent colors
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Animations**: Subtle but engaging animations and transitions
- **Easy Content Management**: Modular data structure for easy updates
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Performance**: Built with Next.js 15 and optimized for speed

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Navigation with smooth scrolling
│   ├── About.tsx           # About section with personal info
│   ├── Projects.tsx         # Projects showcase with filtering
│   ├── Startups.tsx         # Startup ventures section
│   └── Connect.tsx          # Contact form and social links
└── data/
    ├── personal.ts          # Personal information and social links
    ├── projects.ts          # Projects data structure
    └── startups.ts          # Startup ventures data
```

## 🎨 Customization Guide

### 1. Personal Information

Edit `src/data/personal.ts` to update:

- Name, title, and bio
- Contact information
- Social media links
- Skills and experience
- Goals and vision

### 2. Projects

Edit `src/data/projects.ts` to add/modify projects:

- Project title and description
- Technologies used
- Live demo and GitHub links
- Featured status and category

### 3. Startups

Edit `src/data/startups.ts` to manage startup ventures:

- Startup name and description
- Development stage and status
- Team information
- Technologies and funding stage

### 4. Styling

The design uses a consistent color scheme:

- **Primary**: Black background
- **Accent**: Green (#00ff88) and Blue gradients
- **Text**: White primary, gray secondary
- **Cards**: Dark gray with subtle borders

### 5. Adding New Sections

To add new sections:

1. Create a new component in `src/components/`
2. Add the section to `src/app/page.tsx`
3. Update navigation in `src/components/Navigation.tsx`
4. Add corresponding data structure if needed

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Key Features

### Navigation

- Smooth scrolling between sections
- Active section highlighting
- Responsive mobile menu

### Animations

- Fade-in effects on scroll
- Hover animations on cards
- Gradient text animations
- Smooth transitions

### Content Management

- Easy-to-edit data files
- Modular component structure
- Extensible architecture

## 🚀 Deployment

The website is optimized for deployment on:

- Vercel (recommended)
- Netlify
- Any static hosting service

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
