import GradientBackground from "@/components/GradientBackground"
import Carousel from "@/components/experience&projects/Carousel"
import { experiences } from "@/public/data/experiences"

const ExperiencePage = () => {
  return (
    <GradientBackground text="EXPERIENCE">
      <Carousel items={experiences} />
    </GradientBackground>
  )
}

export default ExperiencePage
