"use client"

import CoOrganizationLogos from "@/components/Co-OrganiztionLogo"
import Hero from "@/components/Hero"
import Welcome from "@/components/Welcome"
import { FeaturesXX } from "@/components/Feature"
import { UpComingConf } from "@/components/UpComingConf"
import { Why } from "@/components/Why"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq"
import { CTACarousel } from "@/components/Cta-carousel"
import { FlagAnimation } from "@/components/Flaganimation"

const DEMO_FAQS = [
  {
    question: "What services does Zep Research offer?",
    answer:
      "Zep Research provides a wide range of academic support services, including organizing conferences and webinars, managing peer reviews, facilitating journal and publication submissions, promoting events, assisting with manuscript preparation, securing research grants, and offering training workshops and networking opportunities to foster academic collaboration.",
  },
  {
    question: "How does Zep Research support academic publishing?",
    answer:
      "We offer comprehensive support for academic publishing, from manuscript preparation to peer review management. Our platform connects researchers with reputable journals and provides opportunities to publish across various disciplines, ensuring high visibility and contributing to the global exchange of scholarly knowledge",
  },
  {
    question: "Can Zep Research help with securing research grants?",
    answer:
      "Yes, Zep Research offers assistance in navigating the research grants process. Our team provides guidance on identifying funding opportunities, preparing proposals, and ensuring compliance with grant requirements, giving researchers the best chance of securing financial support for their projects.",
  },
  {
    question: "What networking opportunities are available through Zep Research?",
    answer:
      "Zep Research fosters global collaboration by organizing events that connect academics, researchers, and professionals. Our conferences, webinars, and networking sessions provide a platform for exchanging ideas, forming partnerships, and advancing research, creating opportunities for meaningful, long-term collaborations.",
  },
  {
    question: "What types of training does Zep Research provide?",
    answer:
      "We offer specialized research training and workshops designed to enhance skills in academic writing, research methodologies, and publication processes. Our training programs are tailored to meet the needs of researchers at all levels, ensuring participants can improve their work and professional development.",
  },
  {
    question: "How does Zep Research promote academic events?",
    answer:
      "Zep Research uses strategic promotion and marketing techniques to enhance the visibility of academic conferences and webinars. From social media campaigns to targeted outreach, we ensure your event reaches a broad audience, maximizing participation and impact within the academic community.",
  },
  {
    question: "What makes Zep Research's virtual event solutions stand out?",
    answer:
      "Zep Research offers the best virtual conference platforms, allowing for seamless virtual event management and ensuring high attendee engagement. From conference registration to post-event follow-up, we provide everything needed to deliver a successful online academic event. Our platforms are ideal for hosting interactive sessions, workshops, and large-scale virtual conferences globally",
  },
  {
    question: "How does Zep Research handle conference paper submission for events?",
    answer:
      "Zep Research simplifies the conference paper submission process through an easy-to-use system integrated into our conference planner platform. This system enables researchers to submit their work for peer review and publication in conjunction with our global conferences and virtual event solutions, ensuring high visibility and academic recognition.",
  },
]

const slides = [
  // {
  //   id: 1,
  //   image: "/Cta/chatbot.webp",
  //   title: "AI Research Chatbot – Chat with Your PDFs",
  //   description:
  //     "Upload research papers and chat with your documents. Get instant insights and summaries with AI-powered assistance!",
  //   href: "/ResearchChatbot",
  // },
  {
    id: 2,
    image: "/Cta/course.webp",
    title: "Master Data Analytics & Data Science",
    description:
      "Learn from industry experts and build your career in AI and data science. Enroll now and start your journey!",
    href: "/courses",
  },
]

export default function Home() {

  return (
    <main>
      <Hero />
      <FlagAnimation/>
      <CoOrganizationLogos />
      <Welcome />
      <FeaturesXX />
      <CTACarousel slides={slides} showControls={true} />
      <UpComingConf />
      <Why />
      <Testimonials />
      <FaqSection
        title="Frequently Asked Questions"
        description="Everything you need to know about our platform"
        items={DEMO_FAQS}
        contactInfo={{
          title: "Still have questions?",
          description: "We're here to help you",
          buttonText: "Contact Support",
          contactPath: "/contact",
        }}
      />
    </main>
  )
}

