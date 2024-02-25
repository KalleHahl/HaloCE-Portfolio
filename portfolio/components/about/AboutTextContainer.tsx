"use client"
import { ReactTyped } from "react-typed"
import React from "react"

import PersonalInfo from "./PersonalInfo"

const AboutTextContainer = () => {
  return (
    <div className="lg:w-full  mx-5 overflow-y-auto overflow-x-hidden scrollbar-none px-5 py-5 xl:px-10 xl:py-10 border-4 rounded-xl border-sky-500 bg-black bg-opacity-30 max-h-screen ">
      <PersonalInfo />
      <ReactTyped
        strings={[
          "Driven and compassionate 24-year-old computer science student from Helsinki, with a strong passion for technology and a keen interest in problem-solving. I am currently pursuing my degree in computer science at the University of Helsinki, where I've had the opportunity to delve into various aspects of software development and programming.</br></br>I consider social skills one of my strongest assets, and I thrive in a teamwork setting. Throughout both my academic and professional journeys, I've gained experience working in groups with people from diverse backgrounds.</br></br>As an avid film and music enthusiast, I enjoy exploring new music genres and attending film festivals. In the future, I hope to find a way to combine my passion for technology with my love for music and cinema.",
        ]}
        typeSpeed={10}
        cursorChar=""
        className="text-sky-500 font-bold text-s lg:text-3xl "
        startDelay={2000}
      />
    </div>
  )
}

export default AboutTextContainer
