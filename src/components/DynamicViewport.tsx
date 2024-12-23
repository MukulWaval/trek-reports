import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // React Router hook for detecting route changes

const DynamicViewport: React.FC = () => {
  const location = useLocation(); // Access the current route

  useEffect(() => {
    const adjustViewport = () => {
      // Calculate the required scale to fit the content
      const scaleWidth =
        window.innerWidth / document.documentElement.scrollWidth;
      const scaleHeight =
        window.innerHeight / document.documentElement.scrollHeight;
      const scale = Math.min(scaleWidth, scaleHeight);

      // Select or create the viewport meta tag
      let meta = document.querySelector(
        'meta[name="viewport"]'
      ) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "viewport";
        document.head.appendChild(meta);
      }

      // Set the viewport content dynamically
      meta.content = `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, user-scalable=no`;
    };

    adjustViewport(); // Adjust on route change
    window.addEventListener("resize", adjustViewport); // Adjust on window resize

    return () => {
      window.removeEventListener("resize", adjustViewport); // Cleanup
    };
  }, [location]); // Re-run the effect on route changes

  return null;
};

export default DynamicViewport;
