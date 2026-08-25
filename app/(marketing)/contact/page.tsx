import type { Metadata } from "next";
import { Home, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/shared/page-hero";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Vedify team to discuss your project.",
};

const contactDetails = [
  { icon: Home, label: "Email:", value: siteInfo.email },
  { icon: Phone, label: "Phone:", value: siteInfo.phone },
  { icon: MapPin, label: "Address:", value: siteInfo.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" image="/images/contact.jpg" />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr]">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#03228f] to-[#5b8def] px-8 py-12 text-white">
              <span className="text-xs font-semibold tracking-widest text-white/70">
                LET&apos;S TALK
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight">
                Speak With Expert Engineers.
              </h2>

              <div className="mt-10 flex flex-col gap-6">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white">
                      <item.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-white/80">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Get In Touch
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Fill The Form Below
              </h2>

              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[420px] w-full">
        <iframe
          title="Office location"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(siteInfo.address)}&output=embed`}
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0"
        />
      </div>
    </>
  );
}
