# v2.0.1 - Dependency Updates and Security Documentation

## 🔄 Dependency Updates

### Major Version Updates
- **TypeScript** 5.3.3 → **5.9.3** (latest stable)
- **React** (dev) 18.2.0 → **19.2.0** (latest)
- **Vite** 5.0.8 → **6.4.1** (major upgrade with performance improvements)
- **Vitest** 1.0.4 → **2.1.9** (major upgrade)
- **ESLint** 8.55.0 → **9.15.0** (major upgrade)
- **TypeScript ESLint** 6.14.0 → **8.16.0** (major upgrade)

### Other Updates
- **@testing-library/react** 14.1.2 → 16.0.1 (React 19 compatible)
- **@testing-library/jest-dom** 6.1.5 → 6.6.3
- **@types/react** and **@types/react-dom** updated for React 19
- **vite-plugin-dts** 3.7.0 → 4.3.0
- **jsdom** 23.0.1 → 25.0.1
- All other dev dependencies updated to latest stable

## 🐛 Bug Fixes
- Fixed package.json exports field order (types now first for better IDE support)
- Updated React type definitions for React 19 compatibility

## 📚 Documentation
- Added comprehensive **SECURITY.md** with security policies and best practices
- Documented development dependency security considerations
- Updated **CHANGELOG.md** with complete change history

## ✅ Verification
- ✅ All 92 tests passing with React 19.2.0
- ✅ TypeScript 5.9.3 compilation successful
- ✅ Build output unchanged (still ~2.5 KB gzipped)
- ✅ Full backward compatibility maintained (supports React >=16.8.0)

## 📦 Package Details
- **Bundle Size:** 20.2 KB (76.3 KB unpacked)
- **Production Bundle:** 2.5 KB gzipped
- **Zero production dependencies**
- **npm:** https://www.npmjs.com/package/saas-effects

## ⚠️ Security Notes
A known moderate vulnerability exists in development dependencies (esbuild via vitest). This **only affects** the local development server and **does not affect** production builds or end users. See [SECURITY.md](./SECURITY.md) for details.

## 🔗 Installation

```bash
npm install saas-effects@2.0.1
```

Or with yarn:
```bash
yarn add saas-effects@2.0.1
```

## 📝 Full Changelog
See [CHANGELOG.md](./CHANGELOG.md) for complete details.

---

**Published to npm:** ✅ https://www.npmjs.com/package/saas-effects  
**Full Diff:** [`v2.0.0...v2.0.1`](https://github.com/kcwolff/saas-effects/compare/v2.0.0...v2.0.1)

