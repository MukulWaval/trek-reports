import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'your-repo-name' with your repository name
export default defineConfig({
  plugins: [react()],
  base: "/trek-reports/"
});