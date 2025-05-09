import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { Button } from "./ui/button";

export default function FeaturedProjects() {
	return (
		<div className="flex flex-col justify-start place-items-center w-11/12 my-20 mx-auto">
			<div className="flex justify-between place-items-center gap-4 w-full sm:w-4/5">
				<h2 className="text-2xl sm:text-6xl">Featured Projects</h2>
				<Link href={"/services"} className="bg-white rounded-lg py-2 font-semibold px-4">
				See All
				</Link>
			</div>

			<div className="flex gap-6 mt-14">
				<ProjectCard></ProjectCard>
				<ProjectCard></ProjectCard>
				<ProjectCard></ProjectCard>
			</div>
		</div>
	);
}
