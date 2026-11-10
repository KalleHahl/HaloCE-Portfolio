import { StaticImageData } from "next/image"

interface BaseCard {
  title: string
  description: string
  image?: StaticImageData
  difficulty: StaticImageData
  url: string
}

export interface ProjectCard extends BaseCard {
  technologies: string
}

export interface ExperienceCard extends BaseCard {
  time: string
}

export interface EducationCard extends BaseCard {
  minor?: string
  status: string
}

export type CarouselCard = ProjectCard | ExperienceCard | EducationCard

export interface CarouselProps {
  items: CarouselCard[]
}
