"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./ui/container";
import { Heading, Subheading } from "./ui/text";

function calculateGap(width) {
  // Mobile: smaller gaps
  if (width < 640) return 40;
  // Tablet
  if (width < 1024) return 50;
  // Desktop scaling
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}) => {
  // Color & font config
  const colorName = colors.name ?? "#000";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorTestimony = colors.testimony ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isMobile, setIsMobile] = useState(false);

  const imageContainerRef = useRef(null);
  const autoplayIntervalRef = useRef(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  // Responsive gap calculation and mobile detection
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [activeIndex, testimonialsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);
  
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  // Compute transforms for each image
  function getImageStyle(index) {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;
    
    // Mobile: show only active image
    if (isMobile) {
      if (isActive) {
        return {
          zIndex: 3,
          opacity: 1,
          pointerEvents: "auto",
          transform: `translateX(0px) translateY(0px) scale(1)`,
          transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
        };
      }
      return {
        zIndex: 1,
        opacity: 0,
        pointerEvents: "none",
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    
    // Desktop: show 3 images
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="max-w-7xl w-full">
      <div className="testimonial-grid">
        {/* Images */}
        <div className="image-container" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.img}
              src={testimonial.img}
              alt={testimonial.name}
              className="object-contain testimonial-image"
              data-index={index}
              style={getImageStyle(index)}
            />
          ))}
        </div>
        {/* Content */}
        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3
                className="name"
                style={{ color: colorName, fontSize: fontSizeName }}
              >
                {activeTestimonial.name}
              </h3>
              <p
                className="designation"
                style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
              >
                {activeTestimonial.title}
                {activeTestimonial.country && ` • ${activeTestimonial.country}`}
              </p>
              <motion.p
                className="quote  overflow-y-scroll h-[300px]"
                style={{ color: colorTestimony, fontSize: fontSizeQuote }}
              >
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <div className="arrow-buttons">
            <button
              className="arrow-button prev-button"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous testimonial"
            >
              <FaArrowLeft className="arrow-icon" color={colorArrowFg} />
            </button>
            <button
              className="arrow-button next-button"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next testimonial"
            >
              <FaArrowRight className="arrow-icon" color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .testimonial-grid {
          display: grid;
          gap: 2rem;
          width: 100%;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 16rem;
          perspective: 1000px;
        }
        .testimonial-image {
          background-color: #ffffff;
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0 1rem;
        }
        .name {
          font-weight: bold;
          margin-bottom: 0.25rem;
          font-size: 1.25rem;
        }
        .designation {
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }
        .quote {
          line-height: 1.75;
          font-size: 1rem;
        }
        .arrow-buttons {
          display: flex;
          gap: 1rem;
          padding-top: 2rem;
          justify-content: center;
        }
        .arrow-button {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s;
          border: none;
          flex-shrink: 0;
        }
        .arrow-icon {
          font-size: 1.25rem;
        }
        
        /* Small Mobile (320px - 480px) */
        @media (max-width: 480px) {
          .testimonial-grid {
            gap: 1.5rem;
          }
          .image-container {
            height: 14rem;
          }
          .testimonial-content {
            padding: 0 0.5rem;
          }
          .name {
            font-size: 1.125rem;
          }
          .designation {
            font-size: 0.8125rem;
            margin-bottom: 1.25rem;
          }
          .quote {
            font-size: 0.9375rem;
          }
          .arrow-buttons {
            gap: 0.75rem;
            padding-top: 1.5rem;
          }
          .arrow-button {
            width: 2.25rem;
            height: 2.25rem;
          }
          .arrow-icon {
            font-size: 1.125rem;
          }
        }
        
        /* Mobile (481px - 639px) */
        @media (min-width: 481px) and (max-width: 639px) {
          .image-container {
            height: 15rem;
          }
        }
        
        /* Tablet (640px - 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .testimonial-grid {
            gap: 2.5rem;
          }
          .image-container {
            height: 18rem;
          }
          .name {
            font-size: 1.375rem;
          }
          .designation {
            font-size: 0.9375rem;
          }
          .quote {
            font-size: 1.0625rem;
          }
        }
        
        /* Tablet to Desktop (768px - 1023px) */
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
          .image-container {
            height: 20rem;
          }
          .testimonial-content {
            padding: 0;
          }
          .arrow-buttons {
            padding-top: 0;
            justify-content: flex-start;
          }
          .name {
            font-size: 1.5rem;
          }
          .designation {
            font-size: 0.925rem;
          }
          .quote {
            font-size: 1.125rem;
          }
        }
        
        /* Desktop (1024px - 1279px) */
        @media (min-width: 1024px) {
          .testimonial-grid {
            gap: 4rem;
          }
          .image-container {
            height: 22rem;
          }
          .arrow-button {
            width: 2.7rem;
            height: 2.7rem;
          }
          .arrow-icon {
            font-size: 1.5rem;
          }
        }
        
        /* Large Desktop (1280px - 1535px) */
        @media (min-width: 1280px) {
          .testimonial-grid {
            gap: 5rem;
          }
          .image-container {
            height: 24rem;
          }
        }
        
        /* Extra Large Desktop (1536px+) */
        @media (min-width: 1536px) {
          .image-container {
            height: 26rem;
          }
        }
      `}</style>
    </div>
  );
};

// Testimonial Data
const testimonials = [
  {
    img: '/testimonials/t14.jpeg',
    name: 'Liane Vina G Ocampo',
    country: '',
    title: 'ZEP Research Committee Member',
    quote: 'Being part of ZEP Research conferences has been a truly inspiring and rewarding experience in my academic journey, as these well-organized and intellectually stimulating platforms foster meaningful dialogue, global collaboration, and scholarly excellence. Through diverse and engaging sessions, I gained valuable insights, constructive feedback, and lasting professional connections that strengthened both my research impact and personal growth. ZEP Research’s commitment to quality, inclusivity, and innovation continues to motivate me to pursue research that is relevant, ethical, and transformative for society',
  },
  {
    img: '/testimonials/t1.jpg',
    name: 'Saif Algebory',
    country: 'Iraq',
    title: 'VP of Research, Protocol',
    quote:
      'My recent engagement with Core Research Foundation or Zep Research was through the 8th International Conference on Management, Education, and Emerging Technology (MEET24) held in Seoul, South Korea. I was honored to be invited as a member of the advisory committee. Prior to the conference, we participated in a mini webinar designed to connect like-minded researchers, which was a valuable networking opportunity.',
  },
  {
    img: '/testimonials/t2.jpg',
    name: 'Thamer Yousif',
    country: 'Iraq',
    title: 'Professor in Public Health and Health Profession Education',
    quote:
      'The sessions were excellent. Conducting them more frequently would enhance engagement and experience-sharing in the future.',
  },
  {
    img: '/testimonials/t3.png',
    name: 'Miles Peroja Viado',
    country: 'Philippines',
    title: 'Former Instructor at Nevada City, California',
    quote:
      'I was once a presenter and member of this organization, Proud to be a part of it. The legit organization that caters you as a speaker presenter a mentor or as an evaluator so you can published also your paper. Thank you so much and more power! God bless and congratulations',
  },
  {
    img: '/testimonials/t4.jpg',
    name: 'Dr. Abdulwahed Jalal Nori',
    country: 'Malaysia',
    title: 'Senior Political Analyst',
    quote:
      'ZEP Research organizes global conferences uniting experts to present research, discuss trends, and network with industry leaders.',
  },
  {
    img: '/testimonials/t5.jpg',
    name: 'Jhanghiz Syahrivar',
    country: 'Indonesia',
    title: 'Associate Professor of Marketing Innovation and Consumer Ethics',
    quote: 'My recent engagement with Core Research Foundation or Zep Research was through the 8th International Conference on Management, Education, and Emerging Technology (MEET24) held in Seoul, South Korea. I was honored to be invited as a member of the advisory committee. Prior to the conference, we participated in a mini webinar designed to connect like-minded researchers, which was a valuable networking opportunity. The conference process was managed professionally and efficiently, ensuring a seamless experience.',
  },
  {
    img: '/testimonials/t6.png',
    name: 'Alfe Solina',
    country: '',
    title: 'Keynote Speaker',
    quote: 'Congratulations Zep Research and to the host institution, Indraprastha College for Women, Delhi University. Thank you for inviting me as one of the Keynote Speakers.',
  },
  {
    img: '/testimonials/t7.png',
    name: 'Jocelyn Sagun-de Vera',
    country: '',
    title: 'ZEP Research Committee Member',
    quote: 'It was an incredible experience to connect, share ideas, and learn from so many brilliant minds in our field. I am especially grateful for the opportunity to present my research and to be a part of the ZEP Research organizing committee. Your hard work and dedication truly made this event a remarkable success!',
  },
  {
    img: '/testimonials/t8.png',
    name: 'Laatiri Youssef',
    country: '',
    title: 'Researcher',
    quote: 'Congratulations Zep Research and to the host institution, the Indraprastha College for Women, Delhi University. Thank you for inviting me as one of the Keynote Speakers.',
  },
  {
    img: '/testimonials/t9.png',
    name: 'Rich Monreal',
    country: '',
    title: 'Technical Committee Board Member',
    quote: 'Its an honor to be associated with ZEP Research. I am grateful for the opportunity to serve as a Technical Committee Board Member and to share my expertise as a speaker at various international conferences. ZEP Research plays a pivotal role in bridging the gap between academia and industry, empowering future research leaders to thrive. Congratulations on your impactful work—Im always excited to collaborate at global conferences and contribute to such a dynamic community.',
  },
  {
    img: '/testimonials/t10.png',
    name: 'Cynthia Ala Manalad',
    country: '',
    title: 'Conference Attendee',
    quote: 'Thank you so much to Zep Research for such a profound and wonderful conference! The concept of gathering exceptional and timely researches and presenting them internationally really enriches our horizon for knowledge! The keynote speakers did a superb job in their portions and did it in a professional manner. I look forward to attending more conferences brought by the organization!',
  },
  {
    img: '/testimonials/t11.png',
    name: 'Annalyn Y. Buenaseda',
    country: '',
    title: 'Board Committee Member & Moderator',
    quote: 'My sincere gratitude for the opportunity to serve on the board committee and as a moderator. It has been an honor and a privilege to contribute to ZEP Research. I am also deeply grateful for the opportunity to publish our research with your organization. This is a significant achievement for our team, and we greatly appreciate your support and recognition.',
  },
  {
    img: '/testimonials/t12.png',
    name: 'Malou Hernandez Gomez',
    country: '',
    title: 'Advisory Board Committee Member',
    quote: 'My deepest gratitude to Zep research for giving us the chance to publish our research paper. I am grateful to serve as advisory board committee. Being part of this organization has not only helped me grow professionally but also personally and for that, I am truly thankful.',
  },
  {
    img: '/testimonials/t13.jpg',
    name: 'Prof. Dr. Ipseeta Nanda',
    country: 'India',
    title: 'Professor, IILM University',
    quote: 'A distinct honor to be associated with Zep Research. Their dedication to supporting researchers worldwide is highly commendable. Grateful for the opportunity to contribute to advancing global research initiatives.',
  },
  {
    img: '/testimonials/t15.jpeg',
    name: 'Ass. prof. Saif M. Hassan',
    country: 'Iraq',
    title: 'Madenat Alelem University',
    quote: 'I have published multiple research papers with Zep Research, and each engagement has been conducted with a high level of professionalism and efficiency. Their team provides comprehensive support throughout the entire publication process, from identifying appropriate journals to ensuring successful final publication. The procedures are transparent, well-structured, and delivered within the agreed timelines. I confidently recommend Zep Research to researchers seeking dependable and high-quality publication services.',
  },
   {
    img: '/testimonials/t16.jpeg',
    name: 'Dr Mahmud Iwan Solihin ',
    country: 'Malaysia',
    title: 'Assoc Prof in Mechatronics Engineering, UCSI University,',
    quote: 'I am honoured to have been a keynote speaker at ICARI 2025 in Kuala Lumpur on 14th -15th  November 2025, a truly well-organized and professional conference. The event provided an excellent platform for knowledge sharing, collaboration, and inspiring discussions among researchers and innovators from around the world.',
  },
  {
    img: '/testimonials/t17.jpeg',
    name: ' Dr. Mohamed Syed Ibrahim',
    country: 'Oman',
    title: 'Head of Research and Consultancy',
    quote: 'As the Head of the Research and Consultancy Department at the University of Technology and Applied Sciences – Ibra, Oman, it is my pleasure to express sincere appreciation for the outstanding work carried out by Zep Research in organizing the recent international research conference. The event was distinguished by exceptional professionalism, meticulous planning, and a welcoming environment that strongly fostered academic exchange and collaboration. From the outset, the Zep Research team demonstrated a clear commitment to excellence, with conference logistics managed with remarkable precision, ensuring seamless scheduling, engaging sessions, and a highly interactive experience for all participants. The well-structured program provided an effective platform for both seasoned researchers and early-career scholars to present their work, gain valuable insights, and engage in meaningful dialogue. Special recognition is due to Mr. Ankit, Chief Executive Officer of Zep Research, whose vision, dedication, and proactive leadership were instrumental in the event’s success, ensuring the highest standards of quality and academic integrity. Equally commendable were the contributions of Mr. Ashok and Ms. Soumya, whose professionalism, attention to detail, prompt support to delegates, and warm hospitality significantly enhanced the overall participant experience. Overall, the conference stands as a testament to Zep Research’s ability to deliver high-impact academic events that elevate scholarly discourse and strengthen international research networks, and I look forward to future collaborations that further advance global research excellence and knowledge dissemination.',
  },
  {
    img: '/testimonials/t18.jpeg',
    name: ' ',
    country: 'Argentina',
    title: 'COIL Program Coordinator, GlobalEd STAR Country Director,',
    quote: 'Participating as a Keynote Speaker at the 2nd International Conference on Applied Science, Engineering & Management (ICASEM 2025) was an inspiring and professionally enriching experience. As Professor at I.E.S. en Lenguas Vivas J.R.F. and INSPT – Universidad Tecnológica Nacional, Argentina, and STAR Scholars Country Director for Argentina, I was honored to present my keynote titled “Transforming Higher Education through Global Collaboration: COIL and the SDGs as Catalysts for Innovation.” The conference provided an exceptional platform to engage with scholars and practitioners from diverse disciplines who share a commitment to advancing innovation and sustainable development. The multidisciplinary spirit of ICASEM 2025 fostered meaningful dialogue on how applied science, engineering, and management can contribute to addressing global challenges. I particularly valued the opportunity to exchange ideas on Collaborative Online International Learning (COIL) and its potential to internationalize education, promote intercultural understanding, and support the Sustainable Development Goals. From my dual perspective as an educator and as STAR Scholars Country Director, the event reinforced the importance of building inclusive global networks that expand opportunities for academics and students in Ibero-America and beyond. The high academic standards of the conference—indexed by Scopus and supported by ZEP Research, Rourkela Institute of Technology, and The CPD Standards Office—reflected its global relevance and impact. The event created a dynamic environment for interdisciplinary exchange, critical reflection, and the development of new partnerships. Overall, ICASEM 2025 was a vibrant space for networking, knowledge sharing, and envisioning new possibilities for cross-border collaboration in higher education. I left the conference motivated and encouraged by the collective commitment to multidisciplinary excellence and innovation. I am truly grateful to the organizers for the invitation and for creating such a valuable forum for global academic exchange.',
  },
];

// Demo Component
export const Testimonials = () => (
  <section className="w-full">
    {/* Header section */}
    <div className="text-center my-8 md:my-12 px-4">
      <Container>
        <div>
          <Subheading>What everyone is saying</Subheading> 
          <Heading as="h3" className="mt-2">
            Trusted by professionals.
          </Heading>
        </div>
      </Container>
    </div>
    
    {/* Light testimonials section */}
    <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative w-full">
      <div
        className="items-center justify-center relative flex w-full"
        style={{ maxWidth: "1456px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#0a0a0a",
            designation: "#454545",
            testimony: "#171717",
            arrowBackground: "#141414",
            arrowForeground: "#f1f1f7",
            arrowHoverBackground: "#00A6FB",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div>
  </section>
);

export default CircularTestimonials;