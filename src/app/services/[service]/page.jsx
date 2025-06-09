import ContactCTA from "@/components/ContactCTA";

import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";

export default async function ProjectPage({ params }) {
	const content = await fs.readFile(
		path.join(
			process.cwd(),
			"src/content/services",
			`${params.service}.mdx`
		),
		"utf-8"
	);

	const data = await compileMDX({
		source: content,
		options: {
			parseFrontmatter: true,
		},
		components: {
			// Your Components here
		},
	});

	return (
		<main>
			<div className=" text-white prose-xl prose-headings:text-center prose-h2:text-5xl w-2/3 text-center text-pretty min-h-screen pt-40 px-20 mx-auto ">
				<h1 className="text-6xl">{data.frontmatter.title}</h1>
				<p className="text-center text-2xl text-pretty">{data.frontmatter.description}</p>
        <img src={data.frontmatter.img} alt={data.frontmatter.imgAlt} className="mx-auto"/>
        {data.content}
			</div>
			<ContactCTA />
		</main>
	);
}
