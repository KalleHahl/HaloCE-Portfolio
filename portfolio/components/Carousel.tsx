"use client"
import Arrow from "./Arrow"
import InfoCard from "./InfoCard"
import { useState } from "react"

import { CarouselProps } from "@/types/carouselCardTypes"

const Carousel = ({ items }: CarouselProps) => {
  const [firstIndex, setFirstIndex] = useState(0)
  const [secondIndex, setSecondIndex] = useState(1)
  const [thirdIndex, setThirdIndex] = useState(2)

  const itemsLength = items.length
  const handleCLick = (direction: "left" | "right") => {
    if (direction === "left") {
      setFirstIndex((prev) => (prev - 1 + itemsLength) % itemsLength)
      setSecondIndex((prev) => (prev - 1 + itemsLength) % itemsLength)
      setThirdIndex((prev) => (prev - 1 + itemsLength) % itemsLength)
    } else {
      setFirstIndex((prev) => (prev + 1) % itemsLength)
      setSecondIndex((prev) => (prev + 1) % itemsLength)
      setThirdIndex((prev) => (prev + 1) % itemsLength)
    }
  }
  return (
    <div className="relative flex h-full justify-center">
      <Arrow direction="left" handleCLick={handleCLick} />
      <div className="flex w-full absolute lg:relative invisible lg:visible justify-center px-4 gap-4">
        <InfoCard item={items[firstIndex]} />
        <InfoCard item={items[secondIndex]} />
        {items.length >= 3 && (
          <>
            <InfoCard item={items[thirdIndex]} />
          </>
        )}
      </div>
      <div className="flex w-full absolute invisible md:visible md:relative lg:invisible lg:absolute justify-center px-4 gap-4">
        <InfoCard item={items[firstIndex]} />
        <InfoCard item={items[secondIndex]} />
      </div>
      <div className="flex w-ful  md:invisible md:absolute justify-center px-4 gap-4">
        <InfoCard item={items[firstIndex]} />
      </div>
      <Arrow direction="right" handleCLick={handleCLick} />
    </div>
  )
}

export default Carousel
