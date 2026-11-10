import Image from "next/image"

import MyPic from "@/public/MyPic.png"
import getAge from "@/utils/getAge"

interface InfoLineProps {
  title: string
  // A list renders one item per line
  value: string | number | string[]
}

const InfoLine = ({ title, value }: InfoLineProps) => {
  return (
    <div className="font-bold lg:text-2xl 2k:text-4xl">
      {title}:{" "}
      {(Array.isArray(value) ? value : [value]).map((line) => (
        <p key={line} className="lg:text-xl 2k:text-3xl ml-6">
          {line}
        </p>
      ))}
    </div>
  )
}

const PersonalInfo = () => {
  const age = getAge()
  return (
    <div className="mb-6 flex flex-grow flex-col items-center md:flex-row md:items-start md:justify-center">
      <div className="hidden md:block md:flex-1" />
      <Image
        src={MyPic}
        alt="MyPicture"
        className="h-56 w-[71px] md:h-96 md:w-[122px] 2k:h-[500px] 2k:w-[160px]"
      />
      <div className="mt-4 flex w-full flex-col gap-2 md:mt-0 md:w-auto md:flex-1 md:pl-6">
        <InfoLine title="AGE" value={age} />
        <InfoLine title="LOCATION" value="Helsinki, Finland" />
        <InfoLine
          title="EDUCATION"
          value={[
            "Aalto University, M.Sc. Information and Service Management (ongoing)",
            "University of Helsinki, B.Sc. Computer Science",
          ]}
        />
        <InfoLine
          title="STATUS"
          value="Software Developer & Master's Student"
        />
      </div>
    </div>
  )
}

export default PersonalInfo
