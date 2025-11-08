# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| < 2.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it by emailing the maintainer. Please do not create a public GitHub issue for security vulnerabilities.

## Security Considerations

### Development Dependencies

This library has development dependencies (used only for building and testing) that may have security advisories. These dependencies:

- Are **NOT included** in the published npm package
- Only affect developers working on the library itself
- Do not affect end users who install the library

**Current Status (v2.0.1):**
- ⚠️ Development dependencies have moderate vulnerabilities in esbuild (nested dependency via vitest → vite 5.x)
- ✅ These vulnerabilities only affect the **local development server**
- ✅ Production builds and published packages are **NOT affected**
- ✅ End users of the library are **NOT affected**

**Recommendation for Contributors:**
- Only run `npm run dev` on trusted code
- Do not expose the development server to untrusted networks
- The development server should only be accessed via localhost

### Production Dependencies

**✅ Zero production dependencies** - This library has no runtime dependencies, eliminating supply chain security risks for end users.

### Runtime Security

The library generates CSS gradients and styles dynamically. Best practices:

1. **Color Input Validation**: All color inputs are validated and sanitized
2. **No innerHTML**: Components use React's safe rendering
3. **No eval()**: No dynamic code execution
4. **CSS Injection Protection**: Color values are validated before being used in CSS
5. **XSS Prevention**: All user props are properly escaped by React

### Content Security Policy (CSP)

This library works with strict CSP policies. No `unsafe-inline` or `unsafe-eval` directives are required for the library itself, though you may need to allow inline styles if you use the `style` prop.

Example CSP that works with this library:
```
Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline';
```

Note: `'unsafe-inline'` for styles is only needed if you pass custom `style` props. The library's own CSS can be served from `'self'`.

## Security Updates

We monitor dependencies regularly and will:
- Address production dependency vulnerabilities immediately
- Update development dependencies when non-breaking fixes are available
- Document any known issues in release notes

## Automated Security

- **Dependabot**: Enabled for automated dependency updates
- **npm audit**: Run before each release via `prepublishOnly` script
- **GitHub Security Alerts**: Enabled for this repository

## Best Practices for Users

When using this library:

1. **Keep React Updated**: Ensure you're using a supported React version (>=16.8.0)
2. **Validate User Input**: If color values come from user input, validate them on your backend
3. **Use TypeScript**: TypeScript definitions help catch type-related security issues
4. **Review Bundle**: Use bundle analyzers to verify what code is included in your build
5. **CSP Headers**: Implement appropriate Content Security Policy headers

## License

Security is a priority. This library is MIT licensed and provided "as is" without warranty. See [LICENSE](./LICENSE) for details.

