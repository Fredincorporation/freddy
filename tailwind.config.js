/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        card: '#0a0e17',
        'card-hover': '#121926',
        border: '#1e293b',
        'border-bold': '#334155',
        'accent-1': '#a78bfa',
        'accent-2': '#7dd3fc',
        'accent-3': '#ffb86b',
        'accent-4': '#6ee7b7',
      },
      boxShadow: {
        'brutal': '6px 6px 0 rgba(0,0,0,0.5)',
        'brutal-lg': '8px 8px 0 rgba(0,0,0,0.5)',
        'brutal-xl': '0 25px 60px -15px rgba(0,0,0,0.7)',
        'emerald-glow': '0 0 15px rgba(52, 211, 153, 0.3), 0 0 40px rgba(52, 211, 153, 0.1)',
        'accent-glow': '0 0 15px rgba(167, 139, 250, 0.3), 0 0 40px rgba(167, 139, 250, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Courier New', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
