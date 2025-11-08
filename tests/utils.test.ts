import { describe, it, expect } from 'vitest';
import {
  isValidHexColor,
  isValidRgbColor,
  isValidHslColor,
  isValidColor,
  isValidBlur,
  isValidFadeDirection,
  isValidCorner,
  isValidSize,
  isValidAngle,
  validateColor,
  generateMultiColorGradient,
} from '../src/utils';

describe('Color Validation', () => {
  describe('isValidHexColor', () => {
    it('validates 6-digit hex colors', () => {
      expect(isValidHexColor('#ff0000')).toBe(true);
      expect(isValidHexColor('#00ff00')).toBe(true);
      expect(isValidHexColor('#0000ff')).toBe(true);
      expect(isValidHexColor('#abc123')).toBe(true);
    });

    it('validates 3-digit hex colors', () => {
      expect(isValidHexColor('#f00')).toBe(true);
      expect(isValidHexColor('#0f0')).toBe(true);
      expect(isValidHexColor('#00f')).toBe(true);
      expect(isValidHexColor('#abc')).toBe(true);
    });

    it('rejects invalid hex colors', () => {
      expect(isValidHexColor('ff0000')).toBe(false);
      expect(isValidHexColor('#gg0000')).toBe(false);
      expect(isValidHexColor('#ff00')).toBe(false);
      expect(isValidHexColor('#ff00000')).toBe(false);
    });
  });

  describe('isValidRgbColor', () => {
    it('validates RGB colors', () => {
      expect(isValidRgbColor('rgb(255, 0, 0)')).toBe(true);
      expect(isValidRgbColor('rgb(0, 255, 0)')).toBe(true);
      expect(isValidRgbColor('rgb(0, 0, 255)')).toBe(true);
    });

    it('validates RGBA colors', () => {
      expect(isValidRgbColor('rgba(255, 0, 0, 0.5)')).toBe(true);
      expect(isValidRgbColor('rgba(0, 255, 0, 1)')).toBe(true);
      expect(isValidRgbColor('rgba(0, 0, 255, 0.3)')).toBe(true);
    });

    it('rejects invalid RGB colors', () => {
      expect(isValidRgbColor('rgb(256, 0, 0)')).toBe(false);
      expect(isValidRgbColor('rgb(255, 0)')).toBe(false);
      expect(isValidRgbColor('rgba(255, 0, 0)')).toBe(false);
    });
  });

  describe('isValidHslColor', () => {
    it('validates HSL colors', () => {
      expect(isValidHslColor('hsl(0, 100%, 50%)')).toBe(true);
      expect(isValidHslColor('hsl(120, 100%, 50%)')).toBe(true);
      expect(isValidHslColor('hsl(240, 100%, 50%)')).toBe(true);
    });

    it('validates HSLA colors', () => {
      expect(isValidHslColor('hsla(0, 100%, 50%, 0.5)')).toBe(true);
      expect(isValidHslColor('hsla(120, 100%, 50%, 1)')).toBe(true);
    });

    it('rejects invalid HSL colors', () => {
      expect(isValidHslColor('hsl(0, 100, 50)')).toBe(false);
      expect(isValidHslColor('hsl(0, 100%)')).toBe(false);
    });
  });

  describe('isValidColor', () => {
    it('validates any supported color format', () => {
      expect(isValidColor('#ff0000')).toBe(true);
      expect(isValidColor('rgb(255, 0, 0)')).toBe(true);
      expect(isValidColor('hsl(0, 100%, 50%)')).toBe(true);
    });

    it('rejects invalid colors', () => {
      expect(isValidColor('red')).toBe(false);
      expect(isValidColor('invalid')).toBe(false);
      expect(isValidColor('#gg0000')).toBe(false);
    });
  });
});

