"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
        if (!hasFinePointer) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.1,
            smoothWheel: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 1,
        });

        let animationFrameId = 0;

        const raf = (time: number) => {
            lenis.raf(time);
            animationFrameId = requestAnimationFrame(raf);
        };

        animationFrameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrameId);
            lenis.destroy();
        };
    }, []);

    return null;
}
