# Getting Started with Framer Motion: Setup and Basic Animations

Framer Motion is a powerful animation library for React that makes creating smooth, performant animations incredibly intuitive. In this article, we'll cover the essentials: installation, basic concepts, and your first animations. By the end, you'll have a solid foundation to build more complex animations.

## Table of Contents

- [Why Framer Motion?](#why-framer-motion)
- [Installation](#installation)
- [Your First Animation](#your-first-animation)
- [Understanding Animation Props](#understanding-animation-props)
- [Common Animation Patterns](#common-animation-patterns)
- [Real-World Examples](#real-world-examples)
- [Best Practices](#best-practices)
- [Next Steps](#next-steps)

---

## Why Framer Motion?

Before diving in, let's understand why Framer Motion is worth learning:

**✅ Declarative API**: Write animations in a React-friendly way
**✅ Performance**: Optimized for 60fps animations
**✅ Developer Experience**: Excellent TypeScript support and helpful error messages
**✅ Flexibility**: From simple fades to complex orchestrated sequences
**✅ Production-Ready**: Used by companies like Stripe, Linear, and Framer

Compared to CSS animations, Framer Motion gives you:

- Better control over timing and sequencing
- Easy integration with React state
- Advanced features like layout animations and gesture handling

---

## Installation

Let's start by installing Framer Motion in your Next.js or React project.

### For Next.js (Recommended)

```bash
npm install framer-motion
# or
yarn add framer-motion
# or
pnpm add framer-motion
```

### For Create React App

```bash
npm install framer-motion
```

That's it! No additional configuration needed. Framer Motion works out of the box with modern React setups.

---

## Your First Animation

Let's create a simple fade-in animation. This is the "Hello World" of Framer Motion.

### Basic Component Structure

```tsx
import { motion } from "framer-motion";

export default function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-32 h-32 bg-blue-500 rounded-lg"
    />
  );
}
```

**What's happening here?**

- `motion.div` is an animated version of a regular `div`
- `initial` defines the starting state (invisible)
- `animate` defines the end state (visible)
- `transition` controls how the animation happens (1 second duration)

### Understanding `motion` Components

Framer Motion provides `motion` versions of all HTML elements:

```tsx
motion.div; // Animated div
motion.button; // Animated button
motion.h1; // Animated heading
motion.svg; // Animated SVG
// ... and so on
```

You can animate any HTML element by prefixing it with `motion.`

---

## Understanding Animation Props

Let's break down the three core props that control animations:

### 1. `initial` - The Starting State

This defines where your element starts before animation:

```tsx
<motion.div
  initial={{ opacity: 0, y: -50 }}
  // Starts invisible and 50px above final position
/>
```

**Common initial values:**

- `opacity: 0` - Invisible
- `y: -50` - 50px above
- `x: -50` - 50px to the left
- `scale: 0` - Zero size
- `rotate: -180` - Rotated

### 2. `animate` - The End State

This is where your element animates to:

```tsx
<motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  // Ends visible and at normal position
/>
```

The `animate` prop can also be dynamic, controlled by React state:

```tsx
const [isVisible, setIsVisible] = useState(false);

<motion.div
  animate={{
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.8,
  }}
/>;
```

### 3. `transition` - How Animation Happens

Controls the timing, easing, and behavior of animations:

```tsx
<motion.div
  transition={{
    duration: 0.5, // How long (seconds)
    delay: 0.2, // Wait before starting
    ease: "easeInOut", // Easing function
  }}
/>
```

**Common easing options:**

- `"linear"` - Constant speed
- `"easeIn"` - Slow start
- `"easeOut"` - Slow end
- `"easeInOut"` - Slow start and end (most natural)
- Custom arrays: `[0.42, 0, 0.58, 1]` (cubic bezier)

---

## Common Animation Patterns

Let's explore common animation patterns you'll use regularly:

### 1. Fade In

The simplest animation pattern:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content appears smoothly
</motion.div>
```

### 2. Slide In from Top

```tsx
<motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Slides down into view
</motion.div>
```

### 3. Scale In

Great for buttons and cards:

```tsx
<motion.button
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 200,
    damping: 20,
  }}
>
  Click me
</motion.button>
```

Notice the `type: "spring"` - this creates a bouncy, physics-based animation that feels natural.

### 4. Combination Animations

Combine multiple properties:

```tsx
<motion.div
  initial={{
    opacity: 0,
    y: 20,
    scale: 0.9,
    rotate: -5,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
  }}
  transition={{ duration: 0.5 }}
>
  Complex multi-property animation
</motion.div>
```

---

## Real-World Examples

Let's look at some practical examples from a real portfolio implementation:

### Example 1: Animated Button with Hover

Here's a button component with hover animations:

```tsx
import { motion } from "framer-motion";

export default function AnimatedButton() {
  return (
    <motion.button
      className="px-6 py-3 bg-blue-500 text-white rounded-lg"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      Hover me
    </motion.button>
  );
}
```

**Key features:**

- `whileHover`: Animates when mouse enters
- `whileTap`: Animates when clicked
- Spring physics for natural feel

### Example 2: Scroll-Triggered Animation

Animating elements as they enter the viewport:

```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollAnimatedSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="p-8"
    >
      This animates when scrolled into view
    </motion.div>
  );
}
```

**What's happening:**

- `useInView` detects when element enters viewport
- Animation triggers only when `inView` becomes `true`
- `triggerOnce: true` means it only animates once

### Example 3: Page Transition

Smooth transitions between pages (Next.js):

```tsx
import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
```

---

## Advanced: Animation Types

Framer Motion supports different animation types:

### 1. Tween Animations (Default)

Smooth transitions between values:

```tsx
<motion.div
  transition={{
    duration: 0.5,
    ease: "easeInOut",
  }}
/>
```

### 2. Spring Animations

Physics-based, natural motion:

```tsx
<motion.div
  transition={{
    type: "spring",
    stiffness: 300, // How "stiff" the spring (higher = faster)
    damping: 30, // Resistance (higher = less bounce)
    mass: 1, // Weight (higher = slower)
  }}
/>
```

**When to use springs:**

- Interactive elements (buttons, cards)
- When you want natural, organic motion
- UI feedback animations

**When to use tweens:**

- Page transitions
- Simple fades/slides
- Precise timing control needed

### 3. Keyframe Animations

Animation sequences:

```tsx
<motion.div
  animate={{
    scale: [1, 1.2, 1],
    rotate: [0, 90, 0],
  }}
  transition={{
    duration: 2,
    times: [0, 0.5, 1],
    repeat: Infinity,
  }}
/>
```

This creates a pulsing, rotating animation that repeats.

---

## Best Practices

### 1. Performance Optimization

Always animate transform properties (translate, scale, rotate) instead of layout properties (width, height, top, left):

**✅ Good (uses transform):**

```tsx
<motion.div animate={{ x: 100, scale: 1.2 }} />
```

**❌ Avoid (causes layout recalculations):**

```tsx
<motion.div animate={{ width: "200px", top: "100px" }} />
```

**Why?** Transform animations are GPU-accelerated and don't trigger layout recalculations.

### 2. Use `whileHover` and `whileTap` for Interactions

Instead of managing hover state manually:

```tsx
// ✅ Good - Framer Motion handles it
<motion.button whileHover={{ scale: 1.1 }} />;

// ❌ Less efficient
const [hovered, setHovered] = useState(false);
<button
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
/>;
```

### 3. Respect `prefers-reduced-motion`

Always respect user accessibility preferences:

```tsx
import { useReducedMotion } from "framer-motion";

export default function AccessibleAnimation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0 }}
      animate={shouldReduceMotion ? {} : { opacity: 1 }}
    >
      Content
    </motion.div>
  );
}
```

### 4. Optimize Re-renders

Use `useMemo` for complex animation configurations:

```tsx
const animationConfig = useMemo(
  () => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  }),
  []
);

