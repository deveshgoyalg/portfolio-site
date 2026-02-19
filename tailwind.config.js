/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"IBM Plex Sans"', 'sans-serif'],
                mono: ['"IBM Plex Mono"', 'monospace'],
            },
            colors: {
                surface: '#0F0F0F',
                primary: '#E8E8E8',
                accent: '#7A1C1C',
                'accent-light': '#9B2C2C',
                muted: '#666666',
                'surface-light': '#1A1A1A',
                'surface-border': '#2A2A2A',
            },
        },
    },
    plugins: [],
}
