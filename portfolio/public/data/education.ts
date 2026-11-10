import heroic from "@/public/difficulties/heroic.png"
import legendary from "@/public/difficulties/legendary.png"

import aalto from "@/public/educationphotos/aalto.jpg"
import helsinkiUni from "@/public/educationphotos/helsinki_uni.jpg"

import { EducationCard } from "@/types/carouselCardTypes"

export const education: EducationCard[] = [
  {
    title: "Aalto University",
    description: "Master of Science, Information and Service Management",
    minor: "Data Science (University of Helsinki)",
    image: aalto,
    status: "Ongoing",
    url: "https://www.aalto.fi/en",
    difficulty: legendary,
  },
  {
    title: "University of Helsinki",
    description: "Bachelor of Science, Computer Science",
    minor: "Real Analysis",
    image: helsinkiUni,
    status: "Completed",
    url: "https://www.helsinki.fi/en",
    difficulty: heroic,
  },
]
