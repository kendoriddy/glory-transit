# Portfolio - Cutting-Edge Frontend Developer Portfolio

A sophisticated, interactive portfolio website built with Next.js 14, TypeScript, Framer Motion, and Three.js. This portfolio showcases modern web development skills with AI/ML enthusiasm through elegant animations, micro-interactions, and a stunning visual experience.

## ✨ Features

### 🎨 Design Highlights
- **Modern Minimalism meets Sci-Fi Elegance**: Clean layouts with ethereal glowing elements
- **Dark Mode First**: Deep space blues, charcoals, and strategic accent colors
- **Sophisticated Typography**: Space Grotesk for display, Inter for body text

### 🚀 Interactive Elements
- **Dynamic Hero Section**: 
  - Animated neural network background (Three.js)
  - Letter-by-letter text reveal with glow effects
  - Responsive cursor-reactive particles
- **3D Project Cards**: 
  - Interactive hover effects with 3D tilt
  - Smooth overlay transitions
  - Portal-like navigation animations
- **Interactive Skills Section**:
  - Animated skill tags with particle bursts
  - AI/ML learning progress visualization
  - Hover glow effects
- **Animated Contact Form**:
  - Floating label inputs
  - Smooth validation feedback
  - Success state animations

### 🎭 Micro-Interactions
- Custom cursor follower with intelligent hover detection
- Scroll progress indicator
- Glassmorphism navigation
- Smooth scroll-triggered animations
- Particle effects on interactive elements

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Forms**: React Hook Form
- **Fonts**: Inter, Space Grotesk, JetBrains Mono

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Customization

### Update Personal Information

1. **Hero Section** (`components/sections/Hero.tsx`):
   - Update `nameLetters` array with your name
   - Modify `titleText` with your title/subtitle

2. **About Section** (`components/sections/About.tsx`):
   - Replace placeholder text with your bio
   - Adjust skill percentages in the progress bars

3. **Projects** (`components/sections/Projects.tsx`):
   - Update the `projects` array with your actual projects
   - Add project images to the `public` folder
   - Update links and descriptions

4. **Skills** (`components/sections/Skills.tsx`):
   - Modify `skillCategories` object with your skills
   - Adjust AI/ML learning progress items

5. **Contact** (`components/sections/Contact.tsx`):
   - Connect form to your email service (e.g., EmailJS, Formspree)
   - Update social media links in the footer

6. **Navigation & Footer**:
   - Update navigation links
   - Add your social media profiles

### Color Theme

Customize colors in `tailwind.config.ts`:
- `dark.*`: Background colors
- `accent.*`: Accent colors (blue, purple, green)

### Fonts

Fonts are configured in `app/layout.tsx`. You can swap them with Google Fonts of your choice.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx  # Sticky navigation
│   │   └── Footer.tsx      # Footer component
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Skills.tsx      # Skills section
│   │   └── Contact.tsx     # Contact form
│   └── ui/
│       ├── CursorFollower.tsx  # Custom cursor
│       ├── ScrollProgress.tsx  # Scroll indicator
│       ├── NeuralNetwork.tsx   # 3D background
│       ├── CTAButton.tsx       # CTA button
│       └── ProjectCard.tsx     # Project card
├── lib/                     # Utility functions
├── types/                   # TypeScript types
└── public/                  # Static assets
```

## 🎨 Animation Libraries

This portfolio uses several animation techniques:

- **Framer Motion**: Primary animation library for UI animations
- **React Three Fiber**: 3D scene rendering
- **Three.js**: 3D graphics and WebGL
- **CSS Animations**: Performance-critical animations via Tailwind

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

Build the production version:
```bash
npm run build
npm start
```

## 📝 Notes

- All animations respect `prefers-reduced-motion` for accessibility
- The portfolio is fully responsive
- Optimized for 60fps animations
- Server-side rendering enabled for SEO

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using Next.js, TypeScript, and Framer Motion**

