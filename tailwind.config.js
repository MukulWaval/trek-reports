/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {}
  },
  plugins: [
    require("daisyui"),
    function ({ addBase }) {
      addBase({
        /* Apply to all elements globally */
        "*": {
          scrollbarWidth: "none", // Hides scrollbar in non-Webkit browsers
          scrollbarColor: "transparent transparent" // Transparent scrollbar thumb and track
        },
        /* Webkit-based styling for hiding the scrollbar */
        "&::-webkit-scrollbar": {
          width: "0px", // Hide scrollbar in Webkit browsers
          height: "0px" // Hide horizontal scrollbar
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent", // Make the thumb transparent
          borderRadius: "0px" // Remove rounding for the thumb
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent" // Make the track transparent
        },
        "&::-webkit-scrollbar-button": {
          display: "none" // Hide the scrollbar buttons (arrows)
        },
        /* Allow scrolling functionality */
        "html, body": {
          overflow: "visible" // Ensure scrolling is still possible
        }
      });
    }
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset"
    ],
    base: true,
    styled: true,
    utils: true,
    logs: false,
    themeRoot: ":root"
  },
  darkMode: ["selector", '[data-theme="dark"]']
};
