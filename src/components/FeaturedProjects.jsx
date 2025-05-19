import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { Button } from "./ui/button";

export default function FeaturedProjects() {
	return (
		<div className="flex flex-col justify-start place-items-center w-11/12 md:my-20 mx-auto">
			<div className="flex justify-between place-items-center gap-4 w-11/12 md:w-4/5">
				<h2 className="text-2xl sm:text-6xl">Featured Projects</h2>
				<Link href={"/services"} className="bg-white text-lg hover:scale-105 md:text-2xl text-nowrap rounded-lg py-1 md:py-2 font-semibold px-4">
				See All
				</Link>
			</div>

			<div className="flex flex-col lg:flex-row gap-6 mt-8 md:mt-14">
				<ProjectCard></ProjectCard>
				<ProjectCard></ProjectCard>
				<ProjectCard></ProjectCard>
					<Link href={'/contact'} className="bg-white text-center md:hidden text-lg w-fit mt-4 mx-auto md:text-2xl py-2 font-semibold px-5 md:px-6 rounded-lg">
						See All Projects!
					</Link>
			</div>
		</div>
	);
}
