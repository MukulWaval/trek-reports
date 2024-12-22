import { ReactNode } from "react";
import Section from "../components/Section";
import Accordion from "../components/Accordion";
import AccordionItem from "../components/AccordionItem";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import BulletedList from "../components/BulletedList";
import NumberedList from "../components/NumberedList";
import Table from "../components/Table";
import Paragraph from "../components/Paragraph";
import { SectionData } from "../components/Report";
import Link from "../components/Link";
import Code from "../components/Code";

interface SubsectionData {
  title: string;
  content: ReactNode;
}

interface ParserProps {
  section: SectionData;
}

const Parser: React.FC<ParserProps> = ({ section }) => {
  const parseInlineContent = (node: Node): ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent || "";
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;
      const Tag = element.tagName.toLowerCase();

      // Recursively parse child nodes for inline tags
      const children = Array.from(element.childNodes).map(parseInlineContent);

      switch (Tag) {
        case "em":
        case "strong":
        case "span": // Add more inline tags if necessary
          return <Tag key={element.outerHTML}>{children}</Tag>;
        case "a":
          // Use your custom Link component for anchor tags
          return (
            <Link
              key={element.outerHTML}
              href={element.getAttribute("href") || ""}
            >
              {children}
            </Link>
          );
        //

        default:
          return children; // Flatten unknown tags or handle generically
      }
    }

    return null;
  };

  const parseListItems = (listElement: HTMLElement): ReactNode[] => {
    const listItems = Array.from(listElement.children).map((li, liIndex) => {
      // Check if this list item has any nested list
      const nestedLists = Array.from(li.getElementsByTagName("ul")).concat(
        Array.from(li.getElementsByTagName("ol"))
      );

      const nestedContent = nestedLists.length
        ? nestedLists.map((nestedList, index) => {
            return (
              <div key={`nested-${liIndex}-${index}`}>
                {parseListItems(nestedList)}{" "}
                {/* Recursively render nested lists */}
              </div>
            );
          })
        : null;

      // Parse inline content for the list item
      const inlineContent = Array.from(li.childNodes).map(parseInlineContent);

      return (
        <li key={liIndex}>
          {inlineContent}
          {nestedContent}{" "}
          {/* Render nested lists within the current list item */}
        </li>
      );
    });

    return listItems;
  };

  const parseContent = (
    elements: Element[],
    startIndex: number = 0
  ): [ReactNode[], number] => {
    const content: ReactNode[] = [];
    let index = startIndex;

    while (index < elements.length) {
      const element = elements[index] as HTMLElement;

      if (element.tagName === "P") {
        const imgElements = Array.from(element.getElementsByTagName("img"));
        if (imgElements.length > 0 && !element.textContent?.trim()) {
          // If there are images inside the paragraph and no text, render a carousel
          const carouselItems = imgElements.map((img, idx) => (
            <CarouselItem key={idx} src={img.src} alt={img.alt} />
          ));
          content.push(
            <Carousel key={element.innerHTML}>{carouselItems}</Carousel>
          );
        } else {
          // Otherwise, just parse the paragraph content
          const children = Array.from(element.childNodes).map(
            parseInlineContent
          );
          content.push(
            <Paragraph key={element.innerHTML}>{children}</Paragraph>
          );
        }
        index++;
      } else if (element.tagName === "TABLE") {
        const thead = element.querySelector("thead");
        const tbody = element.querySelector("tbody");

        const headRows = thead
          ? Array.from(thead.getElementsByTagName("tr")).map(
              (row, rowIndex) => (
                <tr key={`thead-${rowIndex}`}>
                  {Array.from(row.children).map((cell, cellIndex) => (
                    <th key={cellIndex}>{cell.textContent?.trim() || "-"}</th>
                  ))}
                </tr>
              )
            )
          : null;

        const bodyRows = tbody
          ? Array.from(tbody.getElementsByTagName("tr")).map(
              (row, rowIndex) => (
                <tr key={`tbody-${rowIndex}`}>
                  {Array.from(row.children).map((cell, cellIndex) => {
                    // Parse inline content for table cells
                    const children = Array.from(cell.childNodes).map(
                      parseInlineContent
                    );
                    return <td key={cellIndex}>{children}</td>;
                  })}
                </tr>
              )
            )
          : [];

        content.push(
          <Table key={element.innerHTML}>
            {headRows && <thead>{headRows}</thead>}
            <tbody>{bodyRows}</tbody>
          </Table>
        );
        index++;
      } else if (element.tagName === "UL" || element.tagName === "OL") {
        const isBulleted = element.tagName === "UL";
        const ListComponent = isBulleted ? BulletedList : NumberedList;

        const listItems = parseListItems(element); // Parse nested lists here

        content.push(
          <ListComponent key={element.innerHTML}>{listItems}</ListComponent>
        );
        index++;
      } else if (element.tagName === "H3") {
        break; // Stop parsing content if we encounter a new subsection header
      } else if (element.tagName === "PRE") {
        // Handle <pre> with <code> inside it
        const codeElements = Array.from(element.getElementsByTagName("code"));
        const codeContent = codeElements.map((code, idx) => {
          // Parse the content inside the <code> tag and wrap it in the custom Code component
          const children = Array.from(code.childNodes).map(parseInlineContent);
          return <Code key={idx}>{children}</Code>;
        });

        content.push(<pre key={element.innerHTML}>{codeContent}</pre>);
        index++;
      } else {
        // Generic handling for unknown elements
        content.push(
          <div
            key={element.innerHTML}
            dangerouslySetInnerHTML={{ __html: element.outerHTML }}
          />
        );
        index++;
      }
    }

    return [content, index];
  };

  const parseSubsections = (
    elements: Element[]
  ): [ReactNode[], SubsectionData[]] => {
    const subsections: SubsectionData[] = [];
    const initialContent: ReactNode[] = [];
    let index = 0;

    while (index < elements.length) {
      const element = elements[index];

      if (element.tagName === "H3") {
        // Parse the current subsection
        const title = element.textContent || "";
        const [subsectionContent, nextIndex] = parseContent(
          elements,
          index + 1
        );
        subsections.push({ title, content: subsectionContent });
        index = nextIndex;
      } else {
        // Parse unnamed content before any subsection
        const [parsedContent, nextIndex] = parseContent(elements, index);
        initialContent.push(...parsedContent);
        index = nextIndex;
      }
    }

    return [initialContent, subsections];
  };

  const doc = section.content;
  const elements = Array.from(doc.body.children); // Extract all child elements from the document body
  const [initialContent, subsections] = parseSubsections(elements);

  return (
    <Section title={section.title}>
      {/* Render initial content outside the Accordion */}
      {initialContent.length > 0 && <div>{initialContent}</div>}

      <Accordion>
        {subsections.map((subsection, index) => (
          <AccordionItem key={index} title={subsection.title}>
            {subsection.content}
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default Parser;
