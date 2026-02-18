import '../globals.css'
import { ReactNode } from 'react'
import { Navbar } from "@/app/(public)/navbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import {Metadata} from "next";
import {ThemeToggle} from "@/components/theme-toggle";
import {ThemeProvider} from "next-themes";
import {Input} from "@/components/ui/input";

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
      <body className="flex flex-col h-screen bg-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* top bar */}
          <div className="h-14">
            <div className="container mx-auto flex h-full items-center justify-between">
              {/* Left section: Logo + Nav */}
              <div className="flex items-center space-x-6">
                {/* Logo */}
                <Link href={"/"}><div className="text-xl font-bold">MilkPortal</div></Link>

                {/* Navigation Menu */}
                <Navbar />
              </div>

              {/* Right section: Search + Avatar */}
              <div className="flex items-center space-x-4">
                {/* Search (placeholder for now) */}
                <Input type="search" placeholder="Search..." />
                <ThemeToggle />
                {/* Avatar (placeholder) */}
                <Link href={"/login"}>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" className="rounded-full"/>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
              </div>
            </div>
          </div>

          {/* main content */}
          <main className="flex-1 flex items-center justify-center overflow-auto p-6">
            {children}
          </main>

          {/*/!* footer *!/*/}
          <footer className="h-12 flex items-center justify-center shadow-md">
            <p className="">Copyright © 2025 - UniMilk</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
