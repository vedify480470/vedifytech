import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer regarding the information and purchases made on the Vedify Solutions website.",
};

const paragraphs = [
  "The information contained on this website is for commercial purposes only. The information provided here on the website is uploaded by Menace Vedify Solutions Services Pvt. Ltd. (“Vedify Solutions” hereinafter) and our endeavor is to have it up to date and correct. However, any reliance by anyone on such information is strictly at your own risk.",
  "In any event, if a purchase is made by anyone from Vedify Solutions, the only authorized place for making any such purchase is the Vedify Solutions site – https://vedifytech.com and nowhere else. No one else has been authorized by Vedify Solutions to sell any of its Services, Software, or Products. The customer is being provided the Apps, or Software for using as defined in the Agreement between the parties and not for re-selling it. All payments are to be made by the customer only into the bank account of Menace Vedify Solutions Services Pvt. Ltd. In case the customer makes the payment to anyone else or makes purchases from any other person(s), Vedify Solutions shall not be liable or responsible for the said unauthorized payments/purchases made by the customer.",
];

export default function DisclaimerPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Disclaimer</h1>
        <p className="mt-2 text-sm text-muted-foreground">Effective date: January 1, 2026</p>

        <div className="mt-6 flex flex-col gap-4 text-muted-foreground">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
