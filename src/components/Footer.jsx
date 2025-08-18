


"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"
import logox from "../assets/logo.svg"
import Image from "next/image"
function FloatingPaths({ position }) {
  // Increased number of paths and made them more visible
  const paths = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.8 + i * 0.05,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Footer Background</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={`rgba(6, 182, 212, ${0.3 + path.id * 0.03})`} // Cyan color with varying opacity
            strokeWidth={path.width}
            initial={{ pathLength: 0.3, opacity: 0.7 }}
            animate={{
              pathLength: 1,
              opacity: [0.5, 0.8, 0.5],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function Footer() {
  const footerLinks = [
    {
      title: "Services",
      items: [
        { name: "Manuscript Preparation", href: "/manuscript-preparation" },
        {
          name: "Research Training & Workshops",
          href: "/research-training-workshops",
        },
        { name: "Event Promotion & Marketing", href: "/event-promotion-marketing" },
        // { name: "Journals & Publications", href: "/Journals&Publications" },
        { name: "Conferences & Webinars", href: "/conferences-webinars" },
        { name: "Peer Review Management", href: "/peer-review-management" },
        { name: "Networking & Collaboration", href: "/networking-collaboration" },
        { name: "Online Courses", href: "/online-courses" },
      ],
    },
    {
      title: "Resources & Event",
      items: [
        { name: "Courses", href: "/courses" },
        { name: "Conference", href: "/conference" },
      ],
    },
    {
      title: "Quick Links",
      items: [
        { name: "AboutUs", href: "/About" },
        { name: "Blogs", href: "/blog" },
        { name: "Gallery", href: "/Gallery" },
        { name: "ContactUs", href: "/contact" },
      ],
    },
    {
      title: "Legal Links",
      items: [
        { name: "Terms and Condition", href: "/TermsAndCondition" },
        { name: "Refund Policy", href: "/Refund" },
        { name: "Cancellation Policy", href: "/CancilationPolicy" },
        { name: "Privacy Policy", href: "/PrivacyPolicy" },
      ],
    },
  ]

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/profile.php?id=61561809783777",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/zepresearch/",
    },
    { icon: <FaTwitter />, href: "https://x.com/Zepresearch" },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/company/zep-research/",
    },
    { icon: <FaYoutube />, href: "https://youtube.com" },
  ]

  return (
    <footer className=" z-10 w-full bg-gradient-to-b from-white to-cyan-50 dark:from-neutral-950 dark:to-cyan-950 overflow-hidden pt-16 pb-8 drop-shadow-2xl ">
      {/* Animated background - no longer using opacity to make it more visible */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Footer content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Logo and description */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              {/* <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200">
                ZEP Research
              </h2> */}
              <Image src={logox || "/placeholder.svg"} className=" mb-4 w-3/4" alt="logo" />
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4 max-w-xs">
                Empowering researchers with comprehensive services and resources for academic excellence.
              </p>
              {/* Contact Information */}
              <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-1 w-12 text-cyan-600 dark:text-cyan-400" />
                  <span>DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024 India</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-2 text-cyan-600 dark:text-cyan-400" />
                  <span>+91 78488 54815 </span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-cyan-600 dark:text-cyan-400" />
                  <a
                    href="mailto:info@zepresearch.com"
                    className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                  >
                    info@zepresearch.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <div key={section.title} className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-cyan-300">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-neutral-700 hover:text-cyan-600 dark:text-neutral-300 dark:hover:text-cyan-300 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Social links and copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cyan-100 dark:border-cyan-900"
        >
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-900 dark:hover:bg-cyan-800 text-cyan-600 dark:text-cyan-300 transition-colors"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            © {new Date().getFullYear()} ZEP Research. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
