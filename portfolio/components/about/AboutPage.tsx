"use client"

import React from "react"
import { motion } from "framer-motion"

import MyImage from "./MyImage"
import AboutTextContainer from "./AboutTextContainer"

const AboutPage = () => {
  return (
    <motion.div
      className="flex flex-col relative h-full lg:flex-row lg:justify-center lg:px-44"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <MyImage />
      <AboutTextContainer />
    </motion.div>
  )
}

export default AboutPage
