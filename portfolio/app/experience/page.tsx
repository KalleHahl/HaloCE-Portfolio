import GradientBackground from "@/components/GradientBackground"
import Carousel from "@/components/Carousel"
import { experiences } from "@/public/data/experiences"

const ExperiencePage = () => {
  return (
    <GradientBackground text="EXPERIENCE">
      <Carousel items={experiences} />
    </GradientBackground>
  )
}

export default ExperiencePage
