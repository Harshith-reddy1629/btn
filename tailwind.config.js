/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages//*.{js,ts,jsx,tsx,mdx}",
    "./src/components//*.{js,ts,jsx,tsx,mdx}",
    "./src/app//*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        btnSpanShadow: "0 0 35px 26px var(--shadow-color)",
      },
      backgroundImage: {
        "btn-gradient-rotation":
          "linear-gradient( var(--gradient-angle) , #0D6EFD ,#ffffff40, #c0c0c0)",
      },
      backgroundSize: {
        "95%": "calc(100% - 5px) calc(100% - 5px)",
        "100%": "100% 100%",
      },
      animation: {
        animationOnLeave: "animationOnLeave 1.3s forwards",
        animationOnHover: "animationOnHover .75s forwards",
      },
      keyframes: {
        animationOnLeave: {
          "0%": {
            "--gradient-angle": "225deg",
          },
          "100%": {
            "--gradient-angle": "45deg",
          },
        },
        animationOnHover: {
          "0%": {
            "--gradient-angle": "45deg",
          },
          "100%": {
            "--gradient-angle": "225deg",
          },
        },
      },
    },
  },
  plugins: [],
};
