"use client";

import Link from "next/link";
import TimelineItem from "./TimelineItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRef, useState } from "react";
import {
	motion,
	useScroll,
	useMotionValueEvent,
	useAnimation,
	AnimatePresence,
} from "motion/react";
import { faCalendarDays, faCheckSquare, faCircle, faClipboardCheck, faCode, faDna, faHeadset, faMagnifyingGlass, faPalette, faPhone, faRocket } from "@fortawesome/free-solid-svg-icons";

export default function CustomerJourney() {
	const scrollableArea = useRef(null);
	const [triggered, setTriggered] = useState(false);
	const [ctaText, setCtaText] = useState("An Easy Roadmap");
	const ctaControls = useAnimation();
	const timelineControls = useAnimation();

	const { scrollYProgress } = useScroll({
		target: scrollableArea,
	});

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		console.log("Page scroll: ", latest);
		if (!triggered && latest >= 0.7) {
			setTriggered(true);
			ctaControls.start({
				width: "100%",
				textAlign: "center",
				y: [0, 40, 60, 40, 0],
				rotate: [0, 6, 0],
			}); // end animation
			timelineControls.start({
				width: 0,
				overflowX: "hidden",
				textAlign: "center",
			}); // end animation
			setCtaText("Let's get Started!");
		} else if (triggered && latest < 0.7) {
			setTriggered(false);
			ctaControls.start({ width: "50%", y: 0 }); // Start animation
			timelineControls.start({
				width: "50%",
				textAlign: "left",
				overflowX: "visible",
			}); // Start animation
			setCtaText("An Easy Roadmap");
		}
	});

	return (
		<section className="min-h-screen lg:flex hidden justify-center items-start my-20">
			<div ref={scrollableArea} className="flex w-5/6 h-full gap-10">
				{/* Sticky Sidebar */}
				<motion.div
					className="flex flex-col w-1/2 justify-start sticky top-2/6 h-fit gap-8"
					animate={ctaControls} // Attach animation controls
					initial={{}} // Initial state
					viewport={{ once: true }}
					transition={{
						duration: 0.5,
						ease: "easeIn",
						type: "tween",
					}}
				>
					<AnimatePresence mode="wait">
						<motion.p
							className="text-7xl mb-4 text-white"
							initial={{ opacity: 0, scale: 0, y: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							exit={{ opacity: 0, scale: 0 }}
							transition={{ duration: 0.3 }}
							key={ctaText} // Key ensures a new animation on text change
						>
							{ctaText}
						</motion.p>
					</AnimatePresence>
					<Link href="/contact">
						<button className="bg-black text-white border border-white text-lg md:text-2xl py-4 font-semibold px-5 md:px-6 rounded-lg">
							Schedule your Free Consultation!
						</button>
					</Link>
				</motion.div>

				{/* Scrollable Content */}
				<motion.div
					className="flex flex-col justify-end h-[290vh] mt-[50vh] mb-[200vh] w-1/2"
					animate={timelineControls} // Attach animation controls
					viewport={{ once: true }}
					initial={{ width: "50%" }} // Initial state
				>
					<TimelineItem
						mainText="Schedule a  free Discovery Call"
						subText="You have nothing to loose, and it's completely free. Let get something on the calendar and make this happen!"
					>
						<FontAwesomeIcon
							icon={faCalendarDays}
							mask={faCircle}
							className="text-7xl"
							transform={"shrink-8"}
						/>
					</TimelineItem>
					<TimelineItem
						mainText="Discovery Call"
						subText="In this step we will have a one-on-one consultation meeting where I can learn more about you and see if I can add value to your business."
					>
						<FontAwesomeIcon
							icon={faPhone}
							mask={faCircle}
							className="text-7xl"
							transform={"shrink-8"}
						/>
					</TimelineItem>
					<TimelineItem
						mainText="A solution tailored to your business"
						subText='When it comes to your business, there is no "one size fits all" solution. That&apos;s why we carefully design a digital strategy for your business that will leave your competition jealous!'
					>
						<FontAwesomeIcon
							icon={faDna}
							mask={faCircle}
							className="text-7xl"
							transform={"shrink-8"}
						/>
					</TimelineItem>
					<TimelineItem
						mainText="Design"
						subText="We believe in conversion focused web design.We will design the the product using tried and true design theory and sales psychology."
					>
						<FontAwesomeIcon
							icon={faPalette}
							mask={faCircle}
							className="text-7xl"
							transform={"shrink-8"}
						/>
					</TimelineItem>
					<TimelineItem
						mainText="Prototype"
						subText="After the Design is approved, we will begin work on the first draft to make your vision a reality."
					>
						<FontAwesomeIcon
							icon={faCode}
							mask={faCircle}
							className="text-7xl"
							transform={"shrink-8"}
						/>
					</TimelineItem>
					<TimelineItem
						mainText="Review and Revisions"
						subText="Unlimited reviews and revisions. We have a 100% customer satisfaction guarantee."
					>
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							mask={faCircle}
							className="text-7xl"
							transform={"shrink-8"}
						/>
					</TimelineItem>
					<TimelineItem
						mainText="Project Finalization & Launch Planning"
						subText="Once you are happy with the results, we will meet to finalize the project and strategize the launch"
					>
						<FontAwesomeIcon
							icon={faClipboardCheck}
							mask={faCircle}
							className="text-7xl"
							transform={"shrink-8"}
						/>
					</TimelineItem>
					<TimelineItem
						mainText="Launch and support"
						subText="We are here for you. We provide all the support you need before and after the project launch."
						isLast={true}
					>
						<FontAwesomeIcon
							icon={faHeadset}
							mask={faCircle}
							className="text-7xl"
							transform={"shrink-8"}
						/>
					</TimelineItem>
				</motion.div>
			</div>
		</section>
	);
}
