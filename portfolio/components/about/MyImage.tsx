import Image from "next/image"
import myImage from "../../public/IMG_2576.jpg"

const MyImage = () => {
  return (
    <div className="flex flex-row relative content-center justify-center">
      <div className=" flex content-center items-center justify-center px-2 py-2 w-32 h-32  xl:w-64 xl:h-64 border-4 border-sky-700 rounded-xl">
        <Image
          src={myImage}
          objectFit=" cover"
          className="rounded-xl"
          alt="My image"
        />
      </div>
    </div>
  )
}

export default MyImage
