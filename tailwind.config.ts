import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: 'class',
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
            'white': '#FFFFFF',
            'black-heading': '#2D2E32',
            'black-text': '#767676',
            "text-light": "#FFFFFF",
            'bg-light': '#F4F3ED',
            'bg-dark': '#000000',
            'bg-white': '#F7F7F7',
            grey: '#F9F9F9',

            primary: '#1A1A1A',
            secondary: '#777777',
            accent: '#3AA6B9',
            'border-light': '#F5F5F5',
            border: '#EEEEEE'
        },
        fontFamily: {
            // lora: ["Lora", 'serif'],
            // mulish: ["Mulish", 'sans-serif']
            oswald: ["Oswald", 'sans-serif'],
            poppins: ["Poppins", 'sans-serif'],
            inter: ["Inter", 'sans-serif']

        },
    },
    plugins: [],
};
export default config;
