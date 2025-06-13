import ContactCTA from "@/components/ContactCTA";
import LargeServiceCard from "@/components/LargeServiceCard";
import { services } from "../../services";
import { promises as fs } from 'fs'
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';


// const filenames = fs.readdir(path.join(process.cwd(), 'src/content/services'))
const filenames = await fs.readdir(path.join(process.cwd(), 'src/content/services'))

const servicesTest = await Promise.all(filenames.map(async (filename) => {
  const content = await fs.readFile(path.join(process.cwd(), 'src/content/services', filename), 'utf-8');
  const { frontmatter } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true
    }
  })
  return {
    filename,
    slug: filename.replace('.mdx', ''),
    ...frontmatter
  }
}))

// Set the sort order of the Services on the service page
servicesTest.sort((a, b) => a.order - b.order)


export default function ProjectsPage() {
	return (
		<main className="md:text-2xl pt-40">
			<h1 className="text-center text-6xl md:text-7xl mb-20">Services</h1>
			<div className="w-10/12 flex flex-col gap-10 md:gap-20 justify-center place-items-center mx-auto">
				{
					servicesTest.map((service, index) => (
						<LargeServiceCard
							key={service.title}
							title={service.title}
							description={service.description}
                            img={service.img}
							link={`/services/${service.slug}`}
                            flip={index%2===1}
						/>
					))
				}
			</div>
			<ContactCTA></ContactCTA>
		</main>
	);
}
