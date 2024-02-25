import "./globals.css"
import React from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import localfont from "next/font/local"
import AppBgVideo from "./AppBgVideo"

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
        <AppBgVideo />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
