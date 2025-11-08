import React from 'react';
import './GradientComponents.css';

/**
 * BackgroundGradient
 * 
 * Full-page gradient background that fades to white in a specified direction
 * 
 * @param {string} colorStart - Starting gradient color (hex)
 * @param {string} colorEnd - Ending gradient color (hex)
 * @param {string} blur - Blur intensity: 'soft', 'normal', 'heavy'
 * @param {string} fadeDirection - Fade direction: 'bottom', 'top', 'left', 'right', 'none'
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Content to display
 */
export const BackgroundGradient = ({
  colorStart = '#3b82f6',
  colorEnd = '#ec4899',
  blur = 'normal',
  fadeDirection = 'bottom',
  className = '',
  children
}) => {
  return (
    <div 
      className={`gradient-background blur-${blur} fade-${fadeDirection} ${className}`}
      style={{
        '--gradient-start': colorStart,
        '--gradient-end': colorEnd
      }}
    >
      {children}
    </div>
  );
};

/**
 * CardWithCornerAccent
 * 
 * Card with a soft, cloud-like gradient glow behind a specified corner
 * 
 * @param {string} corner - Corner position: 'tl', 'tr', 'bl', 'br'
 * @param {string} colorStart - Starting gradient color (hex)
 * @param {string} colorEnd - Ending gradient color (hex)
 * @param {string} size - Glow size: 'sm', 'md', 'lg'
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Card content
 */
export const CardWithCornerAccent = ({
  corner = 'tl',
  colorStart = '#3b82f6',
  colorEnd = '#ec4899',
  size = 'md',
  className = '',
  children
}) => {
  return (
    <div 
      className={`card-corner-wrapper corner-${size} ${className}`}
      style={{
        '--gradient-start': colorStart,
        '--gradient-end': colorEnd
      }}
    >
      <div className={`gradient-corner-bg gradient-corner-bg-${corner}`} />
      <div className="card-with-accent">
        <div className="card-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default {
  BackgroundGradient,
  CardWithCornerAccent
};
