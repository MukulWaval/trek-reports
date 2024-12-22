import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="link link-primary">
      {children}
    </a>
  );
};

export default Link;
