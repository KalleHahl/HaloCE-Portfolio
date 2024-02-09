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
      <div className="relative h-20 md:h-40">
        <div className="flex flex-col justify-end h-full">
          <motion.p
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "-50%", opacity: 1 }}
            className="font-handel text-5xl md:text-7xl absolute text-sky-700 bottom-0 left-1/2 transform -translate-x-1/2 md:left-80"
          >
            {text}
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-1"
      >
        <div className="flex flex-col flex-wrap flex-1 relative py-10 px-10 border-b-4 border-t-4 border-sky-700">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-900 to-black opacity-60"></div>{" "}
          {children}
        </div>
      </motion.div>
      <div className="h-20 md:h-40"></div>
    </div>
  )
}

export default GradientBackground
