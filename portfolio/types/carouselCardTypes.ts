interface BaseCard {
  title: String
  description: String
  image: String
  difficulty: String
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
