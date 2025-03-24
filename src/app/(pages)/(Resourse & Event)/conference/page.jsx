import React from 'react'
import Hero from './component/Hero'
import Testimonial from './component/Testimonial'
import Why from './component/Why'
import { UpComingConf } from '@/components/UpComingConf'

function page() {
  return (
    <div>
<Hero/>
<UpComingConf/>
<Testimonial/>
<Why/>
    </div>
  )
}

export default page
