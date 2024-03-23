import type { Config } from "tailwindcss"
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'deep-violet': '#21092F',
      'purplish-grey': '#8F8694',
      'light-grey': '#DFDEE0',
      'white': '#FFF',
      'red': '#FF5050',
    },
    fontFamily: {
      grotesk: ["'Space Grotesk Variable'", 'sans-serif']
    }
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        '.text-body-s': {
          fontFamily: theme("fontFamily.grotesk"),
          fontSize: '12px',
          letterSpacing: '0px',
        },
        '.text-body-m': {
          fontFamily: theme("fontFamily.grotesk"),
          fontSize: '12px',
          letterSpacing: '2px',
        },
        '.text-body-l': {
          fontFamily: theme("fontFamily.grotesk"),
          fontSize: '14px',
          letterSpacing: '2px',
        },
        '.text-heading-l': {
          fontFamily: theme("fontFamily.grotesk"),
          fontSize: '18px',
          letterSpacing: '0px',
        },
        '.text-heading-xl': {
          fontFamily: theme("fontFamily.grotesk"),
          fontSize: '28px',
          letterSpacing: '3.42px',
        },
        '.bg-gradient': {
          background: "linear-gradient(164deg, #6348FE 4.74%, #610595 88.83%)",
        }
      })
    })
  ],
} satisfies Config
