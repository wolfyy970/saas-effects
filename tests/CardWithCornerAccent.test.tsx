import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardWithCornerAccent } from '../src/GradientComponents';

describe('CardWithCornerAccent', () => {
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(
        <CardWithCornerAccent>
          <div>Card Content</div>
        </CardWithCornerAccent>
      );
      
      expect(screen.getByText('Card Content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
      render(
        <CardWithCornerAccent>
          <h3>Card Title</h3>
          <p>Card Description</p>
        </CardWithCornerAccent>
      );
      
      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card Description')).toBeInTheDocument();
    });

    it('applies correct default classes', () => {
      const { container } = render(
        <CardWithCornerAccent>
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass('card-corner-wrapper');
      expect(wrapper).toHaveClass('corner-md');
    });
  });

  describe('Color Props', () => {
    it('applies custom colors', () => {
      const { container } = render(
        <CardWithCornerAccent colorStart="#ff0000" colorEnd="#00ff00">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('#ff0000');
      expect(element.style.getPropertyValue('--gradient-end')).toBe('#00ff00');
    });

    it('uses default colors when not provided', () => {
      const { container } = render(
        <CardWithCornerAccent>
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('#3b82f6');
      expect(element.style.getPropertyValue('--gradient-end')).toBe('#ec4899');
    });

    it('accepts RGB colors', () => {
      const { container } = render(
        <CardWithCornerAccent 
          colorStart="rgb(255, 0, 0)" 
          colorEnd="rgb(0, 255, 0)"
        >
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('rgb(255, 0, 0)');
    });
  });

  describe('Corner Positions', () => {
    it('applies top-left corner', () => {
      const { container } = render(
        <CardWithCornerAccent corner="tl">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const gradient = container.querySelector('.gradient-corner-bg-tl');
      expect(gradient).toBeInTheDocument();
    });

    it('applies top-right corner', () => {
      const { container } = render(
        <CardWithCornerAccent corner="tr">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const gradient = container.querySelector('.gradient-corner-bg-tr');
      expect(gradient).toBeInTheDocument();
    });

    it('applies bottom-left corner', () => {
      const { container } = render(
        <CardWithCornerAccent corner="bl">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const gradient = container.querySelector('.gradient-corner-bg-bl');
      expect(gradient).toBeInTheDocument();
    });

    it('applies bottom-right corner', () => {
      const { container } = render(
        <CardWithCornerAccent corner="br">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const gradient = container.querySelector('.gradient-corner-bg-br');
      expect(gradient).toBeInTheDocument();
    });
  });

  describe('Size Variations', () => {
    it('applies small size', () => {
      const { container } = render(
        <CardWithCornerAccent size="sm">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      expect(container.firstChild).toHaveClass('corner-sm');
    });

    it('applies medium size', () => {
      const { container } = render(
        <CardWithCornerAccent size="md">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      expect(container.firstChild).toHaveClass('corner-md');
    });

    it('applies large size', () => {
      const { container } = render(
        <CardWithCornerAccent size="lg">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      expect(container.firstChild).toHaveClass('corner-lg');
    });
  });

  describe('Preset System', () => {
    it('applies skyPink preset', () => {
      const { container } = render(
        <CardWithCornerAccent preset="skyPink">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('#7dd3fc');
      expect(element.style.getPropertyValue('--gradient-end')).toBe('#f472b6');
    });

    it('applies purpleOrange preset', () => {
      const { container } = render(
        <CardWithCornerAccent preset="purpleOrange">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('#a78bfa');
      expect(element.style.getPropertyValue('--gradient-end')).toBe('#fb923c');
    });

    it('applies coolTeal preset', () => {
      const { container } = render(
        <CardWithCornerAccent preset="coolTeal">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('#10b981');
      expect(element.style.getPropertyValue('--gradient-end')).toBe('#06b6d4');
    });

    it('allows color override with preset', () => {
      const { container } = render(
        <CardWithCornerAccent preset="skyPink" colorEnd="#ff0000">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('#7dd3fc');
      expect(element.style.getPropertyValue('--gradient-end')).toBe('#ff0000');
    });
  });

  describe('Additional Props', () => {
    it('applies custom className', () => {
      const { container } = render(
        <CardWithCornerAccent className="custom-class">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      expect(container.firstChild).toHaveClass('custom-class');
      expect(container.firstChild).toHaveClass('card-corner-wrapper');
    });

    it('merges custom styles', () => {
      const { container } = render(
        <CardWithCornerAccent style={{ padding: '50px' }}>
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.padding).toBe('50px');
    });
  });

  describe('Component Structure', () => {
    it('has correct DOM structure', () => {
      const { container } = render(
        <CardWithCornerAccent>
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      expect(container.querySelector('.card-corner-wrapper')).toBeInTheDocument();
      expect(container.querySelector('.gradient-corner-bg')).toBeInTheDocument();
      expect(container.querySelector('.card-with-accent')).toBeInTheDocument();
      expect(container.querySelector('.card-content')).toBeInTheDocument();
    });

    it('renders gradient background element', () => {
      const { container } = render(
        <CardWithCornerAccent corner="tl">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const gradientBg = container.querySelector('.gradient-corner-bg');
      expect(gradientBg).toBeInTheDocument();
      expect(gradientBg).toHaveClass('gradient-corner-bg-tl');
    });
  });

  describe('Error Handling', () => {
    it('warns on invalid color format', () => {
      const warnSpy = vi.spyOn(console, 'warn');
      
      render(
        <CardWithCornerAccent colorStart="invalid-color">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      expect(warnSpy).toHaveBeenCalled();
    });

    it('uses default color for invalid input', () => {
      const { container } = render(
        <CardWithCornerAccent colorStart="invalid">
          <div>Content</div>
        </CardWithCornerAccent>
      );
      
      const element = container.firstChild as HTMLElement;
      expect(element.style.getPropertyValue('--gradient-start')).toBe('#3b82f6');
    });
  });

  describe('Integration Tests', () => {
    it('works with all props combined', () => {
      const { container } = render(
        <CardWithCornerAccent
          corner="br"
          colorStart="#ff0000"
          colorEnd="#00ff00"
          size="lg"
          className="test-class"
        >
          <h3>Test Card</h3>
          <p>Test content</p>
        </CardWithCornerAccent>
      );
      
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass('card-corner-wrapper');
      expect(wrapper).toHaveClass('corner-lg');
      expect(wrapper).toHaveClass('test-class');
      expect(wrapper.style.getPropertyValue('--gradient-start')).toBe('#ff0000');
      expect(container.querySelector('.gradient-corner-bg-br')).toBeInTheDocument();
    });
  });
});

