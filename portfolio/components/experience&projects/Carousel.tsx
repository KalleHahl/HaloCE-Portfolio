"use client"

import { useState } from "react"

import Arrow from "./Arrow"
import InfoCard from "./InfoCard"
import { CarouselProps } from "@/types/carouselCardTypes"

// How many cards show is decided by CSS, so the right number renders
// immediately with no flash: 1 on phones, 2 from sm, 3 from xl.
const visibility = ["", "hidden sm:block", "hidden xl:block"]

const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const itemsLength = items.length

  const handleCLick = (direction: "left" | "right") => {
    setCurrentIndex((prevIndex) =>
      direction === "left"
        ? (prevIndex - 1 + itemsLength) % itemsLength
        : (prevIndex + 1) % itemsLength
    )
  }

  // Never render more cards than there are items, or one would appear twice
  const cards = [...Array(Math.min(visibility.length, itemsLength)).keys()]
  return (
    <div className="flex h-full justify-center">
      <Arrow direction="left" handleCLick={() => handleCLick("left")} />
      <div className="flex w-full justify-center gap-4 px-2 sm:px-4">
        {cards.map((offset) => {
          const index = (currentIndex + offset) % itemsLength
          return (
            <InfoCard
              key={index}
              item={items[index]}
              className={visibility[offset]}
            />
          )
        })}
      </div>
      <Arrow direction="right" handleCLick={() => handleCLick("right")} />
    </div>
  )
}

export default Carousel
