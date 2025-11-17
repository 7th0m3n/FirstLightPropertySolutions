'use client';

import type { FormEvent } from 'react';

type InvestorInterestModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function InvestorInterestModal({ isOpen, onClose }: InvestorInterestModalProps) {
  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Investor interest submitted', data);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl md:p-8"
        style={{ maxHeight: '90vh' }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary transition hover:bg-primary/10"
          onClick={onClose}
          aria-label="Close investor interest form"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>

        <div className="space-y-3 pr-2">
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
            Join the First Light Investor Network
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Tell us about your investment goals and we’ll connect you with curated opportunities that fit.
          </p>
        </div>

        <form className="mt-6 space-y-8 pr-1" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
              Contact Details
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Full Name
                <input
                  type="text"
                  name="fullName"
                  required
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  placeholder="Jordan Smith"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  placeholder="you@email.com"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Phone
                <input
                  type="tel"
                  name="phone"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  placeholder="(555) 987-6543"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Preferred Contact Method
                <select
                  name="contactPreference"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                >
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="Text">Text</option>
                </select>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
              Investment Profile
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Investment Focus
                <select
                  name="investmentFocus"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                >
                  <option value="Single-family">Single-family homes</option>
                  <option value="Multi-family">Multi-family</option>
                  <option value="Fix-and-flip">Fix &amp; Flip</option>
                  <option value="Buy-and-hold">Buy &amp; Hold</option>
                  <option value="Mixed-use">Mixed-use</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Estimated Capital Per Deal
                <select
                  name="capitalPerDeal"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                >
                  <option value="Under 100k">Under $100k</option>
                  <option value="100-250k">$100k - $250k</option>
                  <option value="250-500k">$250k - $500k</option>
                  <option value="500k-1m">$500k - $1M</option>
                  <option value="1m+">$1M+</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Markets of Interest
                <input
                  type="text"
                  name="markets"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  placeholder="Cities, states, or regions"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Accredited Investor
                <select
                  name="accredited"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Unsure">Unsure</option>
                </select>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
              Timeline &amp; Goals
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Desired Deal Flow
                <select
                  name="dealFlow"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                >
                  <option value="1-2 per year">1-2 per year</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Opportunistic">Opportunistic</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Ideal Timeframe to Close
                <select
                  name="timeline"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                >
                  <option value="As opportunities arise">As opportunities arise</option>
                  <option value="30-60 days">Next 30-60 days</option>
                  <option value="60-90 days">60-90 days</option>
                  <option value="Exploring">Just exploring options</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary sm:col-span-2">
                Anything else we should know?
                <textarea
                  name="notes"
                  rows={4}
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  placeholder="Share preferences, past experience, or specific questions."
                />
              </label>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-[#142234]"
            >
              Join Investors List
            </button>
            <p className="text-center text-xs text-slate-500 sm:text-sm">
              We’ll reach out with curated opportunities that align with your goals. Your information stays private.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
