/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      fontSize: {
        h1: [
          "clamp(2.25rem, 4vw, 3.375rem)",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        h2: [
          "clamp(2rem, 4vw, 2.75rem)",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        h3: [
          "clamp(1.75rem, 4vw, 2.25rem)",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
      },
      colors: {
        primary: {
          10: "#edecff",
          20: "#dcdaff",
          30: "#c9c7ff",
          40: "#b6b6ff",
          50: "#a2a4ff",
          60: "#8c93ff",
          70: "#7482ff",
          80: "#5672ff",
          90: "#2962ff",
        },
        gray: {
          10: "#292c32",
          20: "#393e45",
          30: "#4a4f59",
          40: "#5a616c",
          50: "#6a7280",
          60: "#7d8491",
          70: "#9096a1",
          80: "#a4a9b2",
          90: "#b7bbc2",
        },
      },
      borderRadius: {
        "4xl": "32px",
      },
    },
  },
  plugins: [],
};
