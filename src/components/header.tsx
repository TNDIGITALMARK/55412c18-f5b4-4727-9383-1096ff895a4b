'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Trigger animation after mount
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      document.body.style.overflow = 'unset';
      setIsAnimating(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        handleCloseMenu();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Handle smooth close with animation
  const handleCloseMenu = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 300); // Match transition duration
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
              Lily Suda
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-muted transition-colors active:scale-95"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#newsletter"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all hover:-translate-y-0.5"
          >
            Subscribe
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop overlay with smooth fade-in */}
          <div
            className={`fixed inset-0 z-[9998] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-out ${
              isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleCloseMenu}
            aria-hidden="true"
          />
          {/* Mobile menu panel with slide-in animation */}
          <div
            className={`fixed inset-y-0 right-0 z-[9999] w-full overflow-y-auto bg-background px-6 py-6 shadow-2xl sm:max-w-sm sm:ring-1 sm:ring-border transition-transform duration-300 ease-out ${
              isAnimating ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ minHeight: '100vh' }}
          >
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="-m-1.5 p-1.5" onClick={handleCloseMenu}>
                <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  Lily Suda
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground hover:bg-muted transition-colors active:scale-95"
                onClick={handleCloseMenu}
                aria-label="Close menu"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-lg font-semibold text-foreground hover:bg-muted transition-colors active:bg-muted/80"
                  onClick={handleCloseMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <Link
                  href="#newsletter"
                  className="block rounded-lg px-4 py-3 text-lg font-semibold text-primary hover:bg-accent transition-colors active:bg-accent/80"
                  onClick={handleCloseMenu}
                >
                  Subscribe to Newsletter
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
