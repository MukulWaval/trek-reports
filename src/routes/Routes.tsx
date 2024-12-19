// import React from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Layout from "../components/Layout";
// import NotFound from "../components/NotFound";
// import Home from "../pages/Home";
// import About from "../pages/About";

// // Trek Reports
// import BaildaraToFenyadeviGhat from "../pages/trek-reports/baildara-to-fenyadevi-ghat";

// const AppRoutes: React.FC = () => (
//   <Router basename="/trek-reports">
//     <Layout>
//       <Routes>
//         {/* General Pages */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />

//         {/* Trek Reports */}
//         <Route
//           path="/report/baildara-to-fenyadevi-ghat"
//           element={<BaildaraToFenyadeviGhat />}
//         />

//         {/* Catch-All: 404 Not Found */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Layout>
//   </Router>
// );

// export default AppRoutes;

import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";

// Trek Reports
import BaildaraToFenyadeviGhat from "../pages/trek-reports/baildara-to-fenyadevi-ghat";

const AppRoutes: React.FC = () => (
  <Router>
    <Layout>
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Trek Reports */}
        <Route
          path="/report/baildara-to-fenyadevi-ghat"
          element={<BaildaraToFenyadeviGhat />}
        />

        {/* Catch-All: 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </Router>
);

export default AppRoutes;
