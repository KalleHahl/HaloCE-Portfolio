import "./globals.css"
import { Header } from "../components/Header"
import localfont from "next/font/local"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const handel = localfont({
  src: "../public/fonts/HandelGothic BT.ttf",
  variable: "--font-handel",
})

export const metadata = {
  title: "Kalle | Personal Portfolio",
  description:
    "Computer science student with an interest in both backend and frontend development",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${handel.variable}`}>{children}</body>
    </html>
  )
}
