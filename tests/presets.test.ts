import { describe, it, expect } from 'vitest';
import { presets, getPreset } from '../src/presets';

describe('Presets', () => {
  describe('presets object', () => {
    it('contains skyPink preset', () => {
      expect(presets.skyPink).toBeDefined();
      expect(presets.skyPink.colorStart).toBe('#7dd3fc');
      expect(presets.skyPink.colorEnd).toBe('#f472b6');
    });

    it('contains purpleOrange preset', () => {
      expect(presets.purpleOrange).toBeDefined();
      expect(presets.purpleOrange.colorStart).toBe('#a78bfa');
      expect(presets.purpleOrange.colorEnd).toBe('#fb923c');
    });

    it('contains greenBlue preset', () => {
      expect(presets.greenBlue).toBeDefined();
      expect(presets.greenBlue.colorStart).toBe('#10b981');
      expect(presets.greenBlue.colorEnd).toBe('#3b82f6');
    });

    it('contains techBlue preset', () => {
      expect(presets.techBlue).toBeDefined();
      expect(presets.techBlue.colorStart).toBe('#06b6d4');
      expect(presets.techBlue.colorEnd).toBe('#3b82f6');
    });

    it('contains coolTeal preset', () => {
      expect(presets.coolTeal).toBeDefined();
      expect(presets.coolTeal.colorStart).toBe('#10b981');
      expect(presets.coolTeal.colorEnd).toBe('#06b6d4');
    });

    it('contains warmSunset preset', () => {
      expect(presets.warmSunset).toBeDefined();
      expect(presets.warmSunset.colorStart).toBe('#fb923c');
      expect(presets.warmSunset.colorEnd).toBe('#ef4444');
    });

    it('has all expected presets', () => {
      const presetKeys = Object.keys(presets);
      expect(presetKeys).toContain('skyPink');
      expect(presetKeys).toContain('purpleOrange');
      expect(presetKeys).toContain('greenBlue');
      expect(presetKeys).toContain('techBlue');
      expect(presetKeys).toContain('coolTeal');
      expect(presetKeys).toContain('warmSunset');
    });

    it('all presets have colorStart and colorEnd', () => {
      Object.values(presets).forEach(preset => {
        expect(preset).toHaveProperty('colorStart');
        expect(preset).toHaveProperty('colorEnd');
        expect(typeof preset.colorStart).toBe('string');
        expect(typeof preset.colorEnd).toBe('string');
      });
    });
  });

  describe('getPreset', () => {
    it('returns preset by name', () => {
      const preset = getPreset('skyPink');
      expect(preset).toEqual({
        colorStart: '#7dd3fc',
        colorEnd: '#f472b6',
      });
    });

    it('returns null for unknown preset', () => {
      const preset = getPreset('nonexistent');
      expect(preset).toBeNull();
    });

    it('works for all presets', () => {
      expect(getPreset('skyPink')).not.toBeNull();
      expect(getPreset('purpleOrange')).not.toBeNull();
      expect(getPreset('greenBlue')).not.toBeNull();
      expect(getPreset('techBlue')).not.toBeNull();
      expect(getPreset('coolTeal')).not.toBeNull();
      expect(getPreset('warmSunset')).not.toBeNull();
    });
  });
});

