"use client";

import { motion, easeInOut, spring, AnimatePresence } from "motion/react";

import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useReducer, useState } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Nav() {
	const pathName = usePathname();
	const [animationPresent, setAnimationPresent] = useState(false);

	const reducer = (state, action) => {
		switch (action.type) {
			case "openNav":
				// document.getElementById("main").classList.add("no-scroll");
				setAnimationPresent(true);
				return { navMenu: "open" };
			case "closeNav":
				// document.getElementById("main").classList.remove("no-scroll");
				setAnimationPresent(false);
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
					src="/Next Level (text only).png"
					alt="Next Level Logo"
					className="h-auto w-64 object-contain glow"
					initial={{
						filter: "drop-shadow(0rem 0rem 0.15rem rgb(255, 255, 255))",
						scale: 1,
					}}
					whileHover={{
						filter: "drop-shadow(0rem 0rem 0.3rem rgb(255,255,255))",
						scale: 1.03,
						transition: {
							duration: 1.5,
							ease: easeInOut,
							bounce: spring,
						},
					}}
				/>
			</Link>

			<div className="flex justify-end place-items-center text-4xl gap-8 w-full md:w-fit">
				<Link
					href={"/contact"}
					className=" bg-white  px-4 py-2 text-xl rounded-xl cursor-pointer font-semibold hidden lg:block hover:scale-105"
				>
					Free Consultation
				</Link>
				<FontAwesomeIcon
					icon={faBars}
					className="cursor-pointer text-white"
					onClick={() => dispatch({ type: "openNav" })}
				/>
			</div>

			{/* Nav Menu */}
			<AnimatePresence>
				{animationPresent && (
					<motion.div
						key="nav-menu"
						initial={{ x: 400 }}
						animate={{ x: 0, transition: { duration: 0.5, ease: "easeOut" } }}
						exit={{ x: 700, transition: { duration: 0.5, ease: "easeIn" } }}
						className="fixed w-full bg-transparent h-screen top-0 right-0 z-[100] flex justify-end"
						onClick={() => dispatch({ type: "closeNav" })}
					>
						<div
							className="flex flex-col w-10/12 md:w-1/3 xl:w-1/4 bg-primary-dark border-l-2 border-white rounded-l-2xl relative drop-shadow-black drop-shadow-2xl"
							onClick={(e) => e.stopPropagation()}
						>
							<FontAwesomeIcon
								icon={faClose}
								className="text-4xl cursor-pointer absolute top-6 right-6"
								color="white"
								onClick={() => dispatch({ type: "closeNav" })}
							/>
							<div className="flex flex-col grow justify-center place-items-center gap-10 2xl:gap-20 text-4xl text-white">
								<Link
									href="/"
									onClick={() =>
										dispatch({ type: "closeNav" })
									}
									className={`link ${
										pathName === "/" ? "" : "text-gray-400"
									}`}
								>
									Home
								</Link>
								<Link
									href="/contact"
									onClick={() =>
										dispatch({ type: "closeNav" })
									}
									className={`link ${
										pathName === "/contact"
											? ""
											: "text-gray-400"
									}`}
								>
									Contact
								</Link>
								<Link
									href="/services"
									onClick={() =>
										dispatch({ type: "closeNav" })
									}
									className={`link ${
										pathName === "/services"
											? ""
											: "text-gray-400"
									}`}
								>
									Services
								</Link>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* End of Nav Menu */}
		</div>
	);
}
