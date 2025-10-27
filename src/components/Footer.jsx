import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-neutral-600 md:flex-row md:px-6">
        <p>© {new Date().getFullYear()} Veo3. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-neutral-900">Privacy</a>
          <a href="#terms" className="hover:text-neutral-900">Terms</a>
          <a href="#contact" className="hover:text-neutral-900">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
