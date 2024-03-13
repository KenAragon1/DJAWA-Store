/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/**/*.blade.php"],
    theme: {
        extend: {
            colors: {
                "pastel-blue": "#596FB7",
                "dark-pastel-blue": "#11235A",
                "yellow-pastel": "#F6ECA9",
                "pale-yellow-pastel": "#F6ECA9",
            },
        },
    },
    plugins: [],
};
