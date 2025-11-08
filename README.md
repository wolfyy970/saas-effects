# Gradient Accent Components

A lightweight, flexible React component library for creating beautiful gradient backgrounds and atmospheric card accents inspired by modern design systems like Lumen and Pulse.

**✨ Now with full TypeScript support!** Version 2.0 includes type definitions, new features, and comprehensive testing.

**Available in both React and vanilla HTML/CSS versions.** Not sure which to use? See [WHICH_VERSION.md](WHICH_VERSION.md)

## 🎨 Live Demo

**[View Interactive Demo →](https://wolfyy970.github.io/saas-effects/demo.html)**

See all features, presets, and customization options in action! The demo page showcases:
- 6 beautiful color presets
- Custom gradient angles (0-360°)
- Multi-color gradients
- Dark mode support
- Blur variations
- Fade directions
- Corner accent cards

Or [download demo.html](demo.html) and open it in your browser to explore locally.

## Features

✨ **Two Main Components:**
1. **BackgroundGradient** - Full-page gradient backgrounds with customizable fade directions
2. **CardWithCornerAccent** - Cards with soft, cloud-like gradient glows behind corners

🎨 **Highly Customizable:**
- Custom color combinations (hex, RGB, RGBA, HSL, HSLA)
- Multiple blur intensities
- Directional fading (or solid backgrounds)
- Custom gradient angles (0-360°)
- Multi-color gradients (3+ colors)
- Dark mode support
- Preset color combinations
- Three size variations for corner accents
- Four corner positions

💪 **Developer Experience:**
- Full TypeScript support with complete type definitions
- Comprehensive error handling and validation
- Development-mode warnings with helpful suggestions
- 100+ unit tests for reliability

📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop

---

## Installation

### Via npm (Recommended)

```bash
npm install saas-effects
```

```bash
yarn add saas-effects
```

```bash
pnpm add saas-effects
```

Then import in your application:

```tsx
import { BackgroundGradient, CardWithCornerAccent } from 'saas-effects';
import 'saas-effects/dist/style.css';

// TypeScript types are included automatically!
import type { BackgroundGradientProps } from 'saas-effects';
```

### Manual Installation

Copy these files from the `src/` directory to your project:
```
src/GradientComponents.tsx
src/GradientComponents.css
src/types.ts
src/presets.ts
src/utils.ts
src/index.ts
```

Then import in your application:
```tsx
import { BackgroundGradient, CardWithCornerAccent } from './GradientComponents';
import './GradientComponents.css';
```

### Vanilla HTML/CSS Version

Want to see it in action immediately? Just open `demo.html` in your browser!

To use in your project, copy the CSS from `GradientComponents.css` and use the HTML structure from `demo.html`. The vanilla version uses CSS classes and inline styles instead of React components.

**HTML Example:**
```html
<!-- Background Gradient -->
<div class="gradient-background blur-soft" 
     style="--gradient-start: #7dd3fc; --gradient-end: #f472b6;">
  <h1>Your Content</h1>
</div>

<!-- Corner Accent Card -->
<div class="card-corner-wrapper" 
     style="--gradient-start: #7dd3fc; --gradient-end: #a78bfa;">
  <div class="gradient-corner-bg corner-tl"></div>
  <div class="card-with-accent">
    <h3>Card Content</h3>
  </div>
</div>
```

---

## Components

### BackgroundGradient

Creates a full-container gradient background that optionally fades to white or dark.

#### Props

| Prop | Type | Default | Options | Description |
|------|------|---------|---------|-------------|
| `colorStart` | string | `#3b82f6` | Any color format | Starting gradient color (hex, rgb, rgba, hsl, hsla) |
| `colorEnd` | string | `#ec4899` | Any color format | Ending gradient color (hex, rgb, rgba, hsl, hsla) |
| `colors` | string[] | - | Array of colors | Multi-color gradient (overrides colorStart/colorEnd) |
| `blur` | string | `normal` | `soft`, `normal`, `heavy` | Blur intensity |
| `fadeDirection` | string | `bottom` | `bottom`, `top`, `left`, `right`, `none` | Direction of fade |
| `angle` | number | `135` | 0-360 | Gradient angle in degrees |
| `darkMode` | boolean | `false` | true, false | Fade to dark background instead of white |
| `preset` | string | - | See [Presets](#presets) | Use a preset color combination |
| `className` | string | `''` | Any string | Additional CSS classes |
| `style` | CSSProperties | - | - | Additional inline styles |
| `children` | ReactNode | - | - | Content inside gradient |

#### Example Usage

```jsx
// Basic usage
<BackgroundGradient 
  colorStart="#7dd3fc"
  colorEnd="#f472b6"
>
  <h1>Your Content Here</h1>
</BackgroundGradient>

// Solid gradient (no fade)
<BackgroundGradient 
  colorStart="#a78bfa"
  colorEnd="#fb923c"
  fadeDirection="none"
  blur="soft"
>
  <h1>Vibrant Solid Gradient</h1>
</BackgroundGradient>

// Fade to top instead of bottom
<BackgroundGradient 
  colorStart="#10b981"
  colorEnd="#06b6d4"
  fadeDirection="top"
>
  <h1>Inverted Fade</h1>
</BackgroundGradient>

// ✨ NEW: Using presets
<BackgroundGradient preset="skyPink">
  <h1>Beautiful Preset!</h1>
</BackgroundGradient>

// ✨ NEW: Custom angle
<BackgroundGradient 
  colorStart="#7dd3fc"
  colorEnd="#f472b6"
  angle={45}
>
  <h1>45° Diagonal</h1>
</BackgroundGradient>

// ✨ NEW: Multi-color gradient
<BackgroundGradient 
  colors={['#7dd3fc', '#a78bfa', '#f472b6']}
>
  <h1>Triple Color!</h1>
</BackgroundGradient>

// ✨ NEW: Dark mode
<BackgroundGradient 
  colorStart="#a78bfa"
  colorEnd="#fb923c"
  darkMode={true}
>
  <h1 style={{color: 'white'}}>Dark Theme</h1>
</BackgroundGradient>
```

---

### CardWithCornerAccent

Creates a card with a soft, atmospheric gradient glow behind a specified corner.

#### Props

| Prop | Type | Default | Options | Description |
|------|------|---------|---------|-------------|
| `corner` | string | `tl` | `tl`, `tr`, `bl`, `br` | Corner position (top-left, top-right, bottom-left, bottom-right) |
| `colorStart` | string | `#3b82f6` | Any color format | Starting gradient color (hex, rgb, rgba, hsl, hsla) |
| `colorEnd` | string | `#ec4899` | Any color format | Ending gradient color (hex, rgb, rgba, hsl, hsla) |
| `size` | string | `md` | `sm`, `md`, `lg` | Glow size (150px, 250px, 350px) |
| `preset` | string | - | See [Presets](#presets) | Use a preset color combination |
| `className` | string | `''` | Any string | Additional CSS classes |
| `style` | CSSProperties | - | - | Additional inline styles |
| `children` | ReactNode | - | - | Card content |

#### Example Usage

```jsx
// Basic usage with top-left corner
<CardWithCornerAccent
  corner="tl"
  colorStart="#7dd3fc"
  colorEnd="#a78bfa"
>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</CardWithCornerAccent>

// Large glow on bottom-right
<CardWithCornerAccent
  corner="br"
  colorStart="#fb923c"
  colorEnd="#f97316"
  size="lg"
>
  <h3>Featured Card</h3>
  <p>With a bold corner accent</p>
</CardWithCornerAccent>

// Subtle small glow on top-right
<CardWithCornerAccent
  corner="tr"
  colorStart="#10b981"
  colorEnd="#06b6d4"
  size="sm"
>
  <h3>Minimalist Card</h3>
  <p>With subtle accent</p>
</CardWithCornerAccent>
```

---

## Complete Examples

### Hero Section

```jsx
import { BackgroundGradient } from './GradientComponents';

export const HeroSection = () => (
  <BackgroundGradient 
    colorStart="#7dd3fc"
    colorEnd="#f472b6"
    blur="soft"
    fadeDirection="bottom"
  >
    <div style={{ textAlign: 'center', color: '#1e293b', maxWidth: '600px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Welcome to Our Product
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Experience the future of design
      </p>
      <button style={{ padding: '12px 32px', fontSize: '1rem' }}>
        Get Started
      </button>
    </div>
  </BackgroundGradient>
);
```

### Pricing Cards

```jsx
import { CardWithCornerAccent } from './GradientComponents';

export const PricingCards = () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '80px',
    maxWidth: '1200px',
    margin: '0 auto'
  }}>
    <CardWithCornerAccent
      corner="tl"
      colorStart="#7dd3fc"
      colorEnd="#a78bfa"
      size="md"
    >
      <h3>Starter Plan</h3>
      <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>
        $29<span style={{ fontSize: '1rem' }}>/mo</span>
      </p>
      <button style={{ width: '100%', padding: '12px' }}>
        Choose Plan
      </button>
    </CardWithCornerAccent>

    <CardWithCornerAccent
      corner="tr"
      colorStart="#a78bfa"
      colorEnd="#ec4899"
      size="md"
    >
      <h3>Pro Plan</h3>
      <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>
        $79<span style={{ fontSize: '1rem' }}>/mo</span>
      </p>
      <button style={{ width: '100%', padding: '12px' }}>
        Choose Plan
      </button>
    </CardWithCornerAccent>
  </div>
);
```

### Feature Grid with Alternating Corners

```jsx
import { CardWithCornerAccent } from './GradientComponents';

export const FeatureGrid = () => {
  const features = [
    { title: 'Fast Performance', desc: 'Lightning quick with optimized algorithms', corner: 'tl' },
    { title: 'Secure', desc: 'Enterprise-grade security', corner: 'tr' },
    { title: 'Scalable', desc: 'Grows with your business', corner: 'bl' },
    { title: 'Reliable', desc: '99.9% uptime guarantee', corner: 'br' }
  ];

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
      gap: '80px' // Large gap prevents gradient overlap
    }}>
      {features.map((feature, idx) => (
        <CardWithCornerAccent
          key={idx}
          corner={feature.corner}
          colorStart="#a78bfa"
          colorEnd="#fb923c"
          size="md"
        >
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </CardWithCornerAccent>
      ))}
    </div>
  );
};
```

---

## Presets

Instead of specifying colors manually, you can use built-in presets for quick, beautiful results:

```tsx
// Using presets
<BackgroundGradient preset="skyPink">
  <h1>Beautiful!</h1>
</BackgroundGradient>

<CardWithCornerAccent preset="purpleOrange">
  <h3>Easy!</h3>
</CardWithCornerAccent>
```

### Available Presets

| Preset Name | Colors | Best For |
|-------------|--------|----------|
| `skyPink` | `#7dd3fc` → `#f472b6` | Hero sections, vibrant headers |
| `purpleOrange` | `#a78bfa` → `#fb923c` | Bold statements, CTAs |
| `greenBlue` | `#10b981` → `#3b82f6` | Success states, nature themes |
| `techBlue` | `#06b6d4` → `#3b82f6` | Tech products, SaaS apps |
| `coolTeal` | `#10b981` → `#06b6d4` | Calm, professional designs |
| `warmSunset` | `#fb923c` → `#ef4444` | Warm, energetic sections |

You can also override preset colors:

```tsx
// Use preset but override one color
<BackgroundGradient preset="skyPink" colorEnd="#custom">
  <h1>Custom twist on preset!</h1>
</BackgroundGradient>
```

## Color Schemes

Here are some beautiful color combinations to try:

```jsx
// Tech Blue
colorStart="#06b6d4" colorEnd="#3b82f6"

// Sunset Orange
colorStart="#fb923c" colorEnd="#f97316"

// Forest Green
colorStart="#10b981" colorEnd="#059669"

// Purple Dream
colorStart="#a78bfa" colorEnd="#c084fc"

// Sky to Pink
colorStart="#7dd3fc" colorEnd="#f472b6"

// Warm Gradient
colorStart="#fb923c" colorEnd="#ef4444"
```

---

## Customization

### CSS Variables

You can override the default colors using CSS variables:

```css
:root {
  --gradient-start: #your-color;
  --gradient-end: #your-color;
  --gradient-opacity: 1;
}
```

### Inline Styles

Or pass them directly via inline styles:

```jsx
<BackgroundGradient 
  style={{
    '--gradient-start': '#custom-color',
    '--gradient-end': '#custom-color'
  }}
/>
```

---

## Best Practices

1. **Color Contrast**: Ensure sufficient contrast between gradient colors and content
2. **Blur Amount**: Use `soft` blur for large backgrounds, `normal` or `heavy` for more defined effects
3. **Corner Variety**: Use different corners (tl, tr, bl, br) to create visual rhythm in card grids
4. **Content Readability**: Ensure text is readable over gradients (use dark text for lighter gradients)
5. **Performance**: These components are lightweight and optimized for performance
6. **Generous Spacing**: Use large gaps in card grids (80px+ recommended) to prevent gradient overlap and give effects room to breathe
7. **Substantial Card Height**: Ensure cards have enough content/height (300px+ recommended) to showcase corner effects clearly - thin cards don't show the gradients well

---

## TypeScript Usage

Full TypeScript support is included out of the box:

```tsx
import { 
  BackgroundGradient, 
  CardWithCornerAccent,
  BackgroundGradientProps,
  CardWithCornerAccentProps,
  PresetName
} from 'saas-effects';

// Type-safe props
const MyComponent: React.FC = () => {
  const gradientProps: BackgroundGradientProps = {
    preset: 'skyPink',
    blur: 'soft',
    fadeDirection: 'bottom',
  };

  return (
    <BackgroundGradient {...gradientProps}>
      <h1>Type-safe!</h1>
    </BackgroundGradient>
  );
};

// Type-safe preset names
const presetName: PresetName = 'purpleOrange';
```

---

## Performance Tips

### When to Use Which Blur Level

- **`blur="soft"`** (100px blur)
  - Best for: Large background sections, hero areas
  - Performance: Slightly more GPU-intensive
  - Visual: Dreamiest, most atmospheric effect

- **`blur="normal"`** (60px blur)
  - Best for: Balanced use cases, most sections
  - Performance: Good balance
  - Visual: Clear yet soft effect

- **`blur="heavy"`** (30px blur)
  - Best for: Defined gradients, smaller areas
  - Performance: Most efficient
  - Visual: Sharpest gradient definition

### General Tips

1. **Limit simultaneous gradients** - Use 3-5 gradient components per page maximum
2. **Use presets** - Slightly more efficient than custom colors
3. **Avoid nested gradients** - Don't nest BackgroundGradient components
4. **Optimize card grids** - Use CSS Grid/Flexbox efficiently for card layouts

---

## Framework Integration

### Tailwind CSS

```tsx
<BackgroundGradient 
  preset="skyPink"
  className="min-h-screen flex items-center justify-center"
>
  <div className="max-w-4xl mx-auto px-4">
    <h1 className="text-5xl font-bold text-slate-900">
      Tailwind + Gradients
    </h1>
  </div>
</BackgroundGradient>
```

### Material-UI (MUI)

```tsx
import { Box, Typography } from '@mui/material';

<BackgroundGradient preset="techBlue">
  <Box sx={{ textAlign: 'center', py: 10 }}>
    <Typography variant="h1" color="primary">
      MUI + Gradients
    </Typography>
  </Box>
</BackgroundGradient>
```

### Chakra UI

```tsx
import { Box, Heading } from '@chakra-ui/react';

<BackgroundGradient preset="coolTeal">
  <Box textAlign="center" py={20}>
    <Heading size="2xl">
      Chakra + Gradients
    </Heading>
  </Box>
</BackgroundGradient>
```

### Next.js

```tsx
// app/page.tsx
import { BackgroundGradient } from 'saas-effects';
import 'saas-effects/dist/style.css';

export default function Home() {
  return (
    <BackgroundGradient preset="skyPink">
      <h1>Next.js App</h1>
    </BackgroundGradient>
  );
}
```

---

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (14+)
- Mobile browsers: ✅ Full support

---

## FAQ

### How do I install this?

```bash
npm install saas-effects
```

Then import the components and CSS:
```tsx
import { BackgroundGradient, CardWithCornerAccent } from 'saas-effects';
import 'saas-effects/dist/style.css';
```

### Can I use custom colors?

Yes! All color formats are supported: hex, RGB, RGBA, HSL, HSLA.

```tsx
<BackgroundGradient 
  colorStart="#ff0000"
  colorEnd="rgb(0, 255, 0)"
/>
```

### How do I create a gradient with more than 2 colors?

Use the `colors` prop with an array:

```tsx
<BackgroundGradient 
  colors={['#7dd3fc', '#a78bfa', '#f472b6', '#fb923c']}
/>
```

### Does this work with TypeScript?

Yes! Full TypeScript support is included with complete type definitions.

### Can I use this with Next.js/Remix/other frameworks?

Yes! This library works with any React framework. Just import the components and CSS.

### How do I change the gradient angle?

Use the `angle` prop:

```tsx
<BackgroundGradient angle={45} colorStart="#7dd3fc" colorEnd="#f472b6" />
```

### What's the bundle size?

- Minified: ~8KB JavaScript + ~3KB CSS
- Gzipped: ~3KB JavaScript + ~1KB CSS

### Do I need to import React?

With React 17+, you don't need to explicitly import React. The components use the new JSX transform.

### How do I use this in vanilla JavaScript (no React)?

Check out `demo.html` for a complete vanilla HTML/CSS example. You can use the CSS classes directly without React.

---

## Troubleshooting

### Gradient not showing

1. **CSS not imported**
   ```tsx
   import 'saas-effects/dist/style.css'; // Don't forget this!
   ```

2. **Invalid color format**
   - Check colors are valid: hex, RGB, RGBA, HSL, or HSLA
   - Open browser console for validation warnings

3. **Container height too small**
   - BackgroundGradient has `min-height: 500px` by default
   - Add `style={{ minHeight: '...' }}` to adjust

### Corner glow not visible

1. **Wrong corner code**
   - Use: `tl`, `tr`, `bl`, or `br` only
   - Check browser console for warnings

2. **Colors too light**
   - Corner glows need contrast with white backgrounds
   - Try darker/more vibrant colors

3. **Size too small**
   - Try `size="lg"` for more prominent glows
   - Ensure cards have sufficient height (300px+)

### TypeScript errors

1. **Type not found**
   ```bash
   npm install @types/react @types/react-dom
   ```

2. **CSS import error**
   - Add to `tsconfig.json`: `"include": ["**/*.ts", "**/*.tsx"]`
   - Or use: `import 'saas-effects/dist/style.css';`

### Build errors

1. **Vite import errors**
   - Make sure `vite` and `@vitejs/plugin-react` are installed

2. **Module not found**
   ```bash
   npm install saas-effects
   ```

3. **CSS not loading**
   - Import CSS separately: `import 'saas-effects/dist/style.css';`

---

## License

Free to use and modify for your projects!

---

## Credits

Inspired by modern design systems including Lumen and Pulse.
