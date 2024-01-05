/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IRanSans: "IRanSans",
        mehr: "B Mehr",
        dastnevis: "IRDast Nevis",
      },
    },
  },
  plugins: [],
};
