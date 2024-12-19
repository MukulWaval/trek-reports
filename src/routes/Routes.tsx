import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";

{
  /*trek report*/
}
import BaildaraToFenyadeviGhat from "../pages/trek-reports/baildara-to-fenyadevi-ghat";

const AppRoutes: React.FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />

        {/* Trek reports */}
        <Route
          path="/report/baildara-to-fenyadevi-ghat"
          element={<BaildaraToFenyadeviGhat />}
        />
      </Routes>
    </Layout>
  </Router>
);

export default AppRoutes;
