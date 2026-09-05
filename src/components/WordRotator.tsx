"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const WORDS = ["타이핑 경험", "사용 경험", "퍼포먼스", "몰입감"] as const

type Direction = "down" | "left"

const variants = {
  enter: (dir: Direction) =>
    dir === "down"
      ? { y: "-100%", x: 0, opacity: 0 }
      : { x: "40%", y: 0, opacity: 0 },
  center: { y: 0, x: 0, opacity: 1 },
  exit: (dir: Direction) =>
    dir === "down"
      ? { y: "100%", x: 0, opacity: 0 }
      : { x: "-40%", y: 0, opacity: 0 },
}

export default function WordRotator() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<Direction>("down")
  const [hasCycled, setHasCycled] = useState(false)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHasCycled(true)
      setIndex((prev) => {
        setDirection(prev % 2 === 0 ? "down" : "left")
        return (prev + 1) % WORDS.length
      })
    }, 2600)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <span className="relative inline-flex h-[1.15em] min-w-[6.2em] items-center justify-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.span
          key={WORDS[index]}
          custom={direction}
          variants={variants}
          initial={hasCycled ? "enter" : false}
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-[#5B4FFF] via-[#9B8FFF] to-[#5B4FFF] bg-clip-text text-transparent"
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
