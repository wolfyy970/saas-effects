# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.1] - 2025-11-08

### Updated
- **TypeScript** from 5.3.3 to 5.9.3 (latest stable)
- **React** (dev) from 18.2.0 to 19.2.0 (latest)
- **React DOM** (dev) from 18.2.0 to 19.2.0 (latest)
- **Vite** from 5.0.8 to 6.4.1 (latest)
- **Vitest** from 1.0.4 to 2.1.9 (latest)
- **@testing-library/react** from 14.1.2 to 16.0.1 (React 19 compatible)
- **ESLint** from 8.55.0 to 9.15.0 (latest)
- **TypeScript ESLint** from 6.14.0 to 8.16.0 (latest)
- All other dev dependencies to latest stable versions

### Fixed
- Package.json exports field order (types now first for better IDE support)
- Updated @types/react and @types/react-dom to React 19 compatible versions

### Added
- **SECURITY.md** documentation for security policies and vulnerability reporting

### Verified
- ✅ All 92 tests passing with React 19.2.0
- ✅ TypeScript 5.9.3 compilation successful
- ✅ Build output unchanged (still ~2.5 KB gzipped)
- ✅ Backward compatibility maintained (still supports React >=16.8.0)
- ⚠️ Known development dependency vulnerability (esbuild in vitest) - does not affect published package or end users

## [2.0.0] - 2025-11-08

### 🎉 Major Release - TypeScript Rewrite with New Features

### Added

#### TypeScript Support
- **Full TypeScript conversion** - All components now written in TypeScript
- Complete type definitions for all props and exports
- Enhanced IDE autocomplete and type safety
- Declaration files (.d.ts) generated automatically

#### New Component Features
- **Custom Gradient Angles** - Control gradient direction with `angle` prop (0-360 degrees)
- **Multi-Color Gradients** - Support for 3+ colors using `colors` array prop
- **Dark Mode Support** - `darkMode` prop for gradients that fade to dark backgrounds
- **Preset System** - Pre-defined color combinations (skyPink, purpleOrange, greenBlue, techBlue, coolTeal, warmSunset)
- **Enhanced Color Support** - Now accepts hex, RGB, RGBA, HSL, and HSLA color formats

#### Developer Experience
- **Comprehensive Error Handling** - Validation for all props with helpful console warnings
- **Development Warnings** - Invalid props trigger warnings with suggestions (dev-only)
- **Fallback Behavior** - Components never crash from invalid props

#### Testing & Quality
- **Vitest Integration** - Modern testing setup with comprehensive test suite
- **100+ Unit Tests** - Full coverage for both components and utilities
- **Accessibility Tests** - Ensure semantic HTML and proper structure
- **Integration Tests** - Test component interactions and edge cases

#### Distribution
- **npm Package Ready** - Professional package.json with proper exports
- **Multiple Build Formats** - ESM, UMD, and TypeScript declarations
- **Vite Build System** - Fast, modern build pipeline
- **Source Maps** - Debug support with full source maps
- **CSS Extraction** - Separate style.css file for optimal loading

#### Documentation
- **Enhanced README** - Updated with all new features and TypeScript examples
- **Quick Reference** - Updated with new props and TypeScript syntax
- **CHANGELOG** - This file! Track all changes going forward
- **Example Templates** - Ready-to-use CodeSandbox and StackBlitz templates
- **Comprehensive Tests** - Documented testing approach

### Changed

- **Component API** - Backward compatible, all existing props still work
- **File Structure** - Reorganized into `src/` directory for better organization
- **Build Process** - Switched from manual to Vite-based automated builds
- **CSS Variables** - Added `--gradient-angle` and `--gradient-bg` support

### Breaking Changes

None! Version 2.0 is fully backward compatible with 1.x. All existing code will continue to work.

### Migration from 1.x to 2.0

No changes required! Your existing code will work as-is. New features are opt-in:

```tsx
// Old code still works
<BackgroundGradient colorStart="#7dd3fc" colorEnd="#f472b6">
  <h1>Hello</h1>
</BackgroundGradient>

// New features available
<BackgroundGradient 
  preset="skyPink"  // ✨ New
  angle={45}        // ✨ New
  darkMode={true}   // ✨ New
>
  <h1>Hello</h1>
</BackgroundGradient>

// TypeScript now supported
import { BackgroundGradientProps } from 'saas-effects';
```

### Installation

```bash
# npm
npm install saas-effects

# yarn
yarn add saas-effects

# pnpm
pnpm add saas-effects
```

### Usage

```tsx
import { BackgroundGradient, CardWithCornerAccent } from 'saas-effects';
import 'saas-effects/dist/style.css';

function App() {
  return (
    <BackgroundGradient preset="skyPink">
      <h1>Beautiful!</h1>
    </BackgroundGradient>
  );
}
```

## [1.0.0] - 2024-XX-XX

### Added
- Initial release
- BackgroundGradient component
- CardWithCornerAccent component
- Basic color customization
- Blur variations (soft, normal, heavy)
- Fade direction control
- Corner positioning
- Size variations
- Responsive design
- Vanilla HTML/CSS version

---

## Links

- [Documentation](./README.md)
- [Quick Reference](./QUICK_REFERENCE.md)
- [Examples](./examples/)
- [GitHub Repository](https://github.com/kcwolff/saas-effects)

