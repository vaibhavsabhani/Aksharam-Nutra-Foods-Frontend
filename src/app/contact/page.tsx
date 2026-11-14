import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <HeroBanner title="Contact Us" />
      <ContactForm />
    </>
  );
}
