"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, MapPin, Mail, Phone, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/nav";
import { services } from "@/data/services";
import { siteInfo } from "@/data/site";
import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  InstagramIcon,
} from "@/components/shared/social-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const socialIcons = [FacebookIcon, TwitterIcon, PinterestIcon, InstagramIcon];

function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="flex items-center">
      <span
        className={cn(
          "flex items-center rounded-lg px-2 py-1.5",
          onDark && "bg-white"
        )}
      >
        <Image
          src="/images/vedify-solution-logo.png"
          alt={siteInfo.name}
          width={1600}
          height={592}
          priority
          className="h-11 w-auto object-contain sm:h-12"
        />
      </span>
    </Link>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mobileNav = (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className={cn(
              isScrolled
                ? "text-neutral-900 hover:bg-neutral-100"
                : "text-white hover:bg-white/10 hover:text-white"
            )}
          >
            <Menu className="size-5" />
          </Button>
        }
      />
      <SheetContent side="right" className="w-full sm:w-96 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{siteInfo.name}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4 pb-6">
          {navItems.map((item) => {
            const isActive = item.children
              ? item.children.some((c) => c.href === pathname)
              : pathname === item.href;
            return item.children ? (
              <div key={item.label} className="mb-2">
                <p className="px-2 py-2 text-sm font-semibold text-muted-foreground">
                  {item.label}
                </p>
                <div className="flex flex-col">
                  {item.children.map((child) => (
                    <SheetClose
                      key={child.href}
                      render={
                        <Link
                          href={child.href}
                          className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                        />
                      }
                    >
                      {child.label}
                    </SheetClose>
                  ))}
                </div>
              </div>
            ) : (
              <SheetClose
                key={item.href}
                render={
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-md px-2 py-2 text-sm font-medium hover:bg-muted",
                      isActive && "text-primary"
                    )}
                  />
                }
              >
                {item.label}
              </SheetClose>
            );
          })}
          <Button className="mt-4" render={<Link href="/contact" />}>
            Get Started
          </Button>

          <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
            {socialIcons.map((Icon, i) => (
              <a
                key={i}
                href={siteInfo.socials[i]?.href ?? "#"}
                aria-label={siteInfo.socials[i]?.label}
                className="flex size-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={cn(
          "hidden overflow-hidden border-b border-border bg-background transition-[max-height,opacity] duration-300 lg:block",
          isScrolled ? "max-h-0 border-transparent opacity-0" : "max-h-24 opacity-100"
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <div className="flex items-center divide-x divide-border">
            <div className="flex items-center gap-2 px-5 first:pl-0">
              <MapPin className="size-5 text-primary" />
              <div className="leading-tight">
                <p className="text-xs font-semibold">Address</p>
                <p className="text-xs text-muted-foreground">{siteInfo.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-5">
              <Mail className="size-5 text-primary" />
              <div className="leading-tight">
                <p className="text-xs font-semibold">E-mail</p>
                <p className="text-xs text-muted-foreground">{siteInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 pl-5">
              <Phone className="size-5 text-primary" />
              <div className="leading-tight">
                <p className="text-xs font-semibold">Phone</p>
                <p className="text-xs text-muted-foreground">{siteInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "transition-colors duration-300",
          isScrolled
            ? "border-b border-border bg-white text-neutral-900 shadow-sm"
            : "bg-gradient-to-r from-[#03228f] via-[#0b4fc4] to-[#0e73e4] text-white"
        )}
      >
        <div className="container mx-auto flex h-18 items-center justify-between px-4 sm:px-6 lg:hidden">
          <Logo onDark={!isScrolled} />
          {mobileNav}
        </div>

        <div className="container mx-auto hidden h-18 items-center justify-between gap-6 px-4 sm:px-6 lg:flex lg:px-8">
          {isScrolled && <Logo />}

          <NavigationMenu className={cn(isScrolled && "ml-auto mr-6")}>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => {
                const isActive = item.children
                  ? item.children.some((c) => c.href === pathname)
                  : pathname === item.href;
                const linkColor = isScrolled
                  ? isActive
                    ? "text-primary"
                    : "text-neutral-900 hover:text-primary"
                  : "text-white hover:text-white";
                return item.children ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger
                      className={cn(
                        "bg-transparent hover:bg-white/10 focus:bg-white/10 data-open:bg-white/10 data-open:hover:bg-white/10 data-open:focus:bg-white/10 data-popup-open:bg-white/10 data-popup-open:hover:bg-white/10",
                        linkColor,
                        isScrolled &&
                          "hover:bg-neutral-100 focus:bg-neutral-100 data-open:bg-neutral-100 data-open:hover:bg-neutral-100 data-open:focus:bg-neutral-100 data-popup-open:bg-neutral-100 data-popup-open:hover:bg-neutral-100"
                      )}
                    >
                      {item.label}
                      <Plus className="ml-1 size-3" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[520px] grid-cols-2 gap-1 p-2">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <NavigationMenuLink
                              render={
                                <Link href={`/services/${service.slug}`} />
                              }
                              className="flex-col items-start gap-1"
                            >
                              <div className="flex items-center gap-2 font-medium">
                                <service.icon className="size-4 text-primary" />
                                {service.title}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {service.shortDescription}
                              </p>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink
                      render={<Link href={item.href} />}
                      className={cn(
                        "bg-transparent px-4 py-2 text-sm font-medium hover:bg-white/10 focus:bg-white/10 data-active:bg-transparent data-active:hover:bg-white/10 data-active:focus:bg-white/10",
                        linkColor,
                        isScrolled &&
                          "hover:bg-neutral-100 focus:bg-neutral-100 data-active:hover:bg-neutral-100 data-active:focus:bg-neutral-100"
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex shrink-0 items-center gap-4">
            <div className="flex items-center gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href={siteInfo.socials[i]?.href ?? "#"}
                  aria-label={siteInfo.socials[i]?.label}
                  className={cn(
                    "transition",
                    isScrolled
                      ? "text-neutral-700 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
