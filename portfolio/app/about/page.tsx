import AboutPage from "@/components/about/AboutPage"
import PersonalInfo from "@/components/about/PersonalInfo"
import GradientBackground from "@/components/GradientBackground"

// Rebuild this page on the server at most once an hour, so the age shown
// updates after a birthday without needing a redeploy
export const revalidate = 3600

const About = () => {
  return (
    <GradientBackground text="ABOUT">
      <AboutPage info={<PersonalInfo />} />
    </GradientBackground>
  )
}

export default About
