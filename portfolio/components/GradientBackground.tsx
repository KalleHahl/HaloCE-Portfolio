import React from "react"

const GradientBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen py-40">
      {" "}
      <div className="flex flex-row relative h-full py-10 px-10 border-b-4 border-t-4 border-sky-700">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900 to-black opacity-60"></div>{" "}
        {children}
      </div>
    </div>
  )
}

export default GradientBackground
