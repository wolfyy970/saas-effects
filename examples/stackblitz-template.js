/**
 * StackBlitz Template for Gradient Components
 * 
 * To use this template:
 * 1. Create a new React project on stackblitz.com
 * 2. Install: npm install saas-effects
 * 3. Copy this code to App.jsx
 * 4. Start building!
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

function App() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Hero Section with Gradient */}
      <BackgroundGradient
        preset="skyPink"
        blur="soft"
        fadeDirection="bottom"
      >
        <div style={{ 
          textAlign: 'center', 
          maxWidth: '800px',
          padding: '40px 20px'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            marginBottom: '1rem', 
            color: '#1e293b',
            fontWeight: '700'
          }}>
            Beautiful Gradient Components
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
            color: '#475569',
            marginBottom: '2rem'
          }}>
            TypeScript-powered React components for stunning visual effects
          </p>
          <button style={{
            padding: '12px 32px',
            fontSize: '1rem',
            fontWeight: '600',
            background: '#1e293b',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            Get Started
          </button>
        </div>
      </BackgroundGradient>

      {/* Features Grid */}
      <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '60px', 
            fontSize: '2rem',
            color: '#1e293b' 
          }}>
            Powerful Features
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '60px'
          }}>
            <CardWithCornerAccent corner="tl" preset="skyPink" size="md">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e293b' }}>
                🎨 Presets
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Choose from beautiful preset color combinations or create your own
              </p>
            </CardWithCornerAccent>

            <CardWithCornerAccent corner="tr" preset="purpleOrange" size="md">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e293b' }}>
                📐 Custom Angles
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Control gradient direction with custom angles from 0-360 degrees
              </p>
            </CardWithCornerAccent>

            <CardWithCornerAccent corner="bl" preset="coolTeal" size="md">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e293b' }}>
                🌈 Multi-Color
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Create stunning gradients with 3 or more colors
              </p>
            </CardWithCornerAccent>

            <CardWithCornerAccent corner="br" preset="warmSunset" size="md">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e293b' }}>
                🌙 Dark Mode
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Built-in dark mode support for modern applications
              </p>
            </CardWithCornerAccent>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '20px',
            fontSize: '2rem',
            color: '#1e293b'
          }}>
            See It In Action
          </h2>
          <p style={{ 
            textAlign: 'center', 
            marginBottom: '60px',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto 60px'
          }}>
            Explore different variations and find the perfect style for your project
          </p>

          {/* Multi-color example */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>
              Multi-Color Gradient
            </h3>
            <BackgroundGradient
              colors={['#10b981', '#06b6d4', '#a78bfa', '#ec4899']}
              blur="normal"
              fadeDirection="bottom"
              style={{ minHeight: '250px', borderRadius: '12px' }}
            >
              <div style={{ textAlign: 'center', color: '#1e293b' }}>
                <strong>4 colors in one gradient!</strong>
              </div>
            </BackgroundGradient>
          </div>

          {/* Dark mode example */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>
              Dark Mode
            </h3>
            <BackgroundGradient
              preset="purpleOrange"
              blur="soft"
              fadeDirection="bottom"
              darkMode={true}
              style={{ minHeight: '250px', borderRadius: '12px' }}
            >
              <div style={{ textAlign: 'center', color: 'white' }}>
                <strong>Perfect for dark themes</strong>
              </div>
            </BackgroundGradient>
          </div>

          {/* Custom angle example */}
          <div>
            <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>
              Custom Angles
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
              gap: '20px' 
            }}>
              {[0, 45, 90, 135, 180].map(angle => (
                <BackgroundGradient
                  key={angle}
                  colorStart="#7dd3fc"
                  colorEnd="#f472b6"
                  angle={angle}
                  blur="normal"
                  fadeDirection="none"
                  style={{ 
                    minHeight: '150px', 
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <strong style={{ color: 'white' }}>{angle}°</strong>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '80px 20px', 
        background: '#f8fafc',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', color: '#1e293b' }}>
          Ready to Get Started?
        </h2>
        <p style={{ 
          maxWidth: '600px', 
          margin: '0 auto 40px', 
          color: '#64748b',
          lineHeight: '1.6'
        }}>
          Install via npm or copy the source files directly into your project.
          Full TypeScript support included.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            padding: '12px 32px',
            fontSize: '1rem',
            fontWeight: '600',
            background: '#1e293b',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            View Documentation
          </button>
          <button style={{
            padding: '12px 32px',
            fontSize: '1rem',
            fontWeight: '600',
            background: 'white',
            color: '#1e293b',
            border: '2px solid #1e293b',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            GitHub
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '40px 20px', 
        background: 'white',
        textAlign: 'center',
        color: '#64748b',
        fontSize: '0.875rem'
      }}>
        <p>Built with ❤️ using React and TypeScript</p>
        <p style={{ marginTop: '10px' }}>
          MIT Licensed • Free to use in your projects
        </p>
      </footer>
    </div>
  );
}

export default App;

