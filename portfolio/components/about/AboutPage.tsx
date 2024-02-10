import React from "react"

import MyImage from "./MyImage"
import GradientBackground from "@/components/GradientBackground"
import AboutTextContainer from "./AboutTextContainer"

const AboutPage = () => {
  return (
    <GradientBackground text="ABOUT">
      <div className="flex flex-col  md:h-full relative">
        <MyImage />
      </div>
      <div className="flex flex-col w-full md:h-full relative">
        {" "}
        <AboutTextContainer />
      </div>
    </GradientBackground>
  )
}

export default AboutPage