describe('Prop Validation', () => {
  describe('isValidBlur', () => {
    it('validates blur levels', () => {
      expect(isValidBlur('soft')).toBe(true);
      expect(isValidBlur('normal')).toBe(true);
      expect(isValidBlur('heavy')).toBe(true);
    });

    it('rejects invalid blur levels', () => {
      expect(isValidBlur('invalid')).toBe(false);
      expect(isValidBlur('light')).toBe(false);
    });
  });

  describe('isValidFadeDirection', () => {
    it('validates fade directions', () => {
      expect(isValidFadeDirection('bottom')).toBe(true);
      expect(isValidFadeDirection('top')).toBe(true);
      expect(isValidFadeDirection('left')).toBe(true);
      expect(isValidFadeDirection('right')).toBe(true);
      expect(isValidFadeDirection('none')).toBe(true);
    });

    it('rejects invalid fade directions', () => {
      expect(isValidFadeDirection('invalid')).toBe(false);
      expect(isValidFadeDirection('center')).toBe(false);
    });
  });

  describe('isValidCorner', () => {
    it('validates corner positions', () => {
      expect(isValidCorner('tl')).toBe(true);
      expect(isValidCorner('tr')).toBe(true);
      expect(isValidCorner('bl')).toBe(true);
      expect(isValidCorner('br')).toBe(true);
    });

    it('rejects invalid corner positions', () => {
      expect(isValidCorner('invalid')).toBe(false);
      expect(isValidCorner('top')).toBe(false);
    });
  });

  describe('isValidSize', () => {
    it('validates sizes', () => {
      expect(isValidSize('sm')).toBe(true);
      expect(isValidSize('md')).toBe(true);
      expect(isValidSize('lg')).toBe(true);
    });

    it('rejects invalid sizes', () => {
      expect(isValidSize('invalid')).toBe(false);
      expect(isValidSize('xl')).toBe(false);
    });
  });

  describe('isValidAngle', () => {
    it('validates angles', () => {
      expect(isValidAngle(0)).toBe(true);
      expect(isValidAngle(45)).toBe(true);
      expect(isValidAngle(90)).toBe(true);
      expect(isValidAngle(180)).toBe(true);
      expect(isValidAngle(360)).toBe(true);
    });

    it('rejects invalid angles', () => {
      expect(isValidAngle(-1)).toBe(false);
      expect(isValidAngle(361)).toBe(false);
      expect(isValidAngle(NaN)).toBe(false);
    });
  });
});

describe('validateColor', () => {
  it('returns valid color as-is', () => {
    expect(validateColor('#ff0000', 'colorStart', '#000000')).toBe('#ff0000');
  });

  it('returns default for invalid color', () => {
    expect(validateColor('invalid', 'colorStart', '#000000')).toBe('#000000');
  });

  it('returns default for undefined color', () => {
    expect(validateColor(undefined, 'colorStart', '#000000')).toBe('#000000');
  });
});

describe('generateMultiColorGradient', () => {
  it('generates gradient with 3 colors', () => {
    const result = generateMultiColorGradient(['#ff0000', '#00ff00', '#0000ff'], 135);
    expect(result).toContain('linear-gradient(135deg');
    expect(result).toContain('#ff0000');
    expect(result).toContain('#00ff00');
    expect(result).toContain('#0000ff');
  });

  it('generates gradient with custom angle', () => {
    const result = generateMultiColorGradient(['#ff0000', '#00ff00'], 90);
    expect(result).toContain('90deg');
  });

  it('distributes colors evenly', () => {
    const result = generateMultiColorGradient(['#ff0000', '#00ff00', '#0000ff'], 135);
    expect(result).toContain('0%');
    expect(result).toContain('50%');
    expect(result).toContain('100%');
  });

  it('returns empty string for single color', () => {
    const result = generateMultiColorGradient(['#ff0000'], 135);
    expect(result).toBe('');
  });

  it('filters out invalid colors', () => {
    const result = generateMultiColorGradient(['#ff0000', 'invalid', '#0000ff'], 135);
    expect(result).toContain('#ff0000');
    expect(result).toContain('#0000ff');
    expect(result).not.toContain('invalid');
  });
});

