import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownIt from "markdown-it";
import Card from "./Card";
import Parser from "../utils/Parser";

export interface SectionData {
  title: string;
  content: Document;
}

const Report: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [titleHtmlContent, setTitleHtmlContent] = useState<string>("");
  const [sectionHtmlContent, setSectionHtmlContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [imgSrc, setImgSrc] = useState<string>("");
  const [alt, setAlt] = useState<string>("");
  const [sections, setSections] = useState<SectionData[]>();
  const parser = new DOMParser();

  // Fetch markdown content when `id` changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseURL = import.meta.env.BASE_URL;
        const response = await fetch(`${baseURL}${id}.md`);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch Markdown file: ${response.statusText}`
          );
        }

        const markdownContent = await response.text();
        setMarkdownContent(markdownContent);
      } catch (error) {
        console.error("Error fetching Markdown file:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (!markdownContent) return;

    const marker = new MarkdownIt();
    const content = marker.render(markdownContent);
    setTitleHtmlContent(content);
  }, [markdownContent]);

  useEffect(() => {
    const getTitleAndImage = () => {
      if (!titleHtmlContent) return;

      const doc = parser.parseFromString(titleHtmlContent, "text/html");

      // Extract title from <h1>
      const h1Element = doc.getElementsByTagName("h1")[0];
      const extractedTitle = h1Element?.innerText || "";
      setTitle(extractedTitle);

      const extractedImgSrc = doc.getElementsByTagName("img")[0]?.src;
      const extractedAlt = doc.getElementsByTagName("img")[0]?.alt;
      setImgSrc(extractedImgSrc);
      setAlt(extractedAlt);

      // Remove <h1> from content
      h1Element?.parentNode?.removeChild(h1Element);

      // Find and remove the first <p> that only contains an <img> tag
      const pTags = doc.getElementsByTagName("p");
      for (let p of pTags) {
        if (
          p.children.length === 1 &&
          p.getElementsByTagName("img").length === 1
        ) {
          p.parentNode?.removeChild(p); // Remove the <p> tag
          break; // Only remove the first <p> that contains an <img>
        }
      }

      // Update section content without these elements
      setSectionHtmlContent(doc.body.innerHTML);
    };
    getTitleAndImage();
  }, [titleHtmlContent]);

  useEffect(() => {
    const createSections = () => {
      if (!sectionHtmlContent) return;

      const sectionArray: SectionData[] = [];
      const parts = sectionHtmlContent.split("<hr>");

      parts.forEach((sectionHTML) => {
        const sectionDoc = parser.parseFromString(sectionHTML, "text/html");

        // Extract the <h2> title
        const h2Element = sectionDoc.getElementsByTagName("h2")[0];
        const sectionTitle = h2Element?.innerText || "";

        // Remove the <h2> tag from content
        h2Element?.parentNode?.removeChild(h2Element);

        // Get the remaining content
        const sectionContent = sectionDoc.body.innerHTML;

        sectionArray.push({
          title: sectionTitle,
          content: parser.parseFromString(sectionContent, "text/html")
        });
      });

      setSections(sectionArray);
    };
    createSections();
  }, [sectionHtmlContent]);

  return (
    <div className="w-full h-full flex flex-col items-center px-0 lg:px-10">
      <Card imgSrc={imgSrc} alt={alt} title={title}>
        {sections?.map((section, index) => (
          <Parser key={index} section={section} />
        ))}
      </Card>
    </div>
  );
};

export default Report;
