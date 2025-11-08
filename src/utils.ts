/**
 * Utility functions for validation and color parsing
 */

import { BlurLevel, FadeDirection, Corner, Size } from './types';

// Development mode detection - warnings only shown during development
const isDevelopment = import.meta.env?.MODE !== 'production';

/**
 * Validates hex color format
 */
export const isValidHexColor = (color: string): boolean => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};

/**
 * Validates RGB/RGBA color format
 */
export const isValidRgbColor = (color: string): boolean => {
  // Check for rgb(r, g, b)
  const rgbMatch = color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1]);
    const g = parseInt(rgbMatch[2]);
    const b = parseInt(rgbMatch[3]);
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
  
  // Check for rgba(r, g, b, a)
  const rgbaMatch = color.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/);
  if (rgbaMatch) {
    const r = parseInt(rgbaMatch[1]);
    const g = parseInt(rgbaMatch[2]);
    const b = parseInt(rgbaMatch[3]);
    const a = parseFloat(rgbaMatch[4]);
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255 && a >= 0 && a <= 1;
  }
  
  return false;
};

/**
 * Validates HSL/HSLA color format
 */
export const isValidHslColor = (color: string): boolean => {
  return /^hsla?\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*(,\s*[\d.]+\s*)?\)$/.test(color);
};

/**
 * Validates any supported color format
 */
export const isValidColor = (color: string): boolean => {
  return isValidHexColor(color) || isValidRgbColor(color) || isValidHslColor(color);
};

/**
 * Converts RGB/RGBA to hex format for CSS variables
 */
export const normalizeColor = (color: string): string => {
  // For now, return as-is since CSS variables support all formats
  // Could add conversion logic here if needed
  return color;
};

/**
 * Validates blur level
 */
export const isValidBlur = (blur: string): blur is BlurLevel => {
  return ['soft', 'normal', 'heavy'].includes(blur);
};

/**
 * Validates fade direction
 */
export const isValidFadeDirection = (direction: string): direction is FadeDirection => {
  return ['bottom', 'top', 'left', 'right', 'none'].includes(direction);
};

/**
 * Validates corner position
 */
export const isValidCorner = (corner: string): corner is Corner => {
  return ['tl', 'tr', 'bl', 'br'].includes(corner);
};

/**
 * Validates size
 */
export const isValidSize = (size: string): size is Size => {
  return ['sm', 'md', 'lg'].includes(size);
};

/**
 * Validates angle (0-360 degrees)
 */
export const isValidAngle = (angle: number): boolean => {
  return typeof angle === 'number' && angle >= 0 && angle <= 360;
};

/**
 * Logs a development warning to console
 */
export const warn = (message: string, suggestion?: string): void => {
  if (isDevelopment) {
    console.warn(`[Gradient Components] ${message}`);
    if (suggestion) {
      console.warn(`  Suggestion: ${suggestion}`);
    }
  }
};

/**
 * Validates and warns about invalid color
 */
export const validateColor = (color: string | undefined, propName: string, defaultColor: string): string => {
  if (!color) {
    return defaultColor;
  }

  if (!isValidColor(color)) {
    warn(
      `Invalid color format for ${propName}: "${color}"`,
      `Use hex (#7dd3fc), rgb(125, 211, 252), rgba(125, 211, 252, 0.8), or hsl(199, 95%, 74%) format`
    );
    return defaultColor;
  }

  return normalizeColor(color);
};

/**
 * Generates gradient string from color array
 */
export const generateMultiColorGradient = (colors: string[], angle: number): string => {
  if (colors.length < 2) {
    warn('colors array must contain at least 2 colors', 'Provide at least 2 colors in the array');
    return '';
  }

  const validColors = colors.filter(color => {
    const isValid = isValidColor(color);
    if (!isValid) {
      warn(`Invalid color in colors array: "${color}"`, 'Remove or fix invalid colors');
    }
    return isValid;
  });

  if (validColors.length < 2) {
    return '';
  }

  const step = 100 / (validColors.length - 1);
  const colorStops = validColors.map((color, index) => {
    const position = Math.round(index * step);
    return `${color} ${position}%`;
  }).join(', ');

  return `linear-gradient(${angle}deg, ${colorStops})`;
};

