"use client";

import { faCircle, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function TimelineItem({
	children,
	mainText = "Placeholder Text",
	subText = "This is some text. Nothing Special, just a placeholder.",
	isLast = false,
}) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<motion.div
			className="flex justify-stretch place-items-stretch gap-6"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, ease: "easeIn" }}
		>
			{isClient && (
				<div className="flex flex-col justify-start place-items-center">
					{children ? (
						children
					) : (
						<FontAwesomeIcon
							icon={faMoneyBill}
							mask={faCircle}
							className="text-7xl"
							transform={"shrink-8"}
						/>
					)}
					{!isLast && <div className="grow w-2 bg-black"></div>}
				</div>
			)}
			<div className="flex text-white flex-col justify-start mb-24">
				<p className="text-2xl font-medium">{mainText}</p>
				<p className="text-xl">{subText}</p>
			</div>
		</motion.div>
	);
}
