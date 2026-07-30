import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                hover: "#222222",
                primary: "#FFFFFF",
                primaryHover: "#f2f2f2",
                text: "#FFFFFF",
                card: "var(--card)",
                "card-foreground": "var(--card-foreground)",
                "muted-foreground": "var(--muted-text)",
                border: "var(--border-color)",
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
