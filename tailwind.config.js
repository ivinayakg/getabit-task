/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "paper-crumble": "url('/paper_crumble.png')",
        back: "url('/back.png')",
      },
      gridTemplateColumns: {
        overSizeheader: "5fr 1fr 1fr",
        header: "3fr 1fr 1fr",
        tabletHeader: "2fr 1fr 1fr",
        mobileHeader: "1fr 3fr",
      },
      colors: {
        secondary: "#764CC2",
      },
      fontFamily: {
        "gloria-hallelujah": ["Gloria Hallelujah", "cursive"],
        "eb-garamond": ["EB Garamond", "serif"],
      },
      boxShadow: {
        "outer-shadow": "0px 0px 19px 3px rgba(0,0,0,0.56)",
      },
    },
  },
  plugins: [],
};
