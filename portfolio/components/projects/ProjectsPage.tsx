import Arrow from "../Arrow"
import InfoCard from "../InfoCard"

const ProjectsPage = () => {
  return (
    <div className="relative flex h-full justify-center">
      <div className="flex justify-center items-center">
        <Arrow direction="left" />
        <div className="w-2/3">
          <div className="flex w-full justify-evenly">
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </div>

        <Arrow direction="right" />
        {/* <div className="h-0 w-0 relative lg:h-[300px] lg:w-[60px]">
        <div className="absolute inset-0 border-b-transparent border-r-sky-700 border-t-transparent border-opacity-50 hover:border-r-white hover:border-opacity-50 lg:border-b-[300px] lg:border-r-[60px] lg:border-t-[300px]"></div>
      </div>
      <div className="h-0 w-0 relative lg:h-[300px] lg:w-[60px]">
        <div className="absolute inset-0 border-b-transparent border-l-sky-700 border-t-transparent border-opacity-50 hover:border-l-white hover:border-opacity-50 lg:border-b-[300px] lg:border-l-[60px] lg:border-t-[300px]"></div>
      </div> */}
      </div>
    </div>
  )
}

export default ProjectsPage
