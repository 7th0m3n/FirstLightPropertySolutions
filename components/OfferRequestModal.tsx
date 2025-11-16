'use client';

import type { FormEvent } from 'react';

type OfferRequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function OfferRequestModal({ isOpen, onClose }: OfferRequestModalProps) {
  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Offer request submitted', data);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary transition hover:bg-primary/10"
          onClick={onClose}
          aria-label="Close offer request form"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>

        <div className="space-y-3 pr-2">
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
            Request Your Cash Offer
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Share a few details below and our team will follow up with a clean,
            no-pressure cash offer.
          </p>
        </div>

        <form className="mt-6 space-y-8 overflow-y-auto pr-1" onSubmit={handleSubmit}>
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
                  placeholder="Jane Doe"
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
                  required
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  placeholder="(555) 123-4567"
                />
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
              Property Details
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-primary sm:col-span-2">
                Property Address
                <input
                  type="text"
                  name="propertyAddress"
                  required
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  placeholder="123 Main Street"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                City
                <input
                  type="text"
                  name="city"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  placeholder="City"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                State
                <input
                  type="text"
                  name="state"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  placeholder="State"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                ZIP Code
                <input
                  type="text"
                  name="zipCode"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  placeholder="12345"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Property Type
                <select
                  name="propertyType"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                >
                  <option value="Single-family home">Single-family home</option>
                  <option value="Multi-family">Multi-family</option>
                  <option value="Condo / Townhome">Condo / Townhome</option>
                  <option value="Vacant land">Vacant land</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Occupancy Status
                <select
                  name="occupancyStatus"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                >
                  <option value="Owner-occupied">Owner-occupied</option>
                  <option value="Tenant-occupied">Tenant-occupied</option>
                  <option value="Vacant">Vacant</option>
                </select>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
              Situation &amp; Timing
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Property Condition
                <select
                  name="propertyCondition"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                >
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Needs work">Needs work</option>
                  <option value="Major repairs needed">Major repairs needed</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Behind on payments or facing foreclosure?
                <select
                  name="paymentStatus"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Ideal timeline to sell
                <select
                  name="idealTimeline"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                >
                  <option value="As soon as possible">As soon as possible</option>
                  <option value="Within 30 days">Within 30 days</option>
                  <option value="30–60 days">30–60 days</option>
                  <option value="Just exploring options">Just exploring options</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary">
                Best way/time to contact you
                <input
                  type="text"
                  name="contactPreference"
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  placeholder="Call in afternoons, email preferred, etc."
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-primary sm:col-span-2">
                Anything else we should know?
                <textarea
                  name="notes"
                  rows={4}
                  className="w-full rounded-md border border-primary/15 bg-white px-4 py-3 text-base text-primary placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  placeholder="Share any extra context, timelines, or questions."
                />
              </label>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-[#1A2E44] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#142234]"
            >
              Request My Cash Offer
            </button>
            <p className="text-center text-xs text-slate-500 sm:text-sm">
              No obligation, no repairs, no agent commissions. Your information is kept private.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
