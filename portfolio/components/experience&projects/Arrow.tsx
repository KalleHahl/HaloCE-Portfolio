interface TriangleProps {
  direction: "right" | "left"
  handleCLick: (direction: "right" | "left") => void
}

const Arrow = ({ direction, handleCLick }: TriangleProps) => {
  const w = 40
  const h = 300
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
          className="fill-sky-700 opacity-50 stroke-sky-500 hover:fill-white focus:fill-white"
          onClick={() => handleCLick(direction)}
        />
      </svg>
    </div>
  )
}

export default Arrow
