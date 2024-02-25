import {
  CarouselCard,
  ProjectCard,
  ExperienceCard,
} from "@/types/carouselCardTypes"
import Image from "next/image"
import Link from "next/link"

const InfoCard = ({ item }: { item: CarouselCard }) => {
  const project = "technologies" in item
  const experience = "time" in item
  return (
    <Link
      href={item.url}
      rel="noopener noreferrer"
      target="_blank"
      className="w-full h-full lg:py-2 overflow-y-auto rounded-3xl scrollbar-none bg-black bg-opacity-30 px-2 2k:px-4 hover:ring-4 2k:hover:ring-8 hover:ring-sky-500 hover:bg-sky-900 hover:bg-opacity-30 focus:outline-none focus:ring-4 focus:ring-sky-500 focus:bg-sky-900 focus:bg-opacity-30"
    >
      <p className=" text-center text-lg lg:text-3xl 2k:text-5xl font-bold ">
        {item.title}
      </p>
      <div className="flex justify-center px-4 2k:pt-2">
        <Image
          src={item.image}
          alt={item.title}
          className="width-full h-40 lg:h-48 2k:h-80"
        />
      </div>
      <p className="mt-2 2k:mt-6 text-lg lg:text-2xl 2k:text-5xl font-bold ">
        Description:
      </p>
      <p className="ml-3 lg:text-lg 2k:text-3xl font-bold ">
        {item.description}
      </p>
      {project && (
        <>
          <p className="mt-2 2k:mt-6 text-lg lg:text-2xl 2k:text-5xl font-bold ">
            Technologies:
          </p>
          <p className="ml-3 lg:text-lg 2k:text-3xl font-bold ">
            {(item as ProjectCard).technologies}
          </p>
        </>
      )}
      {experience && (
        <>
          <p className="mt-2 2k:mt-6 text-lg lg:text-2xl 2k:text-5xl font-bold ">
            Time:
          </p>
          <p className="ml-3 lg:text-lg 2k:text-3xl font-bold ">
            {(item as ExperienceCard).time}
          </p>
        </>
      )}
      <p className=" mt-2 2k:mt-6 text-lg lg:text-2xl 2k:text-5xl font-bold ">
        Difficulty:
      </p>

      <div className="flex justify-center">
        <Image
          src={item.difficulty}
          alt="difficulty"
          className="size-20 lg:size-28 mt-4 2k:size-52 -translate-y-1/4 2k:translate-y-1/4"
        />
      </div>
    </Link>
  )
}

export default InfoCard
