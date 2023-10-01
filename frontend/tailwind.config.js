/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#f9f8f5",
                black: "#212427",
            },
        },
    },
    plugins: [],
}
