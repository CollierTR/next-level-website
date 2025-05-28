import ContactCTA from "@/components/ContactCTA";
import { projects } from "../../projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
	return (
		<main className="text-2xl pt-40">
			<h1 className="text-center text-7xl mb-20">Past Projects</h1>
			<div className="flex flex-col justify-center my-40 place-items-center md:flex-row flex-wrap gap-10 mt-8 md:mt-14">
			{
				projects.map((project) => (
					<ProjectCard 
						width="xl:w-[40%] w-[80%]"
					 	projectName={project.name}
						img={project.img}
						key={project.name}
						link={project.websiteLink}
					/>
				))
			}
			</div>
			<ContactCTA></ContactCTA>
		</main>
	);
}
