import Image from "next/image";
import {TypographyP} from "@/components/typography/TypographyP";
import Link from "next/link";

export default function NavBar() {
  return <>
    <div className={'backdrop-blur-md sticky top-0 p-2 ml-2 mr-2 flex flex-row items-center justify-between rounded-full'}>
      <Link href={"/"}>
        <Image src={"azelf.svg"} alt={"pix"} width={30} height={30}/>
      </Link>
      <Link href={"/"}>
        <TypographyP>About</TypographyP>
      </Link>
      <Link href={"/work"}>
        <TypographyP>Work</TypographyP>
      </Link>
      <Link href={"/contact"}>
        <TypographyP>Contact</TypographyP>
      </Link>
      <Link href={"/"}>
        <TypographyP>Blog</TypographyP>
      </Link>
    </div>
  </>
}