<motion.div {...animationConfig} />;
```

### 5. Keep Animations Subtle

Less is more. Subtle animations feel professional:

```tsx
// ✅ Subtle and elegant
<motion.div
  animate={{ y: [0, -5, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
/>

// ❌ Too much movement
<motion.div
  animate={{ y: [0, -50, 0] }}
  transition={{ duration: 0.5, repeat: Infinity }}
/>
```

---

## Common Pitfalls and Solutions

### Problem: Animation Not Triggering

**Solution:** Make sure you're using a `motion` component:

```tsx
// ❌ Won't animate
<div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />

// ✅ Will animate
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
```

### Problem: Animation Too Fast/Slow

**Solution:** Adjust the `duration` in `transition`:

```tsx
<motion.div
  transition={{ duration: 2 }} // Slower (2 seconds)
/>
```

### Problem: Stuttering/Janky Animation

**Solutions:**

1. Animate transform properties, not layout properties
2. Use `will-change` CSS property (Framer Motion handles this)
3. Reduce the number of animated elements on screen
4. Use `layoutId` for layout animations

---

## Complete Example: Animated Card Component

Let's put it all together with a real card component:

```tsx
"use client";

import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  delay?: number;
}

export default function AnimatedCard({
  title,
  description,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      className="p-6 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
```

**Usage:**

```tsx
<AnimatedCard
  title="Feature One"
  description="This is a description"
  delay={0.1}
/>
```

---

## Next Steps

Now that you understand the basics, here's what to explore next:

1. **Staggered Animations**: Animate multiple children in sequence
2. **Variants**: Organize complex animations with reusable variant objects
3. **Layout Animations**: Smooth transitions when elements change position
4. **Gesture Handling**: Drag, pan, and swipe interactions
5. **Shared Layout Animations**: Create smooth transitions between pages

### Recommended Learning Path

1. ✅ **Master the basics** (this article)
2. → **Staggered animations** (letter-by-letter reveals, list animations)
3. → **Variants** (organizing complex animation sequences)
4. → **Scroll animations** (animating on scroll)
5. → **Advanced patterns** (3D transforms, physics, gestures)

---

## 🚀 Coming Next: Creating Staggered Animations

Ready to take your animations to the next level? In the next article, **"Creating Staggered Animations with Framer Motion"**, we'll explore:

- **Letter-by-letter text reveals**: Create stunning animated text effects like you see on modern portfolio sites
- **List animations**: Animate list items appearing in sequence
- **Stagger timing**: Control the delay between each child animation
- **Real portfolio example**: We'll build the exact letter-by-letter animation used in a professional portfolio's hero section

**What you'll learn:**

- How to use `staggerChildren` for sequential animations
- Creating parent-child animation relationships
- Timing and coordination for smooth sequences
- Building production-ready animated text components

This next article builds directly on the fundamentals you just learned, so you'll be able to follow along easily. Stay tuned!

**Preview:** Here's a taste of what we'll create - an animated name that reveals letter by letter with a smooth spring animation, perfect for hero sections and impactful introductions.

---

## Conclusion

Framer Motion makes animation in React both powerful and approachable. Start with simple animations and gradually build complexity. Remember:

- Always use `motion.*` components
- Use `initial`, `animate`, and `transition` for most animations
- Prefer transform properties for performance
- Keep animations subtle and purposeful
- Respect accessibility preferences

With these fundamentals, you're ready to create engaging, performant animations in your React applications!

**Resources:**

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Framer Motion Examples](https://www.framer.com/motion/examples/)
- [Animation Principles](https://www.framer.com/motion/animation/)

---

**Author:** Kehinde Ridwan Onifade  
**Published:** [Date]  
**Tags:** React, Framer Motion, Animation, Frontend Development
