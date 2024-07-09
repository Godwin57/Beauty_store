import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "header-background": "url('../assets/syrup.jpeg')",
            },
            fontFamily: {
                "Open-sans": ["Open Sans", "sans-serif"],
                Poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                lightGrey: "rgba(138, 138, 138, 1)",
                extraLightGrey: "rgba(0, 0, 0, 0.4)",
                veryLightGray: "rgba(236, 231, 227, 1)",
                "semi-lightblue": "rgba(52, 157, 255, 1)",
                "light-orange": "rgba(252, 178, 141, 1)",
                fadingGrey: "rgba(127, 127, 127, 0.7)",
                fullGreen: "rgba(18, 212, 66, 0.68)",
            },
        },
    },
    plugins: [],
};
export default config;
