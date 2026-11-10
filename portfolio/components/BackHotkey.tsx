"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

// Pressing "B" does the same as clicking the =BACK button
const BackHotkey = ({ href = "/" }: { href?: string }) => {
  const router = useRouter()

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "b") return
      // Leave browser/OS shortcuts like Cmd+B alone, and ignore key repeat
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return
      // Don't hijack typing in form fields
      const target = e.target as HTMLElement | null
      if (
        target?.isContentEditable ||
        target?.closest("input, textarea, select")
      )
        return

      router.push(href)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [router, href])

  return null
}

export default BackHotkey
