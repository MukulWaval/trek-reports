import React from "react";
import AppRoutes from "./routes/Routes";
import GlobalListener from "./components/GlobalListener";

const App: React.FC = () => {
  return (
    <>
      {import.meta.env.VITE_ENABLE_EVENTS === "true" && <GlobalListener />}
      <AppRoutes />
    </>
  );
};

export default App;
