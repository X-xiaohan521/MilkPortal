import '../globals.css'
import { ReactNode } from 'react'
import { TopBar } from "./navbar"
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { UserProvider } from '@/context/user-context'

export const metadata: Metadata = {
  title: {
    default: "Milk Portal",
    template: "%s | Milk Portal"
  },
  description: 'Dashboard for personal services.',
}

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <UserProvider>
        <body className="flex flex-col h-screen bg-background">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* Top bar */}
            <TopBar />

            {/* main content */}
            <main className="flex-1 flex items-center justify-center overflow-auto p-6">
              {children}
            </main>

            {/* footer */}
            <footer className="h-12 flex items-center justify-center shadow-md">
              <p className="">Copyright © 2025 - UniMilk</p>
            </footer>
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  )
}
