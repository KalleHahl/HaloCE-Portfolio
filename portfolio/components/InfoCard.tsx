import {
  CarouselCard,
  ProjectCard,
  ExperienceCard,
} from "@/types/carouselCardTypes"
import Image from "next/image"

const InfoCard = ({ item }: { item: CarouselCard }) => {
  const project = "technologies" in item
  const experience = "time" in item
  return (
    <div className="w-full h-full overflow-hidden rounded-3xl border-4 border-transparent bg-black bg-opacity-30 px-2 hover:border-sky-500 hover:bg-sky-900 hover:bg-opacity-30">
      <p className="text-center text-2xl lg:text-3xl 2k:text-5xl font-bold text-sky-500">
        {item.title}
      </p>
      <div className="flex justify-center px-4">
        <Image
          src={item.image as string}
          alt={item.title as string}
          className="width-full h-auto max-h-40 lg:max-h-56 2k:max-h-80"
        />
      </div>
      <p className="mt-2 2k:mt-6 text-2xl lg:text-3xl 2k:text-5xl font-bold text-sky-500">
        Description:
      </p>
      <p className="ml-3 lg:text-xl 2k:text-3xl font-bold text-sky-500">
        {item.description}
      </p>
      {project && (
        <>
          <p className="mt-2 2k:mt-6 text-2xl lg:text-3xl 2k:text-5xl font-bold text-sky-500">
            Technologies:
          </p>
          <p className="ml-3 lg:text-xl 2k:text-3xl font-bold text-sky-500">
            {(item as ProjectCard).technologies}
          </p>
        </>
      )}
      {experience && (
        <>
          <p className="mt-2 2k:mt-6 text-2xl lg:text-3xl 2k:text-5xl font-bold text-sky-500">
            Time:
          </p>
          <p className="ml-3 lg:text-xl 2k:text-3xl font-bold text-sky-500">
            {(item as ExperienceCard).time}
          </p>
        </>
      )}
      <p className="mt-2 2k:mt-6 text-2xl lg:text-3xl 2k:text-5xl font-bold text-sky-500">
        Difficulty:
      </p>
      <div className="flex justify-center">
        <Image
          src={item.difficulty as string}
          alt="difficulty"
          className="w-20 h-20 lg:w-32 lg:h-32 mt-4 2k:w-60 2k:h-full"
        />
      </div>
    </div>
  )
}

export default InfoCard
