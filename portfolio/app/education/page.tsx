import GradientBackground from "@/components/GradientBackground"
import Carousel from "@/components/experience&projects/Carousel"
import { education } from "@/public/data/education"

const EducationPage = () => {
  return (
    <GradientBackground text="EDUCATION">
      <Carousel items={education} />
    </GradientBackground>
  )
}

export default EducationPage
