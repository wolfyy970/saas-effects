/**
 * Type definitions for Gradient Components
 */

export type BlurLevel = 'soft' | 'normal' | 'heavy';
export type FadeDirection = 'bottom' | 'top' | 'left' | 'right' | 'none';
export type Corner = 'tl' | 'tr' | 'bl' | 'br';
export type Size = 'sm' | 'md' | 'lg';
export type PresetName = 'skyPink' | 'purpleOrange' | 'greenBlue' | 'techBlue' | 'coolTeal' | 'warmSunset';

export interface ColorPreset {
  colorStart: string;
  colorEnd: string;
}

export interface BackgroundGradientProps {
  /** Starting gradient color (hex, rgb, rgba, or hsl) */
  colorStart?: string;
  /** Ending gradient color (hex, rgb, rgba, or hsl) */
  colorEnd?: string;
  /** Array of colors for multi-stop gradients (overrides colorStart/colorEnd) */
  colors?: string[];
  /** Blur intensity */
  blur?: BlurLevel;
  /** Direction of white fade */
  fadeDirection?: FadeDirection;
  /** Gradient angle in degrees (0-360) */
  angle?: number;
  /** Enable dark mode (fades to dark background instead of white) */
  darkMode?: boolean;
  /** Use a preset color combination */
  preset?: PresetName;
  /** Additional CSS classes */
  className?: string;
  /** Content to display */
  children?: React.ReactNode;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

export interface CardWithCornerAccentProps {
  /** Corner position */
  corner?: Corner;
  /** Starting gradient color (hex, rgb, rgba, or hsl) */
  colorStart?: string;
  /** Ending gradient color (hex, rgb, rgba, or hsl) */
  colorEnd?: string;
  /** Glow size */
  size?: Size;
  /** Use a preset color combination */
  preset?: PresetName;
  /** Additional CSS classes */
  className?: string;
  /** Card content */
  children?: React.ReactNode;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

