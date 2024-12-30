'use client'
import {motion} from "framer-motion"

export default function Button({children}) {
  return <motion.button
    whileHover={{opacity : 0.8}}
    className={"p-2 bg-[var(--fg)] text-[var(--bg)] rounded transition-colors duration-300"}>
    <p className={"font-bold text-sm"}>{children}</p>
  </motion.button>
}