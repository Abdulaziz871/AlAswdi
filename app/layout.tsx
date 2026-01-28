import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import WowInit from "@/components/WowInit";

const ptSans = PT_Sans({
    subsets: ["latin"],
    weight: ['400', '700'],
    variable: '--font-pt-sans',
});

export const metadata: Metadata = {
    title: "Abdulaziz AlAswdi - Full Stack Developer Portfolio",
    description: "Professional portfolio of Abdulaziz AlAswdi, a Full Stack Developer and Designer with over 4 years of experience in building comprehensive digital solutions.",
    keywords: ["Full Stack Developer", "Web Developer", "Software Engineer", "Portfolio", "Abdulaziz AlAswdi"],
    authors: [{ name: "Abdulaziz AlAswdi" }],
    openGraph: {
        title: "Abdulaziz AlAswdi - Full Stack Developer Portfolio",
        description: "Professional portfolio showcasing web development projects and expertise",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={ptSans.variable}>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </head>
            <body className={ptSans.className}>
                {children}
                <WowInit />
            </body>
        </html>
    );
}
