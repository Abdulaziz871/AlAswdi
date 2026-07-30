"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
        if (!hasFinePointer) {
            return;
        }

        const root = document.documentElement;

        const isInteractive = (target: EventTarget | null) => {
            const element = target as HTMLElement | null;
            if (!element) {
                return false;
            }

            return Boolean(
                element.closest(
                    "a, button, input, textarea, select, label, [role='button'], [data-cursor='grow']"
                )
            );
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (!root.classList.contains("custom-cursor-enabled")) {
                root.classList.add("custom-cursor-enabled");
            }
            setPosition({ x: event.clientX, y: event.clientY });
            setIsVisible(true);
            setIsActive(isInteractive(event.target));
        };

        const handleMouseOver = (event: MouseEvent) => {
            setIsActive(isInteractive(event.target));
        };

        const handleMouseDown = () => setIsActive(true);
        const handleMouseUp = () => setIsActive(false);
        const handleMouseLeaveWindow = () => {
            setIsVisible(false);
            root.classList.remove("custom-cursor-enabled");
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseleave", handleMouseLeaveWindow);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseleave", handleMouseLeaveWindow);
            root.classList.remove("custom-cursor-enabled");
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className={`custom-cursor ${isActive ? "custom-cursor--active" : ""} ${
                isVisible ? "custom-cursor--visible" : ""
            }`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
}
