import ContactCTA from "@/components/ContactCTA";
import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";

// Helper function to get frontmatter
async function getPageData(service) {
	const content = await fs.readFile(
		path.join(process.cwd(), "src/content/services", `${service}.mdx`),
		"utf-8"
	);

	const { frontmatter, content: mdxContent } = await compileMDX({
		source: content,
		options: {
			parseFrontmatter: true,
		},
	});

	return { frontmatter, content: mdxContent };
}

export async function generateMetadata({ params }) {
	const resolvedParams = await params;
	const { frontmatter } = await getPageData(resolvedParams.service);

	return {
		title: `${frontmatter.title} | Your Brand Name`,
		description: frontmatter.description,
		// keywords: [ ---------------------------- I need to add these to the front matter...
		// 	"web development",
		// 	"responsive website",
		// 	"custom web design",
		// 	"mobile-friendly website",
		// 	"SEO web design",
		// 	"website performance optimization",
		// 	"user experience design",
		// 	"UX web development",
		// 	"scalable websites",
		// 	"secure web hosting",
		// 	"business website",
		// 	"professional website design",
		// 	"web development services",
		// 	"frontend development",
		// 	"backend development",
		// ],
		generator: "Next.js",
		authors: [
			{ name: "Tristan Collier", url: "https://tristancollier.com" },
		],
		creator: "Tristan Collier",
		publisher: "Tristan Collier",
		openGraph: {
			title: frontmatter.title,
			description: frontmatter.description,
			url: `https://nextlevelmo.com/services/${frontmatter.url}`,
			images: [
				{
					url: `https://nextlevelmo.com/${frontmatter.img}`,
					alt: frontmatter.imgAlt,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: frontmatter.title,
			description: frontmatter.description,
			image: `https://nextlevelmo.com/${frontmatter.img}`,
		},
	};
}

export default async function ProjectPage({ params }) {
	const resolvedParams = await params;
	const { frontmatter, content } = await getPageData(resolvedParams.service);

	return (
		<main>
			<div className="text-white w-4/5 max-w-[1000px] flex flex-col justify-center place-items-start gap-4 mx-auto py-20 md:py-40 prose-h2:text-3xl lg:prose-h2:text-5xl prose-h2:mt-6 prose-h3:text-xl md:prose-h3:text-3xl prose-h3:mt-6 prose-p:text-lg">
				<h1 className="lg:text-6xl text-4xl text-center place-self-center mb-2 md:mb-6">{frontmatter.title}</h1>
				<img
					src={frontmatter.img}
					alt={frontmatter.imgAlt}
					className="mx-auto my-4"
				/>
				{content}
			</div>
			<ContactCTA />
		</main>
	);
}
