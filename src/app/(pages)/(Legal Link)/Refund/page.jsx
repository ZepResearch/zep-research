
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const metadata = {
  title: "Refund | International Journal Publication and Conference",
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
    url: "https://zepresearch.com/Refund",
    images: ["/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://zepresearch.com/Refund"
  }
};


export default function Refund() {
  const refundSections = [
    {
      title: "Conference Registration Refunds",
      content:
        "Refunds for conference registrations are available up to 30 days before the event date. A 15% administrative fee will be deducted from the refund amount. Within 30 days of the event, we offer a 50% refund. No refunds are available within 7 days of the event or after the event has started.",
    },
    {
      title: "Research Initiative Participation",
      content:
        "For research initiatives, refunds are processed on a case-by-case basis. If you need to withdraw from a research initiative, please contact our support team immediately. Refunds may be prorated based on the work completed and resources allocated.",
    },
    {
      title: "Collaboration Opportunity Fees",
      content:
        "Fees paid for collaboration opportunities are generally non-refundable once the collaboration has been initiated. In exceptional circumstances, we may offer partial refunds or credits for future services. Please reach out to our team to discuss your specific situation.",
    },
    {
      title: "Publication and Processing Fees",
      content:
        "Publication and processing fees are non-refundable once the review process has begun. If you withdraw your submission before the review process starts, we will refund the full amount minus a 10% administrative fee.",
    },
    {
      title: "Membership Fees",
      content:
        "Annual membership fees are non-refundable. However, if you cancel your membership within 14 days of purchase and have not used any member benefits, we will provide a full refund.",
    },
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-24">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800">
            Refund Policy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            At Zep Research, we strive to provide high-quality services and ensure
            customer satisfaction. We understand that circumstances may arise where
            you need to request a refund. Please review our refund policy below for
            different types of services we offer.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {refundSections.map((section, index) => (
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
            <AlertTitle className="text-xl">How to Request a Refund</AlertTitle>
            <AlertDescription>
              To request a refund, please contact our support team at{" "}
              <a
                href="mailto:info@zepresearch.com"
                className="underline hover:text-blue-900"
              >
                info@zepresearch.com
              </a>{" "}
              or call us at +(91) 7358737843. Please provide your order number, the
              service you purchased, and the reason for your refund request. We will
              review your request and get back to you within 2-3 business days.
            </AlertDescription>
          </Alert>

          <p className="mt-6 text-sm text-muted-foreground text-center">
            This refund policy is subject to change. Any modifications will be
            effective immediately upon posting the updated policy on our website.
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}