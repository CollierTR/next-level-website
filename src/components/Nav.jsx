"use client";

import {
	motion,
	useScroll,
	useMotionValueEvent,
	useAnimation,
	AnimatePresence,
	easeInOut,
	easeOut,
	spring,
} from "motion/react";

import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useReducer, useState, useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Nav() {
	console.log("Nav component rendered");

	const reducer = (state, action) => {
		switch (action.type) {
			case "openNav":
				document.getElementById("main").classList.add("no-scroll");
				return { navMenu: "open" };
			case "closeNav":
				document.getElementById("main").classList.remove("no-scroll");
				return { navMenu: "closed" };
			default:
				console.log("something went wrong!");
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, { navMenu: "closed" });

	return (
		<div className="fixed w-full flex justify-between place-items-center p-6 md:p-8 z-50">
			<Link href={"/"} className="hidden md:block">
				<motion.img
					src="Next Level (text only).png"
					alt="Next Level Logo"
					className="h-auto w-64 object-contain glow"
					initial={{
						filter: "drop-shadow(0rem 0rem 0.15rem rgb(255, 255, 255))", scale: 1,
					}}
					whileHover={{filter: 'drop-shadow(0rem 0rem 0.3rem rgb(255,255,255))', scale:1.03, transition: {duration: 1.5, ease: easeInOut, bounce: spring}, }}
				/>
			</Link>

			<div className="flex justify-end place-items-center text-4xl gap-8 w-full md:w-fit">
				<Link
					href={"/contact"}
					className=" bg-white  px-4 py-2 text-xl rounded-xl cursor-pointer font-semibold hidden lg:block"
				>
					Free Consultation
				</Link>
				<FontAwesomeIcon
					icon={faBars}
					className="cursor-pointer"
					onClick={() => dispatch({ type: "openNav" })}
				/>
			</div>

			{/* Nav Menu */}
			{state.navMenu == "open" &&
				createPortal(
					<div
						className="fixed w-full bg-transparent h-screen top-0 right-0 z-[100] flex justify-end"
						onClick={() => dispatch({ type: "closeNav" })}
					>
						<div
							className="flex w-1/3 bg-red-500"
							onClick={(e) => {
								e.stopPropagation();
							}}
						>
							test
						</div>
					</div>,

					document.body
				)}
			{/* End of Nav Menu */}
		</div>
	);
}
