module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Minecraftchmc"],
        serif: ["Press Start 2P"],
        mono: ["PressStart2P"],
        display: ["Minecraftchmc"],
        body: ["Minecraftchmc"],
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem",
        "4xlh": "2rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      colors: {
        green: {
          100: "#cfc",
          200: "#008f09",
          300: "#0d4b25",
        },
        white: "#fff",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
