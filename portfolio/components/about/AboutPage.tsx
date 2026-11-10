"use client"
import { ReactNode, useEffect, useRef } from "react"
import { ReactTyped } from "react-typed"

// How close (in px) to the bottom counts as "at the bottom"
const BOTTOM_THRESHOLD = 40

// `info` is rendered on the server (see app/about/page.tsx), so the age in it
// is never recalculated in the browser
const AboutPage = ({ info }: { info: ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Keep the box scrolled to the newest typed text. If the visitor scrolls
  // up to reread, stop following until they scroll back to the bottom.
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let follow = true
    let userInteracting = false

    const isNearBottom = () =>
      el.scrollHeight - el.scrollTop - el.clientHeight < BOTTOM_THRESHOLD

    const markUserInput = () => {
      userInteracting = true
    }
    const onScroll = () => {
      if (userInteracting) {
        follow = isNearBottom()
        userInteracting = false
      }
    }

    const observer = new MutationObserver(() => {
      if (follow) el.scrollTop = el.scrollHeight
    })
    observer.observe(el, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    const inputEvents = ["wheel", "touchmove", "keydown"] as const
    inputEvents.forEach((e) =>
      el.addEventListener(e, markUserInput, { passive: true })
    )
    el.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observer.disconnect()
      inputEvents.forEach((e) => el.removeEventListener(e, markUserInput))
      el.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div className="flex flex-col h-full lg:flex-row lg:justify-center lg:px-44">
      <div
        ref={scrollRef}
        className="lg:w-full sm:mx-5 overflow-y-auto overflow-x-hidden scrollbar-none px-4 py-5 sm:px-5 xl:px-10 xl:py-10 border-4 rounded-xl border-sky-500 bg-black bg-opacity-30 "
      >
        {info}
        <ReactTyped
          strings={[
            "Driven and compassionate software developer and business technology student from Helsinki, with a strong passion for technology and a keen interest in problem-solving. I hold a bachelor's degree in computer science from the University of Helsinki, and I am currently pursuing a master's degree in information and service management at Aalto University, with a minor in data science.</br></br>Alongside my studies, I work as a software developer at Mobile Wellness Solutions, building frontend features with TypeScript and React. Working on a real product has taught me as much about collaboration and communication as it has about code.</br></br>I consider social skills one of my strongest assets, and I thrive in a teamwork setting. Throughout both my academic and professional journeys, I've gained experience working in groups with people from diverse backgrounds.</br></br>As an avid film and music enthusiast, I enjoy exploring new music genres and attending film festivals. In the future, I hope to find a way to combine my passion for technology with my love for music and cinema.",
          ]}
          typeSpeed={10}
          cursorChar=""
          className="text-sky-500 font-bold lg:text-3xl 2k:text-5xl"
        />
      </div>
    </div>
  )
}

export default AboutPage
