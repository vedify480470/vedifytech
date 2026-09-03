import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { services } from "@/data/services";
import { siteInfo } from "@/data/site";
import {
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/shared/social-icons";

const legalLinks = [
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const socialIcons = [FacebookIcon, TwitterIcon, PinterestIcon, InstagramIcon, YoutubeIcon];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#eef3fc]">
      <Image
        src="/images/footer-bg.png"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="container relative mx-auto px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/vedify-solution-logo.png"
                alt="Vedify"
                width={1600}
                height={592}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Vedify Solutions is a professional software and digital
              business marketing organisation delivering integrated
              technology and growth solutions across industries.
            </p>
            <div className="mt-5 flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href={siteInfo.socials[i]?.href ?? "#"}
                  aria-label={siteInfo.socials[i]?.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Our Services</h3>
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
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-black/10 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 All Rights Reserved.</p>
          <p>Developed By Vedify</p>
        </div>
      </div>
    </footer>
  );
}
