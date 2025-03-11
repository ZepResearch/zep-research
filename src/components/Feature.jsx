import { BentoCard } from './ui/bento-card'

import { Container } from '@/components/ui/container'
import { Keyboard } from '@/components/ui/keyboard'
import { LogoCluster } from '@/components/ui/logo-cluster'
import { Map } from '@/components/ui/map'
import { Heading, Subheading } from '@/components/ui/text'

export default function Feature() {
    return (
      <div className='max-w-screen-2xl mx-auto px-4 py-8 '>
        <Subheading>Feature</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl">
        Comprehensive Services We Offer
        </Heading>
  
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            eyebrow="Insight"
            title="Conferences & Webinars"
            description="Expertly organized events that connect academics and foster meaningful interactions."
            graphic={
              <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="Analysis"
            title="Undercut your competitors"
            description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
            graphic={
              <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
            }
            fade={['bottom']}
            className="lg:col-span-3 lg:rounded-tr-4xl"
          />
          <BentoCard
            eyebrow="Speed"
            title="Built for power users"
            description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
            graphic={
              <div className="flex size-full pl-10 pt-10">
                <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
              </div>
            }
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            eyebrow="Source"
            title="Get the furthest reach"
            description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
            graphic={<LogoCluster />}
            className="lg:col-span-2"
          />
          <BentoCard
            eyebrow="Limitless"
            title="Sell globally"
            description="Radiant helps you sell in locations currently under international embargo."
            graphic={<Map />}
            className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
          />
        </div>
      </div>
    )
  }