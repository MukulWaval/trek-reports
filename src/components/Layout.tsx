import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <body className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </body>
  </>
);

export default Layout;
