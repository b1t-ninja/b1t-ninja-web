"use client"
import {motion} from "framer-motion"

export default function ButtonOutline({children}) {
  return <motion.button
    whileHover={{opacity : 0.8}}
    className={"p-2 rounded border border-[var(--bg-gray)] transition-colors duration-300"}>
    <p className={"font-bold text-sm"}>{children}</p>
  </motion.button>
}