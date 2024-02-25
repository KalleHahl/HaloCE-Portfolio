import Image from "next/image"

import MyPic from "@/public/MyPic.png"
import getAge from "@/utils/getAge"

const PersonalInfo = () => {
  const age = getAge()
  return (
    <div className="flex lg:translate-x-52 justify-center mb-6">
      <Image src={MyPic} alt="MyPicture" className="h-96 w-[122px]" />
      <div className="flex flex-col gap-2 pl-6">
        <div className="font-bold lg:text-2xl">
          AGE: <p className="lg:text-xl ml-6">{age}</p>
        </div>
        <div className="font-bold lg:text-2xl">
          LOCATION: <p className="lg:text-xl ml-6">Helsinki, Finland</p>
        </div>

        <div className="font-bold lg:text-2xl">
          EDUCATION:{" "}
          <p className="lg:text-xl ml-6">
            University Of Helsinki, Computer Science
          </p>
        </div>

        <div className="font-bold lg:text-2xl">
          Status: <p className="lg:text-xl ml-6">Active</p>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
