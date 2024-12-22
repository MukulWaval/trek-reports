import { ReactNode } from "react";

interface CodeProps {
  children: ReactNode;
}

const Code: React.FC<CodeProps> = ({ children }) => {
  return (
    <div className="mockup-code mt-2">
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default Code;
