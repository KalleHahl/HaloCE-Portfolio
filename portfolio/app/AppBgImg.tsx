import Image from "next/image"
import bgImage from "../public/halo1.jpg"

export default function AppBgImg() {
  return (
    <Image
      src={bgImage}
      alt="Halo 1"
      placeholder="blur"
      fill
      sizes="100vw"
      style={{ objectFit: "cover", zIndex: -1, position: "absolute" }}
      priority
    />
  )
}
