import React from "react"

import MyImage from "@/components/about/MyImage"

const AboutPage = () => {
  return (
    <div className="flex flex-col h-screen py-24">
      <div className="flex flex-row h-full py-10 px-10 border-b-4 border-t-4 border-sky-700 bg-blue-900 bg-opacity-40">
        <div className="flex flex-row">
          <MyImage />
          {/* <img src="path_to_your_picture" alt="Your Picture" /> */}
        </div>
        <p className="bg-sky-700">
          Hello! My name is [Your Name] and I am a [Your Profession]. I have a
          passion for [Your Interests] and enjoy [Your Hobbies]. I have [Number
          of Years] years of experience in [Your Field] and have worked on
          various projects including [Project Examples].
        </p>
        <p>
          I am skilled in [Your Skills] and have a strong understanding of [Your
          Expertise]. I am constantly learning and exploring new technologies to
          enhance my skills and deliver high-quality solutions.
        </p>
        <p>
          Feel free to explore my portfolio to see some of my work. If you have
          any questions or would like to collaborate, hesitate to reach out to
          me.
        </p>
      </div>
    </div>
  )
}

export default AboutPage
