/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // TipTune Brand Colors
        'primary-blue': '#6366F1',
        'secondary-indigo': '#4338CA',
        'accent-gold': '#FBBF24',
        'deep-slate': '#1E293B',
        'pure-white': '#FFFFFF',
        // Legacy colors (keeping for compatibility)
        navy: '#0B1C2D',
        'blue-primary': '#4DA3FF',
        'ice-blue': '#6EDCFF',
        mint: '#9BF0E1',
        gold: '#FFD166',
      },
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'ui-sans-serif', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
