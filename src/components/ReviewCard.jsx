import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";


export default function ReviewCard({
	author = "John Doe",
	date = "8/2/1776",
	stars = 4,
	text = "The level of expertise and detailed inspection, including the report that Kyle delivered to us, reassured our decision in purchasing the",
}) {
	return (
		<div className="text-start p-6 flex flex-col text-lg md:text-xl border-3 drop-shadow-2xl border-black justify-center place-items-start gap-4 text-dark bg-white rounded-xl w-10/12 sm:w-1/2 xl:w-[28%]">
			<div className="flex justify-between place-items-center w-full lg:py-2 xl:py-4">
				<img src="/google.png" alt="" className="size-1/12" />
				<div className="flex flex-row text-[gold]">
					<FontAwesomeIcon icon={stars > 0 ? solidStar : emptyStar} className={!(stars > 0) && "text-black"} />
					<FontAwesomeIcon icon={stars > 1 ? solidStar : emptyStar} className={!(stars > 1) && "text-black"} />
					<FontAwesomeIcon icon={stars > 2 ? solidStar : emptyStar} className={!(stars > 2) && "text-black"} />
					<FontAwesomeIcon icon={stars > 3 ? solidStar : emptyStar} className={!(stars > 3) && "text-black"} />
					<FontAwesomeIcon icon={stars > 4 ? solidStar : emptyStar} className={!(stars > 4) && "text-black"} />
				</div>
			</div>

			<div className="flex w-full">
				<p>{text}</p>
			</div>

			<div className="flex flex-col">
				<p className="font-bold">{author}</p>
				<p className="italic">{date}</p>
			</div>
		</div>
	);
}
