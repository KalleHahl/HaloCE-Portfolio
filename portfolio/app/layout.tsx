import "./globals.css"
import React from "react"
import { Header } from "../components/Header"
import AppBgImg from "./AppBgImg"
import localfont from "next/font/local"
import { motion } from "framer-motion"
// import { Inter } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] })

const handel = localfont({
  src: "../public/fonts/HandelGothic BT.ttf",
  variable: "--font-handel",
})

export const metadata = {
  title: "Kalle | Personal Portfolio",
  description:
    "Computer science student with an interest in both backend and frontend development",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${handel.variable} bg-black relative`}>
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        > */}
        <AppBgImg />
        {children}
        {/* </motion.div> */}
      </body>
    </html>
  )
}

export default RootLayout
