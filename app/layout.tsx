import type { Metadata, Viewport } from "next";
import "./globals.css";
import WowInit from "@/components/WowInit";
import { LanguageProvider } from "@/components/LanguageProvider";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const siteName = "Abdulaziz AlAswdi | عبدالعزيز الأسودي";
const description =
    "مهندس برمجيات شغوف بالذكاء الاصطناعي وتحليل البيانات؛ أبني مواقع وتطبيقات ويب متكاملة وحلولًا ذكية، وأحوّل الأرقام إلى قرارات. Software engineer passionate about AI and data analytics, building full-stack web apps and smart solutions, and turning numbers into decisions.";

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
