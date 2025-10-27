import React from 'react';
import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20 lg:gap-14 md:px-6">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
            <Star size={14} className="text-amber-500" />
            <span>Next-gen VR experiences</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Explore vision-first realities with Veo3
          </h1>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-neutral-700 sm:text-lg">
            A minimal, futuristic canvas for immersive virtual worlds. Interact with the 3D headset and
            experience a new dimension of design, gaming, and productivity.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#get" className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800">
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50">
              Learn More
            </a>
          </div>
        </div>

        <div className="relative h-[60vh] w-full rounded-2xl border border-neutral-200 bg-white md:h-[75vh]">
          <Spline
            scene="https://prod.spline.design/9HgHYACX2il7xmYO/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
