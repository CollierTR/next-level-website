import Link from "next/link";
import PropTypes from 'prop-types';


export default function LargeServiceCard({
	img = "https://placehold.co/600x400",
	flip = false,
    link = "#",
	title = "Service Title",
	description = `
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Obcaecati maxime doloremque consectetur aspernatur
					laudantium. Temporibus quae repudiandae eius eveniet
					eligendi nesciunt unde, repellendus quidem dolor enim, nihil
					culpa natus possimus?
				`,
}) {
	return (
		<div className={`bg-white w-full flex h-80 ${!flip ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col-reverse justify-between place-items-center rounded-3xl overflow-hidden min-h-fit`}>
			<div className="flex flex-col place-items-center text-balance text-center justify-center gap-6 lg:gap-8 grow basis-0 p-8 lg:pb-6">
				<p className="text-4xl md:text-5xl">{title}</p>
				<p className="text-xl md:text-2xl">{description}</p>
                <Link href={link} className="bg-black text-white rounded-2xl px-4 py-2">Learn More</Link>
			</div>
			<div className="relative grow basis-0 w-full h-full lg:w-1/2">
				<img
					src={img}
					alt={img}
					className="grow basis-0 object-cover w-full h-full"
				/>
			</div>
		</div>
	);
}

LargeServiceCard.propTypes = {
    img: PropTypes.string,
    flip: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
}