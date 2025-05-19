import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion, easeInOut, spring } from "motion/react";
import {
	faCircle,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
	return (
		<footer>
			<div className="w-full py-8 mt-24 flex flex-col justify-center gap-8  place-items-center border-t-2 border-t-primary text-white">
				<div className="flex w-6/7 px-6 text-4xl  justify-center place-items-center">
					<div className="flex flex-col md:flex-row  gap-6 justify-between w-full">
						{/* <p className="lg:text-start text-center">
							Stay in touch!
						</p> */}
				<motion.img
					src="Next Level (text only).png"
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
						<div className="flex justify-center gap-4">
							<a href="mailto:tristancollier777@gmail.com">
								<FontAwesomeIcon
									icon={faEnvelope}
									transform="shrink-6"
									mask={faCircle}
									className="hover:text-primary-light hover-bounce cursor-pointer"
								/>
							</a>
							<a href="tel:5402206532">
								<FontAwesomeIcon
									icon={faPhone}
									transform="shrink-6"
									mask={faCircle}
									className="hover:text-primary-light hover-bounce cursor-pointer"
								/>
							</a>
							<a href="https://github.com/CollierTR">
								<FontAwesomeIcon
									icon={faGithub}
									className="hover:text-primary-light hover-bounce cursor-pointer"
								/>
							</a>
							<a href="https://www.linkedin.com/in/tristan-collier-263b67263/">
								<FontAwesomeIcon
									icon={faLinkedin}
									className="hover:text-primary-light hover-bounce cursor-pointer"
								/>
							</a>
						</div>
					</div>
				</div>

				<div className="flex text-lg justify-between flex-col md:flex-row gap-4  place-items-center border-t-2 w-6/7 p-6 border-t-primary pt-6">
					<div className="flex justify-center gap-4 text-2xl text-primary lg:text-white">
						<Link href={"/"}>
							<p className="hover:text-primary-light">Home</p>
						</Link>
						<Link href={"/contact"}>
							<p className="hover:text-primary-light">Contact</p>
						</Link>
					</div>
					<p>Copyright © 2025</p>
				</div>
			</div>
		</footer>
	);
}
