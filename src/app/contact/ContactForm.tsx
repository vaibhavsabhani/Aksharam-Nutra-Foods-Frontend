"use client";

import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setField, submitContactForm } from "@/store/slices/contactFormSlice";
import { companyAddress, companyEmail, companyPhone } from "@/data/constants";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { InteractiveTiltCard } from "@/components/common/InteractiveTiltCard";
import { MagneticButton } from "@/components/common/MagneticButton";
import { InteractiveGlowBackground } from "@/components/common/InteractiveGlowBackground";

export function ContactForm() {
  const dispatch = useAppDispatch();
  const { values, status, error } = useAppSelector((state) => state.contactForm);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(submitContactForm(values));
  };

  return (
    <div className="relative overflow-hidden mx-auto max-w-5xl 2xl:max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 2xl:py-28">
      {/* Background ambient lighting follower */}
      <InteractiveGlowBackground />

      {/* 3 Contact Info Cards Grid */}
      <div className="mb-10 sm:mb-14 grid gap-5 sm:gap-6 sm:grid-cols-3">
        {/* Address Card */}
        <ScrollReveal animation="fade-up" delay={100} duration={650}>
          <InteractiveTiltCard
            maxTilt={6}
            perspective={1100}
            className="group relative h-full flex items-start gap-4 rounded-3xl border border-black/8 dark:border-white/10 bg-white/90 dark:bg-neutral-900/90 p-5 sm:p-6 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-brand/40 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
              <MapPin className="size-5 sm:size-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand">Address</p>
              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-brand-muted font-normal">
                {companyAddress}
              </p>
            </div>
          </InteractiveTiltCard>
        </ScrollReveal>

        {/* Email Card */}
        <ScrollReveal animation="fade-up" delay={200} duration={650}>
          <InteractiveTiltCard
            maxTilt={6}
            perspective={1100}
            className="group relative h-full flex items-start gap-4 rounded-3xl border border-black/8 dark:border-white/10 bg-white/90 dark:bg-neutral-900/90 p-5 sm:p-6 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-brand/40 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
              <Mail className="size-5 sm:size-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand">Email</p>
              <a
                href={`mailto:${companyEmail}`}
                className="mt-1 block text-xs sm:text-sm font-medium text-brand-muted break-all sm:break-normal transition-colors duration-300 hover:text-brand"
              >
                {companyEmail}
              </a>
            </div>
          </InteractiveTiltCard>
        </ScrollReveal>

        {/* Phone Card */}
        <ScrollReveal animation="fade-up" delay={300} duration={650}>
          <InteractiveTiltCard
            maxTilt={6}
            perspective={1100}
            className="group relative h-full flex items-start gap-4 rounded-3xl border border-black/8 dark:border-white/10 bg-white/90 dark:bg-neutral-900/90 p-5 sm:p-6 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-brand/40 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
              <Phone className="size-5 sm:size-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand">Phone</p>
              <a
                href={`tel:${companyPhone}`}
                className="mt-1 block text-xs sm:text-sm font-medium text-brand-muted transition-colors duration-300 hover:text-brand"
              >
                {companyPhone}
              </a>
            </div>
          </InteractiveTiltCard>
        </ScrollReveal>
      </div>

      {/* Main Interactive Form Card */}
      <ScrollReveal animation="fade-up" delay={200} duration={750}>
        <div className="relative rounded-3xl border border-black/8 dark:border-white/10 bg-white/95 dark:bg-neutral-900/95 p-6 sm:p-10 2xl:p-12 shadow-xl backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="fname" className="text-xs sm:text-sm font-bold text-brand-ink">
                  First name
                </Label>
                <Input
                  id="fname"
                  required
                  className="mt-2 h-11 sm:h-12 rounded-xl border-black/10 dark:border-white/15 bg-brand-bg/40 px-4 text-sm transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                  value={values.firstName}
                  onChange={(e) => dispatch(setField({ field: "firstName", value: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="lname" className="text-xs sm:text-sm font-bold text-brand-ink">
                  Last name
                </Label>
                <Input
                  id="lname"
                  className="mt-2 h-11 sm:h-12 rounded-xl border-black/10 dark:border-white/15 bg-brand-bg/40 px-4 text-sm transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                  value={values.lastName}
                  onChange={(e) => dispatch(setField({ field: "lastName", value: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-xs sm:text-sm font-bold text-brand-ink">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                required
                className="mt-2 h-11 sm:h-12 rounded-xl border-black/10 dark:border-white/15 bg-brand-bg/40 px-4 text-sm transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                value={values.email}
                onChange={(e) => dispatch(setField({ field: "email", value: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-xs sm:text-sm font-bold text-brand-ink">
                Message
              </Label>
              <Textarea
                id="message"
                rows={5}
                required
                className="mt-2 rounded-xl border-black/10 dark:border-white/15 bg-brand-bg/40 p-4 text-sm transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 leading-relaxed"
                value={values.message}
                onChange={(e) => dispatch(setField({ field: "message", value: e.target.value }))}
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <MagneticButton strength={0.2}>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="group relative overflow-hidden rounded-full bg-brand px-8 sm:px-10 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand/90 hover:shadow-xl active:scale-95 disabled:opacity-70"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                    <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                </Button>
              </MagneticButton>

              {status === "succeeded" && (
                <div className="flex items-center gap-2 text-sm font-semibold text-green-700 dark:text-green-400 bg-green-500/10 px-4 py-2.5 rounded-xl border border-green-500/20">
                  <CheckCircle2 className="size-4 shrink-0" />
                  <span>Thanks! Your message has been sent — we&apos;ll get back to you shortly.</span>
                </div>
              )}

              {status === "failed" && (
                <div className="flex items-center gap-2 text-sm font-semibold text-destructive bg-destructive/10 px-4 py-2.5 rounded-xl border border-destructive/20">
                  <AlertCircle className="size-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </ScrollReveal>

      {/* Google Map Card */}
      <ScrollReveal animation="zoom-in" delay={300} duration={800} className="mt-10 sm:mt-14">
        <div className="overflow-hidden rounded-3xl border border-black/8 dark:border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl">
          <iframe
            title="Aksharam Nutra Foods location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117764.34874093467!2d71.49067075836712!3d22.723189698830357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395940dfdc9f82af%3A0xa4b2578b8bf73d43!2sSurendranagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1727520863196!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </ScrollReveal>
    </div>
  );
}
