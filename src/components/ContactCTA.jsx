import { Button } from "./ui/button"
import Link from "next/link"

export default function ContactCTA() {
  return (
    <div className="flex flex-col min-h-1/2 w-2/3 justify-center text-center place-items-center gap-10 mx-auto my-20">
        <h2 className="text-6xl">Free Consultation!</h2>
        <p className="text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus ex repellendus. Ad odio id delectus sequi officiis.</p>
      <Link href={'/fdfdh'} className="whitespace-nowrap bg-white py-3 px-6 rounded-xl text-4xl font-semibold">Get Started</Link>
    </div>
  )
}
