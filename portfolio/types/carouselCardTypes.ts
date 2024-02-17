import { StaticImageData } from "next/image"

interface BaseCard {
  title: String
  description: String
  image: StaticImageData
  difficulty: StaticImageData
}

export interface ProjectCard extends BaseCard {
  technologies: String
}

export interface ExperienceCard extends BaseCard {
  time: String
}

export type CarouselCard = ProjectCard | ExperienceCard

export interface CarouselProps {
  items: CarouselCard[]
}
