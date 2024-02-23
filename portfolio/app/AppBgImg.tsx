export default function AppBgImg() {
  return (
    <video
      src={require("../public/BGvideo.mp4")}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
        position: "absolute",
      }}
      autoPlay
      loop
      muted
    />
  )
}
