import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    p: (props) => <p className="pb-4" {...props} />,
    h1: (props) => <h1 className="text-4xl font-bold" {...props} />,
    h2: (props) => <h2 className="text-3xl font-bold" {...props} />,
    h3: (props) => <h3 className="text-2xl font-bold" {...props} />,
    h4: (props) => <h4 className="text-xl font-bold" {...props} />,
    h5: (props) => <h5 className="text-lg font-bold" {...props} />,
    h6: (props) => <h6 className="text-base font-bold" {...props} />,
    pre: (props) => (
      <pre className="bg-gray-800 p-4 rounded shadow" {...props} />
    ),
    code: (props) => (
      <code className="text-sm font-mono bg-gray-800 p-1 rounded" {...props} />
    ),
  };
}
