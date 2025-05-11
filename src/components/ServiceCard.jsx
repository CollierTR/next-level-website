import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import { faCircle, faRibbon } from "@fortawesome/free-solid-svg-icons";

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
    children
}) {
	return (

		<div className="flex flex-col bg-primary-dark hover:border hover:border-gray-400  text-white justify-start place-items-center  sm:w-1/2 md:1/5 xl:w-[28%] rounded-xl overflow-hidden">
			<div className="flex flex-col gap-6 justify-center place-items-center py-8 px-6 text-balance">
                {
                    children ?
                    children :
                    <FontAwesomeIcon icon={faRibbon} mask={faCircle} className="text-4xl md:text-6xl" transform={'shrink-4'}/>
                }
				<h3 className="text-3xl md:text-4xl ">{title}</h3>
				<p className="text-pretty text-lg md:text-xl">{text}</p>
				<Link href={"/services"} className="bg-white text-xl md:text-2xl rounded-lg py-2 md:py-2 font-semibold px-4 text-black">
				Learn more
				</Link>
			</div>
		</div>

	);
}
