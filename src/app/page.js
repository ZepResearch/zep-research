
import CoOrganizationLogos from "@/components/Co-OrganiztionLogo";
import Hero from "@/components/Hero";

import Welcome from "@/components/Welcome";
import { Book, Sunset, Trees, Zap } from "lucide-react";

import { Navbar1 } from "@/components/Navbar"
import { FeaturesXX } from "@/components/Feature";
import { UpComingConf } from "@/components/UpComingConf";
import { Why } from "@/components/Why";
import { Testimonials } from "@/components/testimonials";
import { FaqSection } from "@/components/faq";


const DEMO_FAQS = [
  {
    question: "What types of conferences does Zep Research organize?",
    answer: "Zep Research organizes a diverse range of academic and industry conferences across multiple disciplines including tourism, hospitality, education, sustainability, and technology. Our events are designed to foster meaningful exchange of ideas and facilitate collaboration between researchers, academics, and industry professionals.",
  },
  {
    question: "How can I participate in a Zep Research conference?",
    answer: "Researchers can participate by submitting papers for presentation, attending as delegates, joining panel discussions, or exhibiting innovative work. We have various participation options to suit different academic and professional needs, with clear submission guidelines available on our website.",
  },
  {
    question: "What benefits do researchers gain from Zep Research initiatives?",
    answer: "Researchers benefit through increased visibility for their work, networking opportunities with global experts, potential collaboration prospects, publication opportunities in respected journals, and access to cutting-edge insights across various fields. Our platform serves as a bridge between academic research and practical industry applications.",
  },
  {
    question: "Does Zep Research offer any publication opportunities?",
    answer: "Yes, Zep Research facilitates publication opportunities through partnerships with reputable academic journals and our own conference proceedings. Selected high-quality research papers presented at our conferences are often considered for publication in special issues of partner journals.",
  },
  {
    question: "How does Zep Research ensure quality in its academic initiatives?",
    answer: "We maintain rigorous quality standards through blind peer-review processes, distinguished academic committees, strict selection criteria for presentations, and continuous feedback mechanisms. Our editorial boards consist of respected experts who ensure all published and presented work meets international academic standards.",
  },
];
export default function Home() {
  return (
  <main>
    <Hero/>
    <CoOrganizationLogos/>
    <Welcome/>
    <FeaturesXX/>
    <UpComingConf/>
    <Why/>
    <Testimonials/>
    <FaqSection
     title="Frequently Asked Questions"
     description="Everything you need to know about our platform"
     items={DEMO_FAQS}
     contactInfo={{
       title: "Still have questions?",
       description: "We're here to help you",
       buttonText: "Contact Support",
       contactPath: "/contact" // Replace with function with a path
      }}
    />
      </main>
  );
}
