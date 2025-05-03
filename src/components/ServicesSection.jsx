import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { Button } from "./ui/button";
import {
	faChartSimple,
	faClapperboard,
	faCode,
	faGlobe,
	faLaptop,
	faLineChart,
	faPieChart,
	faServer,
    faSoap,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesSection() {
	return (
		<div className="py-20 flex w-full bg-primary flex-col justify-center place-items-center text-center gap-8 text-light border-y-2 border-y-light">
			{
				//SECT: Title & Button
			}
			<div className="flex justify-between place-items-center gap-4 w-full sm:w-3/5">
				<h2 className="text-2xl sm:text-5xl">Our Services</h2>
				<Link href={"/services"}>
					<Button>SEE ALL</Button>
				</Link>
			</div>

			{
				//SECT: Three cards
			}
			<div className="flex flex-col xl:flex-row justify-center place-items-center xl:place-items-stretch gap-4 text-dark w-full">
				<div className="flex flex-col gap-4">
					<span className="fa-layers fa-fw fa-lg mx-auto my-8">
						<FontAwesomeIcon icon={faGlobe}  className="text-6xl"/>
						<FontAwesomeIcon
							icon={faLaptop}
							transform="shrink-6 left-4 down-3"
							inverse
                            className="text-8xl"
						/>
					</span>
                    <h3 className="text-6xl">Websites</h3>
					<p className="text-2xl">
						Ensure your business reaches its full potential with our
						professional website design services. We create visually
						stunning, responsive websites tailored to your brand,
						helping you connect with your audience and achieve your
						goals.
					</p>
				</div>
				<div className="flex">
					<FontAwesomeIcon icon={faCode} />
					<FontAwesomeIcon icon={faServer} />
					<p>
						Streamline your operations with our bespoke software
						solutions. We design, develop, and deploy software
						tailored to meet your unique needs, improving efficiency
						and driving innovation in your business.
					</p>
				</div>
				<div className="flex">
					<FontAwesomeIcon icon={faLineChart} />
					<FontAwesomeIcon icon={faPieChart} />
					<FontAwesomeIcon icon={faChartSimple} />
					<p>
						Harness the power of your data with our expert analytics
						services. We provide actionable insights to help you
						make informed decisions, optimize performance, and
						achieve measurable results for your organization.
					</p>
				</div>
			</div>
		</div>
	);
}
