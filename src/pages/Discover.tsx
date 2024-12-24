import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface FileData {
  title: string;
  description: string;
  imgSrc: string;
}

const Discover: React.FC = () => {
  const [fileData, setfileData] = useState<FileData[]>([]);

  useEffect(() => {
    const fetchMarkdownFiles = async () => {
      try {
        const base = import.meta.env.BASE_URL;
        const response = await fetch(`${base}/files.json`); // Fetch the JSON file listing markdown files
        if (response.ok) {
          const data = await response.json();
          setfileData(data);
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 items-start">
        {fileData.length > 0 ? (
          fileData.map((file) => (
            <div key={file.title} className="card bg-base-100 shadow-xl">
              <figure className="relative pb-[56.25%]">
                <img
                  src={file.imgSrc}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">
                  {file.title
                    .replace(/-(.)/g, (_, char) => " " + char.toUpperCase())
                    .replace(/^./, (char) => char.toUpperCase())}
                </h3>
                <div className="min-h-[4em] max-h-[4em]">
                  {file.description.length > 150
                    ? `${file.description.substring(0, 147)}...`
                    : file.description}
                </div>
                <Link
                  to={`/report/${file.title}`}
                  className="text-right link-primary"
                >
                  Learn more
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
