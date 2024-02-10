import React from "react"

import MyImage from "./MyImage"
import GradientBackground from "@/components/GradientBackground"
import AboutTextContainer from "./AboutTextContainer"

const AboutPage = () => {
  return (
    <GradientBackground text="ABOUT">
      <div className="flex flex-row h-96 md:h-full relative">
        <div className="flex flex-row flex-shrink">
          <MyImage />
        </div>
        <div className="flex py-11 px-11">
          <AboutTextContainer />
        </div>
      </div>
    </GradientBackground>
  )
}

export default AboutPage
