import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AnimatedText from '../common/AnimatedText';

describe('AnimatedText', () => {
  it('renders text correctly', () => {
    const { container } = render(<AnimatedText text="Hello World" />);
    // textContent includes non-breaking spaces (\u00A0)
    expect(container.textContent?.replace(/\u00A0/g, ' ')).toBe('Hello World');
  });

  it('splits text into individual letters', () => {
    const { container } = render(<AnimatedText text="Hi" />);
    const spans = container.querySelectorAll('span span');
    expect(spans).toHaveLength(2);
  });

  it('preserves spaces in text', () => {
    const { container } = render(<AnimatedText text="Hello World" />);
    const spans = container.querySelectorAll('span span');
    expect(spans).toHaveLength(11); // 5 + 1 (space) + 5
  });

  it('applies custom className', () => {
    const { container } = render(<AnimatedText text="Test" className="custom-class" />);
    const wrapper = container.querySelector('.custom-class');
    expect(wrapper).toBeInTheDocument();
  });
});
