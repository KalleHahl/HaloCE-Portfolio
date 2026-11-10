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
    <div className="flex flex-grow justify-center mb-6">
      <div className="sm:flex-1" />
      <Image
        src={MyPic}
        alt="MyPicture"
        className="h-96 w-[122px] 2k:h-[500px] 2k:w-[160px]"
      />
      <div className="flex flex-1 flex-col gap-2 pl-6">
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
