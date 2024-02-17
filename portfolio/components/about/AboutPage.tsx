import React from "react"

import MyImage from "./MyImage"
import AboutTextContainer from "./AboutTextContainer"

const AboutPage = () => {
  return (
    <div className="flex flex-col relative h-full lg:flex-row lg:justify-center lg:px-44">
      <MyImage />
      <AboutTextContainer />
    </div>
  )
}

export default AboutPage
