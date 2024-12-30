"use client"
import {motion} from "framer-motion"
import Image from "next/image"

export default function IconButton({path}) {
  return <motion.button
    whileHover={{opacity: 0.8}}
    className={"p-2 rounded transition-colors duration-300"}>
    <Image width={20} height={20} src={path} alt=""/>
  </motion.button>
}