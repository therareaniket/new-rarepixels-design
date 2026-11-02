"use client";
import dynamic from "next/dynamic";
import { useNearViewport } from "@/hooks/useNearViewport";

const Statistics = dynamic(() => import("./Statistics"), { ssr: false });

export default function LazyStatistics() {
    const [ref, near] = useNearViewport<HTMLDivElement>("800px 0px");
    return (
        <div ref={ref} style={{ minHeight: 700 }}>
        {near ? <Statistics /> : null}
        </div>
    );
}