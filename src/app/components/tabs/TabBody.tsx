"use client"
import React from "react";
import { useSearchParams } from "next/navigation";

export default function TabBody() {
    const searchParams = useSearchParams()
    const isActiveTab = searchParams.get("tab") || "all"
    switch (isActiveTab) {
        case "all":
            return <h2>all</h2>
        case "completed":
            return <h2>completed</h2>
        case "active":
            return <h2>active</h2>

        default:
            return <h2>all</h2>
    }
}
