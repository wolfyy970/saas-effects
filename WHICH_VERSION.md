# Installation & Usage Guide

## Quick Decision Guide

### Use the **npm Package** (Recommended) if you:
- ✅ Building a React application (React 16.8+ through React 19+)
- ✅ Want TypeScript support with full autocomplete
- ✅ Need production-ready components
- ✅ Want component-based architecture
- ✅ Prefer npm/yarn/pnpm workflow
- ✅ Want automatic updates via package manager

```bash
npm install saas-effects
```

### Use the **Demo** (`demo.html`) if you:
- ✅ Want to see it working immediately (just open in browser)
- ✅ Evaluating the library before installing
- ✅ Need to copy CSS patterns for other frameworks
- ✅ Want a quick prototype
- ✅ Learning or experimenting
- ✅ Don't use React

---

## Installation Methods

### Method 1: npm Package (Recommended)

```bash
# Install via npm
npm install saas-effects

# Or yarn
yarn add saas-effects

# Or pnpm
pnpm add saas-effects
```

**Then import:**
```tsx
import { BackgroundGradient, CardWithCornerAccent } from 'saas-effects';
import 'saas-effects/dist/style.css';

// TypeScript types included automatically!
```

**What you get:**
- ✅ Full TypeScript support
- ✅ Tree-shakable ESM build
- ✅ UMD build for legacy support
- ✅ Type definitions (.d.ts)
- ✅ Production-optimized (~2.5KB gzipped)
- ✅ Zero runtime dependencies

### Method 2: Demo & Evaluation

**Quick Preview:**
- Live demo: https://wolfyy970.github.io/saas-effects/demo.html
- Or open `demo.html` locally in your browser

**For adaptation to other frameworks:**
- View source to see HTML structure
- Copy CSS classes from `GradientComponents.css`
- Adapt to Vue, Angular, Svelte, etc.

---

## Usage Examples

### React/TypeScript (npm package)

```tsx
import { BackgroundGradient, CardWithCornerAccent } from 'saas-effects';
import 'saas-effects/dist/style.css';

function App() {
  return (
    <>
      {/* Background gradient */}
      <BackgroundGradient preset="skyPink" blur="soft">
        <h1>Beautiful Gradient!</h1>
      </BackgroundGradient>

      {/* Card with corner accent */}
      <CardWithCornerAccent corner="tl" preset="purpleOrange">
        <h3>Card Title</h3>
        <p>Card content</p>
      </CardWithCornerAccent>
    </>
  );
}
```

### Vanilla HTML/CSS (from demo)

```html
<!-- Background gradient -->
<div class="gradient-background blur-soft" 
     style="--gradient-start: #7dd3fc; --gradient-end: #f472b6;">
  <h1>Beautiful Gradient!</h1>
</div>

<!-- Card with corner accent -->
<div class="card-corner-wrapper" 
     style="--gradient-start: #a78bfa; --gradient-end: #fb923c;">
  <div class="gradient-corner-bg gradient-corner-bg-tl"></div>
  <div class="card-with-accent">
    <h3>Card Title</h3>
    <p>Card content</p>
  </div>
</div>
```

---

## Framework Compatibility

### React (via npm package):
- ✅ React 16.8+ through React 19+
- ✅ Next.js (all versions)
- ✅ Remix
- ✅ Gatsby
- ✅ Create React App
- ✅ Vite + React
- ✅ Full TypeScript support

### Other Frameworks (adapt from demo):
- ✅ Vue.js - Use classes and inline styles
- ✅ Angular - Use classes and style binding
- ✅ Svelte - Use classes and style props
- ✅ Solid.js - Port components
- ✅ Vanilla JS - Pure HTML/CSS
- ✅ Any framework - It's just CSS!

---

## Quick Start Comparison

### npm Package (Recommended)
```bash
# Install
npm install saas-effects

# Import and use
import { BackgroundGradient } from 'saas-effects';
import 'saas-effects/dist/style.css';

# Start building!
<BackgroundGradient preset="skyPink">
  <h1>Hello!</h1>
</BackgroundGradient>
```

### Demo Evaluation
```bash
# No install needed!
1. Visit https://wolfyy970.github.io/saas-effects/demo.html
2. See all features in action
3. View page source to understand
4. Install npm package if you like it!
```

---

## Performance & Bundle Size

**npm Package:**
- ✅ ~2.5KB gzipped (production build)
- ✅ Tree-shakable ESM format
- ✅ Zero runtime dependencies
- ✅ Optimized with Vite

**Demo:**
- ✅ Same CSS as npm package
- ✅ Self-contained, no external dependencies
- ✅ Useful for understanding and adaptation

---

## Recommended Workflow

**For React Developers:**
1. ✅ Check the [live demo](https://wolfyy970.github.io/saas-effects/demo.html) to see features
2. ✅ Install via npm: `npm install saas-effects`
3. ✅ Import and start using with full TypeScript support
4. ✅ Refer to [README.md](./README.md) for detailed documentation

**For Other Frameworks:**
1. ✅ Check the [live demo](https://wolfyy970.github.io/saas-effects/demo.html) to see features
2. ✅ View source of `demo.html` to understand HTML/CSS structure
3. ✅ Copy CSS from `GradientComponents.css` to your project
4. ✅ Adapt the HTML patterns to your framework of choice

---

## Documentation

- **README.md** - Complete feature documentation and examples
- **QUICK_REFERENCE.md** - Quick syntax reference and common patterns
- **CHANGELOG.md** - Version history and migration guides
- **SECURITY.md** - Security policies and best practices

---

## Bottom Line

**Building with React?** → Install via npm for best experience  
**Using other frameworks?** → Check demo, adapt CSS patterns  
**Just evaluating?** → Start with the live demo

The npm package provides the best developer experience for React applications with TypeScript support, autocomplete, and production-optimized builds!
