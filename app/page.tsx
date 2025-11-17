'use client';

import { useState } from 'react';
import { OfferRequestModal } from '@/components/OfferRequestModal';
import { InvestorInterestModal } from '@/components/InvestorInterestModal';
import { NavBar } from '@/components/NavBar';

const benefits = [
  {
    title: 'Fast Cash Offers',
    description:
      'Get a fair, written cash offer in as little as 24 hours so you can make a decision with clarity.'
  },
  {
    title: 'No Repairs, No Showings',
    description:
      'We buy as-is. No contractors, no open houses, no strangers walking through your home every weekend.'
  },
  {
    title: 'You Choose the Closing Date',
    description:
      'Close in as little as 7–14 days or pick a later date that fits your life.'
  }
];

const steps = [
  {
    step: 'Step 1',
    title: 'Tell us about the property.',
    description: 'Share a few details through our short form or a quick phone call. Things like the address, condition, and your timeline help us run our numbers quickly.'
  },
  {
    step: 'Step 2',
    title: 'Get a clean, no-pressure cash offer.',
    description: 'We review the property and send you a clear, written cash offer with no fees, no agent commissions, and no surprises. You can take your time and there’s zero obligation to say yes.'
  },
  {
    step: 'Step 3',
    title: 'Close quickly and move on.',
    description: 'If the offer works for you, we coordinate with a trusted local title company, handle the paperwork, and close on the date you choose. You walk away with cash and a clean slate.'
  }
];

const trustPoints = [
  {
    title: 'Transparent offers with no hidden terms',
    description:
      'We show you how we arrive at our numbers and lay out your options clearly, so you always understand exactly what you’re agreeing to.'
  },
  {
    title: 'Local team focused on real solutions',
    description:
      'We know the neighborhoods we buy in and tailor offers around your actual situation, not just the property, so you can make the choice that’s best for you.'
  },
  {
    title: 'Fast, reliable closings backed by experience',
    description:
      'We work with established title companies and closing partners so there are no last-minute surprises—just a predictable closing and a clean exit.'
  }
];

const investorHighlights = [
  {
    title: 'Reliable Deal Flow',
    description:
      'Access well-vetted off-market opportunities aligned with your buy box—single-family homes, small multi-family, and select land plays.'
  },
  {
    title: 'Local Market Insight',
    description:
      'Leverage on-the-ground knowledge for comps, ARV ranges, and realistic rehab assumptions so you’re never underwriting blind.'
  },
  {
    title: 'End-to-End Support',
    description:
      'From first look to assignment and closing, we keep communication tight so you always know where a deal stands and what’s needed from you.'
  }
];

