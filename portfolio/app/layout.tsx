import "./globals.css"
import React from "react"
import AppBgImg from "./AppBgImg"
import localfont from "next/font/local"

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
        <AppBgImg />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
