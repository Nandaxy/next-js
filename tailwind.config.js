module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        apiPrimary: '#12A7D3',
        primary: '#4682A9',
        darkPrimary: '#5099c7',
        footer: '#0F172A',
        dark: '#121212',
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
