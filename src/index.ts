/**
 * Gradient Accent Components
 * 
 * A lightweight React component library for beautiful gradient backgrounds
 * and atmospheric card accents.
 * 
 * @version 2.0.0
 */

// Export components
export { BackgroundGradient, CardWithCornerAccent } from './GradientComponents';

// Export types
export type {
  BackgroundGradientProps,
  CardWithCornerAccentProps,
  BlurLevel,
  FadeDirection,
  Corner,
  Size,
  PresetName,
  ColorPreset,
} from './types';

// Export presets
export { presets, getPreset } from './presets';

// Export utilities (for advanced users)
export {
  isValidColor,
  isValidHexColor,
  isValidRgbColor,
  isValidHslColor,
  isValidBlur,
  isValidFadeDirection,
  isValidCorner,
  isValidSize,
  isValidAngle,
} from './utils';

// Export default as an object containing all components
export { default } from './GradientComponents';

/**
 * Usage:
 * 
 * // Named imports (recommended)
 * import { BackgroundGradient, CardWithCornerAccent } from '@your-org/gradient-components';
 * 
 * // With types
 * import { BackgroundGradient, BackgroundGradientProps } from '@your-org/gradient-components';
 * 
 * // With presets
 * import { BackgroundGradient, presets } from '@your-org/gradient-components';
 * 
 * // Don't forget the CSS!
 * import '@your-org/gradient-components/dist/style.css';
 */

