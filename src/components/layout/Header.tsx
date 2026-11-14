"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  Boxes,
  Layers,
  BookOpen,
  FileDown,
  PhoneCall,
  X,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { productNavLinks } from "@/data/products";
import { blogPosts } from "@/data/blog";
import { companyEmail, companyPhone } from "@/data/constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileMenuOpen } from "@/store/slices/navSlice";

const productPaths = [
  "/spray-dried",
  "/spray-dried-fruit-powder",
  "/spray-dried-vegetable-powder",
  "/spray-dried-fat-powder",
  "/spray-dried-dairy-powder",
  "/other-spray-dried-powder",
  "/dehydrated-products",
  "/freeze-dried",
  "/smoothies",
  "/indian-herbal-extract",
];

const blogPaths = ["/blog", ...blogPosts.map((post) => `/${post.slug}`)];

function NavLinkItem({
  href,
  active,
  children,
  onClick,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-sm xl:text-base font-medium text-brand-ink transition hover:text-brand after:absolute after:-bottom-1 after:left-1 after:right-1 after:h-0.75 after:bg-brand-accent after:transition-all after:content-[''] ${
        active ? "after:w-[calc(100%-8px)] text-brand" : "after:w-0 hover:after:w-[calc(100%-8px)]"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavItem({
  href,
  active,
  icon: Icon,
  children,
  onClick,
}: {
  href: string;
  active: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
        active
          ? "bg-brand text-white shadow-md shadow-brand/20 font-bold"
          : "text-brand-ink hover:bg-brand-bg hover:text-brand"
      }`}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <Icon
            className={`size-4.5 transition-transform duration-200 group-hover:scale-110 ${
              active ? "text-white" : "text-brand"
            }`}
          />
        )}
        <span>{children}</span>
      </div>
      {active ? (
        <span className="size-2 rounded-full bg-brand-accent animate-pulse" />
      ) : (
        <ChevronRight className="size-4 opacity-40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
      )}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector((state) => state.nav.mobileMenuOpen);

  const isActive = (path: string) => pathname === path;
  const isProductsActive = productPaths.includes(pathname ?? "");
  const isBlogActive = blogPaths.includes(pathname ?? "");

  const closeMobile = () => dispatch(setMobileMenuOpen(false));
  const sprayDried = productNavLinks[0];
  const otherProductLinks = productNavLinks.slice(1);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur-md py-2 sm:py-2.5 transition-all">
      <div className="mx-auto flex max-w-7xl 2xl:max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Aksharam Nutra Foods"
            className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-all"
          />
        </Link>

        {/* Desktop nav (visible on lg: 1024px+ for clean spacing across all resolutions) */}
        <nav className="hidden items-center gap-4 xl:gap-7 lg:flex">
          <NavLinkItem href="/" active={isActive("/")}>
            Home
          </NavLinkItem>
          <NavLinkItem href="/about" active={isActive("/about")}>
            About Us
          </NavLinkItem>

          <div className="nav-dropdown relative">
            <button
              type="button"
              className={`flex items-center gap-1 text-sm xl:text-base font-medium outline-none transition hover:text-brand ${
                isProductsActive ? "text-brand" : "text-brand-ink"
              }`}
            >
              Our Products
              <ChevronDown className="size-3.5" />
            </button>
            <div className="nav-dropdown-panel invisible absolute left-0 top-full w-56 pt-3 opacity-0 transition">
              <ul className="rounded-lg bg-popover p-1 shadow-md ring-1 ring-foreground/10">
                <li className="nav-submenu-item relative">
                  <div
                    tabIndex={0}
                    className="flex cursor-default items-center justify-between rounded-md px-2 py-2 text-sm font-medium text-brand-ink outline-none hover:bg-muted"
                  >
                    {sprayDried.label}
                    <ChevronRight className="size-3.5" />
                  </div>
                  <div className="nav-submenu-flyout invisible absolute left-full top-0 w-64 pl-1 opacity-0 transition">
                    <div className="w-60 rounded-lg bg-popover p-1 shadow-md ring-1 ring-foreground/10">
                      {sprayDried.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-2 py-2 text-sm text-brand-ink hover:bg-muted"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
                {otherProductLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-md px-2 py-2 text-sm text-brand-ink hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <NavLinkItem href="/application" active={isActive("/application")}>
            Application
          </NavLinkItem>
          <NavLinkItem href="/blog" active={isBlogActive}>
            Blog
          </NavLinkItem>
          <NavLinkItem href="/brochure" active={isActive("/brochure")}>
            Download Brochure
          </NavLinkItem>
          <NavLinkItem href="/contact" active={isActive("/contact")}>
            Contact us
          </NavLinkItem>
        </nav>

        {/* Mobile & Tablet trigger */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-brand-ink hover:bg-brand-bg rounded-xl"
          aria-label="Toggle navigation"
          onClick={() => dispatch(setMobileMenuOpen(true))}
        >
          <Menu className="size-6" />
        </Button>
      </div>

      {/* Mobile & Tablet menu drawer */}
      <Sheet open={mobileMenuOpen} onOpenChange={(open) => dispatch(setMobileMenuOpen(open))}>
        <SheetContent
          side="right"
          showCloseButton={false}
          className="w-[85vw] max-w-sm flex flex-col justify-between overflow-y-auto p-0 bg-white dark:bg-neutral-950 border-l border-black/10 dark:border-white/10 shadow-2xl"
        >
          <SheetTitle className="sr-only">Navigation</SheetTitle>

          <div>
            {/* Drawer Header with Logo & Circular Close Button */}
            <div className="flex items-center justify-between border-b px-5 py-4 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md">
              <Link href="/" onClick={closeMobile} className="flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.png"
                  alt="Aksharam Nutra Foods"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={closeMobile}
                className="flex size-9 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-brand-ink transition hover:bg-black/10 hover:scale-105 active:scale-95"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Navigation List */}
            <nav className="flex flex-col gap-1.5 p-4 sm:p-5">
              <MobileNavItem href="/" active={isActive("/")} icon={Home} onClick={closeMobile}>
                Home
              </MobileNavItem>

              <MobileNavItem href="/about" active={isActive("/about")} icon={Users} onClick={closeMobile}>
                About Us
              </MobileNavItem>

              {/* Collapsible Our Products Accordion */}
              <Accordion>
                <AccordionItem value="products" className="border-none">
                  <AccordionTrigger
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 hover:no-underline [&>svg]:size-4.5 [&>svg]:transition-transform ${
                      isProductsActive
                        ? "bg-brand/10 text-brand font-bold"
                        : "text-brand-ink hover:bg-brand-bg hover:text-brand"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Boxes className="size-4.5 text-brand" />
                      <span>Our Products</span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pt-2 pb-1">
                    <div className="ml-3 pl-3.5 border-l-2 border-brand/20 space-y-1">
                      <span className="block px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-muted">
                        {sprayDried.label}
                      </span>
                      {sprayDried.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMobile}
                          className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                            isActive(child.href)
                              ? "bg-brand/10 text-brand font-bold pl-4 border-l-2 border-brand"
                              : "text-brand-muted hover:text-brand hover:bg-brand-bg/60 hover:pl-4"
                          }`}
                        >
                          <span className="size-1 rounded-full bg-brand-accent shrink-0" />
                          <span>{child.label}</span>
                        </Link>
                      ))}

                      <div className="my-2 border-t border-black/5" />

                      {otherProductLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeMobile}
                          className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                            isActive(link.href)
                              ? "bg-brand/10 text-brand font-bold pl-4 border-l-2 border-brand"
                              : "text-brand-muted hover:text-brand hover:bg-brand-bg/60 hover:pl-4"
                          }`}
                        >
                          <span className="size-1 rounded-full bg-brand-accent shrink-0" />
                          <span>{link.label}</span>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <MobileNavItem
                href="/application"
                active={isActive("/application")}
                icon={Layers}
                onClick={closeMobile}
              >
                Application
              </MobileNavItem>

              <MobileNavItem href="/blog" active={isBlogActive} icon={BookOpen} onClick={closeMobile}>
                Blog
              </MobileNavItem>

              <MobileNavItem
                href="/brochure"
                active={isActive("/brochure")}
                icon={FileDown}
                onClick={closeMobile}
              >
                Download Brochure
              </MobileNavItem>

              <MobileNavItem
                href="/contact"
                active={isActive("/contact")}
                icon={PhoneCall}
                onClick={closeMobile}
              >
                Contact us
              </MobileNavItem>
            </nav>
          </div>

          {/* Drawer Footer with Quick Contact */}
          <div className="border-t bg-brand-bg/60 dark:bg-neutral-900/60 p-5 space-y-2.5">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand">
              Quick Contact
            </div>
            <a
              href={`tel:${companyPhone}`}
              className="flex items-center gap-2.5 text-xs text-brand-muted hover:text-brand transition"
            >
              <Phone className="size-3.5 text-brand" />
              <span>{companyPhone}</span>
            </a>
            <a
              href={`mailto:${companyEmail}`}
              className="flex items-center gap-2.5 text-xs text-brand-muted hover:text-brand transition break-all"
            >
              <Mail className="size-3.5 text-brand" />
              <span>{companyEmail}</span>
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
