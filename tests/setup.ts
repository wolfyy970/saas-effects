import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock console methods in tests to avoid noise
global.console = {
  ...console,
  warn: vi.fn(),
  error: vi.fn(),
};

