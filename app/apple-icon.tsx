import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#000" }}>
                <svg width="120" height="120" viewBox="0 0 32 32">
                    <path fill="#fff" fillRule="evenodd" d="M16 5.5 25.5 26.5h-4.3l-1.9-4.3h-6.6l-1.9 4.3H6.5Zm0 8.6-2 4.8h4Z" />
                </svg>
            </div>
        ),
        size
    );
}
