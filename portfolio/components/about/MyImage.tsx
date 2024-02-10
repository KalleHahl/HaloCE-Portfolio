import Image from "next/image"
import myImage from "../../public/IMG_2576.jpg"

const MyImage = () => {
  return (
    <div className=" flex content-center items-center justify-center w-64 h-64 border-4 border-sky-700 rounded-xl">
      <Image
        src={myImage}
        width={0}
        height={0}
        style={{ borderRadius: "10px", width: "230px", height: "230px" }}
        alt="Your Picture"
      />
    </div>
  )
}

export default MyImage
