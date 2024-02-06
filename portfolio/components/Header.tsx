"use client"

import React from "react"
import { motion } from "framer-motion"

export const Header = () => {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="flex justify-center items-center fixed top-0 left-1/2 h-[4.5rem] w-full border-opacity-40 bg-white bg-opacity-15 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[45rem] sm:rounded-full"
        initial={{ y: 0, x: -100, opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <div className="flex justify-between w-full px-4 sm:w-[40rem]">
          <div className="text-xl font-handel">EEE</div>
          <div className="text-xl font-handel">projects</div>
        </div>
      </motion.div>
      <nav className="fixed top-[0.15rem] left-1/2 flex items-center justify-between w-full h-[4.5rem] px-4 sm:top-6 sm:h-[3.25rem] sm:w-[45rem]"></nav>
    </header>
  )
}
