module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scale-loop': 'scaleAnim 2s infinite',
      },
      keyframes: {
        scaleAnim: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      }
    },
  },
  plugins: [],
}