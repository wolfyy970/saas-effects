# Gradient Accent Components

A lightweight, flexible React component library for creating beautiful gradient backgrounds and atmospheric card accents inspired by modern design systems like Lumen and Pulse.

**Available in both React and vanilla HTML/CSS versions.** Not sure which to use? See [WHICH_VERSION.md](WHICH_VERSION.md)

## Features

✨ **Two Main Components:**
1. **BackgroundGradient** - Full-page gradient backgrounds with customizable fade directions
2. **CardWithCornerAccent** - Cards with soft, cloud-like gradient glows behind corners

🎨 **Highly Customizable:**
- Custom color combinations
- Multiple blur intensities
- Directional fading (or solid backgrounds)
- Three size variations for corner accents
- Four corner positions

📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop

---

## Installation

### React Version

Copy these files to your project:
```
GradientComponents.jsx
GradientComponents.css
```

Then import in your application:
```jsx
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

Creates a full-container gradient background that optionally fades to white.

#### Props

| Prop | Type | Default | Options | Description |
|------|------|---------|---------|-------------|
| `colorStart` | string | `#3b82f6` | Any hex color | Starting gradient color |
| `colorEnd` | string | `#ec4899` | Any hex color | Ending gradient color |
| `blur` | string | `normal` | `soft`, `normal`, `heavy` | Blur intensity |
| `fadeDirection` | string | `bottom` | `bottom`, `top`, `left`, `right`, `none` | Direction of white fade |
| `className` | string | `''` | Any string | Additional CSS classes |
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
```

---

### CardWithCornerAccent

Creates a card with a soft, atmospheric gradient glow behind a specified corner.

#### Props

| Prop | Type | Default | Options | Description |
|------|------|---------|---------|-------------|
| `corner` | string | `tl` | `tl`, `tr`, `bl`, `br` | Corner position (top-left, top-right, bottom-left, bottom-right) |
| `colorStart` | string | `#3b82f6` | Any hex color | Starting gradient color |
| `colorEnd` | string | `#ec4899` | Any hex color | Ending gradient color |
| `size` | string | `md` | `sm`, `md`, `lg` | Glow size (150px, 250px, 350px) |
| `className` | string | `''` | Any string | Additional CSS classes |
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

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (14+)
- Mobile browsers: ✅ Full support

---

## Troubleshooting

**Gradient not showing:**
- Verify CSS file is imported
- Check color format is valid hex (e.g., `#7dd3fc`)
- Ensure container has sufficient height

**Corner glow not visible:**
- Verify `corner` prop is correct (`tl`, `tr`, `bl`, `br`)
- Check colors have sufficient contrast with white background
- Try increasing `size` to `lg`

**Blur too strong/weak:**
- Adjust `blur` prop: `soft`, `normal`, or `heavy`
- Modify blur values in CSS for custom effects

---

## License

Free to use and modify for your projects!

---

## Credits

Inspired by modern design systems including Lumen and Pulse.
