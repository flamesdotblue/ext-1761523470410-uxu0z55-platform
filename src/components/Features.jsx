import React from 'react';
import { Rocket, Gamepad2, Cpu } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Frictionless Onboarding',
    desc: 'Spin up immersive spaces in minutes with a streamlined, developer-friendly workflow.'
  },
  {
    icon: Gamepad2,
    title: 'Playful Interactions',
    desc: 'Responsive, tactile 3D interactions powered by a high-performance runtime.'
  },
  {
    icon: Cpu,
    title: 'Optimized Performance',
    desc: 'Modern rendering pipelines ensure smooth visuals across devices and browsers.'
  }
];

export default function Features() {
  return (
    <section id="features" className="border-t border-neutral-200 bg-neutral-50/60">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Designed for the future</h2>
          <p className="mt-3 text-neutral-700">
            Minimal aesthetics meet powerful 3D interactivity. Everything you need to craft immersive experiences.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:shadow-lg">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white">
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-medium text-neutral-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="pricing" className="mt-16 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
          <h3 className="text-xl font-semibold text-neutral-900">Simple pricing</h3>
          <p className="mt-1 text-neutral-700">Start free. Upgrade when you are ready.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 p-5">
              <div className="text-3xl font-semibold">Free</div>
              <p className="mt-1 text-sm text-neutral-700">Core features for exploration</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>• 1 project</li>
                <li>• Community support</li>
                <li>• Basic templates</li>
              </ul>
              <a href="#get" className="mt-5 inline-flex rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50">Get started</a>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-neutral-900 p-5 text-white">
              <div className="text-3xl font-semibold">Pro</div>
              <p className="mt-1 text-sm text-neutral-200">For creators and teams</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-100">
                <li>• Unlimited projects</li>
                <li>• Team collaboration</li>
                <li>• Priority support</li>
              </ul>
              <a href="#get" className="mt-5 inline-flex rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100">Upgrade</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
