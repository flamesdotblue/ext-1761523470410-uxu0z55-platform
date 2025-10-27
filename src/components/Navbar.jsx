import React from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-white">
            <Rocket size={18} />
          </span>
          <span className="text-xl">Veo3</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-neutral-700 transition hover:text-neutral-900">Features</a>
          <a href="#pricing" className="text-sm text-neutral-700 transition hover:text-neutral-900">Pricing</a>
          <a href="#about" className="text-sm text-neutral-700 transition hover:text-neutral-900">About</a>
          <a href="#contact" className="text-sm text-neutral-700 transition hover:text-neutral-900">Contact</a>
          <a href="#get" className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800">Get Started</a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3">
            <a href="#features" className="rounded-md px-2 py-2 text-sm text-neutral-700 hover:bg-neutral-50">Features</a>
            <a href="#pricing" className="rounded-md px-2 py-2 text-sm text-neutral-700 hover:bg-neutral-50">Pricing</a>
            <a href="#about" className="rounded-md px-2 py-2 text-sm text-neutral-700 hover:bg-neutral-50">About</a>
            <a href="#contact" className="rounded-md px-2 py-2 text-sm text-neutral-700 hover:bg-neutral-50">Contact</a>
            <a href="#get" className="rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
