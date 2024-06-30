import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        // extend: {
        //     backgroundImage: {
        //         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        //         "gradient-conic":
        //             "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        //     },
        // },
        colors: {
            'black-heading': '#2D2E32',
            'black-text': '#767676',
            grey: '#F9F9F9'
        },
        fontFamily: {
            // lora: ["Lora", 'serif'],
            mulish: ["Mulish", 'sans-serif']

        },
    },
    plugins: [],
};
export default config;
