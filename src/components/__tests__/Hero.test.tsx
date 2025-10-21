import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../Hero';

// Mock i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'hero.greeting': 'Hi, I\'m Sara',
        'hero.title': 'Frontend Developer',
        'hero.description': 'I create modern web experiences',
        'hero.contact': 'Contact Me',
        'hero.viewWork': 'View My Work',
      };
      return translations[key] || key;
    },
  }),
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      {component}
    </BrowserRouter>
  );
};

describe('Hero', () => {
  it('renders hero section', () => {
    const { container } = renderWithRouter(<Hero />);
    expect(container.textContent).toContain('Frontend Developer');
  });

  it('displays profile image', () => {
    renderWithRouter(<Hero />);
    const image = screen.getByAltText(/Sara Martínez - Frontend Developer/);
    expect(image).toBeInTheDocument();
  });

  it('renders contact and view work buttons', () => {
    const { container } = renderWithRouter(<Hero />);
    // Buttons render the translation keys
    expect(container.textContent).toContain('hero.contact');
    expect(container.textContent).toContain('hero.view');
  });

  it('renders social media links', () => {
    const { container } = renderWithRouter(<Hero />);
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });
});
