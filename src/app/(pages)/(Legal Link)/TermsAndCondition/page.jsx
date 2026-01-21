
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  title: "Terms & Condition | International Journal Publication and Conference",
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
    url: "https://zepresearch.com/TermsAndCondition",
    images: ["/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://zepresearch.com/TermsAndCondition"
  }
};


export default function TermsAndConditions() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By using our website or services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you do not agree, please discontinue use immediately.",
    },
    {
      title: "Use of Our Services",
      content:
        "Eligibility: You must be at least 18 years old to use our services.\nPermitted Use: Our platform is intended for academic and research-related purposes. Any unauthorized, illegal, or harmful use is strictly prohibited.\nAccount Security: You are responsible for maintaining the confidentiality of your account credentials. Notify us immediately if you suspect unauthorized access.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on this website, including text, graphics, logos, and software, is owned by Zep Research or its licensors and is protected by intellectual property laws.\nYou may not copy, modify, distribute, or use any content without prior written permission.",
    },
    {
      title: "User Content",
      content:
        "By submitting content (e.g., manuscripts, comments), you grant us the right to use, modify, and publish it for our services.\nYou are solely responsible for the accuracy and legality of the content you provide.",
    },
    {
      title: "Payments and Refunds",
      content:
        "Payments must be made as per the agreed schedule for services like conferences, journal submissions, or workshops.\nRefunds, if applicable, will be processed as per our refund policy, which will be communicated at the time of transaction.",
    },
    {
      title: "Cancellation and Termination",
      content:
        "User Cancellation: You may cancel your services at any time. Please refer to the cancellation terms specific to your service.\nTermination by Zep Research: We reserve the right to terminate accounts or deny access for any breach of these terms.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Zep Research is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.\nWhile we strive for accuracy, we do not guarantee the completeness or reliability of information on our platform.",
    },
    {
      title: "Privacy Policy",
      content:
        "Your personal information will be handled in accordance with our Privacy Policy. Please review it to understand how we collect, use, and protect your data.",
    },
    {
      title: "Third-Party Links",
      content:
        "Our website may contain links to third-party sites for additional resources. We are not responsible for their content or practices.",
    },
    {
      title: "Force Majeure",
      content:
        "We are not responsible for delays or failures caused by events beyond our control, such as natural disasters, strikes, or technical issues.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms are governed by the laws of India. Any disputes will be resolved in the courts of Bhubaneswar, Odisha.",
    },
    {
      title: "Changes to Terms",
      content:
        "We may update these Terms occasionally. Continued use of our platform signifies acceptance of the updated terms.",
    },
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-24">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800">
            Terms and Conditions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            Welcome to Zep Research! By accessing and using our platform, you agree
            to the following terms and conditions. Please read them carefully before
            engaging with our services.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {sections.map((section, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-semibold text-foreground">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {section.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">Phone: +91 78488 54815</p>
            <p className="text-muted-foreground">Email: info@zepresearch.com</p>
          </div>

          <p className="mt-6 text-sm text-muted-foreground text-center">
            By using Zep Research services, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and Conditions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}