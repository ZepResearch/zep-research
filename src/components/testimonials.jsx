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

const testimonials = [
  {
    img: '/testimonials/t1.jpg',
    name: 'Saif Algebory',
    country: 'Iraq',
    title: 'VP of Research, Protocol',
    quote:
      'I attended MEET24 in Seoul as an advisory member. A well-managed conference with insightful speakers and great networking.',
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
      'I was a proud presenter and member of this reputable organization, which supports speakers, mentors, and researchers. It also provides a platform for publishing papers. Thank you, and congratulations!👋',
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
    quote: 'I joined MEET24 in Seoul as an advisory member. The well-managed conference featured engaging speakers and valuable networking.',
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
    quote: 'An incredible experience connecting with brilliant minds in our field. Grateful for the opportunity to present my research and be part of the organizing committee.',
  },
  {
    img: '/testimonials/t8.png',
    name: 'Laatiri Youssef',
    country: '',
    title: 'Researcher',
    quote: 'Thank you ZEP Research for the platform to publish our work. Your support for researchers across different fields is truly helping improve scientific research quality.',
  },
  {
    img: '/testimonials/t9.png',
    name: 'Rich Monreal',
    country: '',
    title: 'Technical Committee Board Member',
    quote: 'Honored to serve as a Board Member and speaker. ZEP Research excellently bridges academia and industry, empowering research leaders globally.',
  },
  {
    img: '/testimonials/t10.png',
    name: 'Cynthia Ala Manalad',
    country: '',
    title: 'Conference Attendee',
    quote: 'A profound and wonderful conference! Gathering exceptional research internationally enriches our knowledge horizon. The keynote speakers did a superb job.',
  },
  {
    img: '/testimonials/t11.png',
    name: 'Annalyn Y. Buenaseda',
    country: '',
    title: 'Board Committee Member & Moderator',
    quote: 'Sincere gratitude for the opportunity to serve on the board and as a moderator. Its been an honor to contribute to ZEP Research and publish with your organization.',
  },
  {
    img: '/testimonials/t12.png',
    name: 'Malou Hernandez Gomez',
    country: '',
    title: 'Advisory Board Committee Member',
    quote: 'Deeply grateful to Zep Research for the chance to publish our work and serve as advisory board committee. The organizers are very kind and accommodating.',
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
          <p className="relative text-lg/7 text-white">
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
          <p className="text-sm/6 font-medium text-white">{name}</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {title}
            </span>
          </p>
          <p className='text-white'>{country}</p>
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

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current.children[0].clientWidth))
  })

  function scrollTo(index) {
    let gap = 32
    let width = scrollRef.current.children[0].offsetWidth
    scrollRef.current.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div className="overflow-hidden py-32">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading>What everyone is saying</Subheading>
          <Heading as="h3" className="mt-2">
            Trusted by professionals.
          </Heading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-[var(--scroll-padding)]',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(theme(spacing.6),calc((100vw-theme(maxWidth.2xl))/2))] lg:[--scroll-padding:max(theme(spacing.8),calc((100vw-theme(maxWidth.7xl))/2))]',
        ])}
      >
        {testimonials.map(({ img, name, title, quote ,country}, testimonialIndex) => (
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
