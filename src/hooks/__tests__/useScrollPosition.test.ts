import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useScrollPosition } from '../useScrollPosition';

describe('useScrollPosition', () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });
  });

  afterEach(() => {
    // Reset scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });
  });

  it('returns false initially when scroll is 0', () => {
    const { result } = renderHook(() => useScrollPosition(20));
    expect(result.current).toBe(false);
  });

  it('returns true when scrolled past threshold', async () => {
    const { result } = renderHook(() => useScrollPosition(20));

    // Update scrollY and trigger scroll event
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 50,
    });

    window.dispatchEvent(new Event('scroll'));

    // Wait for the state to update
    await waitFor(() => {
      expect(result.current).toBe(true);
    });
  });

  it('uses custom threshold', async () => {
    const { result } = renderHook(() => useScrollPosition(100));

    // Below threshold
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 50,
    });
    window.dispatchEvent(new Event('scroll'));

    // Should still be false
    expect(result.current).toBe(false);

    // Above threshold
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 150,
    });
    window.dispatchEvent(new Event('scroll'));

    await waitFor(() => {
      expect(result.current).toBe(true);
    });
  });
});
