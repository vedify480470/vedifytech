import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { services } from "@/data/services";
import { siteInfo } from "@/data/site";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import {
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  InstagramIcon,
} from "@/components/shared/social-icons";

const bottomLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const socialIcons = [FacebookIcon, TwitterIcon, PinterestIcon, InstagramIcon];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#eef3fc]">
      <Image
        src="/images/footer-bg.png"
        alt=""
        fill
        aria-hidden="true"
        className="object-cover object-center"
      />

      <div className="container relative mx-auto px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/vedify-new-logo.png"
                alt="Vedify"
                width={800}
                height={310}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              We design and build web, mobile, and custom software products
              that help businesses move faster.
            </p>
            <div className="mt-5 flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href={siteInfo.socials[i]?.href ?? "#"}
                  aria-label={siteInfo.socials[i]?.label}
                  className="flex size-9 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">IT Services</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Contact Info</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{siteInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" />
                <span>{siteInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" />
                <span>{siteInfo.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-primary" />
                <span>Opening Hours: {siteInfo.openingHours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="mt-5 text-sm text-muted-foreground">
              Subscribe to get the latest updates on our services, projects,
              and technology insights.
            </p>
            <div className="mt-5">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-black/10 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} All Rights Reserved. Developed By Vedify</p>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {bottomLinks.map((link, i) => (
              <li key={link.href} className="flex items-center gap-2">
                <Link href={link.href} className="hover:text-primary">
                  {link.label}
                </Link>
                {i < bottomLinks.length - 1 && (
                  <span className="size-1 rounded-full bg-primary" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
