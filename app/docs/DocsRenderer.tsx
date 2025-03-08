import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface DocsRendererProps {
  filePath: string;
}

export default function DocsRenderer({ filePath }: DocsRendererProps) {
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    fetch(`/api/docs?filePath=${filePath}`)
      .then(response => response.text())
      .then(content => setMarkdown(content))
      .catch(error => console.error('Error loading markdown:', error));
  }, [filePath]);

  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>;
}