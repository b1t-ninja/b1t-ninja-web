'use client'
import {TypographyH2} from "@/components/typography/TypographyH2";
import Form from "next/form";
import Button from "@/components/button/Button";
import {useState} from "react";
import Link from "next/link";
import IconButton from "@/components/button/IconButton";

export default function Contact() {
  let [subject, setSubject] = useState('')
  let [message, setMessage] = useState('')

  return <div>
    <Link className={''} href={"/"}>
      <IconButton path={"arrow.svg"}/>
    </Link>
    <div className={"flex flex-col space-y-2 m-2"}>
      <TypographyH2>Get in touch</TypographyH2>
      <div>
        <Form action={() => {
          console.log(subject)
          console.log(message)
        }}>
          <label>Subject</label>
          <input
            className={'text-[var(--fg)] bg-[var(--bg)] border rounded-md p-2 w-full outline-none'}
            type={"text"}
            value={subject}
            placeholder={subject}
            onChange={(e) => setSubject(e.target.value)}/>
          <label>Message</label>
          <textarea
            className={'text-[var(--fg)] bg-[var(--bg)] border rounded-md p-2 w-full outline-none'}
            value={message}
            placeholder={message}
            lines={5}
            onChange={(e) => setMessage(e.target.value)}/>
        </Form>
        <a
          href={`mailto:nicorueckner@gamil.com?subject=${subject}&body=${message}`}>
          <Button>Send</Button>
        </a>
      </div>
    </div>
  </div>
}