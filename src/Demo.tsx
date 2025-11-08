import { BackgroundGradient, CardWithCornerAccent } from './GradientComponents';
import './GradientComponents.css';

/**
 * Demo page showcasing all gradient component variations
 * Now includes TypeScript types, angle control, multi-color gradients, dark mode, and presets
 */

export default function GradientComponentsDemo() {
  return (
    <>
      <style>{`
        .demo-container {
          width: 100%;
          background: #f8fafc;
          padding: 60px 40px;
        }

        .demo-section {
          max-width: 1200px;
          margin: 0 auto 180px;
        }

        .demo-section h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 24px;
        }

        .demo-section .description {
          font-size: 1rem;
          color: #64748b;
          margin-bottom: 56px;
          font-style: italic;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 120px;
          width: 100%;
        }

        .variations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 60px;
        }

        .variation {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .variation h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 20px;
        }

        .small-bg {
          min-height: 120px;
          padding: 20px;
        }

        .blur-preview {
          min-height: 150px;
          border-radius: 8px;
        }

        .content-wrapper {
          max-width: 600px;
          text-align: center;
          color: #1e293b;
        }

        .content-wrapper h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .content-wrapper p {
          font-size: 1.125rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .cta-button {
          display: inline-block;
          padding: 12px 32px;
          margin-top: 24px;
          background: #1e293b;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .cta-button:hover {
          background: #0f172a;
          transform: translateY(-2px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }

        .badge {
          display: inline-block;
          background: #fef3c7;
          color: #92400e;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .card-with-accent h3 {
          font-size: 1.375rem;
          font-weight: 700;
          color: #1e293b;
          margin: 20px 0 16px 0;
        }

        .card-with-accent .subtitle {
          font-size: 0.95rem;
          color: #a0aec0;
          margin: 0 0 12px 0;
        }

        .card-with-accent .title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin: 8px 0 24px 0;
        }

        .card-with-accent .price {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          margin: 24px 0 32px 0;
        }

        .card-with-accent .price span {
          font-size: 0.875rem;
          font-weight: 500;
          color: #64748b;
        }

        .btn-primary {
          display: inline-block;
          width: 100%;
          padding: 14px;
          background: #1e293b;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          margin-bottom: 32px;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #0f172a;
          transform: translateY(-1px);
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features-list li {
          padding: 12px 0;
          padding-left: 20px;
          color: #64748b;
          font-size: 0.95rem;
          position: relative;
        }

        .features-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .demo-container {
            padding: 50px 30px;
          }

          .demo-section {
            margin-bottom: 140px;
          }

          .demo-section h2 {
            margin-bottom: 20px;
          }

          .demo-section .description {
            margin-bottom: 48px;
          }

          .cards-grid {
            grid-template-columns: 1fr;
            gap: 80px;
          }

          .variations-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 48px;
          }

          .content-wrapper h1 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .demo-container {
            padding: 40px 20px;
          }

          .demo-section {
            margin-bottom: 120px;
          }

          .demo-section h2 {
            margin-bottom: 16px;
          }

          .demo-section .description {
            margin-bottom: 40px;
          }

          .content-wrapper h1 {
            font-size: 1.5rem;
          }

          .variations-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .cards-grid {
            gap: 64px;
          }
        }
      `}</style>

      <div className="demo-container">
        {/* EXAMPLE 1: Full Background Gradient */}
        <section className="demo-section">
          <h2>✨ Full Background Gradient</h2>
          <p className="description">Vibrant gradient that fades to white at the bottom</p>
          
          <BackgroundGradient 
            colorStart="#7dd3fc"
            colorEnd="#f472b6"
            blur="soft"
            fadeDirection="bottom"
          >
            <div className="content-wrapper">
              <h1>Power Your Progress</h1>
              <p>Beautiful gradient backgrounds for modern web applications</p>
              <button className="cta-button">Get Started</button>
            </div>
          </BackgroundGradient>
        </section>

        {/* NEW: Preset System Example */}
        <section className="demo-section">
          <h2>🎨 Using Presets</h2>
          <p className="description">Quick beautiful gradients with preset color combinations</p>
          
          <BackgroundGradient 
            preset="purpleOrange"
            blur="soft"
            fadeDirection="bottom"
          >
            <div className="content-wrapper">
              <h1>Preset: Purple Orange</h1>
              <p>Just use preset="purpleOrange" - no need to specify colors!</p>
            </div>
          </BackgroundGradient>
        </section>

        {/* NEW: Custom Angle Example */}
        <section className="demo-section">
          <h2>📐 Custom Gradient Angles</h2>
          <p className="description">Control the direction of your gradients</p>
          
          <div className="variations-grid">
            <div className="variation">
              <h4>45° Angle</h4>
              <BackgroundGradient 
                colorStart="#7dd3fc"
                colorEnd="#f472b6"
                angle={45}
                blur="normal"
                className="blur-preview"
              >
                <span style={{color: '#1e293b', fontWeight: '600'}}>45°</span>
              </BackgroundGradient>
            </div>

            <div className="variation">
              <h4>90° Angle</h4>
              <BackgroundGradient 
                colorStart="#7dd3fc"
                colorEnd="#f472b6"
                angle={90}
                blur="normal"
                className="blur-preview"
              >
                <span style={{color: '#1e293b', fontWeight: '600'}}>90°</span>
              </BackgroundGradient>
            </div>

            <div className="variation">
              <h4>180° Angle</h4>
              <BackgroundGradient 
                colorStart="#7dd3fc"
                colorEnd="#f472b6"
                angle={180}
                blur="normal"
                className="blur-preview"
              >
                <span style={{color: '#1e293b', fontWeight: '600'}}>180°</span>
              </BackgroundGradient>
            </div>
          </div>
        </section>

        {/* NEW: Multi-Color Gradients */}
        <section className="demo-section">
          <h2>🌈 Multi-Color Gradients</h2>
          <p className="description">Create gradients with 3 or more colors</p>
          
          <div className="variations-grid">
            <div className="variation">
              <h4>3 Colors</h4>
              <BackgroundGradient 
                colors={['#7dd3fc', '#a78bfa', '#f472b6']}
                blur="normal"
                className="blur-preview"
              >
                <span style={{color: '#1e293b', fontWeight: '600'}}>Triple</span>
              </BackgroundGradient>
            </div>

            <div className="variation">
              <h4>4 Colors</h4>
              <BackgroundGradient 
                colors={['#10b981', '#06b6d4', '#a78bfa', '#ec4899']}
                blur="soft"
                className="blur-preview"
              >
                <span style={{color: '#1e293b', fontWeight: '600'}}>Quad</span>
              </BackgroundGradient>
            </div>

            <div className="variation">
              <h4>5 Colors</h4>
              <BackgroundGradient 
                colors={['#fb923c', '#f472b6', '#a78bfa', '#7dd3fc', '#10b981']}
                blur="normal"
                className="blur-preview"
              >
                <span style={{color: '#1e293b', fontWeight: '600'}}>Rainbow</span>
              </BackgroundGradient>
            </div>
          </div>
        </section>

        {/* NEW: Dark Mode */}
        <section className="demo-section">
          <h2>🌙 Dark Mode Support</h2>
          <p className="description">Gradients that fade to dark backgrounds</p>
          
          <BackgroundGradient 
            colorStart="#a78bfa"
            colorEnd="#fb923c"
            blur="soft"
            fadeDirection="bottom"
            darkMode={true}
          >
            <div className="content-wrapper" style={{color: 'white'}}>
              <h1 style={{color: 'white'}}>Dark Mode Gradient</h1>
              <p style={{color: 'rgba(255,255,255,0.9)'}}>Fades to dark background instead of white</p>
              <button className="cta-button">Explore More</button>
            </div>
          </BackgroundGradient>
        </section>

        {/* EXAMPLE 2: Corner Accent Cards with Presets */}
        <section className="demo-section">
          <h2>☁️ Corner Accent Cards with Presets</h2>
          <p className="description">Soft, atmospheric glow using preset colors</p>
          
          <div className="cards-grid">
            <CardWithCornerAccent
              corner="tl"
              preset="skyPink"
              size="md"
            >
              <span className="badge">Popular</span>
              <h3>Starter Plan</h3>
              <p className="subtitle">Perfect for individuals</p>
              <p className="price">$29<span>/mo</span></p>
              <button className="btn-primary">Get Started</button>
              <ul className="features-list">
                <li>5 projects</li>
                <li>10GB storage</li>
                <li>Basic support</li>
              </ul>
            </CardWithCornerAccent>

            <CardWithCornerAccent
              corner="tr"
              preset="purpleOrange"
              size="md"
            >
              <h3>Pro Plan</h3>
              <p className="subtitle">For growing teams</p>
              <p className="price">$79<span>/mo</span></p>
              <button className="btn-primary">Get Started</button>
              <ul className="features-list">
                <li>Unlimited projects</li>
                <li>100GB storage</li>
                <li>Priority support</li>
              </ul>
            </CardWithCornerAccent>

            <CardWithCornerAccent
              corner="bl"
              preset="coolTeal"
              size="md"
            >
              <h3>Enterprise</h3>
              <p className="subtitle">Custom solutions</p>
              <p className="price">Custom</p>
              <button className="btn-primary">Contact Sales</button>
              <ul className="features-list">
                <li>Everything in Pro</li>
                <li>Dedicated support</li>
                <li>Custom integrations</li>
              </ul>
            </CardWithCornerAccent>
          </div>
        </section>

        {/* EXAMPLE 3: Color Variations */}
        <section className="demo-section">
          <h2>🎨 Color Variations</h2>
          <p className="description">Beautiful color combinations for any design</p>
          
          <div className="variations-grid">
            <div className="variation">
              <h4>Purple → Orange</h4>
              <BackgroundGradient 
                colorStart="#a78bfa"
                colorEnd="#fb923c"
                blur="normal"
                className="small-bg"
              >
                <span style={{color: '#1e293b', fontSize: '12px', fontWeight: '600'}}>Preview</span>
              </BackgroundGradient>
            </div>

            <div className="variation">
              <h4>Sky → Pink</h4>
              <BackgroundGradient 
                colorStart="#7dd3fc"
                colorEnd="#f472b6"
                blur="soft"
                className="small-bg"
              >
                <span style={{color: '#1e293b', fontSize: '12px', fontWeight: '600'}}>Preview</span>
              </BackgroundGradient>
            </div>

            <div className="variation">
              <h4>Green → Blue</h4>
              <BackgroundGradient 
                colorStart="#10b981"
                colorEnd="#3b82f6"
                blur="heavy"
                className="small-bg"
              >
                <span style={{color: '#1e293b', fontSize: '12px', fontWeight: '600'}}>Preview</span>
              </BackgroundGradient>
            </div>

            <div className="variation">
              <h4>Warm Sunset (Solid)</h4>
              <BackgroundGradient 
                colorStart="#fb923c"
                colorEnd="#ef4444"
                blur="normal"
                fadeDirection="none"
                className="small-bg"
              >
                <span style={{color: 'white', fontSize: '12px', fontWeight: '600'}}>Solid</span>
              </BackgroundGradient>
            </div>
          </div>
        </section>

        {/* EXAMPLE 4: Blur Variations */}
        <section className="demo-section">
          <h2>💫 Blur Variations</h2>
          <p className="description">Control the softness of gradient effects</p>
          
          <div className="variations-grid">
            <div className="variation">
              <h4>Soft Blur</h4>
              <BackgroundGradient 
                colorStart="#7dd3fc"
                colorEnd="#f472b6"
                blur="soft"
                className="blur-preview"
              >
                <span style={{color: '#1e293b', fontWeight: '600'}}>Softest</span>
              </BackgroundGradient>
            </div>

            <div className="variation">
              <h4>Normal Blur</h4>
              <BackgroundGradient 
                colorStart="#7dd3fc"
                colorEnd="#f472b6"
                blur="normal"
                className="blur-preview"
              >
                <span style={{color: '#1e293b', fontWeight: '600'}}>Balanced</span>
              </BackgroundGradient>
            </div>

            <div className="variation">
              <h4>Heavy Blur</h4>
              <BackgroundGradient 
                colorStart="#7dd3fc"
                colorEnd="#f472b6"
                blur="heavy"
                className="blur-preview"
              >
                <span style={{color: '#1e293b', fontWeight: '600'}}>Sharpest</span>
              </BackgroundGradient>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

