import React from 'react'
import HeroAbout from './component/Hero'
import MissionVisionPage from './component/MissionVision'
import SDGPage from './component/SDGE'
import ObjectiveAboutpage from './component/Objective'
import CeoVision from './component/Ceo'

function page() {
  return (
    <div>
      <HeroAbout/>
      <MissionVisionPage/>
      <CeoVision/>
      <ObjectiveAboutpage/>
      <SDGPage/>
    </div>
  )
}

export default page
