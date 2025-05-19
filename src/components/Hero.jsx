"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

import {
	motion,
	useScroll,
	useMotionValueEvent,
	useAnimation,
	AnimatePresence,
	easeInOut,
	easeOut,
} from "motion/react";

export default function Hero() {
	return (
		<div className="flex justify-center place-items-center relative overflow-hidden min-h-screen  before:top-0 before:start-1/2 ">
			 {/* <div className="w-[100%] h-screen fixed top-0 right-0  bg-pattern"></div> */}
				{/*<motion.svg
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 2, delay: 1 }}
					width="100%"
					height="100%"
					xmlns="http://www.w3.org/2000/svg"
					className="w-full absolute -top-10 left-40 transform"
					style={{
						transform:
							"perspective(800px) rotateX(25deg) rotateY(15deg)",
						transformOrigin: "center",
					}}
				>
					<defs>
						<pattern
							id="grid"
							width="100"
							height="100"
							patternUnits="userSpaceOnUse"
						>
							<rect
								width="100"
								height="100"
								// fill="red"
								fill="transparent"
							/>
							<path
								d="M 100 0 L 0 0 0 100"
								fill="none"
								stroke="black"
								strokeWidth="0.5"
							/>
						</pattern>
					</defs>

					<rect width="100%" height="100%" fill="url(#grid)" />

					<motion.path
						d="M200 700 L300 600 L350 650 L375 550 L425 575 L550 475 L600 570 L720 420 L740 455 L850 365 L900 400 L1125 175 l-10 40 L1125 175 l-40 10"
						fill="none"
						strokeWidth="3"
						stroke="#87dac0"
						initial={{
							pathLength: 0,
						}}
						animate={{
							pathLength: 1,
						}}
						transition={{
							duration: 3, // Adjust animation duration
							delay: 2,
							ease: "easeInOut",
						}}
					/>
				</motion.svg>
			</div> */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
				className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20"
			>
				{/* Title */}
				<div className="mt-5 max-w-4xl text-center mx-auto">
					<h1 className="block font-bold text-black text-3xl text-balance md:text-5xl lg:text-6xl dark:text-neutral-200">
						{/* Tech Shouldn't Be Hard<br />Let Us Simplify It for You! */}
						Ready to Take Your Business to the Next Level?
						{/* Ditch the Confusion. Custom Websites & Software Made Easy! */}
					</h1>
				</div>
				{/* End Title */}

				<div className="mt-5 text-center mx-auto">
					<p className="text-lg text-balance md:text-xl text-black dark:text-neutral-400">
						{/* We specialize in data driven Websites and Business technology that help drive you revenue! */}
						Maximize your profit with results-oriented websites and
						business technology tailored to your needs.
					</p>
				</div>

				{/* Buttons */}
				<div className="mt-8 gap-3 flex justify-center">
					<Link
						href={"/contact"}
						className="bg-white text-lg md:text-2xl py-2 font-semibold px-5 md:px-6 rounded-lg"
					>
						Let’s Get Started!
					</Link>
				</div>
				{/* End Buttons */}
			</motion.div>
		</div>
	);
}
