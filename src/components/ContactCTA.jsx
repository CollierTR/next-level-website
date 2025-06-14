import { Button } from "./ui/button";
import Link from "next/link";

export default function ContactCTA() {
	return (
		<div className="flex flex-col min-h-1/2 w-4/5 max-w-[1000px] justify-center text-center place-items-center gap-6 md:gap-10 mx-auto my-20">
			<h2 className="text-4xl md:text-6xl">Free Consultation!</h2>
			<p className="text-xl  md:text-4xl text-white text-balance">
				Need expert advice or a clear path forward? Let&apos;s chat! Our free consultation is designed to provide tailored solutions to meet your goals. Take the first step toward success.
			</p>
			<Link
				href={"/contact"}
				className="bg-black text-white border border-white text-lg md:text-3xl py-4 font-semibold px-6 md:px-8 rounded-lg"

			>
				Let's Get Started!
			</Link>
		</div>
	);
}
