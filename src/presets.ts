/**
 * Preset color combinations for gradient components
 */

import { ColorPreset } from './types';

export const presets: Record<string, ColorPreset> = {
  skyPink: {
    colorStart: '#7dd3fc',
    colorEnd: '#f472b6',
  },
  purpleOrange: {
    colorStart: '#a78bfa',
    colorEnd: '#fb923c',
  },
  greenBlue: {
    colorStart: '#10b981',
    colorEnd: '#3b82f6',
  },
  techBlue: {
    colorStart: '#06b6d4',
    colorEnd: '#3b82f6',
  },
  coolTeal: {
    colorStart: '#10b981',
    colorEnd: '#06b6d4',
  },
  warmSunset: {
    colorStart: '#fb923c',
    colorEnd: '#ef4444',
  },
};

export const getPreset = (presetName: string): ColorPreset | null => {
  return presets[presetName] || null;
};

