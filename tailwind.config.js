/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: '#F5F3EE',
                ink: '#111111',
                ochre: '#C9762E',
                slate: '#2A2A2A',
            },
            fontFamily: {
                sans: ['"Space Grotesk"', 'sans-serif'],
                drama: ['"DM Serif Display"', 'serif'],
                mono: ['"Space Mono"', 'monospace'],
            }
        },
    },
    plugins: [],
}
