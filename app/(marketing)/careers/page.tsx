import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open positions at Vedify. Join our team.",
};

const openings = [
  { title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Backend Engineer (Node.js)", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer", department: "Design", location: "Remote", type: "Full-time" },
  { title: "Mobile Engineer (Flutter)", department: "Engineering", location: "Remote", type: "Contract" },
  { title: "Project Manager", department: "Delivery", location: "Remote", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Careers"
            title="Help us build great software"
            description="We're a small, senior team that values craft, autonomy, and honest communication. If that sounds like you, we'd love to talk."
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Open Roles" title="Current openings" align="left" />
          <div className="mt-10 flex flex-col gap-4">
            {openings.map((job) => (
              <Card key={job.title}>
                <CardContent className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="secondary">{job.department}</Badge>
                      <Badge variant="outline">{job.location}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </div>
                  <Button render={<a href="mailto:careers@vedify.com" />}>
                    Apply
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
