'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/team', 'Team'],
  ['/divisions', 'Divisions'],
  ['/achievements', 'Achievements'],
  ['/contact', 'Contact']
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-black tracking-widest text-white">
          ATHLEGAME <span className="text-glow">ESPORTS</span>
        </Link>
        <div className="hidden gap-5 md:flex">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition hover:text-glow ${pathname === href ? 'text-glow' : 'text-white/75'}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
