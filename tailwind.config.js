/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                lgreen: "#00df9a",
                lblack: "#00171d",
            },
        },
        screens: {
            xs: "440px",
            ...defaultTheme.screens,
        },
    },
    plugins: [],
};
