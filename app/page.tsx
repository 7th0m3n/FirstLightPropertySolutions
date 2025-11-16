'use client';

import { useState } from 'react';
import { OfferRequestModal } from '@/components/OfferRequestModal';
import { NavBar } from '@/components/NavBar';

const benefits = [
  {
    title: 'Fast Cash Offers',
    description: 'Get a fair, direct offer in just 24 hours.'
  },
  {
    title: 'No Repairs, No Showings',
    description: 'We buy as-is, so you skip the headaches and the costs.'
  },
  {
    title: 'You Choose the Closing Date',
    description: 'Move forward on the timeline that fits your life.'
  }
];

const steps = [
  {
    step: 'Step 1',
    title: 'Tell us about the property.',
    description: 'Share a few details through our short, guided form.'
  },
  {
    step: 'Step 2',
    title: 'Get a clean, no-pressure cash offer.',
    description: 'No fees, no agent commissions, no surprises—just clarity.'
  },
  {
    step: 'Step 3',
    title: 'Close quickly and move on.',
    description: 'We handle everything from paperwork to cleanup.'
  }
];

const trustPoints = [
  'Transparent offers with no hidden terms',
  'Local team focused on real solutions',
  'Fast, reliable closings backed by experience'
];

const investorHighlights = [
  {
    title: 'Reliable Deal Flow',
    description:
      'Access well-vetted off-market opportunities aligned with your portfolio goals.'
  },
  {
    title: 'Local Market Insight',
    description:
      'Leverage on-the-ground knowledge to evaluate returns and mitigate risk.'
  },
  {
    title: 'End-to-End Support',
    description:
      'From due diligence to closing, our team keeps transactions moving smoothly.'
  }
];

export default function HomePage() {
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  const openOfferModal = () => setIsOfferModalOpen(true);
  const closeOfferModal = () => setIsOfferModalOpen(false);

  return (
    <>
      <OfferRequestModal isOpen={isOfferModalOpen} onClose={closeOfferModal} />
      <NavBar />
      <main className="bg-background">
        <section
          id="home"
          className="relative overflow-hidden pb-24 pt-16 sm:pb-32 sm:pt-24"
        >
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero-sunrise.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-[#3C4A57]/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
          </div>
          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-accent/80">
                First Light Property Solutions
              </span>
            </div>
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                First Light Property Solutions
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/85 sm:text-xl">
                Your clean, simple way out of a difficult property.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={openOfferModal}
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-primary shadow-[0_20px_45px_-25px_rgba(245,192,92,0.7)] transition hover:translate-y-[-1px] hover:shadow-[0_30px_60px_-25px_rgba(245,192,92,0.55)]"
              >
                Get My Cash Offer
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:text-white"
              >
                How It Works
              </a>
            </div>
          </div>
        </section>

        <section
          id="for-sellers"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                For Home Sellers
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate">
                A simple, respectful experience that helps you move on without
                the stress of repairs or long listings.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex flex-col gap-4 rounded-3xl border border-white/60 bg-white px-8 py-10 shadow-soft transition hover:-translate-y-1 hover:shadow-[0_35px_80px_-50px_rgba(26,46,68,0.65)]"
                >
                  <h3 className="text-xl font-semibold text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={openOfferModal}
              className="self-start rounded-full bg-accent px-6 py-3 text-base font-semibold text-primary shadow-[0_20px_45px_-25px_rgba(245,192,92,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_60px_-25px_rgba(245,192,92,0.55)]"
            >
              Get My Cash Offer
            </button>
          </div>
        </section>

        <section
          id="how-it-works"
          className="bg-white px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate">
                A straightforward, transparent process built to help you move
                forward with confidence.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.step}
                  className="flex flex-col gap-3 rounded-3xl border border-primary/5 bg-background px-8 py-10 shadow-[0_25px_80px_-55px_rgba(26,46,68,0.8)] transition hover:-translate-y-1 hover:border-accent/50"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                Why Homeowners Trust First Light
              </h2>
            </div>
            <div>
              <ul className="flex flex-col gap-6 text-base leading-relaxed text-slate">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="for-investors"
          className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                For Real Estate Investors
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate">
                Partner with a team that sources quality properties and keeps
                your pipeline consistent.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {investorHighlights.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 rounded-3xl border border-primary/5 bg-white px-8 py-10 shadow-[0_20px_60px_-40px_rgba(26,46,68,0.55)] transition hover:-translate-y-1 hover:border-accent/50"
                >
                  <h3 className="text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-[#F6F8FA] px-4 py-20 text-primary sm:px-6 lg:px-8"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Ready for a fresh start?
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              Tell us a little about your property and your situation. We’ll review the details and follow up with a clean, no-obligation cash offer. No repairs, no showings, and no pressure to say yes.
            </p>
            <button
              type="button"
              onClick={openOfferModal}
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-primary shadow-[0_20px_45px_-25px_rgba(245,192,92,0.7)] transition hover:translate-y-[-1px] hover:shadow-[0_30px_60px_-25px_rgba(245,192,92,0.55)]"
            >
              Get My Cash Offer
            </button>
            <p className="text-sm text-slate-500">
              No obligation, no repairs, no agent commissions. Your information is kept private.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate/70 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} First Light Property Solutions. All
          rights reserved.
        </div>
      </footer>
    </>
  );
}

