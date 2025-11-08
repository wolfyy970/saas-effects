# Gradient Components - Quick Reference v2.0

## Installation
```bash
npm install saas-effects
```

```tsx
import { BackgroundGradient, CardWithCornerAccent } from 'saas-effects';
import 'saas-effects/dist/style.css';

// TypeScript types included!
import type { BackgroundGradientProps, PresetName } from 'saas-effects';
```

---

## BackgroundGradient

**Props:**
- `colorStart` - Starting color (any format) - default: `#3b82f6`
- `colorEnd` - Ending color (any format) - default: `#ec4899`
- `colors` - Array of colors for multi-color gradients - overrides colorStart/colorEnd
- `blur` - `'soft'` | `'normal'` | `'heavy'` - default: `'normal'`
- `fadeDirection` - `'bottom'` | `'top'` | `'left'` | `'right'` | `'none'` - default: `'bottom'`
- `angle` - Gradient angle (0-360) - default: `135`
- `darkMode` - `boolean` - Fade to dark instead of white - default: `false`
- `preset` - Preset name: `'skyPink'` | `'purpleOrange'` | `'greenBlue'` | `'techBlue'` | `'coolTeal'` | `'warmSunset'`
- `className` - Additional CSS classes
- `style` - Inline styles

**Quick Examples:**
```tsx
// Basic
<BackgroundGradient colorStart="#7dd3fc" colorEnd="#f472b6">
  <h1>Content</h1>
</BackgroundGradient>

// Using preset
<BackgroundGradient preset="skyPink">
  <h1>Easy!</h1>
</BackgroundGradient>

// Custom angle
<BackgroundGradient angle={45} colorStart="#7dd3fc" colorEnd="#f472b6" />

// Multi-color
<BackgroundGradient colors={['#7dd3fc', '#a78bfa', '#f472b6']} />

// Dark mode
<BackgroundGradient darkMode={true} preset="purpleOrange">
  <h1 style={{color: 'white'}}>Dark</h1>
</BackgroundGradient>

// Solid (no fade)
<BackgroundGradient fadeDirection="none" blur="soft" preset="warmSunset" />
```

---

## CardWithCornerAccent

**Props:**
- `corner` - `'tl'` | `'tr'` | `'bl'` | `'br'` - default: `'tl'`
- `colorStart` - Starting color (any format) - default: `#3b82f6`
- `colorEnd` - Ending color (any format) - default: `#ec4899`
- `size` - `'sm'` | `'md'` | `'lg'` - default: `'md'`
- `preset` - Preset name: `'skyPink'` | `'purpleOrange'` | `'greenBlue'` | `'techBlue'` | `'coolTeal'` | `'warmSunset'`
- `className` - Additional CSS classes
- `style` - Inline styles

**Corner Codes:**
- `tl` = top-left
- `tr` = top-right
- `bl` = bottom-left
- `br` = bottom-right

**Quick Examples:**
```tsx
// Basic
<CardWithCornerAccent corner="tl" colorStart="#7dd3fc" colorEnd="#a78bfa">
  <h3>Card Title</h3>
  <p>Content</p>
</CardWithCornerAccent>

// Using preset
<CardWithCornerAccent corner="tr" preset="purpleOrange">
  <h3>Easy!</h3>
</CardWithCornerAccent>

// Large glow, bottom-right
<CardWithCornerAccent corner="br" size="lg" preset="coolTeal" />

// Small glow, top-right
<CardWithCornerAccent corner="tr" size="sm" colorStart="#10b981" colorEnd="#06b6d4" />
```

---

## Presets (v2.0)

Use preset names instead of specifying colors:

```tsx
preset="skyPink"       // #7dd3fc → #f472b6
preset="purpleOrange"  // #a78bfa → #fb923c  
preset="greenBlue"     // #10b981 → #3b82f6
preset="techBlue"      // #06b6d4 → #3b82f6
preset="coolTeal"      // #10b981 → #06b6d4
preset="warmSunset"    // #fb923c → #ef4444
```

**Or use manual colors:**

```tsx
// Sky to Pink
colorStart="#7dd3fc" colorEnd="#f472b6"

// Purple to Orange
colorStart="#a78bfa" colorEnd="#fb923c"

// Supports RGB, RGBA, HSL, HSLA too!
colorStart="rgb(125, 211, 252)" colorEnd="hsl(330, 100%, 71%)"
```

---

## Common Patterns

### Hero Section
```jsx
<BackgroundGradient blur="soft" fadeDirection="bottom" {...colors}>
  <div style={{ textAlign: 'center', maxWidth: '600px' }}>
    <h1>Title</h1>
    <p>Description</p>
    <button>CTA</button>
  </div>
</BackgroundGradient>
```

### Pricing Grid
```jsx
<div style={{ display: 'grid', gap: '80px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
  <CardWithCornerAccent corner="tl" {...colors}>
    <h3>Plan</h3>
    <p>$29/mo</p>
  </CardWithCornerAccent>
  {/* More cards */}
</div>
```

### Feature Cards with Variety
```jsx
const corners = ['tl', 'tr', 'bl', 'br'];
features.map((feature, i) => (
  <CardWithCornerAccent corner={corners[i % 4]} {...colors}>
    {feature.content}
  </CardWithCornerAccent>
))
```

---

## New in v2.0

✨ **TypeScript** - Full type definitions included  
✨ **Presets** - Quick beautiful gradients with preset names  
✨ **Custom Angles** - Control gradient direction (0-360°)  
✨ **Multi-Color** - 3+ colors in one gradient  
✨ **Dark Mode** - Fade to dark backgrounds  
✨ **Enhanced Colors** - Support for RGB, RGBA, HSL, HSLA  
✨ **Error Handling** - Helpful console warnings in development  

---

## Tips

✅ Use `blur="soft"` for large backgrounds  
✅ Use presets for quick, beautiful results  
✅ Use different corners for visual variety  
✅ Use large gaps in grids (80px recommended) for best effect  
✅ Make cards tall with substantial content to showcase corner gradients  
✅ Dark text works best on pastel gradients  
✅ Use `fadeDirection="none"` for bold, vibrant backgrounds  
✅ Use `angle` prop to customize gradient direction  
✅ Try `darkMode={true}` for dark theme pages
