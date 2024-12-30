import Button from "@/components/button/Button";
import Link from "next/link";

export default function HeroSection() {
  return <div className={"flex flex-col items-center justify-center mt-20 space-y-4 md:space-y-8"}>
    <h1 className={'font-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl'}>Hey there ✨</h1>
    <h2 className={'text-l sm:text-2xl md:text-4xl lg:text:5xl xl:text:5xl'}>I am a <span
      className={'text-[var(--fg-blue)]'}>CS Student</span> based in <span>Berlin</span><br/></h2>
    <h2 className={'text-l sm:text-2xl md:text-4xl lg:text:5xl xl:text:5xl'}>Mostly using <span
      className={'text-[var(--fg-orange)]'}>SwiftUI</span> and <span className='text-[var(--fg-gray)]'>NextJS</span>
    </h2>
    <hr/>
    <Link href={"/contact"}>
      <Button>Contact</Button>
    </Link>
  </div>
}