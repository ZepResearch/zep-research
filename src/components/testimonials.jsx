'use client'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'
import { Container } from './ui/container'
import { Link } from './ui/link'
import { Heading, Subheading } from './ui/text'
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid'

const testimonials = [
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
    name: 'Thamer Yousif ',
    country: 'Iraq',
    title: 'Professor in Public Health and Health Profession Education',
    quote:
      'The sessions were excellent. Conducting them more frequently would enhance engagement and experience-sharing in the future.',
  },
  {
    img: '/testimonials/t3.png',
    name: 'Miles Peroja Viado ',
    country: 'Philippines',
    title: 'Former Instructor at Nevada City, California',
    quote:
      'I was once a presenter and member of this organization ,Proud to be a part of it ,The legit organization that caters you as a speaker presenter a mentor or as an evaluator ..so you can published also your paper ..Thank you so much and more power! God bless and congratulations',
  },
  {
    img: '/testimonials/t4.jpg',
    name: 'Dr. Abdulwahed Jalal Nori ',
    country: 'Malaysia',
    title: 'Senior Political Analyst',
    quote:
      'ZEP Research organizes global conferences uniting experts to present research, discuss trends, and network with industry leaders.',
  },
  {
    img: '/testimonials/t5.jpg',
    name: 'Jhanghiz Syahrivar, ',
    country: 'Indonesia',
    title: 'Associate Professor of Marketing Innovation and Consumer Ethics',
    quote: 'My recent engagement with Core Research Foundation or Zep Research was through the 8th International Conference on Management, Education, and Emerging Technology (MEET24) held in Seoul, South Korea. I was honored to be invited as a member of the advisory committee. Prior to the conference, we participated in a mini webinar designed to connect like-minded researchers, which was a valuable networking opportunity. The conference process was managed professionally and efficiently, ensuring a seamless experience.',
  },
  // {
  //   img: '/testimonials/t5.jpg',
  //   name: 'Harriet Arron',
  //   title: 'Research Director, Commit',
  //   quote:
  //     'I ve published more high-impact papers this year than ever before, thanks to the collaborative opportunities Zep Research provides.',
  // }, 
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
    quote: 'Congratulations Zep Research and to the host institution, the Indraprastha College for Women, Delhi University.Thank you for inviting me as one of the Keynote Speakers.',
  },
  {
    img: '/testimonials/t9.png',
    name: 'Rich Monreal',
    country: '',
    title: 'Technical Committee Board Member',
    quote: 'It’s an honor to be associated with ZEP Research. I am grateful for the opportunity to serve as a Technical Committee Board Member and to share my expertise as a speaker at various international conferences. ZEP Research plays a pivotal role in bridging the gap between academia and industry, empowering future research leaders to thrive. Congratulations on your impactful work—I’m always excited to collaborate at global conferences and contribute to such a dynamic community.',
  },
  {
    img: '/testimonials/t10.png',
    name: 'Cynthia Ala Manalad',
    country: '',
    title: 'Conference Attendee',
    quote: 'Thank you so much to Zep Research for such a profound and wonderful conference! The concept of gathering exceptional and timely researches and presenting them internationally really enriches our horizon for knowledge! The keynote speakers did a superb job in their portions and did it in a professional manner.I look forward to attending more conferences brought by the organization!',
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
  },  {
    img: '/testimonials/t13.jpg',
    name: 'Prof. Dr. Ipseeta Nanda',
    country: 'India',
    title: 'Professor, IILM University',
    quote: 'A distinct honor to be associated with Zep Research. Their dedication to supporting researchers worldwide is highly commendable. Grateful for the opportunity to contribute to advancing global research initiatives.',
  },
]

function TestimonialCard({
  name,
  title,
  country,
  img,
  children,
  bounds,
  scrollX,
  ...props
}) {
  let ref = useRef(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-[9/16] w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[3/4] sm:w-96"
    >
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-contain"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-sm/5 text-white">
            <span aria-hidden="true" className="absolute -translate-x-full">
              “
            </span>
            {children}
            <span aria-hidden="true" className="absolute">
              ”
            </span>
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-base/6 font-semibold text-white">{name}</p>
          <p className="text-sm/4 font-medium">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {title}
            </span>
          </p>
          <p className='text-white text-sm'>{country}</p>
        </figcaption>
      </figure>
    </motion.div>
  )
}

function CallToAction() {
  return (
    <div>
      <p className="max-w-sm text-sm/6 text-gray-600">
      Join industry leaders and innovators at our premier conference. Gain insights, network, and shape the future.
      </p>
      <div className="mt-2">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm/6 font-medium text-cyan-600"
        >
          Register Now 
          <ArrowLongRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  )
}

