"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
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
          className="lg:hidden text-brand-ink"
          aria-label="Toggle navigation"
          onClick={() => dispatch(setMobileMenuOpen(true))}
        >
          <Menu className="size-6" />
        </Button>
      </div>

      {/* Mobile & Tablet menu drawer */}
      <Sheet open={mobileMenuOpen} onOpenChange={(open) => dispatch(setMobileMenuOpen(open))}>
        <SheetContent side="right" className="w-[85vw] max-w-sm overflow-y-auto p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <nav className="flex flex-col gap-1 p-6 pt-12">
            <NavLinkItem href="/" active={isActive("/")} onClick={closeMobile}>
              <span className="block py-2">Home</span>
            </NavLinkItem>
            <NavLinkItem href="/about" active={isActive("/about")} onClick={closeMobile}>
              <span className="block py-2">About Us</span>
            </NavLinkItem>

            <Accordion>
              <AccordionItem value="products" className="border-none">
                <AccordionTrigger className="py-2 text-sm font-medium text-brand-ink hover:no-underline">
                  Our Products
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1 pl-3">
                    <span className="py-1 text-xs font-semibold uppercase text-brand-muted">
                      {sprayDried.label}
                    </span>
                    {sprayDried.children?.map((child) => (
                      <NavLinkItem
                        key={child.href}
                        href={child.href}
                        active={isActive(child.href)}
                        onClick={closeMobile}
                      >
                        <span className="block py-1.5 pl-3">{child.label}</span>
                      </NavLinkItem>
                    ))}
                    {otherProductLinks.map((link) => (
                      <NavLinkItem
                        key={link.href}
                        href={link.href}
                        active={isActive(link.href)}
                        onClick={closeMobile}
                      >
                        <span className="block py-1.5">{link.label}</span>
                      </NavLinkItem>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <NavLinkItem href="/application" active={isActive("/application")} onClick={closeMobile}>
              <span className="block py-2">Application</span>
            </NavLinkItem>
            <NavLinkItem href="/blog" active={isBlogActive} onClick={closeMobile}>
              <span className="block py-2">Blog</span>
            </NavLinkItem>
            <NavLinkItem href="/brochure" active={isActive("/brochure")} onClick={closeMobile}>
              <span className="block py-2">Download Brochure</span>
            </NavLinkItem>
            <NavLinkItem href="/contact" active={isActive("/contact")} onClick={closeMobile}>
              <span className="block py-2">Contact us</span>
            </NavLinkItem>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
