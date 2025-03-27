import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "@/components/Navbar"
import Footer from "@/components/Footer";
import { Book, GalleryHorizontal, GraduationCap, GroupIcon, NotepadText, ScrollText, StarHalf, Sunset, Tickets, Trees, UserRound, UserRoundIcon, UsersRound, Zap } from "lucide-react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { IconPodium } from "@tabler/icons-react";
import { FaRegObjectGroup, FaRobot } from "react-icons/fa";
import { Toaster } from "@/components/ui/toaster";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zep Research | International Journal Publication and Conference | Data and AI Courses",
  description: "Zep Research is a platform for researchers, scientists, and academics to collaborate, share knowledge, and learn from each other.",
};
const demoData = {
  logo: {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Shadcnblocks.com",
  },
  menu: [
    {
      title: "About",
      url: "/About",
    },
    {
      title: "Services",
      url: "#",
      items: [
        {
          title: "Manuscript Preparation",
          description: "The latest industry news, updates, and info",
          icon: <ScrollText className="size-5 shrink-0" />,
          url: "/manuscript-preparation",
        },
        {
          title: "Research Training & Workshops",
          description: "Our mission is to innovate and empower the world",
          icon: <FaRegObjectGroup className="size-5 shrink-0" />,
          url: "/research-training-workshops",
        },
        {
          title: "Event Promotion & Marketing",
          description: "Browse job listing and discover our workspace",
          icon: <Tickets className="size-5 shrink-0" />,
          url: "/event-promotion-marketing",
        },
        {
          title: "Journals & Publications",
          description:
            "Get in touch with our support team or visit our community forums",
          icon: <NotepadText className="size-5 shrink-0" />,
          url: "/journals",
        },
        {
          title: "Conferences & Webinars",
          description: "Get all the answers you need right here",
          icon: <IconPodium className="size-5 shrink-0" />,
          url: "/conferences-webinars",
        },
        {
          title: "Peer Review Management",
          description: "We are here to help you with any questions you have",
          icon: <StarHalf className="size-5 shrink-0" />,
          url: "/peer-review-management",
        },
        {
          title: "Networking & Collaboration",
          description: "Check the current status of our services and APIs",
          icon: <UsersRound className="size-5 shrink-0" />,
          url: "/networking-collaboration",
        },
        {
          title: "Online Courses",
          description: "Our terms and conditions for using our services",
          icon: <GraduationCap className="size-5 shrink-0" />,
          url: "/online-courses",
        },
      ],
    },
    {
      title: "Resources & Event",
      url: "#",
      items: [
        {
          title: "Gallery",
          description: "Explore a collection of images and media showcasing our work.",
          icon: <PhotoIcon className="size-5 shrink-0" />,
          url: "/Gallery",
        },
        {
          title: "Courses",
          description: "Access a variety of educational courses to enhance your knowledge.",
          icon: <GraduationCap className="size-5 shrink-0" />,
          url: "/courses",
        },
        {
          title: "Conference",
          description: "Stay informed about our upcoming conferences and events.",
          icon: <IconPodium className="size-5 shrink-0" />,
          url: "/conference",
        },
        {
          title: "ChatBot",
          description: "Interact with our AI-powered chatbot for assistance and support.",
          icon: <FaRobot className="size-5 shrink-0" />,
          url: "/ResearchChatbot",
        },
      ],
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
  mobileExtraLinks: [
    { name: "Press", url: "/press" },
    { name: "Contact", url: "/contact" },
    { name: "Imprint", url: "/imprint" },
    { name: "Sitemap", url: "/sitemap" },
  ],
  auth: {
    login: { text: "Log in", url: "/login" },
    signup: { text: "Sign up", url: "/signup" },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar1 {...demoData} />
        {children}
        <Footer/>
        <Toaster /> 
      </body>
    </html>
  );  
}


