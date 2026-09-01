import type { Metadata } from "next";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Vedify Solutions' refund and delivery policy for website, design and web programming services.",
};

const sections = [
  {
    title: "Website / Web & Graphic Design",
    paragraphs: ["Delivery Time"],
    list: [
      "Full refund: In cases where the project has not been started or if the initial design style has not been approved. The full refund policy will initiate after receiving the upfront payment date and will take 180 days to refund the amount.",
      "Partial refund: If there is a failure to deliver as per our delivery policy after the approval of the initial design style. The partial refund will be in proportion to the work completed.",
      "No refunds: If the project has been completed and uploaded on the server.",
    ],
  },
  {
    title: "Logo Design / Brochure Design",
    paragraphs: [],
    list: [
      "Full refund: In cases where the project has not been started or if the initial design style has not been approved.",
      "Partial refund: If there is a failure to deliver as per our delivery policy after the approval of the initial design style. The partial refund will be in proportion to the work completed.",
      "No refunds: If the design has been started and the client has asked to make changes in any design.",
    ],
  },
  {
    title: "Web Programming",
    paragraphs: [
      "Full refund: If the project has not been initiated.",
      "There is an agreement for every web programming project. However, if there is no agreement and no clear discussion of the refund policy, the following delivery policy will hold true.",
      "A partial refund will be issued as per the judgment of the service provider if we fail to complete the project in accordance with the delivery policy and contract of agreement. The amount will be calculated by the company taking into account the proportion of the project completed and the proportion yet to be completed as per the pre-defined scope of the project.",
    ],
  },
  {
    title: "Applicability of the Delivery Policy",
    paragraphs: ["Note: Our delivery commitment is subject to the following:"],
    list: [
      "A project is not taken to be void unless the agreed-upon payments are clear.",
      "A refund policy is not applicable if the required information for the successful completion of the project is not given to us at the proper time. If there is a delay or failure in the completion of the project due to improper communication from the client, it cannot be attributed to the company.",
      "If the information provided by the client is incomplete and/or complete information regarding the project is not provided at the initiation of the project, the company is not liable to follow its delivery or refund commitments.",
      "There is no provision for compensation for the delay of delivery under any conditions, until and unless there is an agreement signed with a penalty clause for delay in delivery.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "The company's liability is bound by the value of the chunk of the project (as per our proposal) which remains incomplete at a given point in time. The company is not obligated for losses due to the services provided/not provided or the delay in the same at any point in time. The liability to refund holds only if the project has been cancelled by the client and such cancellation has been communicated to the company in writing.",
    ],
  },
  {
    title: "Processing of Refunds",
    paragraphs: [
      "Partial refunds will be processed and mailed within 180 business days of the date of cancellation, using the method of payment agreed upon at the beginning of the project, i.e. refund by cheque or refund by credit card.",
      "Full refunds will be processed and mailed within 50 business days of the date of cancellation, using the method of payment agreed upon at the beginning of the project, i.e. refund by cheque or refund by credit card.",
    ],
  },
  {
    title: "Changes",
    paragraphs: [
      "The company may at any time, without prior notice and under its sole discretion, amend this policy from time to time. You are therefore requested to review this policy periodically. Your continued use of the company website after any such amendments automatically implies your acceptance thereof.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Refund Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Effective date: January 1, 2026</p>

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
              </div>
            </div>
          ))}

          <div>
            <h2 className="text-xl font-semibold">Contacting Us Regarding Our Refund Policy</h2>
            <p className="mt-2 text-muted-foreground">
              If you have queries or suggestions regarding our refund
              policies, kindly email us at{" "}
              <a href={`mailto:${siteInfo.email}`} className="text-primary hover:underline">
                {siteInfo.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
