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
  // Updated paths with Indian flag color scheme
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

  // Indian flag colors with varying opacity
  const getIndianFlagColor = (index) => {
    const cycle = index % 3
    switch (cycle) {
      case 0: return `rgba(255, 153, 51, ${0.3 + index * 0.02})` // Saffron
      case 1: return `rgba(255, 255, 255, ${0.4 + index * 0.02})` // White
      case 2: return `rgba(19, 136, 8, ${0.3 + index * 0.02})` // Green
      default: return `rgba(255, 153, 51, ${0.3 + index * 0.02})`
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Footer Background</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={getIndianFlagColor(path.id)}
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
    <footer className="z-10 w-full bg-gradient-to-b from-white via-orange-50 to-green-50 dark:from-neutral-950 dark:via-orange-950/20 dark:to-green-950/20 overflow-hidden pt-16 pb-8 drop-shadow-2xl relative">
      {/* Indian flag inspired blur background overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-orange-400/40 to-orange-300/40 blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-r from-white/60 to-gray-100/60 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-r from-green-400/40 to-green-500/40 blur-3xl"></div>
      </div>

      {/* Additional subtle moving blur elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute w-96 h-96 bg-orange-300/50 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-green-400/50 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ bottom: "15%", right: "15%" }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-white/60 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ top: "40%", right: "20%" }}
        />
      </div>

      {/* Animated background paths */}
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
              <Image src={ "/zep_independence.png"} className="mb-1 drop-shadow-2xl" alt="logo" width={100} height={50} />
             <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-slate-300 to-green-600  mb-8">Zep Research</span> 

              
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4 max-w-xs">
                Empowering researchers with comprehensive services and resources for academic excellence.
              </p>
              {/* Contact Information */}
              <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-1 w-12 text-orange-600 dark:text-orange-400" />
                  <span>DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024 India</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-2 text-orange-600 dark:text-orange-400" />
                  <span>+91 78488 54815 </span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-green-600 dark:text-green-400" />
                  <a
                    href="mailto:info@zepresearch.com"
                    className="hover:text-green-600 dark:hover:text-green-300 transition-colors"
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
                <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-orange-300">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-neutral-700 hover:text-orange-600 dark:text-neutral-300 dark:hover:text-orange-300 transition-colors"
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
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-orange-100 dark:border-orange-900/50"
        >
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-orange-100 to-green-100 hover:from-orange-200 hover:to-green-200 dark:from-orange-900/50 dark:to-green-900/50 dark:hover:from-orange-800/50 dark:hover:to-green-800/50 text-orange-600 dark:text-orange-300 transition-all duration-300"
                whileHover={{ y: -3, scale: 1.1 }}
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


























// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa"
// import logox from "../assets/logo.svg"
// import Image from "next/image"
// function FloatingPaths({ position }) {
//   // Increased number of paths and made them more visible
//   const paths = Array.from({ length: 20 }, (_, i) => ({
//     id: i,
//     d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
//       380 - i * 5 * position
//     } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
//       152 - i * 5 * position
//     } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
//       684 - i * 5 * position
//     } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
//     width: 0.8 + i * 0.05,
//   }))

//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
//         <title>Footer Background</title>
//         {paths.map((path) => (
//           <motion.path
//             key={path.id}
//             d={path.d}
//             stroke={`rgba(6, 182, 212, ${0.3 + path.id * 0.03})`} // Cyan color with varying opacity
//             strokeWidth={path.width}
//             initial={{ pathLength: 0.3, opacity: 0.7 }}
//             animate={{
//               pathLength: 1,
//               opacity: [0.5, 0.8, 0.5],
//               pathOffset: [0, 1, 0],
//             }}
//             transition={{
//               duration: 15 + Math.random() * 10,
//               repeat: Number.POSITIVE_INFINITY,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </svg>
//     </div>
//   )
// }

// export default function Footer() {
//   const footerLinks = [
//     {
//       title: "Services",
//       items: [
//         { name: "Manuscript Preparation", href: "/manuscript-preparation" },
//         {
//           name: "Research Training & Workshops",
//           href: "/research-training-workshops",
//         },
//         { name: "Event Promotion & Marketing", href: "/event-promotion-marketing" },
//         // { name: "Journals & Publications", href: "/Journals&Publications" },
//         { name: "Conferences & Webinars", href: "/conferences-webinars" },
//         { name: "Peer Review Management", href: "/peer-review-management" },
//         { name: "Networking & Collaboration", href: "/networking-collaboration" },
//         { name: "Online Courses", href: "/online-courses" },
//       ],
//     },
//     {
//       title: "Resources & Event",
//       items: [
//         { name: "Courses", href: "/courses" },
//         { name: "Conference", href: "/conference" },
//       ],
//     },
//     {
//       title: "Quick Links",
//       items: [
//         { name: "AboutUs", href: "/About" },
//         { name: "Blogs", href: "/blog" },
//         { name: "Gallery", href: "/Gallery" },
//         { name: "ContactUs", href: "/contact" },
//       ],
//     },
//     {
//       title: "Legal Links",
//       items: [
//         { name: "Terms and Condition", href: "/TermsAndCondition" },
//         { name: "Refund Policy", href: "/Refund" },
//         { name: "Cancellation Policy", href: "/CancilationPolicy" },
//         { name: "Privacy Policy", href: "/PrivacyPolicy" },
//       ],
//     },
//   ]

//   const socialLinks = [
//     {
//       icon: <FaFacebookF />,
//       href: "https://www.facebook.com/profile.php?id=61561809783777",
//     },
//     {
//       icon: <FaInstagram />,
//       href: "https://www.instagram.com/zepresearch/",
//     },
//     { icon: <FaTwitter />, href: "https://x.com/Zepresearch" },
//     {
//       icon: <FaLinkedinIn />,
//       href: "https://www.linkedin.com/company/zep-research/",
//     },
//     { icon: <FaYoutube />, href: "https://youtube.com" },
//   ]

//   return (
//     <footer className=" z-10 w-full bg-gradient-to-b from-white to-cyan-50 dark:from-neutral-950 dark:to-cyan-950 overflow-hidden pt-16 pb-8 drop-shadow-2xl ">
//       {/* Animated background - no longer using opacity to make it more visible */}
//       <div className="absolute inset-0">
//         <FloatingPaths position={1} />
//         <FloatingPaths position={-1} />
//       </div>

//       {/* Footer content */}
//       <div className="relative z-10 container mx-auto px-4 md:px-6">
//         {/* Logo and description */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
//           <div className="md:col-span-1">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex flex-col items-start"
//             >
//               {/* <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200">
//                 ZEP Research
//               </h2> */}
//               <Image src={logox || "/placeholder.svg"} className=" mb-4 w-3/4" alt="logo" />
//               <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4 max-w-xs">
//                 Empowering researchers with comprehensive services and resources for academic excellence.
//               </p>
//               {/* Contact Information */}
//               <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
//                 <div className="flex items-start">
//                   <FaMapMarkerAlt className="mt-1 mr-1 w-12 text-cyan-600 dark:text-cyan-400" />
//                   <span>DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024 India</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaPhone className="mr-2 text-cyan-600 dark:text-cyan-400" />
//                   <span>+91 78488 54815 </span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaEnvelope className="mr-2 text-cyan-600 dark:text-cyan-400" />
//                   <a
//                     href="mailto:info@zepresearch.com"
//                     className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
//                   >
//                     info@zepresearch.com
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Footer links */}
//           {footerLinks.map((section, index) => (
//             <div key={section.title} className="md:col-span-1">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 * index }}
//               >
//                 <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-cyan-300">{section.title}</h3>
//                 <ul className="space-y-2">
//                   {section.items.map((item) => (
//                     <li key={item.name}>
//                       <Link
//                         href={item.href}
//                         className="text-sm text-neutral-700 hover:text-cyan-600 dark:text-neutral-300 dark:hover:text-cyan-300 transition-colors"
//                       >
//                         {item.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             </div>
//           ))}
//         </div>

//         {/* Social links and copyright */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cyan-100 dark:border-cyan-900"
//         >
//           <div className="flex space-x-4 mb-4 md:mb-0">
//             {socialLinks.map((social, index) => (
//               <motion.a
//                 key={index}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full flex items-center justify-center bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-900 dark:hover:bg-cyan-800 text-cyan-600 dark:text-cyan-300 transition-colors"
//                 whileHover={{ y: -3 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               >
//                 {social.icon}
//               </motion.a>
//             ))}
//           </div>

//           <p className="text-sm text-neutral-700 dark:text-neutral-300">
//             © {new Date().getFullYear()} ZEP Research. All rights reserved.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }
