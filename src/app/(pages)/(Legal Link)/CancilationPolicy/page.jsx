
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Canilation-Policy | International Journal Publication and Conference",
  description: "Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI.",
  keywords: [
    "research journal",
    "international publication",
    "academic conference",
    "data science courses"
  ],
  openGraph: {
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    type: "website",
    url: "https://zepresearch.com/CancilationPolicy",
    images: ["/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://zepresearch.com/CancilationPolicy"
  }
};

export default function CancellationPolicy() {
  const cancellationSections = [
    {
      title: "Conference Registration Cancellations",
      content:
        "You may cancel your conference registration up to 30 days before the event date for a full refund, minus a 10% administrative fee. Cancellations made between 30 and 7 days before the event will receive a 50% refund. No refunds will be issued for cancellations made within 7 days of the event or after the event has started. However, you may transfer your registration to another person at no additional cost.",
    },
    {
      title: "Research Initiative Cancellations",
      content:
        "If you need to cancel your participation in a research initiative, please notify us in writing as soon as possible. Cancellations made before the project kick-off will receive a full refund, minus a 15% administrative fee. After the project has begun, refunds will be prorated based on the work completed and resources allocated. No refunds will be issued after 50% of the project timeline has elapsed.",
    },
    {
      title: "Collaboration Opportunity Cancellations",
      content:
        "Cancellations for collaboration opportunities must be made in writing. If you cancel before any work has begun, you will receive a full refund minus a 20% administrative fee. Once the collaboration has started, cancellations will be handled on a case-by-case basis, considering the resources committed and work completed. In some cases, you may be offered credit for future services instead of a refund.",
    },
    {
      title: "Publication Submission Cancellations",
      content:
        "You may withdraw your submission for publication at any time. If you withdraw before the review process begins, you will receive a full refund of any fees paid, minus a 10% processing fee. Once the review process has started, no refunds will be issued for withdrawn submissions.",
    },
    {
      title: "Membership Cancellations",
      content:
        "Annual memberships can be cancelled within 14 days of purchase for a full refund, provided no member benefits have been used. After 14 days, or if member benefits have been used, memberships are non-refundable but will remain active until the end of the current membership period.",
    },
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-24">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800">
            Cancellation Policy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            At Zep Research, we understand that plans can change. This cancellation
            policy outlines the terms and conditions for cancelling various services
            we offer. Please review this policy carefully before making any
            commitments.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {cancellationSections.map((section, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-semibold text-foreground">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    {section.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Alert className="mt-8">
            <AlertTitle className="text-xl">How to Cancel a Service</AlertTitle>
            <AlertDescription>
              To cancel a service, please contact our support team at{" "}
              <a
                href="mailto:info@zepresearch.com"
                className="underline hover:text-blue-900"
              >
                info@zepresearch.com
              </a>{" "}
              or call us at +91 7358737843. Please provide your order number, the
              service you wish to cancel, and the reason for cancellation. We will
              process your request and respond within 2-3 business days.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive" className="mt-6">
            <AlertTitle className="text-xl">Force Majeure</AlertTitle>
            <AlertDescription>
              In the event of cancellation due to circumstances beyond our control
              (such as natural disasters, pandemics, or government actions), Zep
              Research reserves the right to offer alternatives to refunds, such as
              rescheduling events or providing credit for future services.
            </AlertDescription>
          </Alert>

          <span className="mt-6 text-sm text-muted-foreground text-center">
            This cancellation policy is subject to change. Any modifications will be
            effective immediately upon posting the updated policy on our website.
          </span>
            <Badge variant="outline" className="ml-2">
              Last updated: {new Date().toLocaleDateString()}
            </Badge>
        </CardContent>
      </Card>
    </div>
  );
}