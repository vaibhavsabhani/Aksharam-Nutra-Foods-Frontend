"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setField, submitContactForm } from "@/store/slices/contactFormSlice";
import { companyAddress, companyEmail, companyPhone } from "@/data/constants";

export function ContactForm() {
  const dispatch = useAppDispatch();
  const { values, status, error } = useAppSelector((state) => state.contactForm);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(submitContactForm(values));
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-10 grid gap-6 sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <MapPin className="mt-1 size-5 shrink-0 text-brand" />
          <p className="text-sm text-brand-muted">{companyAddress}</p>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="mt-1 size-5 shrink-0 text-brand" />
          <p className="text-sm text-brand-muted">{companyEmail}</p>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="mt-1 size-5 shrink-0 text-brand" />
          <p className="text-sm text-brand-muted">{companyPhone}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="fname">First name</Label>
            <Input
              id="fname"
              required
              className="mt-1.5"
              value={values.firstName}
              onChange={(e) => dispatch(setField({ field: "firstName", value: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="lname">Last name</Label>
            <Input
              id="lname"
              className="mt-1.5"
              value={values.lastName}
              onChange={(e) => dispatch(setField({ field: "lastName", value: e.target.value }))}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            required
            className="mt-1.5"
            value={values.email}
            onChange={(e) => dispatch(setField({ field: "email", value: e.target.value }))}
          />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            rows={5}
            required
            className="mt-1.5"
            value={values.message}
            onChange={(e) => dispatch(setField({ field: "message", value: e.target.value }))}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className="bg-brand hover:bg-brand/90"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>

        {status === "succeeded" ? (
          <p className="text-sm font-medium text-green-700">
            Thanks! Your message has been sent — we&apos;ll get back to you shortly.
          </p>
        ) : null}
        {status === "failed" ? (
          <p className="text-sm font-medium text-destructive">{error}</p>
        ) : null}
      </form>

      <div className="mt-10 overflow-hidden rounded-xl border">
        <iframe
          title="Aksharam Nutra Foods location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117764.34874093467!2d71.49067075836712!3d22.723189698830357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395940dfdc9f82af%3A0xa4b2578b8bf73d43!2sSurendranagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1727520863196!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
