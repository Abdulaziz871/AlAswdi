"use client";

import { useEffect } from "react";

export default function WowInit() {
    useEffect(() => {
        // Dynamically import WOW.js only on client side
        // @ts-ignore - wowjs doesn't have TypeScript declarations
        const initWow = async () => {
            const WOW = (await import('wowjs')).WOW;
            new WOW({
                boxClass: 'wow',
                animateClass: 'animate__animated',
                offset: 0,
                mobile: true,
                live: true
            }).init();
        };

        initWow();
    }, []);

    return null;
}
