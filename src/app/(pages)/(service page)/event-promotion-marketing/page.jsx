import React from 'react'
import { Earth, Focus, LifeBuoy, Users } from 'lucide-react'
import { IconCheck } from '@tabler/icons-react';


const services = [
  {
    title: 'Tailored Marketing Strategies',
    description: 'We create customized marketing plans that align with your events objectives, target audience, and scope, ensuring maximum reach and participation.',
  },
  {
    title: 'Global Audience Reach',
    description: 'Leverage our extensive network of academics, professionals, and researchers from around the world to promote your conference themes, conference speakers, and Scopus-indexed journal opportunities to the right audience.',
  },
  {
    title: 'Multi-Channel Promotion',
    description: 'Our promotion strategy spans multiple channels, including email campaigns, social media, academic forums, and partnerships with relevant institutions, ensuring your event gets noticed by the right people.',
  },
  {
    title: 'Creative Branding & Messaging',
    description: 'We work with you to develop compelling event branding, promotional materials, and messaging that resonate with your target audience and drive engagement.',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Our marketing approach is data-driven, allowing us to track performance and optimize campaigns in real-time to boost attendance and participation.',
  },
  {
    title: 'End-to-End Support',
    description: 'From pre-event buzz to post-event follow-up, we manage every aspect of your event promotion, allowing you to focus on delivering a successful and engaging event.',
  },
];

const benefits = [
  {
    title: 'Increased Visibility',
    description: 'Enhance the visibility of your global conference and ensure it reaches the academic and research communities you want to engage.',
  },
  {
    title: 'Broader Participation',
    description: 'Attract a diverse range of participants from various fields and regions, boosting the value of your event through increased networking and collaboration opportunities.',
  },
  {
    title: 'Professional Image',
    description: 'Present your event with a professional and cohesive brand identity that resonates with your audience, enhancing credibility and interest.',
  },
  {
    title: 'Efficient Use of Resources',
    description: 'With our experienced marketing team handling the promotion, you save time and resources, ensuring a higher return on your event investment.',
  },
  {
    title: 'Ongoing Engagement',
    description: 'Keep your audience engaged before, during, and after the event with consistent and targeted marketing efforts that build lasting connections.',
  },
];
export const metadata = {
    title: "EventPromotionMarketing | Zepresearch | International Journal Publication and Conference",
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
      url: "https://zepresearch.com",
      images: ["/og-image.jpg"]
    },
    twitter: {
      card: "summary_large_image",
      title: "Zep Research | International Journal Publication",
      description: "Leading platform for international journal publications and conferences",
      images: ["/og-image.jpg"]
    },
    alternates: {
      canonical: "https://zepresearch.com"
    }
  };
function EventPromotionMarketing() {
  return (
   <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-24">
      
  <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
    <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold font-JosefinSans ">
      Event Promotion & Marketing
    </h2>
    <p className="mt-3 text-gray-800 text-center font-PTSerif ">
      At Zep Research, we understand that organizing a successful academic event, such as an international conference or Scopus-indexed conference, is only half the battle—the key to maximizing its impact lies in effective promotion and strategic marketing. Our Event Promotion & Marketing service is designed to elevate your conferences, webinars, and academic events by enhancing visibility, driving conference registration, and ensuring widespread engagement across the academic community.
    </p>
  </div>
 
  <div className="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
    <div className="hidden md:block col-span-4 md:col-span-3">
      <img className="rounded-xl" src="https://images.pexels.com/photos/3023317/pexels-photo-3023317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Features Image"/>
    </div>
    
    <div className="col-span-4 md:col-span-3">
      <img className="rounded-xl" src="https://images.pexels.com/photos/3171811/pexels-photo-3171811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Features Image"/>
    </div>
    
    <div className="col-span-4 md:col-span-3">
      <img className="rounded-xl" src="https://images.pexels.com/photos/3171820/pexels-photo-3171820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Features Image"/>
    </div>
   
    <div className="col-span-4 md:col-span-3">
      <img className="rounded-xl" src="https://images.pexels.com/photos/301987/pexels-photo-301987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Features Image"/>
    </div>
  </div>

  <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
    <div className="lg:col-span-1">
      <h2 className="font-bold text-2xl md:text-3xl text-gray-800 font-JosefinSans">
        Why Choose Zep Research for Event Promotion & Marketing?
      </h2>
      
      <div>
        <img src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726476744/bth0h11nzs0sxvnuzvrv.png" alt="imggif" />
      </div>
      
    </div>
    <div className="lg:col-span-2">
      <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
         {services.map((q, index) => (
        <div key={index} className="flex gap-x-5">
          <div className="shrink-0 mt-1 size-6 text-cyan-600" >
            <IconCheck />
          </div>
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800 font-JosefinSans ">
             {q.title}
            </h3>
            <p className="mt-1 text-gray-600 font-PTSerif">
              {q.description}
            </p>
          </div>
        </div>
         ))}
      </div>
    </div>
  </div>

   <div className="mx-auto mt-16 max-w-2xl sm:mt-8 lg:mt-12 lg:max-w-screen-2xl">
        <h1 className='sm:text-3xl text-2xl py-4 text-center font-JosefinSans'>Benefits of Our Event Promotion & Marketing Service</h1>
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {benefits.map((b, index) => (
        <div key={index} className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900 inline-flex font-JosefinSans">
            <IconCheck className='w-6 h-6 text-cyan-600 shrink-0 bg-white border-2 border-cyan-600 rounded-full mr-2' />
            {b.title}
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600 font-PTSerif">{b.description}</dd>
        </div>
        ))}
      </dl>
    </div>
  
</div>
  )
}

export default EventPromotionMarketing

