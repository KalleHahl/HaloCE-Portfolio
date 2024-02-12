import React from "react"

import MyImage from "./MyImage"
import GradientBackground from "@/components/GradientBackground"
import AboutTextContainer from "./AboutTextContainer"

const AboutPage = () => {
  return (
    <GradientBackground text="ABOUT">
      <div className="flex flex-col h-full xl:flex-row">
        <MyImage />
        <AboutTextContainer />
      </div>
    </GradientBackground>
  )
}

export default AboutPage
