interface TriangleProps {
  direction: "right" | "left"
  handleCLick: (direction: "right" | "left") => void
}

// Triangle drawn in a 40x300 box and stretched to the size set by CSS
const points = {
  right: "0,0 0,300 40,150",
  left: "40,0 40,300 0,150",
}

const Arrow = ({ direction, handleCLick }: TriangleProps) => {
  const align = direction === "left" ? "justify-end" : "justify-start"

  return (
    <div className={`flex ${align} shrink-0 items-center lg:w-1/5`}>
      <button
        type="button"
        aria-label={direction === "left" ? "Previous" : "Next"}
        onClick={() => handleCLick(direction)}
        className="group focus:outline-none"
      >
        <svg
          viewBox="0 0 40 300"
          preserveAspectRatio="none"
          className="h-40 w-5 sm:h-72 sm:w-10 2k:h-[450px] 2k:w-[60px] short:h-56 tiny:h-28 tiny:w-5"
        >
          <polygon
            points={points[direction]}
            vectorEffect="non-scaling-stroke"
            className="fill-sky-700 stroke-sky-500 opacity-50 group-hover:fill-white group-focus-visible:fill-white"
          />
        </svg>
      </button>
    </div>
  )
}

export default Arrow
