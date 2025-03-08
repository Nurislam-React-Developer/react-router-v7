import DocsRenderer from './DocsRenderer';

export default function DocsPage() {
  return (
    <DocsRenderer filePath="/docs/ReactRouterDocs.ru.md" />
  );
}

export function meta() {
  return [
    { title: "React Router v7 Documentation" },
    { name: "description", content: "Official documentation for React Router v7" },
  ];
}