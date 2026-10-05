import type { Metadata, Viewport } from "next";
import "./globals.css";
import WowInit from "@/components/WowInit";
import { LanguageProvider } from "@/components/LanguageProvider";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const siteName = "Abdulaziz AlAswdi | عبدالعزيز الأسودي";
const description =
    "عبدالعزيز الأسودي — مطور ويب ومصمم بخبرة +4 سنوات في تطوير الواجهات الأمامية والخلفية وتحليل البيانات. Abdulaziz AlAswdi — Web developer & designer building full-stack web apps, AI-powered tools, and Power BI dashboards.";

export const metadata: Metadata = {
    metadataBase: new URL("https://alaswdi.vercel.app"),
    title: {
        default: siteName,
        template: "%s | Abdulaziz AlAswdi",
    },
    description,
    applicationName: "Abdulaziz AlAswdi",
    keywords: [
        "Abdulaziz AlAswdi",
        "عبدالعزيز الأسودي",
        "Web Developer",
        "مطور ويب",
        "Full Stack Developer",
        "Next.js",
        "Webflow",
        "Power BI",
        "UI/UX",
        "Portfolio",
        "معرض أعمال",
    ],
    authors: [{ name: "Abdulaziz AlAswdi", url: "https://alaswdi.vercel.app" }],
    creator: "Abdulaziz AlAswdi",
    alternates: { canonical: "/" },
    openGraph: {
        title: siteName,
        description,
        url: "/",
        siteName: "Abdulaziz AlAswdi",
        locale: "ar_SA",
        alternateLocale: ["en_US"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: siteName,
        description,
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = {
    themeColor: "#000000",
    colorScheme: "dark",
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
