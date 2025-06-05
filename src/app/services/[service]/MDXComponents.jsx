export const MDXComponents = {
  h1: (props) => <h1 className="text-5xl font-bold mb-6" {...props} />,
  p: (props) => <p className="text-lg text-gray-300 mb-4" {...props} />,
  ul: (props) => <ul className="list-disc list-inside text-gray-400 mb-6" {...props} />,
  strong: (props) => <strong className="font-semibold text-white" {...props} />,
  em: (props) => <em className="italic" {...props} />,
  // add more if needed
};
