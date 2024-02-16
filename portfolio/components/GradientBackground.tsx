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
    <div className="flex flex-col h-screen">
      <div className="relative h-36 4k:h-64">
        <div className="flex flex-col justify-end h-full">
          <motion.p
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "-50%", opacity: 1 }}
            className="font-handel text-shadow-lg shadow-sky-900 text-5xl lg:text-7xl absolute text-sky-500 bottom-0 left-1/2 -translate-x-1/2 lg:left-1/4"
          >
            {text}
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-1 relative overflow-hidden border-b-[3px] border-t-[3px] 4k:border-t-8 4k:border-b-8 border-sky-500"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900 to-black h-full opacity-60"></div>{" "}
        <div className="py-2 px-2 flex-grow">{children}</div>
      </motion.div>
      <div className="h-36 4k:h-64"></div>
    </div>
  )
}

export default GradientBackground
