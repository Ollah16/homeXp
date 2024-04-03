import type { Config } from "tailwindcss";

const plugin = require('tailwindcss/plugin')


const rotateX = plugin(function ({ addUtilities }: any) {
  addUtilities({
    '.rotate-y': {
      transform: 'rotateY(180deg)'
    }
  })
})

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    }
  },
  plugins: [rotateX],
};
export default config;
