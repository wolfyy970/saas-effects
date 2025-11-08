# Gradient Accent Components Library

## 📦 What's Included

This is a **production-ready TypeScript component library** for adding beautiful gradient effects to your applications. Available as an **npm package** with React components, plus a **vanilla HTML/CSS** demo for quick evaluation.

### Files Structure

```
saas-effects/
├── src/ (TypeScript Source):
│   ├── GradientComponents.tsx    # React components (TypeScript)
│   ├── GradientComponents.css    # Component styles
│   ├── types.ts                  # TypeScript interfaces
│   ├── presets.ts                # Color presets
│   ├── utils.ts                  # Validation utilities
│   ├── index.ts                  # Public exports
│   └── Demo.tsx                  # React demo
│
├── dist/ (Built Package):
│   ├── saas-effects.js           # ESM build
│   ├── saas-effects.umd.cjs      # UMD build
│   ├── style.css                 # Extracted CSS
│   └── index.d.ts                # Type definitions
│
├── Vanilla HTML/CSS Demo:
│   └── demo.html                 # Standalone demo (open in browser!)
│
└── Documentation:
    ├── README.md                 # Full documentation
    ├── QUICK_REFERENCE.md        # Cheat sheet
    ├── CHANGELOG.md              # Version history
    ├── WHICH_VERSION.md          # Installation guide
    ├── LIBRARY_OVERVIEW.md       # This file
    └── SECURITY.md               # Security policy
```

---

## 🚀 Two Ways to Use

### Option 1: npm Package (Recommended)
- ✅ Install via npm/yarn/pnpm
- ✅ Full TypeScript support with autocomplete
- ✅ Component-based and reusable
- ✅ Production-ready React components
- ✅ Built with Vite for optimal bundle size

```bash
npm install saas-effects
```

### Option 2: Demo/Evaluation (Vanilla HTML/CSS)
- ✅ Works immediately - just open `demo.html` in a browser
- ✅ No build tools or npm required
- ✅ See all features in action
- ✅ Perfect for quick evaluation

**Quick Preview:** Just open `demo.html` in your browser or visit the [live demo](https://wolfyy970.github.io/saas-effects/demo.html)!

---

## 🎯 Components Overview

### 1. BackgroundGradient
- **Purpose:** Full-page gradient backgrounds
- **Props:** Colors, blur, fade direction
- **Use cases:** Hero sections, page headers, feature backgrounds

### 2. CardWithCornerAccent
- **Purpose:** Cards with atmospheric corner glows
- **Props:** Corner position (tl/tr/bl/br), colors, size
- **Use cases:** Pricing cards, feature grids, content cards

---

## 🚀 Quick Start

### 1. Install the package
```bash
npm install saas-effects
```

### 2. Import and use
```tsx
import { BackgroundGradient, CardWithCornerAccent } from 'saas-effects';
import 'saas-effects/dist/style.css';

// TypeScript types included automatically!
function App() {
  return (
    <BackgroundGradient colorStart="#7dd3fc" colorEnd="#f472b6">
      <h1>Hello World</h1>
    </BackgroundGradient>
  );
}
```

---

## 📖 Documentation

- **README.md** - Complete documentation with all props, examples, and best practices
- **QUICK_REFERENCE.md** - Condensed cheat sheet for quick lookups
- **Demo.jsx** - Interactive examples showing all variations

---

## 🎨 Key Features

✅ **TypeScript Native** - Full type safety and autocomplete  
✅ **Simple API** - Just 2 components with clear, intuitive props  
✅ **Fully Responsive** - Works on all screen sizes  
✅ **Customizable** - Colors, sizes, directions, angles all configurable  
✅ **Zero Dependencies** - No runtime dependencies  
✅ **Production Ready** - 92+ tests, well-documented, npm published  
✅ **Performant** - Lightweight ~2.5KB gzipped  

---

## 🔧 Props Reference

### BackgroundGradient
- `colorStart`, `colorEnd` - Gradient colors (hex, rgb, rgba, hsl, hsla)
- `colors` - Multi-color gradient (array of colors)
- `blur` - `'soft'` | `'normal'` | `'heavy'`
- `fadeDirection` - `'bottom'` | `'top'` | `'left'` | `'right'` | `'none'`
- `angle` - Gradient angle (0-360 degrees)
- `darkMode` - Fade to dark background
- `preset` - Use preset color combinations

### CardWithCornerAccent
- `corner` - `'tl'` | `'tr'` | `'bl'` | `'br'`
- `colorStart`, `colorEnd` - Gradient colors (hex, rgb, rgba, hsl, hsla)
- `size` - `'sm'` | `'md'` | `'lg'`
- `preset` - Use preset color combinations
- `darkMode` - Dark card background

---

## 💡 Design Philosophy

**Simple but powerful** - We focused on the two most effective gradient patterns:
1. **Background gradients** for impact
2. **Corner accents** for subtle sophistication

**No edge accents** - After testing, corner accents proved cleaner and more elegant than edge stripes.

**Developer-friendly** - Clear prop names, good defaults, comprehensive docs.

---

## 🎓 Learning Resources

1. Start with **QUICK_REFERENCE.md** for syntax
2. Check **Demo.jsx** to see examples in action
3. Read **README.md** for deep dives and best practices

---

## 🤝 Usage Tips

**For developers using this library:**
- Import only what you need
- CSS must be imported separately
- Props use hex colors (`#7dd3fc` not `rgb()`)
- Corner codes: tl=top-left, tr=top-right, bl=bottom-left, br=bottom-right

**For designers:**
- Use color presets in QUICK_REFERENCE.md as starting points
- `blur="soft"` for dreamy effects, `blur="heavy"` for defined edges
- Larger grids (48px gap) show effects best
- Alternate corner positions for visual rhythm

---

## ✨ What Makes This Library Good

1. **Clean separation** - Components, styles, and demos are separate
2. **Clear exports** - Easy to import and use
3. **Well documented** - Props explained, examples provided
4. **Production ready** - No placeholders, no TODOs, fully functional
5. **Best practices** - Responsive, accessible, performant

---

## 📝 Notes

- **Browser support:** Modern browsers (Chrome, Firefox, Safari 14+)
- **React version:** Supports React 16.8+ through React 19+
- **TypeScript:** Full type definitions included
- **Size:** ~2.5KB gzipped (production build)
- **Dependencies:** Zero runtime dependencies
- **Testing:** 92+ comprehensive tests
- **Customization:** CSS variables allow easy theming

---

## 🎉 Ready to Use!

This library is complete and ready for production use. Copy the files, import them, and start building beautiful gradient interfaces!

For questions or examples, check the demo file or full documentation.
