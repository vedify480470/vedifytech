import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Vedify's privacy policy covering data collection, use, and your rights.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly to us, such as your name, email address, phone number, and any details you share through our contact form. We also automatically collect certain technical information, including IP address, browser type, and pages visited, through standard analytics tools.",
  },
  {
    title: "How We Use Information",
    body: "We use the information we collect to respond to inquiries, provide and improve our services, communicate with you about your project, and comply with legal obligations.",
  },
  {
    title: "Cookies",
    body: "We use cookies and similar technologies to remember your preferences, understand how visitors use our site, and improve your experience. You can control cookies through your browser settings.",
  },
  {
    title: "Third-Party Services",
    body: "We may use third-party service providers to help operate our website and deliver our services, such as analytics and hosting providers. These providers have access to your information only to perform tasks on our behalf.",
  },
  {
    title: "Data Security",
    body: "We implement reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    title: "Your Rights",
    body: "Depending on your location, you may have the right to access, correct, or delete your personal information, or to object to or restrict certain processing. To exercise these rights, contact us at info@vedifytech.com.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this privacy policy from time to time. We will post any changes on this page and update the effective date below.",
  },
  {
    title: "Contact Us",
    body: "If you have questions about this privacy policy, please contact us at info@vedifytech.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Effective date: January 1, 2026</p>

        <div className="mt-10 flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-2 text-muted-foreground">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
