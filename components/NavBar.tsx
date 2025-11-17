'use client';

import { useState } from 'react';
import { LogoMark } from './LogoMark';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Sellers', href: '#for-sellers' },
  { label: 'For Investors', href: '#for-investors' },
  { label: 'Contact', href: '#contact' }
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full overflow-x-hidden bg-white/90 backdrop-blur">
      <div className="relative mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <LogoMark />
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-accent group-hover:text-accent/80">
              First Light
            </span>
            <span className="text-base font-semibold text-primary">
              Property Solutions
            </span>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition hover:bg-primary/5 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-primary transition hover:bg-primary/5 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((previous) => !previous)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {isOpen ? (
          <div className="absolute left-0 top-full w-full max-w-full md:hidden">
            <nav className="flex flex-col space-y-4 bg-white px-4 py-4 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-full rounded-md px-3 py-2 text-base font-medium text-primary transition hover:bg-primary/5"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

