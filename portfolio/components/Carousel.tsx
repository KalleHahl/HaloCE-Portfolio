"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import Arrow from "./Arrow"
import InfoCard from "./InfoCard"

import { CarouselProps } from "@/types/carouselCardTypes"

const Carousel = ({ items }: CarouselProps) => {
  const [firstIndex, setFirstIndex] = useState<number>(0)
  const [secondIndex, setSecondIndex] = useState<number>(1)
  const [thirdIndex, setThirdIndex] = useState<number>(2)

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
    <motion.div
      className="relative flex h-full justify-center"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Arrow direction="left" handleCLick={handleCLick} />
      <div className="flex w-full absolute xl:relative invisible xl:visible justify-center px-4 gap-4">
        <InfoCard item={items[firstIndex]} />
        <InfoCard item={items[secondIndex]} />
        {items.length >= 3 && (
          <>
            <InfoCard item={items[thirdIndex]} />
          </>
        )}
      </div>
      <div className="flex w-full absolute invisible md:visible md:relative xl:invisible xl:absolute justify-center px-4 gap-4">
        <InfoCard item={items[firstIndex]} />
        <InfoCard item={items[secondIndex]} />
      </div>
      <div className="flex w-ful  md:invisible md:absolute justify-center px-4 gap-4">
        <InfoCard item={items[firstIndex]} />
      </div>
      <Arrow direction="right" handleCLick={handleCLick} />
    </motion.div>
  )
}

export default Carousel
