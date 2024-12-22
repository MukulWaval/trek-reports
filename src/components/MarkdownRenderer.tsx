import React, { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownIt from "markdown-it";
import Card from "./Card";
import Section from "./Section";
import Table from "./Table";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import Paragraph from "./Paragraph";
import BulletedList from "./BulletedList";
import NumberedList from "./NumberedList";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";

interface SectionData {
  title: string;
  content: string;
}

const MarkdownRenderer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [sections, setSections] = useState<SectionData[]>([]);
  const [title, setTitle] = useState<string>("");
  const [imgSrc, setImgSrc] = useState<string>("");
  const [alt, setAlt] = useState<string>("");
  const parser = new DOMParser();

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

    const parseHTML = () => {
      if (!markdownContent) return;

      const marker = new MarkdownIt();
      const content = marker.render(markdownContent);
      setHtmlContent(content);
    };

    const fetchTitleAndImage = () => {
      if (!htmlContent) return;
      const doc = parser.parseFromString(htmlContent, "text/html");

      // Extract title from <h1>
      const h1Element = doc.getElementsByTagName("h1")[0];
      const extractedTitle = h1Element?.innerText || "";
      setTitle(extractedTitle);

      // Extract image source and alt text from <img>
      const imgElement = doc.getElementsByTagName("img")[0];
      const extractedImgSrc = imgElement?.src || "";
      const extractedAlt = imgElement?.alt || "";
      setImgSrc(extractedImgSrc);
      setAlt(extractedAlt);

      // Remove <h1> and <img> from the content
      h1Element?.parentNode?.removeChild(h1Element);
      imgElement?.parentNode?.removeChild(imgElement);

      // Update htmlContent without these elements
      setHtmlContent(doc.body.innerHTML);
    };

    const createSections = () => {
      if (!htmlContent) return;

      const sectionArray: SectionData[] = [];
      const parts = htmlContent.split("<hr>");

      parts.forEach((sectionHTML) => {
        const sectionDoc = parser.parseFromString(sectionHTML, "text/html");

        // Extract the <h2> title
        const h2Element = sectionDoc.getElementsByTagName("h2")[0];
        const sectionTitle = h2Element?.innerText || "";

        // Remove the <h2> tag from content
        h2Element?.parentNode?.removeChild(h2Element);

        // Get the remaining content
        const sectionContent = sectionDoc.body.innerHTML;

        sectionArray.push({ title: sectionTitle, content: sectionContent });
      });

      setSections(sectionArray);
    };

    const fetchDataAndParse = async () => {
      await fetchData();
      parseHTML();
    };

    fetchDataAndParse();

    if (htmlContent) {
      fetchTitleAndImage();
      createSections();
    }
  }, [id, markdownContent, htmlContent]);

  const renderSectionContent = (content: string) => {
    const doc = parser.parseFromString(content, "text/html");
    const elements = Array.from(doc.body.children);
    const result: JSX.Element[] = [];
    let currentAccordionItems: { title: string; content: ReactNode }[] = [];
    let imageGroup: { src: string; alt: string }[] = [];
    let currentListItems: ReactNode[] = [];
    let currentListType: "ul" | "ol" | null = null;

    // Parse each element
    elements.forEach((element, index) => {
      const tagName = element.tagName.toLowerCase();

      switch (tagName) {
        case "img":
          handleImage(element as HTMLElement, imageGroup, result, index); // Type assertion here
          break;
        case "h3":
          handleAccordionTitle(element as HTMLElement, currentAccordionItems); // Type assertion here
          break;
        case "ul":
        case "ol":
          handleList(
            element as HTMLElement,
            tagName,
            currentListItems,
            currentListType,
            result,
            index
          ); // Type assertion here
          break;
        case "p":
          handleParagraph(element as HTMLElement, result, index); // Type assertion here
          break;
        case "table":
          handleTable(element as HTMLElement, result, index); // Type assertion here
          break;
        default:
          handleDefaultElement(element as HTMLElement, result, index); // Type assertion here
          break;
      }
    });

    // Render remaining items like accordion and image groups
    if (currentAccordionItems.length > 0) {
      result.push(
        <Accordion key="accordion-final">
          {currentAccordionItems.map((item, idx) => (
            <AccordionItem key={idx} title={item.title}>
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      );
    }

    if (imageGroup.length > 0) {
      result.push(
        <Carousel key="carousel-final">
          {imageGroup.map((img, imgIndex) => (
            <CarouselItem key={imgIndex} src={img.src} alt={img.alt} />
          ))}
        </Carousel>
      );
    }

    return result;
  };

  const handleImage = (
    element: HTMLElement,
    imageGroup: { src: string; alt: string }[],
    result: JSX.Element[],
    index: number
  ) => {
    const imgSrc = element.getAttribute("src") || "";
    const imgAlt = element.getAttribute("alt") || "";
    imageGroup.push({ src: imgSrc, alt: imgAlt });

    // If there is a consecutive group of images, render them as a carousel
    if (imageGroup.length > 0) {
      result.push(
        <Carousel key={`carousel-${index}`}>
          {imageGroup.map((img, imgIndex) => (
            <CarouselItem key={imgIndex} src={img.src} alt={img.alt} />
          ))}
        </Carousel>
      );
      imageGroup.length = 0; // Clear the image group after rendering
    }
  };

  const handleAccordionTitle = (
    element: HTMLElement,
    currentAccordionItems: { title: string; content: ReactNode }[]
  ) => {
    currentAccordionItems.push({
      title: element.textContent || "",
      content: <></> // Placeholder for content, to be filled later
    });
  };

  const handleList = (
    element: HTMLElement,
    tagName: "ul" | "ol",
    currentListItems: ReactNode[],
    currentListType: "ul" | "ol" | null,
    result: JSX.Element[],
    index: number
  ) => {
    if (currentListType) {
      // Render the existing list if another list begins or if the section ends
      const ListComponent =
        currentListType === "ul" ? BulletedList : NumberedList;
      result.push(
        <ListComponent key={index}>{currentListItems}</ListComponent>
      );
      currentListItems.length = 0; // Reset list items
    }

    // Start a new list
    currentListType = tagName;
    currentListItems.length = 0; // Clear any previous list items

    // Add the list items to the current list
    Array.from(element.children).forEach((li, liIndex) => {
      currentListItems.push(<li key={liIndex}>{li.textContent || ""}</li>);
    });
  };

  const handleParagraph = (
    element: HTMLElement,
    result: JSX.Element[],
    index: number
  ) => {
    result.push(
      <Paragraph key={index}>{renderWithHTMLTags(element.innerHTML)}</Paragraph>
    );
  };

  const handleTable = (
    element: HTMLElement,
    result: JSX.Element[],
    index: number
  ) => {
    const rows = Array.from(element.getElementsByTagName("tr")).map(
      (row, rowIndex) => (
        <tr
          key={rowIndex}
          dangerouslySetInnerHTML={{ __html: row.innerHTML }}
        />
      )
    );
    result.push(<Table key={index}>{rows}</Table>);
  };

  const handleDefaultElement = (
    element: HTMLElement,
    result: JSX.Element[],
    index: number
  ) => {
    result.push(
      <div
        key={index}
        dangerouslySetInnerHTML={{ __html: element.outerHTML }}
      />
    );
  };

  const renderWithHTMLTags = (content: string) => {
    // Using `dangerouslySetInnerHTML` to parse and render HTML content
    return <span dangerouslySetInnerHTML={{ __html: content }} />;
  };

  return (
    <div className="w-full h-full flex flex-col items-center px-0 lg:px-10">
      <Card imgSrc={imgSrc} alt={alt} title={title}>
        {sections.map((section, idx) => (
          <Section key={idx} title={section.title}>
            {renderSectionContent(section.content)}
          </Section>
        ))}
      </Card>
    </div>
  );
};

export default MarkdownRenderer;
