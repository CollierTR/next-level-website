import ContactCTA from "@/components/ContactCTA";
import LargeServiceCard from "@/components/LargeServiceCard";
import { projects } from "../../projects";
import { services } from "../../services";

export default function ProjectsPage() {
	return (
		<main className="text-2xl pt-40">
			<h1 className="text-center text-7xl mb-20">Services</h1>
			<div className="w-10/12 flex flex-col gap-20 justify-center place-items-center mx-auto">
				{services.map((service, index) => (
						<LargeServiceCard
							key={service.name}
							title={service.name}
							description={service.description}
                            img={service.img}
							link={`/services/${service.link}`}
                            flip={index%2===1}
						/>
					)
				)}
			</div>
			<ContactCTA></ContactCTA>
		</main>
	);
}
