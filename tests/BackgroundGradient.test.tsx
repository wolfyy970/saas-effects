import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BackgroundGradient } from '../src/GradientComponents';

describe('BackgroundGradient', () => {
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(
        <BackgroundGradient>
          <div>Test Content</div>
        </BackgroundGradient>
      );
      
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
      render(
        <BackgroundGradient>
          <h1>Title</h1>
          <p>Description</p>
        </BackgroundGradient>
      );
      
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
    });

    it('applies correct default classes', () => {
      const { container } = render(
        <BackgroundGradient>
          <div>Content</div>
        </BackgroundGradient>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element).toHaveClass('gradient-background');
      expect(element).toHaveClass('blur-normal');
      expect(element).toHaveClass('fade-bottom');
    });
  });

  describe('Color Props', () => {
    it('applies custom colors', () => {
      const { container } = render(
        <BackgroundGradient colorStart="#ff0000" colorEnd="#00ff00">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('#ff0000');
      expect(element.style.getPropertyValue('--gradient-end')).toBe('#00ff00');
    });

    it('uses default colors when not provided', () => {
      const { container } = render(
        <BackgroundGradient>
          <div>Content</div>
        </BackgroundGradient>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('#3b82f6');
      expect(element.style.getPropertyValue('--gradient-end')).toBe('#ec4899');
    });

    it('accepts RGB colors', () => {
      const { container } = render(
        <BackgroundGradient 
          colorStart="rgb(255, 0, 0)" 
          colorEnd="rgb(0, 255, 0)"
        >
          <div>Content</div>
        </BackgroundGradient>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('rgb(255, 0, 0)');
    });

    it('accepts HSL colors', () => {
      const { container } = render(
        <BackgroundGradient 
          colorStart="hsl(0, 100%, 50%)" 
          colorEnd="hsl(120, 100%, 50%)"
        >
          <div>Content</div>
        </BackgroundGradient>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('hsl(0, 100%, 50%)');
    });
  });

  describe('Blur Variations', () => {
    it('applies soft blur', () => {
      const { container } = render(
        <BackgroundGradient blur="soft">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      expect(container.firstChild).toHaveClass('blur-soft');
    });

    it('applies normal blur', () => {
      const { container } = render(
        <BackgroundGradient blur="normal">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      expect(container.firstChild).toHaveClass('blur-normal');
    });

    it('applies heavy blur', () => {
      const { container } = render(
        <BackgroundGradient blur="heavy">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      expect(container.firstChild).toHaveClass('blur-heavy');
    });
  });

  describe('Fade Direction', () => {
    it('applies bottom fade', () => {
      const { container } = render(
        <BackgroundGradient fadeDirection="bottom">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      expect(container.firstChild).toHaveClass('fade-bottom');
    });

    it('applies top fade', () => {
      const { container } = render(
        <BackgroundGradient fadeDirection="top">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      expect(container.firstChild).toHaveClass('fade-top');
    });

    it('applies left fade', () => {
      const { container } = render(
        <BackgroundGradient fadeDirection="left">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      expect(container.firstChild).toHaveClass('fade-left');
    });

    it('applies right fade', () => {
      const { container } = render(
        <BackgroundGradient fadeDirection="right">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      expect(container.firstChild).toHaveClass('fade-right');
    });

    it('applies no fade', () => {
      const { container } = render(
        <BackgroundGradient fadeDirection="none">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      expect(container.firstChild).toHaveClass('fade-none');
    });
  });

  describe('Custom Angle', () => {
    it('applies custom angle', () => {
      const { container } = render(
        <BackgroundGradient angle={45}>
          <div>Content</div>
        </BackgroundGradient>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-angle')).toBe('45deg');
    });

    it('applies 90 degree angle', () => {
      const { container } = render(
        <BackgroundGradient angle={90}>
          <div>Content</div>
        </BackgroundGradient>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-angle')).toBe('90deg');
    });
  });

  describe('Multi-Color Gradients', () => {
    it('renders with 3 colors', () => {
      const { container } = render(
        <BackgroundGradient colors={['#ff0000', '#00ff00', '#0000ff']}>
          <div>Content</div>
        </BackgroundGradient>
      );
      
      const element = container.firstChild as HTMLElement;
      const gradientBg = element.style.getPropertyValue('--gradient-bg');
      expect(gradientBg).toContain('#ff0000');
      expect(gradientBg).toContain('#00ff00');
      expect(gradientBg).toContain('#0000ff');
    });

    it('renders with 4 colors', () => {
      const { container } = render(
        <BackgroundGradient colors={['#ff0000', '#00ff00', '#0000ff', '#ffff00']}>
          <div>Content</div>
        </BackgroundGradient>
      );
      
      const element = container.firstChild as HTMLElement;
      const gradientBg = element.style.getPropertyValue('--gradient-bg');
      expect(gradientBg).toContain('#ffff00');
    });
  });

  describe('Dark Mode', () => {
    it('applies dark mode class', () => {
      const { container } = render(
        <BackgroundGradient darkMode={true}>
          <div>Content</div>
        </BackgroundGradient>
      );
      
      expect(container.firstChild).toHaveClass('dark-mode');
    });

    it('does not apply dark mode by default', () => {
      const { container } = render(
        <BackgroundGradient>
          <div>Content</div>
        </BackgroundGradient>
      );
      
      expect(container.firstChild).not.toHaveClass('dark-mode');
    });
  });

  describe('Preset System', () => {
    it('applies skyPink preset', () => {
      const { container } = render(
        <BackgroundGradient preset="skyPink">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('#7dd3fc');
      expect(element.style.getPropertyValue('--gradient-end')).toBe('#f472b6');
    });

    it('applies purpleOrange preset', () => {
      const { container } = render(
        <BackgroundGradient preset="purpleOrange">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('#a78bfa');
      expect(element.style.getPropertyValue('--gradient-end')).toBe('#fb923c');
    });

    it('allows color override with preset', () => {
      const { container } = render(
        <BackgroundGradient preset="skyPink" colorEnd="#ff0000">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('#7dd3fc');
      expect(element.style.getPropertyValue('--gradient-end')).toBe('#ff0000');
    });
  });

  describe('Additional Props', () => {
    it('applies custom className', () => {
      const { container } = render(
        <BackgroundGradient className="custom-class">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      expect(container.firstChild).toHaveClass('custom-class');
      expect(container.firstChild).toHaveClass('gradient-background');
    });

    it('merges custom styles', () => {
      const { container } = render(
        <BackgroundGradient style={{ padding: '100px' }}>
          <div>Content</div>
        </BackgroundGradient>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.padding).toBe('100px');
    });
  });

  describe('Error Handling', () => {
    it('warns on invalid color format', () => {
      const warnSpy = vi.spyOn(console, 'warn');
      
      render(
        <BackgroundGradient colorStart="invalid-color">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      expect(warnSpy).toHaveBeenCalled();
    });

    it('uses default color for invalid input', () => {
      const { container } = render(
        <BackgroundGradient colorStart="invalid">
          <div>Content</div>
        </BackgroundGradient>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('#3b82f6');
    });
  });
});

