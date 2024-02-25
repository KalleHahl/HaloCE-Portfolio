"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import back from "@/public/back.png"

const GradientBackground = ({
  text,
  children,
}: {
  text: string
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="relative h-36 2k:h-48 4k:h-64">
        <div className="flex flex-col justify-end">
          <motion.p
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "-50%", opacity: 1 }}
            className="font-handel text-shadow-lg shadow-sky-900 text-5xl lg:text-7xl 2k:text-8xl absolute text-sky-500 bottom-0 left-1/2 lg:left-1/4"
          >
            {text}
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-1 relative overflow-hidden border-b-[3px] border-t-[3px] 2k:border-t-[6px] 2k:border-b-[6px] border-sky-500"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900 to-black h-full opacity-60"></div>
        <div className="py-2 px-2 flex-grow">{children}</div>
      </motion.div>
      <div className="flex justify-end h-36 2k:h-48 4k:h-64 py-3">
        <Link
          href="/"
          className="group relative flex translate-x-1/2 right-1/2 lg:right-1/4 focus:outline-none "
        >
          <Image
            src={back}
            className=" rounded-full mx-4 skew-x-12 size-14 drop-shadow-sm duration-300 ease-in-out group-hover:scale-105 group-focus:scale-105  group-focus:outline-none"
            alt="backbutton"
          />
          <p className="font-bold text-5xl text-shadow-lg shadow-sky-900 transition duration-300 ease-in-out group-hover:shadow-sky-400  group-hover:text-white group-hover:scale-105 group-focus:scale-105 group-focus:text-white group-focus:shadow-sky-400 group-focus:outline-none">
            =BACK
          </p>
        </Link>
      </div>
    </div>
  )
}

export default GradientBackground
