"use client"

import './globals.css'

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider attribute="class" enableSystem={true} defaultTheme="system">
            {children}
        </NextThemesProvider>
    )
}