"use client"

import { motion } from "framer-motion"
import { useState } from "react"

import Arrow from "./Arrow"
import InfoCard from "./InfoCard"
import useWindowDimensions from "@/utils/useWindowDimension"
import { CarouselProps } from "@/types/carouselCardTypes"

const Carousel = ({ items }: CarouselProps) => {
  const { width = 1920 } = useWindowDimensions()
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const itemsLength = items.length

  const handleCLick = (direction: "left" | "right") => {
    setCurrentIndex((prevIndex) =>
      direction === "left"
        ? (prevIndex - 1 + itemsLength) % itemsLength
        : (prevIndex + 1) % itemsLength
    )
  }

  const cards = width < 640 ? [0] : width < 1280 ? [0, 1] : [0, 1, 2]
  return (
    <motion.div
      className="flex h-full justify-center"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Arrow direction="left" handleCLick={() => handleCLick("left")} />
      <div className="flex w-full justify-center px-4 gap-4">
        {cards.map((offset) => {
          const index = (currentIndex + offset) % itemsLength
          return <InfoCard key={index} item={items[index]} />
        })}
      </div>
      <Arrow direction="right" handleCLick={() => handleCLick("right")} />
    </motion.div>
  )
}

export default Carousel
