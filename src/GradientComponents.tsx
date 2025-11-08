import React from 'react';
import './GradientComponents.css';
import { BackgroundGradientProps, CardWithCornerAccentProps } from './types';
import { getPreset } from './presets';
import { validateColor, isValidBlur, isValidFadeDirection, isValidCorner, isValidSize, isValidAngle, warn, generateMultiColorGradient } from './utils';

/**
 * BackgroundGradient
 * 
 * Full-page gradient background that fades to white (or dark) in a specified direction
 * Supports single gradients, multi-color gradients, custom angles, and presets
 */
export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  colorStart,
  colorEnd,
  colors,
  blur = 'normal',
  fadeDirection = 'bottom',
  angle = 135,
  darkMode = false,
  preset,
  className = '',
  children,
  style = {},
}) => {
  // Handle preset colors
  let finalColorStart = colorStart;
  let finalColorEnd = colorEnd;
  
  if (preset) {
    const presetColors = getPreset(preset);
    if (presetColors) {
      finalColorStart = finalColorStart || presetColors.colorStart;
      finalColorEnd = finalColorEnd || presetColors.colorEnd;
    } else {
      warn(`Unknown preset: "${preset}"`, 'Use one of: skyPink, purpleOrange, greenBlue, techBlue, coolTeal, warmSunset');
    }
  }

  // Validate and set defaults
  const validatedColorStart = validateColor(finalColorStart, 'colorStart', '#3b82f6');
  const validatedColorEnd = validateColor(finalColorEnd, 'colorEnd', '#ec4899');
  
  // Validate blur
  if (!isValidBlur(blur)) {
    warn(`Invalid blur value: "${blur}"`, 'Use "soft", "normal", or "heavy"');
  }

  // Validate fadeDirection
  if (!isValidFadeDirection(fadeDirection)) {
    warn(`Invalid fadeDirection: "${fadeDirection}"`, 'Use "bottom", "top", "left", "right", or "none"');
  }

  // Validate angle
  if (!isValidAngle(angle)) {
    warn(`Invalid angle: ${angle}`, 'Use a number between 0 and 360');
  }

  // Generate gradient background
  let gradientBackground: string;
  if (colors && colors.length >= 2) {
    gradientBackground = generateMultiColorGradient(colors, angle);
  } else {
    gradientBackground = `linear-gradient(${angle}deg, ${validatedColorStart} 0%, ${validatedColorEnd} 100%)`;
  }

  const combinedStyle: React.CSSProperties = {
    ...style,
    '--gradient-start': validatedColorStart,
    '--gradient-end': validatedColorEnd,
  } as React.CSSProperties;

  // Add gradient background override if multi-color or custom angle
  if (colors && colors.length >= 2) {
    (combinedStyle as any)['--gradient-bg'] = gradientBackground;
  } else if (angle !== 135) {
    (combinedStyle as any)['--gradient-angle'] = `${angle}deg`;
  }

  const classes = [
    'gradient-background',
    `blur-${blur}`,
    `fade-${fadeDirection}`,
    darkMode ? 'dark-mode' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={combinedStyle}>
      {children}
    </div>
  );
};

/**
 * CardWithCornerAccent
 * 
 * Card with a soft, cloud-like gradient glow behind a specified corner
 * Supports presets and custom colors
 */
export const CardWithCornerAccent: React.FC<CardWithCornerAccentProps> = ({
  corner = 'tl',
  colorStart,
  colorEnd,
  size = 'md',
  preset,
  className = '',
  children,
  style = {},
}) => {
  // Handle preset colors
  let finalColorStart = colorStart;
  let finalColorEnd = colorEnd;
  
  if (preset) {
    const presetColors = getPreset(preset);
    if (presetColors) {
      finalColorStart = finalColorStart || presetColors.colorStart;
      finalColorEnd = finalColorEnd || presetColors.colorEnd;
    } else {
      warn(`Unknown preset: "${preset}"`, 'Use one of: skyPink, purpleOrange, greenBlue, techBlue, coolTeal, warmSunset');
    }
  }

  // Validate and set defaults
  const validatedColorStart = validateColor(finalColorStart, 'colorStart', '#3b82f6');
  const validatedColorEnd = validateColor(finalColorEnd, 'colorEnd', '#ec4899');

  // Validate corner
  if (!isValidCorner(corner)) {
    warn(`Invalid corner value: "${corner}"`, 'Use "tl", "tr", "bl", or "br"');
  }

  // Validate size
  if (!isValidSize(size)) {
    warn(`Invalid size value: "${size}"`, 'Use "sm", "md", or "lg"');
  }

  const combinedStyle: React.CSSProperties = {
    ...style,
    '--gradient-start': validatedColorStart,
    '--gradient-end': validatedColorEnd,
  } as React.CSSProperties;

  return (
    <div 
      className={`card-corner-wrapper corner-${size} ${className}`}
      style={combinedStyle}
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
  CardWithCornerAccent,
};