export function Testimonials() {
  let scrollRef = useRef(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)
  let [canScrollLeft, setCanScrollLeft] = useState(false)
  let [canScrollRight, setCanScrollRight] = useState(true)
  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current.children[0].clientWidth))
    
    // Check if can scroll left or right
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  })

  function scrollTo(index) {
    let gap = 32
    let width = scrollRef.current.children[0].offsetWidth
    scrollRef.current.scrollTo({ left: (width + gap) * index })
  }

  function scrollLeft() {
    if (scrollRef.current && activeIndex > 0) {
      scrollTo(activeIndex - 1)
    }
  }

  function scrollRight() {
    if (scrollRef.current && activeIndex < testimonials.length - 1) {
      scrollTo(activeIndex + 1)
    }
  }
  return (
    <div className="overflow-hidden py-32 relative">
    <Container>
      <div ref={setReferenceWindowRef}>
        <Subheading>What everyone is saying</Subheading>
        <Heading as="h3" className="mt-2">
          Trusted by professionals.
        </Heading>
      </div>
    </Container>
    
    {/* Navigation buttons - desktop view (left/right sides) */}
    <div className="absolute z-10 w-full h-[calc(100%-16rem)] top-48 pointer-events-none">
      {/* Left button */}
      <div className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
        <button
          className="z-40 h-14 w-14 rounded-full bg-gray-900 flex items-center justify-center disabled:opacity-50 transition-opacity"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          aria-label="Previous testimonial"
        >
          <ArrowLongLeftIcon className="h-6 w-6 text-gray-100" />
        </button>
      </div>
      
      {/* Right button */}
      <div className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
        <button
          className="z-40 h-14 w-14 rounded-full bg-gray-900 flex items-center justify-center disabled:opacity-50 transition-opacity"
          onClick={scrollRight}
          disabled={!canScrollRight}
          aria-label="Next testimonial"
        >
          <ArrowLongRightIcon className="h-6 w-6 text-gray-100" />
        </button>
      </div>
    </div>
    
    <div
      ref={scrollRef}
      className={clsx([
        'mt-16 flex gap-8 px-[var(--scroll-padding)]',
        '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
        'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
        '[--scroll-padding:max(theme(spacing.6),calc((100vw-theme(maxWidth.2xl))/2))] lg:[--scroll-padding:max(theme(spacing.8),calc((100vw-theme(maxWidth.7xl))/2))]',
      ])}
    >
      {testimonials.map(({ img, name, title, quote, country}, testimonialIndex) => (
        <TestimonialCard
          key={testimonialIndex}
          name={name}
          title={title}
          img={img}
          country={country}
          bounds={bounds}
          scrollX={scrollX}
          onClick={() => scrollTo(testimonialIndex)}
        >
          {quote}
        </TestimonialCard>
      ))}
      <div className="w-[42rem] shrink-0 sm:w-[54rem]" />
    </div>
    
    {/* Mobile navigation buttons - centered at bottom */}
    <div className="sm:hidden flex justify-center gap-2 mt-8">
      <button
        className="z-40 h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center disabled:opacity-50 transition-opacity"
        onClick={scrollLeft}
        disabled={!canScrollLeft}
        aria-label="Previous testimonial"
      >
        <ArrowLongLeftIcon className="h-5 w-5 text-gray-100" />
      </button>
      <button
        className="z-40 h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center disabled:opacity-50 transition-opacity"
        onClick={scrollRight}
        disabled={!canScrollRight}
        aria-label="Next testimonial"
      >
        <ArrowLongRightIcon className="h-5 w-5 text-gray-100" />
      </button>
    </div>
    
    <Container className="mt-16">
      <div className="flex justify-between">
        <CallToAction />
        <div className="hidden sm:flex sm:gap-2">
          {testimonials.map(({ name }, testimonialIndex) => (
            <Headless.Button
              key={testimonialIndex}
              onClick={() => scrollTo(testimonialIndex)}
              data-active={
                activeIndex === testimonialIndex ? true : undefined
              }
              aria-label={`Scroll to testimonial from ${name}`}
              className={clsx(
                'size-2.5 rounded-full border border-transparent bg-gray-300 transition',
                'data-[active]:bg-gray-400 data-[hover]:bg-gray-400',
                'forced-colors:data-[active]:bg-[Highlight] forced-colors:data-[focus]:outline-offset-4',
              )}
            />
          ))}
        </div>
      </div>
    </Container>
  </div>
  )
}
