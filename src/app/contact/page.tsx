import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "",
};

export default function ContactPage() {
  return (
    <>
      <HeroBanner title="Contact Us" />
      <ContactForm />
    </>
  );
}
