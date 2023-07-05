/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "30px",
    },
    extend: {
      fontFamily: {
        "noto-sans": ["'Noto Sans', sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
