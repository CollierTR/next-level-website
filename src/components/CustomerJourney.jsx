import Link from "next/link"
import TimelineItem from "./TimelineItem"


export default function CustomerJourney() {
  return (
    <section className="h-screen bg-blue-500 flex justify-center place-items-start relative">
        <div className="flex justify-between w-6/7 sticky top-0">
            
            <div className="flex flex-col bg-amber-100 w-full">
                <p className="text-6xl">Here's How to Start</p>
                <Link href={'/contact'}>
                <button>Button</button>
                </Link>
            </div>

            <div className="flex flex-col bg-amber-600 w-full">
                <TimelineItem></TimelineItem>
                <TimelineItem></TimelineItem>
                <TimelineItem></TimelineItem>
            </div>

        </div>
    </section>
  )
}
