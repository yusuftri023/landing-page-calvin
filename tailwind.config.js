/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 2px 0.2px",
      },
      screens: {
        xs: "480px",
        "custom-xl": "1140px",
      },
      colors: {
        "primary-100": "#FDFBE9",
        "primary-200": "#FAED8E",
        "primary-300": "#F6DB4E",
        "primary-400": "#F1C513",
        "primary-500": "#C3870B",
        "secondary-100": "#F5F5FD",
        "secondary-200": "#DFDDF7",
        "secondary-300": "#8B75DD",
        "secondary-400": "#6946BC",
        "secondary-500": "#493181",
        "tertiary-100": "#FFFFFF",
        "tertiary-200": "#D3D3D3",
        "tertiary-300": "#B6B6B6",
        "tertiary-400": "#848484",
        "tertiary-500": "#616161",
        "tertiary-600": "#070312",
      },
      fontFamily: {
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        // Fade up and down
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        // Slide
        "slide-left": "slideLeft 300ms ease-in-out forwards",
        "slide-right": "slideRight 300ms ease-in-out forwards",
      },
      keyframes: {
        // Fade up and down
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(-100%)" },
        },
        slideRight: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(100%)" },
        },
        slideInFromRight: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideInFromLeft: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideOutToLeft: {
          "0%": { opacity: 0, transform: "translateX(0)" },
          "100%": { opacity: 1, transform: "translateX(100%)" },
        },
      },
    },
  },
};
