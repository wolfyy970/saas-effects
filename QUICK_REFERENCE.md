# Gradient Components - Quick Reference

## Installation
```jsx
import { BackgroundGradient, CardWithCornerAccent } from './GradientComponents';
import './GradientComponents.css';
```

---

## BackgroundGradient

**Props:**
- `colorStart` - Starting color (hex) - default: `#3b82f6`
- `colorEnd` - Ending color (hex) - default: `#ec4899`
- `blur` - `'soft'` | `'normal'` | `'heavy'` - default: `'normal'`
- `fadeDirection` - `'bottom'` | `'top'` | `'left'` | `'right'` | `'none'` - default: `'bottom'`

**Quick Examples:**
```jsx
// Basic
<BackgroundGradient colorStart="#7dd3fc" colorEnd="#f472b6">
  <h1>Content</h1>
</BackgroundGradient>

// Solid (no fade)
<BackgroundGradient fadeDirection="none" blur="soft" {...colors} />

// Fade to top
<BackgroundGradient fadeDirection="top" {...colors} />
```

---

## CardWithCornerAccent

**Props:**
- `corner` - `'tl'` | `'tr'` | `'bl'` | `'br'` - default: `'tl'`
- `colorStart` - Starting color (hex) - default: `#3b82f6`
- `colorEnd` - Ending color (hex) - default: `#ec4899`
- `size` - `'sm'` | `'md'` | `'lg'` - default: `'md'`

**Corner Codes:**
- `tl` = top-left
- `tr` = top-right
- `bl` = bottom-left
- `br` = bottom-right

**Quick Examples:**
```jsx
// Basic
<CardWithCornerAccent corner="tl" colorStart="#7dd3fc" colorEnd="#a78bfa">
  <h3>Card Title</h3>
  <p>Content</p>
</CardWithCornerAccent>

// Large glow, bottom-right
<CardWithCornerAccent corner="br" size="lg" {...colors} />

// Small glow, top-right
<CardWithCornerAccent corner="tr" size="sm" {...colors} />
```

---

## Color Presets

```jsx
// Sky to Pink
colorStart="#7dd3fc" colorEnd="#f472b6"

// Purple to Orange
colorStart="#a78bfa" colorEnd="#fb923c"

// Green to Blue
colorStart="#10b981" colorEnd="#3b82f6"

// Warm Sunset
colorStart="#fb923c" colorEnd="#ef4444"

// Tech Blue
colorStart="#06b6d4" colorEnd="#3b82f6"

// Cool Teal
colorStart="#10b981" colorEnd="#06b6d4"
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

## Tips

✅ Use `blur="soft"` for large backgrounds  
✅ Use different corners for visual variety  
✅ Use large gaps in grids (80px recommended) for best effect  
✅ Make cards tall with substantial content to showcase corner gradients  
✅ Dark text works best on pastel gradients  
✅ Use `fadeDirection="none"` for bold, vibrant backgrounds
