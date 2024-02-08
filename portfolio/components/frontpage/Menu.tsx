"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const MenuItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link href={href}>
      <div className="group relative">
        <div className="w-full md:max-w-xl h-14 blur-xl group-hover:bg-sky-600 ease-in-out rounded-full absolute top-4" />
        <p className=" text-sky-700 opacity-80 text-6xl rounded-full font-handel py-4 transition duration-300 ease-in-out group-hover:scale-105 group-hover:text-white group-hover:opacity-100">
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
        className="flex flex-col items-center justify-center h-screen"
      >
        <MenuItem text="HOME" href="/" />
        <MenuItem text="ABOUT" href="/about" />
        <MenuItem text="PROJECTS" href="/about" />
        <MenuItem text="EXPERIENCE" href="/about" />
      </motion.div>
    </div>
  )
}

export default Menu
