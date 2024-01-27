import "./globals.css"
import { Header } from "../components/Header"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

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
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="absolute inset-0 h-screen flex items-center justify-center">
          <div className="bg-[#cbd5e1] h-[60rem] w-[100rem] rounded-full blur-[15rem]"></div>
        </div>
        <Header />
        {children}
      </body>
    </html>
  )
}
