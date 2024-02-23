"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const MenuItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link href={href}>
      <div className="group relative">
        <p className=" text-sky-700 opacity-70 text-4xl md:text-6xl 4k:text-8xl rounded-full font-handel py-2 transition duration-300 ease-in-out group-hover:scale-105 group-hover:text-white group-hover:opacity-100 group-hover:text-shadow-lg shadow-sky-400">
          {text}
        </p>
      </div>
    </Link>
  )
}

const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center h-screen md:h-full"
      >
        <MenuItem text="HOME" href="/" />
        <MenuItem text="ABOUT" href="/about" />
        <MenuItem text="PROJECTS" href="/projects" />
        <MenuItem text="EXPERIENCE" href="/experience" />
      </motion.div>
    </div>
  )
}

export default Menu
