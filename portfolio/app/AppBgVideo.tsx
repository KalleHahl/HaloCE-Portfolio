export default function AppBgVideo() {
  return (
    <video
      src="/BGvideo.mp4"
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
      playsInline
    />
  )
}
