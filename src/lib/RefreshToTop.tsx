"use client";

import { useEffect } from "react";

export default function RefreshToTop() {
    useEffect(() => {
        if ("scrollRestoration" in history) { history.scrollRestoration = "manual"; }
        window.scrollTo(0, 0);
    }, []);

    return null;
}