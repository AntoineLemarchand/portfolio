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
        'fg': '#cdd6f4',
        'bg-dim': '#434356',
        'fg-dim': '#9399b2',
        'accent-red': '#f38ba8',
        'accent-peach': '#fab387',
        'accent-green': '#a6e3a1',
        'accent-sky': '#89dceb',
        'accent-rosewater': '#f5e0dc',
        'black': '#000',
        'transparent': 'transparent',
    },
    keyframes: {
        float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-5px)' },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
    },
    animation: {
        float: 'float 2s infinite',
        text: 'text 5s ease infinite',
    },

    extends: {
        text: {
            'nodrag': {
                'user-select': 'none',
                'user-drag': 'none',
                '-webkit-user-drag': 'none',
                'moz-user-select': 'none',
                'webkit-user-select': 'none',
                'ms-user-select': 'none',
            }
        },
        fontFamily: {
            heading: ['Michroma', 'sans-serif'],
            content: ['Inter', 'sans-serif'],
        }
    },
  },
  plugins: [],
};
export default config;
