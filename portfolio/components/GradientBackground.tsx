"use client"
import React from "react"
import { motion } from "framer-motion"

const GradientBackground = ({
  text,
  children,
}: {
  text: string
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-20 md:h-36 4k:h-64">
        <div className="flex flex-col justify-end h-full">
          <motion.p
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "-50%", opacity: 1 }}
            className="font-handel text-shadow-sm shadow-black text-5xl md:text-7xl absolute text-sky-700 bottom-0 left-1/2 transform -translate-x-1/2 md:left-1/4"
          >
            {text}
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col flex-wrap flex-1  2xl:content-center relative border-b-4 border-t-4 4k:border-t-8 4k:border-b-8 border-sky-700"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900 to-black opacity-60"></div>{" "}
        <div className="flex flex-col md:flex-row py-10 md:px-10">
          {children}
        </div>
      </motion.div>
      <div className="h-20 md:h-36 4k:h-64"></div>
    </div>
  )
}

export default GradientBackground
