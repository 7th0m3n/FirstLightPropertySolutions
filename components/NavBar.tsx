import { LogoMark } from './LogoMark';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Sellers', href: '#for-sellers' },
  { label: 'For Investors', href: '#for-investors' },
  { label: 'Contact', href: '#contact' }
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
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
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate sm:flex">
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
        <nav className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate sm:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-primary/5 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

