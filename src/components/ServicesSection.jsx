import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceCard from "./ServiceCard";


import {
	faCircle,
	faCode,
	faGlobe,
	faPieChart,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesSection() {
	return (
		<div className="py-20 flex w-full bg-primary flex-col justify-center place-items-center text-center gap-8 md:my-20 text-light ">
			{
				//SECT: Title & Button
			}
			<div className="flex justify-between place-items-center gap-4 w-4/5 md:w-4/5">
				<h2 className="text-2xl sm:text-6xl">Our Services</h2>
				<Link href={"/services"} className="bg-white text-lg md:text-2xl rounded-lg py-1 md:py-2 hover:scale-105 font-semibold px-4">
				See All
				</Link>
			</div>

			{
				//SECT: Three cards
				<div className="flex flex-col gap-6  xl:flex-row justify-center md:justify-evenly place-items-stretch w-10/12 md:11/12 mt-2 md:mt-12">
					<ServiceCard
						title="Websites"
						href='/services/web-development'
						text="
						Ensure your business reaches its full potential with our
						professional website design services. We create visually
						stunning, responsive websites tailored to your brand,
						helping you connect with your audience and achieve your
						goals.
					"
					>
						<FontAwesomeIcon
							icon={faGlobe}
							mask={faCircle}
							className="text-6xl"
							transform={"shrink-4"}
						/>
					</ServiceCard>
					<ServiceCard
						title="Custom Software"
						href='/services/software-development'
						text="
						Streamline your operations with our bespoke software
						solutions. We design, develop, and deploy software
						tailored to meet your unique needs, improving efficiency
						and driving innovation in your business.
					"
					>
						<FontAwesomeIcon
							icon={faCode}
							mask={faCircle}
							className="text-6xl"
							transform={"shrink-6"}
						/>
					</ServiceCard>
					<ServiceCard
						title="Data Analytics"
						href='/services/data-analytics'
						text="
						Harness the power of your data with our expert analytics
						services. We provide actionable insights to help you
						make informed decisions, optimize performance, and
						achieve measurable results for your organization.
					"
					>
						<FontAwesomeIcon
							icon={faPieChart}
							mask={faCircle}
							className="text-6xl"
							transform={"shrink-4"}
						/>
					</ServiceCard>
				</div>
			}
		</div>
	);
}
