import React from "react"
import Image from "next/image"
import Link from "next/link"

import BackHotkey from "./BackHotkey"
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
          <p className="font-handel text-shadow-lg shadow-sky-900 text-5xl lg:text-7xl 2k:text-8xl absolute text-sky-500 bottom-0 left-1/2 lg:left-1/4 -translate-x-1/2">
            {text}
          </p>
        </div>
      </div>
      <div className="flex flex-1 relative overflow-hidden border-b-[2px] border-t-[2px] 2k:border-t-[6px] 2k:border-b-[6px] border-sky-500">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900 to-black h-full opacity-60"></div>
        <div className="p-3 2k:p-5 relative flex-grow">{children}</div>
      </div>
      <div className="flex justify-end h-36 2k:h-48 4k:h-64 py-3">
        <div className="relative translate-x-1/2 right-1/2 lg:right-1/4">
          <BackHotkey href="/" />
          <Link href="/" className="group  flex  focus:outline-none ">
            <Image
              src={back}
              className=" rounded-full mx-4 skew-x-12 size-9 lg:size-14 drop-shadow-sm duration-300 ease-in-out group-hover:scale-105 group-focus:scale-105  group-focus:outline-none"
              alt="backbutton"
            />
            <p className="font-bold text-3xl lg:text-5xl text-shadow-lg shadow-sky-900 transition duration-300 ease-in-out group-hover:shadow-sky-400  group-hover:text-white group-hover:scale-105 group-focus:scale-105 group-focus:text-white group-focus:shadow-sky-400 group-focus:outline-none">
              =BACK
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GradientBackground
