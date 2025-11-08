import React from 'react';
import { BackgroundGradient, CardWithCornerAccent } from './GradientComponents';
import './GradientComponents.css';

/**
 * Demo page showcasing all gradient component variations
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

        {/* EXAMPLE 2: Corner Accent Cards */}
        <section className="demo-section">
          <h2>☁️ Corner Accent Cards</h2>
          <p className="description">Soft, atmospheric glow behind card corners</p>
          
          <div className="cards-grid">
            <CardWithCornerAccent
              corner="tl"
              colorStart="#7dd3fc"
              colorEnd="#a78bfa"
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
              colorStart="#a78bfa"
              colorEnd="#ec4899"
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
              colorStart="#10b981"
              colorEnd="#06b6d4"
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
          <h2>🌈 Color Variations</h2>
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
              <h4>Warm Sunset</h4>
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

        {/* EXAMPLE 5: Fade Directions */}
        <section className="demo-section">
          <h2>🧭 Fade Directions</h2>
          <p className="description">Control where the gradient fades to white</p>
          
          <div className="variations-grid">
            <div className="variation">
              <h4>Fade Bottom</h4>
              <BackgroundGradient 
                colorStart="#7dd3fc"
                colorEnd="#f472b6"
                fadeDirection="bottom"
                className="blur-preview"
              >
                <span style={{color: '#1e293b', fontWeight: '600'}}>↓</span>
              </BackgroundGradient>
            </div>

            <div className="variation">
              <h4>Fade Top</h4>
              <BackgroundGradient 
                colorStart="#7dd3fc"
                colorEnd="#f472b6"
                fadeDirection="top"
                className="blur-preview"
              >
                <span style={{color: '#1e293b', fontWeight: '600'}}>↑</span>
              </BackgroundGradient>
            </div>

            <div className="variation">
              <h4>Fade Left</h4>
              <BackgroundGradient 
                colorStart="#7dd3fc"
                colorEnd="#f472b6"
                fadeDirection="left"
                className="blur-preview"
              >
                <span style={{color: '#1e293b', fontWeight: '600'}}>←</span>
              </BackgroundGradient>
            </div>

            <div className="variation">
              <h4>Fade Right</h4>
              <BackgroundGradient 
                colorStart="#7dd3fc"
                colorEnd="#f472b6"
                fadeDirection="right"
                className="blur-preview"
              >
                <span style={{color: '#1e293b', fontWeight: '600'}}>→</span>
              </BackgroundGradient>
            </div>

            <div className="variation">
              <h4>No Fade (Solid)</h4>
              <BackgroundGradient 
                colorStart="#7dd3fc"
                colorEnd="#f472b6"
                fadeDirection="none"
                className="blur-preview"
              >
                <span style={{color: 'white', fontWeight: '600'}}>Solid</span>
              </BackgroundGradient>
            </div>
          </div>
        </section>

        {/* EXAMPLE 6: Corner Sizes */}
        <section className="demo-section">
          <h2>📐 Corner Glow Sizes</h2>
          <p className="description">Adjust the spread and intensity</p>
          
          <div className="cards-grid">
            <CardWithCornerAccent
              corner="tl"
              colorStart="#7dd3fc"
              colorEnd="#a78bfa"
              size="sm"
            >
              <h3>Small Glow</h3>
              <p>Subtle 150px corner accent</p>
            </CardWithCornerAccent>

            <CardWithCornerAccent
              corner="tl"
              colorStart="#7dd3fc"
              colorEnd="#a78bfa"
              size="md"
            >
              <h3>Medium Glow</h3>
              <p>Balanced 250px corner accent</p>
            </CardWithCornerAccent>

            <CardWithCornerAccent
              corner="tl"
              colorStart="#7dd3fc"
              colorEnd="#a78bfa"
              size="lg"
            >
              <h3>Large Glow</h3>
              <p>Bold 350px corner accent</p>
            </CardWithCornerAccent>
          </div>
        </section>

        {/* EXAMPLE 7: All Corner Positions */}
        <section className="demo-section">
          <h2>📍 Corner Positions</h2>
          <p className="description">Place gradients in any corner: tl, tr, bl, br - Cards are taller to clearly show corner placement</p>
          
          <div className="cards-grid">
            <CardWithCornerAccent
              corner="tl"
              colorStart="#a78bfa"
              colorEnd="#fb923c"
              size="md"
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
                <div style={{width: '48px', height: '48px', background: '#f3e8ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px'}}>📍</div>
                <div>
                  <h3 style={{margin: 0}}>Top Left</h3>
                  <p className="subtitle" style={{margin: 0}}>corner="tl"</p>
                </div>
              </div>
              <p style={{margin: '16px 0', color: '#64748b', lineHeight: '1.6'}}>
                The gradient appears in the top-left corner of the card, creating a subtle atmospheric effect that draws the eye naturally. This positioning works exceptionally well for featured content.
              </p>
              <div style={{padding: '16px', background: '#f8fafc', borderRadius: '8px', marginTop: '16px'}}>
                <p style={{margin: '0 0 8px 0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600'}}>Best for:</p>
                <ul style={{margin: 0, paddingLeft: '20px', color: '#94a3b8', fontSize: '0.875rem'}}>
                  <li style={{marginBottom: '4px'}}>Hero cards</li>
                  <li style={{marginBottom: '4px'}}>Premium content</li>
                  <li>Featured sections</li>
                </ul>
              </div>
            </CardWithCornerAccent>

            <CardWithCornerAccent
              corner="tr"
              colorStart="#a78bfa"
              colorEnd="#fb923c"
              size="md"
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
                <div style={{width: '48px', height: '48px', background: '#fef3c7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px'}}>🎯</div>
                <div>
                  <h3 style={{margin: 0}}>Top Right</h3>
                  <p className="subtitle" style={{margin: 0}}>corner="tr"</p>
                </div>
              </div>
              <p style={{margin: '16px 0', color: '#64748b', lineHeight: '1.6'}}>
                The gradient appears in the top-right corner, providing visual balance and elegance. Perfect for creating alternating patterns in card grids and maintaining visual interest.
              </p>
              <div style={{padding: '16px', background: '#f8fafc', borderRadius: '8px', marginTop: '16px'}}>
                <p style={{margin: '0 0 8px 0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600'}}>Best for:</p>
                <ul style={{margin: 0, paddingLeft: '20px', color: '#94a3b8', fontSize: '0.875rem'}}>
                  <li style={{marginBottom: '4px'}}>Alternating grids</li>
                  <li style={{marginBottom: '4px'}}>Secondary content</li>
                  <li>Call-to-action cards</li>
                </ul>
              </div>
            </CardWithCornerAccent>

            <CardWithCornerAccent
              corner="bl"
              colorStart="#a78bfa"
              colorEnd="#fb923c"
              size="md"
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
                <div style={{width: '48px', height: '48px', background: '#ecfdf5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px'}}>🌊</div>
                <div>
                  <h3 style={{margin: 0}}>Bottom Left</h3>
                  <p className="subtitle" style={{margin: 0}}>corner="bl"</p>
                </div>
              </div>
              <p style={{margin: '16px 0', color: '#64748b', lineHeight: '1.6'}}>
                The gradient appears in the bottom-left corner, grounding the card design with subtle atmospheric color. This positioning adds depth without overwhelming the content above.
              </p>
              <div style={{padding: '16px', background: '#f8fafc', borderRadius: '8px', marginTop: '16px'}}>
                <p style={{margin: '0 0 8px 0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600'}}>Best for:</p>
                <ul style={{margin: 0, paddingLeft: '20px', color: '#94a3b8', fontSize: '0.875rem'}}>
                  <li style={{marginBottom: '4px'}}>Footer sections</li>
                  <li style={{marginBottom: '4px'}}>Content cards</li>
                  <li>Support information</li>
                </ul>
              </div>
            </CardWithCornerAccent>

            <CardWithCornerAccent
              corner="br"
              colorStart="#a78bfa"
              colorEnd="#fb923c"
              size="md"
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
                <div style={{width: '48px', height: '48px', background: '#fff7ed', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px'}}>✨</div>
                <div>
                  <h3 style={{margin: 0}}>Bottom Right</h3>
                  <p className="subtitle" style={{margin: 0}}>corner="br"</p>
                </div>
              </div>
              <p style={{margin: '16px 0', color: '#64748b', lineHeight: '1.6'}}>
                The gradient appears in the bottom-right corner, creating a sophisticated finishing touch. This position adds warmth and personality while maintaining professional aesthetics.
              </p>
              <div style={{padding: '16px', background: '#f8fafc', borderRadius: '8px', marginTop: '16px'}}>
                <p style={{margin: '0 0 8px 0', color: '#64748b', fontSize: '0.875rem', fontWeight: '600'}}>Best for:</p>
                <ul style={{margin: 0, paddingLeft: '20px', color: '#94a3b8', fontSize: '0.875rem'}}>
                  <li style={{marginBottom: '4px'}}>Action cards</li>
                  <li style={{marginBottom: '4px'}}>Pricing tiers</li>
                  <li>Feature highlights</li>
                </ul>
              </div>
            </CardWithCornerAccent>
          </div>
        </section>
      </div>
    </>
  );
}