export default function HomePage() {
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);

  return (
    <>
      <OfferRequestModal isOpen={isOfferModalOpen} onClose={() => setIsOfferModalOpen(false)} />
      <InvestorInterestModal isOpen={isInvestorModalOpen} onClose={() => setIsInvestorModalOpen(false)} />
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
          <div className="relative mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-accent/80">
                First Light Property Solutions
              </span>
            </div>
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                First Light Property Solutions
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/85 sm:text-xl">
                Your clean, simple way out of a difficult property—without repairs, showings, or months of waiting.
              </p>
              <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">
                Whether you’re dealing with an inherited house, a rental that’s become a headache, or a property that just needs too much work, we give you a clear cash offer and a predictable closing date.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsOfferModalOpen(true)}
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
            <p className="mt-3 text-center text-xs text-white/70 sm:text-left">
              No obligation. No hidden fees. No agent commissions.
            </p>
          </div>
        </section>

        <section
          id="for-sellers"
          className="mx-auto w-full max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col gap-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                For Homeowners & Landlords Who Need a Clean Exit
              </h2>
              <p className="text-base leading-relaxed text-slate-700">
                Sometimes a property stops feeling like an asset and starts feeling like a weight. Maybe it’s a house that needs more repairs than you have time or money for. Maybe you inherited a place you don’t want to manage. Maybe tenants stopped paying, or life changed faster than you expected. First Light Property Solutions gives you a clear, simple way out—without listings, showings, or months of uncertainty.
              </p>
              <h3 className="text-lg font-semibold text-slate-900">
                We’re a good fit if you’re saying things like:
              </h3>
              <ul className="mt-3 list-inside list-disc space-y-2 text-slate-700">
                <li>I don’t have the time, money, or energy to fix this place.</li>
                <li>I just want a fair number and a fast, clean closing.</li>
                <li>I’m tired of chasing tenants and dealing with late payments.</li>
                <li>I inherited this property and don’t want to become a landlord.</li>
                <li>I’m behind on payments and want to avoid a drawn-out mess.</li>
                <li>I tried listing before and it didn’t work, or took too long.</li>
              </ul>
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
            <p className="text-slate-700 max-w-3xl">
              You don’t need to clean, repair, or stage anything. We work with reputable local title companies and handle the details so you can focus on what comes next.
            </p>
            <button
              type="button"
              onClick={() => setIsOfferModalOpen(true)}
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
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-3 text-slate-700 max-w-2xl">
                A straightforward, transparent process built to help you move forward with confidence.
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
            <p className="mt-6 text-xs text-slate-500">
              Most sellers we work with can go from first conversation to closing in as little as 7–21 days, depending on title and your schedule.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                Why Homeowners Trust First Light
              </h2>
            </div>
            <div className="space-y-6">
              {trustPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                  <div>
                    <h3 className="text-base font-semibold text-primary">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-8 border-l-4 border-[#F5C05C] pl-4 text-sm text-slate-700 max-w-xl">
                <p className="italic">
                  “First Light helped me sell a rental that had become a headache. They closed in 12 days and handled everything with the title company. I didn’t even have to clean the place out.”
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  — J.P., Philadelphia (Tired landlord)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="for-investors"
          className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                For Cash Buyers & Real Estate Investors
              </h2>
              <p className="mt-3 text-slate-700 max-w-2xl">
                If you’re a serious cash buyer looking for consistent, direct-to-seller opportunities, we’re built to keep your pipeline moving. We focus on sourcing properties where there’s a real value-add or long-term hold story—not just anything we can tie up.
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
            <div className="mt-8 flex flex-col gap-3 text-slate-700 sm:flex-row sm:items-center">
              <p className="text-sm">
                Want to see deals before they hit the wider market?
              </p>
              <button
                type="button"
                onClick={() => setIsInvestorModalOpen(true)}
                className="inline-flex items-center justify-center rounded-md bg-[#1A2E44] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#142234]"
              >
                Join Our Buyers List
              </button>
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
            <p className="mt-3 max-w-xl text-slate-700">
              Get your free, no-obligation cash offer today. Most homeowners hear back within one business day.
            </p>
            <button
              type="button"
              onClick={() => setIsOfferModalOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-primary shadow-[0_20px_45px_-25px_rgba(245,192,92,0.7)] transition hover:translate-y-[-1px] hover:shadow-[0_30px_60px_-25px_rgba(245,192,92,0.55)]"
            >
              Request My Offer
            </button>
            <p className="mt-3 text-xs text-slate-500">
              Short secure form • No obligation • Your information stays private.
            </p>
          </div>
        </section>
      </main>
      <footer className="mt-16 border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-screen-xl space-y-2 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:px-8">
          <p className="text-slate-700">
            © {new Date().getFullYear()} First Light Property Solutions. All rights reserved.
          </p>
          <p>Email: info@firstlightpropertysolutions.com</p>
          <p>Phone: (XXX) XXX-XXXX</p>
          <p>Serving: Greater Philadelphia and surrounding areas.</p>
          <p className="text-xs text-slate-500 max-w-3xl">
            We are real estate investors. We are not attorneys, CPAs, or financial advisors. Information on this site is for informational purposes only. Always consult with the appropriate professional before making financial decisions.
          </p>
        </div>
      </footer>
    </>
  );
}

