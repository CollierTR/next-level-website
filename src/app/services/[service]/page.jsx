import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import ClientMDXRenderer from "./MDXRenderer";

const servicesDirectory = path.join(process.cwd(), "src", "content", "services");

export async function generateStaticParams() {
  const filenames = fs.readdirSync(servicesDirectory);
  return filenames.map((name) => ({
    service: name.replace(/\.mdx$/, ""),
  }));
}

export default function ServicePage({ params }) {
  const { service } = params;
  const fullPath = path.join(servicesDirectory, `${service}.mdx`);

  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const source = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(source);

  return (
    <main className="pt-30 flex flex-col justify-center items-center gap-8 text-center min-h-screen w-10/12 mx-auto text-balance">
      <h1 className="text-6xl">{data.title}</h1>
      <p className="text-2xl text-white">{data.description}</p>
      <img src={data.img} alt={data.imgAlt} className="w-2/3 mx-auto" />
      {/* Render client component and pass slug */}
      <ClientMDXRenderer service={service} />
    </main>
  );
}
