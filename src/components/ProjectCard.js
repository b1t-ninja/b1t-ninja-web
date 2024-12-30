import Image from "next/image";
import {TypographyH4} from "@/components/typography/TypographyH4";
import {TypographyP} from "@/components/typography/TypographyP";

export default function ProjectCard({picture, title, description}) {
  return <div className={'flex flex-col items-center bg-[var(--bg-gray)] rounded w-1/2 p-2 space-y-2'}>
    <Image src={picture} alt={title} width={50} height={50}/>
    <TypographyH4>{title}</TypographyH4>
    <TypographyP>{description}</TypographyP>
  </div>
}