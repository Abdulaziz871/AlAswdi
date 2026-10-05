import { ImageResponse } from "next/og";

export const alt = "Abdulaziz AlAswdi — Web Developer & Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px", background: "#000", color: "#fff" }}>
                <svg width="96" height="96" viewBox="0 0 32 32">
                    <rect width="32" height="32" rx="7" fill="#fff" />
                    <path fill="#000" fillRule="evenodd" d="M16 5.5 25.5 26.5h-4.3l-1.9-4.3h-6.6l-1.9 4.3H6.5Zm0 8.6-2 4.8h4Z" />
                </svg>
                <div style={{ fontSize: 76, fontWeight: 700, marginTop: 48, letterSpacing: -2 }}>Abdulaziz AlAswdi</div>
                <div style={{ fontSize: 36, color: "#a3a3a3", marginTop: 16 }}>Web Developer & Designer · Full Stack · Data</div>
                <div style={{ fontSize: 28, color: "#737373", marginTop: 48 }}>alaswdi.vercel.app</div>
            </div>
        ),
        size
    );
}
