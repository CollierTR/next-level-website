import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
	return (
		<div className="flex justify-center place-items-center relative overflow-hidden min-h-screen before:absolute before:top-0 before:start-1/2  dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-1 before:transform before:-translate-x-1/2">
			<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
					<Link href={'/contact'} className="bg-white text-lg md:text-2xl py-2 font-semibold px-5 md:px-6 rounded-lg">
						Let’s Get Started!
					</Link>
				</div>
				{/* End Buttons */}
			</div>
		</div>
	);
}
