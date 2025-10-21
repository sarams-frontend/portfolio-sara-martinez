import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'projects.title': 'My Projects',
        'projects.viewLive': 'View Live',
        'projects.viewCode': 'View Code',
      };
      return translations[key] || key;
    },
  }),
}));

describe('Projects', () => {
  it('renders projects section', () => {
    const { container } = render(<Projects />);
    expect(container.textContent).toContain('My Projects');
  });

  it('displays project cards', () => {
    render(<Projects />);
    expect(screen.getByText('Dashboard Analytics')).toBeInTheDocument();
    expect(screen.getByText('Dashboard - ATP')).toBeInTheDocument();
    expect(screen.getByText('CRM - Marketing')).toBeInTheDocument();
  });

  it('renders project images', () => {
    const { container } = render(<Projects />);
    const images = container.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('displays technology tags', () => {
    render(<Projects />);
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0);
  });
});
