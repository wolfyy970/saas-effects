/**
 * CodeSandbox Template for Gradient Components
 * 
 * To use this template:
 * 1. Create a new React sandbox on codesandbox.io
 * 2. Install: npm install saas-effects
 * 3. Copy this code to App.js
 * 4. Enjoy!
 * 
 * OR copy the component files directly into your project:
 * - src/GradientComponents.tsx
 * - src/GradientComponents.css
 * - src/types.ts
 * - src/presets.ts
 * - src/utils.ts
 */

import React from 'react';
import { BackgroundGradient, CardWithCornerAccent } from 'saas-effects';
import 'saas-effects/dist/style.css';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Example 1: Basic Background Gradient */}
      <BackgroundGradient
        colorStart="#7dd3fc"
        colorEnd="#f472b6"
        blur="soft"
        fadeDirection="bottom"
      >
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#1e293b' }}>
            Welcome to Gradient Components
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569' }}>
            Beautiful gradients made easy with TypeScript support
          </p>
        </div>
      </BackgroundGradient>

      {/* Example 2: Using Presets */}
      <section style={{ padding: '80px 40px', background: '#f8fafc' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#1e293b' }}>
          Using Presets
        </h2>
        <BackgroundGradient
          preset="purpleOrange"
          blur="normal"
          fadeDirection="bottom"
          style={{ minHeight: '300px' }}
        >
          <div style={{ textAlign: 'center', color: '#1e293b' }}>
            <h3>Just use preset="purpleOrange"</h3>
            <p>No need to specify colors!</p>
          </div>
        </BackgroundGradient>
      </section>

      {/* Example 3: Multi-Color Gradient */}
      <section style={{ padding: '80px 40px', background: 'white' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#1e293b' }}>
          Multi-Color Gradients
        </h2>
        <BackgroundGradient
          colors={['#7dd3fc', '#a78bfa', '#f472b6']}
          blur="soft"
          fadeDirection="bottom"
          style={{ minHeight: '300px' }}
        >
          <div style={{ textAlign: 'center', color: '#1e293b' }}>
            <h3>3+ Color Gradients</h3>
            <p>Pass an array of colors for stunning effects</p>
          </div>
        </BackgroundGradient>
      </section>

      {/* Example 4: Custom Angle */}
      <section style={{ padding: '80px 40px', background: '#f8fafc' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#1e293b' }}>
          Custom Angles
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <BackgroundGradient
            colorStart="#7dd3fc"
            colorEnd="#f472b6"
            angle={45}
            blur="normal"
            style={{ minHeight: '200px', borderRadius: '12px' }}
          >
            <div style={{ textAlign: 'center', color: '#1e293b' }}>
              <strong>45°</strong>
            </div>
          </BackgroundGradient>
          
          <BackgroundGradient
            colorStart="#7dd3fc"
            colorEnd="#f472b6"
            angle={90}
            blur="normal"
            style={{ minHeight: '200px', borderRadius: '12px' }}
          >
            <div style={{ textAlign: 'center', color: '#1e293b' }}>
              <strong>90°</strong>
            </div>
          </BackgroundGradient>
          
          <BackgroundGradient
            colorStart="#7dd3fc"
            colorEnd="#f472b6"
            angle={180}
            blur="normal"
            style={{ minHeight: '200px', borderRadius: '12px' }}
          >
            <div style={{ textAlign: 'center', color: '#1e293b' }}>
              <strong>180°</strong>
            </div>
          </BackgroundGradient>
        </div>
      </section>

      {/* Example 5: Dark Mode */}
      <section style={{ padding: '80px 40px', background: 'white' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#1e293b' }}>
          Dark Mode Support
        </h2>
        <BackgroundGradient
          colorStart="#a78bfa"
          colorEnd="#fb923c"
          blur="soft"
          fadeDirection="bottom"
          darkMode={true}
          style={{ minHeight: '300px' }}
        >
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h3>Dark Mode Gradient</h3>
            <p>Fades to dark background instead of white</p>
          </div>
        </BackgroundGradient>
      </section>

      {/* Example 6: Corner Accent Cards */}
      <section style={{ padding: '80px 40px', background: '#f8fafc' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '60px', color: '#1e293b' }}>
          Corner Accent Cards
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <CardWithCornerAccent
            corner="tl"
            preset="skyPink"
            size="md"
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Starter Plan</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>
              $29<span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/mo</span>
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '8px 0' }}>✓ 5 projects</li>
              <li style={{ padding: '8px 0' }}>✓ 10GB storage</li>
              <li style={{ padding: '8px 0' }}>✓ Basic support</li>
            </ul>
          </CardWithCornerAccent>

          <CardWithCornerAccent
            corner="tr"
            preset="purpleOrange"
            size="md"
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Pro Plan</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>
              $79<span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/mo</span>
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '8px 0' }}>✓ Unlimited projects</li>
              <li style={{ padding: '8px 0' }}>✓ 100GB storage</li>
              <li style={{ padding: '8px 0' }}>✓ Priority support</li>
            </ul>
          </CardWithCornerAccent>

          <CardWithCornerAccent
            corner="bl"
            preset="coolTeal"
            size="md"
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Enterprise</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>
              Custom
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '8px 0' }}>✓ Everything in Pro</li>
              <li style={{ padding: '8px 0' }}>✓ Dedicated support</li>
              <li style={{ padding: '8px 0' }}>✓ Custom integrations</li>
            </ul>
          </CardWithCornerAccent>
        </div>
      </section>

      {/* Try it yourself section */}
      <section style={{ padding: '80px 40px', background: 'white', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px', color: '#1e293b' }}>
          Try It Yourself!
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: '#64748b' }}>
          Edit the code above to customize colors, angles, blur levels, and more.
          Check out the full documentation on GitHub for all available props and features.
        </p>
        <a
          href="https://github.com/kcwolff/saas-effects"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: '#1e293b',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '600'
          }}
        >
          View on GitHub
        </a>
      </section>
    </div>
  );
}

