import Arrow from "../Arrow"
import InfoCard from "../InfoCard"

const ProjectsPage = () => {
  return (
    <div className="relative flex h-full justify-center">
      <Arrow direction="left" />
      <div className="flex w-full absolute lg:relative invisible lg:visible justify-center px-4 gap-4">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <div className="flex w-full absolute invisible md:visible md:relative lg:invisible lg:absolute justify-center px-4 gap-4">
        <InfoCard />
        <InfoCard />
      </div>
      <div className="flex w-ful  md:invisible md:absolute justify-center px-4 gap-4">
        <InfoCard />
      </div>
      <Arrow direction="right" />
    </div>
  )
}

export default ProjectsPage
