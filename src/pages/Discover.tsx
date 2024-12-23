import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Discover: React.FC = () => {
  const [markdownFiles, setMarkdownFiles] = useState<string[]>([]);

  useEffect(() => {
    const fetchMarkdownFiles = async () => {
      try {
        const base = import.meta.env.BASE_URL;
        const response = await fetch(`${base}/files.json`); // Fetch the JSON file listing markdown files
        if (response.ok) {
          const files = await response.json();
          setMarkdownFiles(
            files.filter((file: string) => file.endsWith(".md"))
          );
        } else {
          console.error("Failed to fetch files.json", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching files.json:", error);
      }
    };

    fetchMarkdownFiles();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        <h1 className="mt-4 text-5xl font-bold lg:text-center lg:col-start-2 sm:col-start-1 sm:text-left">
          Discover
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-3 items-start">
        {markdownFiles.length > 0 ? (
          markdownFiles.map((fileName) => (
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <Link
                  to={`/report/${fileName.replace(".md", "")}`}
                  className="card-title"
                >
                  {fileName
                    .replace(/-(.)/g, (_, char) => " " + char.toUpperCase())
                    .replace(/^./, (char) => char.toUpperCase())
                    .replace(".md", "")}
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center">Loading files...</p>
        )}
      </div>
    </>
  );
};

export default Discover;
