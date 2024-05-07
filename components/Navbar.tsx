"use client"

import { ModeToggle } from "./theme-toggle"
import LogoCustomize from "./logo-customize"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Navbar() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    return (
        <div className={`h-16 border-b-[1px] border-[${mounted && theme === "dark" || "system" ? "#374151" : "#E5E7EB"}] flex w-full items-center justify-between px-20 `}>
            <LogoCustomize theme={theme} mounted={mounted}/>
            <ModeToggle/>
        </div>
    )
}