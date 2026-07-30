import type { Metadata } from "next";
import "./globals.css";
import WowInit from "@/components/WowInit";
import { LanguageProvider } from "@/components/LanguageProvider";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
    title: "Abdulaziz AlAswdi | عبدالعزيز الأسودي",
    description: "Portfolio website for Abdulaziz AlAswdi.",
    keywords: ["Portfolio", "Abdulaziz AlAswdi", "Arabic", "English", "Full Stack Developer"],
    authors: [{ name: "Abdulaziz AlAswdi" }],
    openGraph: {
        title: "Abdulaziz AlAswdi | عبدالعزيز الأسودي",
        description: "Bilingual portfolio showcasing web development projects and technical experience.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar" dir="rtl" suppressHydrationWarning>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </head>
            <body suppressHydrationWarning>
                <LanguageProvider>
                    <SmoothScroll />
                    <CustomCursor />
                    {children}
                    <WowInit />
                </LanguageProvider>
            </body>
        </html>
    );
}
