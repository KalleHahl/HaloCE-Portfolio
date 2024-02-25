import useWindowDimensions from "@/utils/useWindowDimension"

interface TriangleProps {
  direction: "right" | "left"
  handleCLick: (direction: "right" | "left") => void
}

const Arrow = ({ direction, handleCLick }: TriangleProps) => {
  const { width = 1920 } = useWindowDimensions()
  const w = width < 640 ? 30 : width < 2560 ? 40 : 60
  const h = width < 640 ? 225 : width < 2560 ? 300 : 450
  const points = {
    top: [`${w / 2},0`, `0,${h}`, `${w},${h}`],
    right: [`0,0`, `0,${h}`, `${w},${h / 2}`],
    bottom: [`0,0`, `${w},0`, `${w / 2},${h}`],
    left: [`${w},0`, `${w},${h}`, `0,${h / 2}`],
  }

  const align = direction === "left" ? "justify-end" : "justify-start"

  return (
    <div className={`flex ${align} items-center w-1/5`}>
      <svg width={w} height={h}>
        <polygon
          points={points[direction].join(" ")}
          tabIndex={0}
          className="fill-sky-700 opacity-50 stroke-sky-500 hover:fill-white"
          onClick={() => handleCLick(direction)}
        />
      </svg>
    </div>
  )
}

export default Arrow
