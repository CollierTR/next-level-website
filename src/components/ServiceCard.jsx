"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import { faCircle, faRibbon } from "@fortawesome/free-solid-svg-icons";

import {
	motion,
	useScroll,
	useMotionValueEvent,
	useAnimation,
	AnimatePresence,
	easeInOut,
	easeOut,
} from "motion/react";

const genericCard = {
	title: "Card Title",
	button: "Learn more",
	text: "This is a paragraph. text will be determined later. This is a paragraph. text will be determined later.",
};

export default function ServiceCard({
	href = "#",
	buttonText = genericCard.button,
	title = genericCard.title,
	text = genericCard.text,
	children,
}) {
	return (
		<motion.div
			style={{ boxShadow: "0 0 0px 0px white" }}
			initial={{
				filter: "drop-shadow(0rem 0rem 0.1rem rgb(255, 255, 255))",
				scale :1
			}}
			whileHover={{
				filter: "drop-shadow(0rem 0rem 0.3rem rgb(255,255,255))",
				scale: 1.0,
				transition: {
					duration: 0.5,
					ease: easeInOut,
				},
			}}
			transition={{ duration: 3 }}
			className="flex flex-col bg-primary-dark text-white justify-start place-items-center sm:w-1/2 md:1/5 xl:w-[28%] rounded-xl overflow-hidden"
		>
			<div className="flex flex-col gap-6 justify-center place-items-center py-8 px-6 text-balance">
				{children ? (
					children
				) : (
					<FontAwesomeIcon
						icon={faRibbon}
						mask={faCircle}
						className="text-4xl md:text-6xl"
						transform={"shrink-4"}
					/>
				)}
				<h3 className="text-3xl md:text-4xl ">{title}</h3>
				<p className="text-pretty text-lg md:text-xl">{text}</p>
				<Link
					href={"/services"}
					className="bg-white text-xl md:text-2xl rounded-lg py-2 md:py-2 font-semibold px-4 text-black"
				>
					Learn more
				</Link>
			</div>
		</motion.div>
	);
}
