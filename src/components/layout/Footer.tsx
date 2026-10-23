import Link from "next/link";
import { companyAddress, companyEmail, companyPhone, companyPhoneRaw } from "@/data/constants";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.6v1.64h.05c.5-.95 1.73-1.95 3.56-1.95 3.8 0 4.5 2.5 4.5 5.76V21h-4v-5.8c0-1.38-.03-3.15-1.92-3.15-1.93 0-2.23 1.5-2.23 3.05V21h-4V9Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Aksharam Nutra Foods" className="h-20 w-auto" />
            <p className="mt-4 text-sm text-brand-muted">
              Aksharam Nutra Foods Pvt Ltd is a leading manufacturer and supplier of spray dried
              fruit, vegetables, and fat powder products. Based in Surendranagar, Gujarat, our
              company is dedicated to providing premium-quality ingredients for various
              industries.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href="https://www.instagram.com/aksharamnutrafoods"
                aria-label="Instagram"
                className="text-brand-muted hover:text-brand"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/aksharam-nutra-foods-pvt-ltd/"
                aria-label="LinkedIn"
                className="text-brand-muted hover:text-brand"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-brand-ink">Company</h3>
              <ul className="space-y-2 text-sm text-brand-muted">
                <li><Link href="/" className="hover:text-brand">Home</Link></li>
                <li><Link href="/about" className="hover:text-brand">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-brand">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-brand">Contact us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-brand-ink">Products</h3>
              <ul className="space-y-2 text-sm text-brand-muted">
                <li><Link href="/spray-dried" className="hover:text-brand">Spray Dried</Link></li>
                <li><Link href="/dehydrated-products" className="hover:text-brand">Dehydrated</Link></li>
                <li><Link href="/freeze-dried" className="hover:text-brand">Freeze Dried</Link></li>
                <li><Link href="/smoothies" className="hover:text-brand">Smoothies</Link></li>
                <li><Link href="/indian-herbal-extract" className="hover:text-brand">Indian Herbal Extract</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-brand-ink">Contact</h3>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li>
                <strong className="text-brand-ink">Address</strong> {companyAddress}
              </li>
              <li>
                <strong className="text-brand-ink">Email</strong>{" "}
                <a href={`mailto:${companyEmail}`} className="hover:text-brand">
                  {companyEmail}
                </a>
              </li>
              <li>
                <strong className="text-brand-ink">Phone No.</strong>{" "}
                <a href={`tel:${companyPhoneRaw}`} className="hover:text-brand">
                  {companyPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-sm text-brand-muted md:flex-row md:items-center md:justify-between">
          <p>Copyright &copy; {year}. All Rights Reserved. Aksharam Nutra Foods</p>
          <p>Designed By Aksharam Team</p>
        </div>
      </div>
    </footer>
  );
}
