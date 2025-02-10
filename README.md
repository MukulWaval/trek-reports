# 🔬 Trek.Reports

A web application to dynamically render and parse Markdown content, providing a structured report display with support for sections, images, links, tables, and other elements. This project uses React and Markdown for content rendering, along with custom components for improved interactivity.

## 🌍 Features

- 📝 Render Markdown content with support for **sections**, **headings**, **tables**, **lists**, **code blocks**, **images**, and **links**.
- 🎨 Display images inside sections or within carousels if embedded in the Markdown.
- 🛏️ **Accordion** component to dynamically display and collapse subsections.
- 🗃️ Custom **Parser** component for extracting and displaying structured content.
- 🔍 Automatically parse and display content from Markdown files hosted on the server.

## 🚀 Getting Started

To get started with this project, follow the instructions below.

### 🔹 Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher) 🚀
- [npm](https://www.npmjs.com/get-npm) (or [yarn](https://yarnpkg.com/)) 📝

### 🔹 Installation

Clone the repository:

```bash
git clone https://github.com/MukulWaval/trek-reports.git
cd trek-reports
```

Install the required dependencies:

```bash
npm install
```

## 😃 Usage

To start the development server and see the app in action:

```bash
npm run dev
```

Open your browser and go to `http://localhost:5172/trek-reports/` to view the app.

## 📂 File Structure

The project has the following file structure:

```plaintext
.
├── src/
│   ├── components/
│   │   ├── Accordion.tsx
│   │   ├── AccordionItem.tsx
│   │   ├── Card.tsx
│   │   ├── Carousel.tsx
│   │   ├── CarouselItem.tsx
│   │   ├── Code.tsx
│   │   ├── Link.tsx
│   │   ├── Paragraph.tsx
│   │   └── Table.tsx
│   ├── utils/
│   │   └── Parser.tsx
│   ├── pages/
│   │   └── Report.tsx
│   ├── App.tsx
│   └── index.tsx
└── public/
    └── All the markdown files
```

- **components/**: Contains UI components like Accordion, Carousel, and Table used to render parsed content.
- **utils/**: Contains utility files like `Parser.tsx` to process Markdown content and transform it into React components.
- **pages/**: Contains page-level components like `Report.tsx` for rendering individual reports with parsed content.
- **public/**: Public assets and Markdown files along with the entry HTML file (`index.html`).

## 📃 How it works

1. **Markdown Parsing**: The app fetches a Markdown file based on the `id` parameter from the URL. The content is parsed and transformed into HTML using `MarkdownIt`.
2. **Content Rendering**: The Markdown content is parsed by the `Parser` component, which renders sections, subsections, tables, lists, and images.
3. **Accordion for Sections**: Each section is displayed in an accordion format, where clicking on the section title expands or collapses the content.
4. **Dynamic Images and Carousels**: If the Markdown includes an image or a `<p>` tag containing only an image, it will be displayed as a carousel if there are multiple images.

### 🔬 Example

```md
# Report Title

![Image](path-to-image.jpg)

## Section 1

This is some content in section 1.

### Subsection 1.1

More content in subsection 1.1.

## Section 2

This is content for the second section.
```

In this case, the app will render:

- 🌐 A title from the h1 tag.
- 📸 A carousel if there are images.
- 🔧 An accordion with sections and subsections.

## 🔄 Custom Components

- **Accordion**: Used to display collapsible sections.
- **Table**: Renders tables inside the Markdown content.
- **Link**: Custom component for handling anchor links (`<a>`).
- **Code**: Renders inline code blocks or multi-line code within `<pre>` and `<code>` tags.

## 🙌 Contributing

We welcome contributions to improve the project. Please feel free to fork the repository and submit a pull request with your improvements or bug fixes.

### 🔹 Steps to contribute:

1. ✨ Fork the repository.
2. 🔍 Create a new branch (`git checkout -b feature/your-feature`).
3. 📊 Make your changes and commit them (`git commit -am 'Add new feature'`).
4. 🚀 Push your branch (`git push origin feature/your-feature`).
5. ✉️ Open a pull request with a detailed description of your changes.

## 💎 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE.md) file for details.
