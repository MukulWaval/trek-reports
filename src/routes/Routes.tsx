import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import Report from "../components/Report";

// Import DynamicViewport component
import DynamicViewport from "../components/DynamicViewport";

const AppRoutes: React.FC = () => (
  <Router>
    {/* Place DynamicViewport inside the Router to update viewport on route change */}
    <DynamicViewport />

    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/report/:id" element={<Report />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </Router>
);

export default AppRoutes;
