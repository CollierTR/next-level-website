"use client";

import { useEffect, useState } from "react";

const components = {
  h2: (props) => <h2 className="text-2xl font-bold my-6" {...props} />,
  p: (props) => <p className="text-lg text-gray-300 leading-relaxed my-4" {...props} />,
  ul: (props) => <ul className="list-disc list-inside my-4" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside my-4" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  strong: (props) => <strong className="font-semibold" {...props} />,
  em: (props) => <em className="italic" {...props} />,
  a: (props) => <a className="text-indigo-400 hover:underline" {...props} />,
  // add more if you want
};

export default function ClientMDXRenderer({ service }) {
  const [MDXContent, setMDXContent] = useState(null);

  useEffect(() => {
    import(`../../../content/services/${service}.mdx`)
      .then((mod) => setMDXContent(() => mod.default))
      .catch(() => setMDXContent(() => () => <p>Content not found.</p>));
  }, [service]);

  if (!MDXContent) return <p>Loading...</p>;

  return <MDXContent components={components} />;
}