"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

import kalgo from "@/public/kalgo.png"

const MenuItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className=" text-sky-700 opacity-70 text-4xl lg:text-6xl 2k:text-7xl 4k:text-8xl rounded-full font-handel py-2 transition duration-300 ease-in-out hover:scale-105 hover:text-white hover:opacity-100 hover:text-shadow-lg shadow-sky-400 focus:scale-105 focus:text-white focus:opacity-100 focus:text-shadow-lg focus:outline-none"
    >
      {text}
    </Link>
  )
}

const Menu = () => {
  return (
    <div className="grid place-content-center h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center h-screen"
      >
        <Image
          src={kalgo}
          alt="kalgo"
          className="mb-10 lg:mb-20 drop-shadow-sm px-10"
        />
        <MenuItem text="ABOUT" href="/about" />
        <MenuItem text="PROJECTS" href="/projects" />
        <MenuItem text="EXPERIENCE" href="/experience" />
        <MenuItem text="CONTACT" href="/contact" />
      </motion.div>
    </div>
  )
}

export default Menu
