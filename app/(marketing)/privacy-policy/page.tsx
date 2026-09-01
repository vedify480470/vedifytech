import type { Metadata } from "next";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Vedify's privacy policy covering data collection, use, and your rights.",
};

const intro =
  "This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.";

const sections = [
  {
    title:
      "What personal information do we collect from the people that visit our blog, website or app?",
    paragraphs: [
      "When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, phone number or other details to help you with your experience.",
    ],
  },
  {
    title: "When do we collect information?",
    paragraphs: [
      "We collect information from you when you place an order, subscribe to a newsletter, fill out a form or enter information on our site.",
    ],
  },
  {
    title: "How do we use your information?",
    paragraphs: [
      "We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:",
    ],
    list: [
      "To allow us to better service you in responding to your customer service requests.",
      "To follow up with them after correspondence (live chat, email or phone inquiries).",
    ],
  },
  {
    title: "How do we protect your information?",
    paragraphs: [
      "We do not use vulnerability scanning and/or scanning to PCI standards. We only provide articles and information. We never ask for credit card numbers. We use regular Malware Scanning.",
      "Your personal information is contained in secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.",
      "We implement a variety of security measures when a user places an order, enters, submits, or accesses their information to maintain the safety of your personal information.",
      "All transactions are processed through a gateway provider and are not stored or processed on our servers.",
    ],
  },
  {
    title: "Do we use 'cookies'?",
    paragraphs: [
      "Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.",
      "We use cookies to:",
    ],
    list: ["Help remember and process the items in the shopping cart."],
    footer: [
      "You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since the browser is a little different, look at your browser's Help menu to learn the correct way to modify your cookies.",
      "If you turn cookies off, some of the features that make your site experience more efficient may not function properly.",
    ],
  },
  {
    title: "Third-party disclosure",
    paragraphs: [
      "We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.",
    ],
  },
  {
    title: "Third-party links",
    paragraphs: [
      "We do not include or offer third-party products or services on our website.",
    ],
  },
  {
    title: "Google",
    paragraphs: [
      "We have not enabled Google AdSense on our site but we may do so in the future.",
    ],
  },
  {
    title: "California Online Privacy Protection Act (CalOPPA)",
    paragraphs: [
      "CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared.",
      "According to CalOPPA, we agree to the following:",
    ],
    list: [
      "Users can visit our site anonymously.",
      "Once this privacy policy is created, we will add a link to it on our homepage or as a minimum, on the first significant page after entering our website.",
      "Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.",
      "You will be notified of any Privacy Policy changes on our Privacy Policy page.",
      "You can change your personal information by emailing us or by logging in to your account.",
    ],
  },
  {
    title: "How does our site handle Do Not Track signals?",
    paragraphs: [
      "We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.",
    ],
  },
  {
    title: "Does our site allow third-party behavioral tracking?",
    paragraphs: [
      "It's also important to note that we do not allow third-party behavioral tracking.",
    ],
  },
  {
    title: "COPPA (Children Online Privacy Protection Act)",
    paragraphs: [
      "When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.",
      "We do not specifically market to children under the age of 13 years old, and we do not let third parties, including ad networks or plug-ins, collect PII from children under 13.",
    ],
  },
  {
    title: "Fair Information Practices",
    paragraphs: [
      "The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.",
      "In order to be in line with Fair Information Practices, we will take the following responsive action should a data breach occur: we will notify you via email within 1 business day.",
      "We also agree to the Individual Redress Principle, which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.",
    ],
  },
  {
    title: "CAN-SPAM Act",
    paragraphs: [
      "The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.",
      "We collect your email address in order to:",
    ],
    list: [
      "Send information, respond to inquiries, and/or other requests or questions.",
    ],
    footer: [
      "To be in accordance with CAN-SPAM, we agree to the following: if at any time you would like to unsubscribe from receiving future emails, you can email us and we will promptly remove you from ALL correspondence.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Effective date: January 1, 2026</p>
        <p className="mt-6 text-muted-foreground">{intro}</p>

        <div className="mt-10 flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <div className="mt-2 flex flex-col gap-3 text-muted-foreground">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {section.list && (
                  <ul className="flex list-disc flex-col gap-2 pl-5">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.footer?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p className="mt-2 text-muted-foreground">
              If there are any questions regarding this privacy policy, you
              may contact us using the information below.
            </p>
            <ul className="mt-4 flex flex-col gap-1 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">URL:</span>{" "}
                https://vedifytech.com
              </li>
              <li>
                <span className="font-semibold text-foreground">Address:</span>{" "}
                {siteInfo.address}
              </li>
              <li>
                <span className="font-semibold text-foreground">Email:</span>{" "}
                {siteInfo.email}
              </li>
              <li>
                <span className="font-semibold text-foreground">Mob:</span>{" "}
                {siteInfo.phone}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
