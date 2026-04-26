import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Header from './Header';


// Mock matchMedia for dark mode test
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('Header Component', () => {
  beforeEach(() => {
    // Reset HTML classes before each test
    document.documentElement.className = '';
  });

  it('renders logo and navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Michely')).toBeInTheDocument();
    expect(screen.getByText('Massoterapia')).toBeInTheDocument();
    
    // Check desktop nav links
    expect(screen.getAllByRole('navigation')[0]).toBeInTheDocument();
  });

  it('toggles dark mode when button is clicked', () => {
    render(<Header />);
    
    // Check initial state (not dark)
    expect(document.documentElement).not.toHaveClass('dark');
    
    const darkModeBtn = screen.getByRole('button', { name: /mudar para modo escuro/i });
    fireEvent.click(darkModeBtn);
    
    // Should add 'dark' class to html
    expect(document.documentElement).toHaveClass('dark');
    
    // Click again to remove
    fireEvent.click(screen.getByRole('button', { name: /mudar para modo claro/i }));
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('toggles mobile menu', () => {
    render(<Header />);
    
    const menuBtn = screen.getByRole('button', { name: /abrir menu/i });
    const mobileNav = screen.getByRole('navigation', { name: /navegação mobile/i });
    const container = mobileNav.closest('div');
    
    // Initial state (hidden)
    expect(container).toHaveClass('opacity-0');
    
    // Click to open
    fireEvent.click(menuBtn);
    expect(container).toHaveClass('opacity-100');
    
    // Click to close
    fireEvent.click(screen.getByRole('button', { name: /fechar menu/i }));
    expect(container).toHaveClass('opacity-0');
  });
});
