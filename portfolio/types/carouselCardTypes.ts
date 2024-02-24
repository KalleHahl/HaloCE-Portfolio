import { StaticImageData } from "next/image"

interface BaseCard {
  title: string
  description: string
  image: StaticImageData
  difficulty: StaticImageData
  url: string
}

export interface ProjectCard extends BaseCard {
  technologies: string
}

export interface ExperienceCard extends BaseCard {
  time: string
}

export type CarouselCard = ProjectCard | ExperienceCard

export interface CarouselProps {
  items: CarouselCard[]
}
