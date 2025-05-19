"use client";

import Link from "next/link";
import TimelineItem from "./TimelineItem";

import { useRef, useState } from "react";
import {
	motion,
	useScroll,
	useMotionValueEvent,
	useAnimation,
	AnimatePresence,
} from "motion/react";

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
		if (!triggered && latest >= 0.6) {
			setTriggered(true);
			ctaControls.start({ width: "100%", textAlign: "center", y: [0, 40, 60, 40, 0], rotate: [0, 6, 0] }); // end animation
			timelineControls.start({ width: 0, overflowX: "hidden" }); // end animation
			setCtaText("Let's get Started!");
		} else if (triggered && latest < 0.6) {
			setTriggered(false);
			ctaControls.start({ width: "50%", y: 0 }); // Start animation
			timelineControls.start({ width: "50%", textAlign: "left" }); // Start animation
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
							exit={{ opacity: 0, scale: 0 }}
							transition={{ duration: 0.3 }}
							key={ctaText} // Key ensures a new animation on text change
						>
							{ctaText}
						</motion.p>
					</AnimatePresence>
					<Link href="/contact">
						<button className="px-8 font-semibold py-4 bg-white text-3xl rounded-lg">
							Schedule your Free Consultation!
						</button>
					</Link>
				</motion.div>

				{/* Scrollable Content */}
				<motion.div
					className="flex flex-col justify-end h-[160vh] mt-[50vh] mb-[200vh] w-1/2 "
					animate={timelineControls} // Attach animation controls
					initial={{ width: "50%" }} // Initial state
				>
					<TimelineItem />
					<TimelineItem
						mainText="Awesome title"
						subText="loemskf fafja fjafj fkafj ei fna jngvk fja akgjfksks fjak. fkajfij fjakfeirqu ruuru oruit zvoo zyb hbozu wozyb aobyzoz bozybz"
					/>
					<TimelineItem />
					<TimelineItem isLast={true} />
				</motion.div>
			</div>
		</section>
	);
}
