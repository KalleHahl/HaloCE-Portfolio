"use client"
import { motion } from "framer-motion"

const MenuItem = ({ text }: { text: string }) => {
  return (
    <div className="text-sky-700 text-6xl font-handel py-4 transition duration-500 ease-in-out hover:scale-110 hover:text-sky-500 ">
      {text}
    </div>
  )
}

const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center h-screen"
      >
        <MenuItem text="HOME" />
        <MenuItem text="ABOUT" />
        <MenuItem text="PROJECTS" />
        <MenuItem text="EXPERIENCE" />
      </motion.div>
    </div>
  )
}

export default Menu
