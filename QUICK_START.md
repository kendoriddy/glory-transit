# Quick Start Guide

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ First Customizations

### 1. Update Your Name and Title

Edit `components/sections/Hero.tsx`:

```typescript
const nameLetters = "Kehinde Ridwan Onifade".split(""); // ← Change this
const titleText = "Frontend Engineer | AI Enthusiast"; // ← And this
```

### 2. Add Your Projects

Edit `components/sections/Projects.tsx` and update the `projects` array with your actual projects. Add images to the `public/` folder.

### 3. Update Skills

Edit `components/sections/Skills.tsx` and modify the `skillCategories` object.

### 4. Connect Contact Form to Google Sheets ✅

The contact form is now configured to send submissions directly to Google Sheets!

**Quick Setup (5 minutes):**

1. **Create a Google Sheet** with headers: Timestamp, Name, Email, Message
2. **Create Google Apps Script** - See `CONTACT_FORM_SETUP.md` for detailed instructions
3. **Deploy as Web App** and copy the URL
4. **Create `.env.local` file** in project root:
   ```bash
   NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=your_web_app_url_here
   ```
5. **Test the form** - Submissions will appear in your Google Sheet!

**Full instructions:** See `CONTACT_FORM_SETUP.md` for step-by-step guide with screenshots and troubleshooting.

**Alternative:** You can also use Formspree (simpler but 50 submissions/month limit on free tier).

### 5. Add Social Links

Update the social links in:

- `components/layout/Navigation.tsx`
- `components/sections/Contact.tsx`
- `components/layout/Footer.tsx`

## 🎨 Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  accent: {
    blue: "#00D9FF",    // ← Your accent colors
    purple: "#8B5CF6",
    green: "#10B981",
  },
}
```

## 📸 Add Images

Place your project images in the `public/` folder and update the image paths in the projects array.

## 🚢 Deploy

### Vercel (Recommended)

1. Push to GitHub
2. Import on [Vercel](https://vercel.com)
3. Deploy automatically

### Build Locally

```bash
npm run build
npm start
```

## 🐛 Troubleshooting

**TypeScript errors?**

- Run `npm install` to ensure all dependencies are installed
- Restart your TypeScript server in your editor

**Animations not working?**

- Check browser console for errors
- Ensure Framer Motion is installed: `npm install framer-motion`

**3D background not showing?**

- Ensure Three.js dependencies are installed: `npm install three @react-three/fiber @react-three/drei`
