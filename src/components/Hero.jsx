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
		<div className="flex justify-center place-items-center relative overflow-hidden min-h-10/12 pt-40 md:pt-0 md:min-h-screen before:top-0 before:start-1/2 ">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
				className="textOutline md:max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20"
			>
				{/* Title */}
				<div className="mt-5 max-w-4xl text-center mx-auto">
					<h1 className="block font-bold text-4xl text-balance md:text-5xl lg:text-6xl">
						{/* Tech Shouldn't Be Hard<br />Let Us Simplify It for You! */}
						Ready to Take Your Business to the Next Level?
						{/* Ditch the Confusion. Custom Websites & Software Made Easy! */}
					</h1>
				</div>
				{/* End Title */}

				<div className="mt-5 px-2 text-center mx-auto">
					<p className="text-xl text-pretty md:text-xl text-white">
						{/* We specialize in data driven Websites and Business technology that help drive you revenue! */}
						Maximize your profit with results-oriented websites and
						business technology tailored to your needs.
					</p>
				</div>

				{/* Buttons */}
				<div className="mt-8 gap-3 flex justify-center hover:scale-105">
					<Link
						href={"/contact"}
						className="bg-black text-white border border-white text-lg md:text-2xl py-2 font-semibold px-5 md:px-6 rounded-lg"
					>
						Let’s Get Started!
					</Link>
				</div>
				{/* End Buttons */}
			</motion.div>
		</div>
	);
}
