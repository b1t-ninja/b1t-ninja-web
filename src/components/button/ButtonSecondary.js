"use client"
import {motion} from "framer-motion"

export default function ButtonSecondary({children}) {
  return <motion.button
    whileHover={{opacity : 0.8}}
    className={"p-2 rounded bg-[var(--bg-gray)] transition-colors duration-300"}>
    <p className={"font-bold text-sm"}>{children}</p>
  </motion.button>
}