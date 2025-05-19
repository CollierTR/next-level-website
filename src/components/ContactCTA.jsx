import { Button } from "./ui/button";
import Link from "next/link";

export default function ContactCTA() {
	return (
		<div className="flex flex-col min-h-1/2 w-2/3 justify-center text-center place-items-center gap-6 md:gap-10 mx-auto my-20">
			<h2 className="text-4xl md:text-6xl">Free Consultation!</h2>
			<p className="text-xl  md:text-4xl text-white text-balance">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
				possimus ex repellendus. Ad odio id delectus sequi officiis.
			</p>
			<Link
				href={"/contact"}
				className="whitespace-nowrap hover:scale-105 bg-white py-2 md:py-3 px-6 rounded-xl md:text-4xl font-semibold"

			>
				Get Started
			</Link>
		</div>
	);
}
