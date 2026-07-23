"use client";

import { useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-button";
import PlugConnectedIcon from "@/components/ui/plug-connected-icon";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();

      // Reset success state after a while
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const inputClasses = "bg-transparent border border-outline/30 focus:border-primary focus:outline-none focus:ring-0 rounded-full px-6 py-4 transition-all duration-300 w-full";

  return (
    <div className="bg-surface-container-low p-8 md:p-12 rounded-lg border border-outline/10 fade-in-up">
      <h3 className="font-headline-md text-headline-md mb-8">Send an Inquiry</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-on-surface-variant ml-4">Full Name</label>
            <input className={inputClasses} placeholder="Your Name" type="text" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-on-surface-variant ml-4">Email Address</label>
            <input className={inputClasses} placeholder="Your Email" type="email" required />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-sm text-on-surface-variant ml-4">I am interested in...</label>
          <select className={`${inputClasses} appearance-none bg-no-repeat bg-[right_1.5rem_center]`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")" }}>
            <option>Select</option>
            <option>Career Strategy & Coaching</option>
            <option>Talent Acquisition Services</option>
            <option>Partnership Opportunities</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-sm text-on-surface-variant ml-4">Your Message</label>
          <textarea className="bg-transparent border border-outline/30 focus:border-primary focus:outline-none focus:ring-0 rounded-lg px-6 py-4 transition-all duration-300 w-full" placeholder="How can we help you?" rows={4} required></textarea>
        </div>
        <LiquidButton
          className="w-full text-on-primary py-5 uppercase tracking-widest font-label-sm"
          variant={isSuccess ? "secondary" : "primary"}
          type="submit"
          disabled={isSubmitting}
        >
          <div className="flex items-center justify-center gap-2">
            {isSubmitting ? (
              <><span className="material-symbols-outlined animate-spin">autorenew</span> Sending...</>
            ) : isSuccess ? (
              "Success! We'll reach out soon."
            ) : (
              <>
                <PlugConnectedIcon size={20} />
                Send Message
              </>
            )}
          </div>
        </LiquidButton>
      </form>
      <p className="mt-8 text-center text-label-sm text-on-surface-variant">
        By submitting, you agree to our <a className="underline hover:text-primary" href="#">Privacy Policy</a>.
      </p>
    </div>
  );
}
