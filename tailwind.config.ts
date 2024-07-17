import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
        'bg': '#1F1F28',
        'bg-dim': '#181820',
        'fg': '#c0caf5',
        'fg-dim': '#C8C093',
        'black': '#000',
    },
    keyframes: {
        'float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-5px)' },
        }
    },
    animation: {
        'float': 'float 2s infinite',
    },
    extends: {
        'zIndex': {
            'minus1': '-1',
        },
    },
  },
  plugins: [],
};
export default config;
