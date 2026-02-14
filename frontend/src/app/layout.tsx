import './globals.css'
import { ReactNode } from 'react'
import { Navbar } from "@/components/navbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

export const metadata = {
  title: 'Milk Portal',
  description: 'Dashboard for personal services',
}

// RootLayout is a server component — do NOT add 'use client' here
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {/* top bar */}
        <div className="bg-white border-b">
          <div className="container mx-auto flex h-16 items-center justify-between">
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
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-md px-2 py-1"
              />

              {/* Avatar (placeholder) */}
              <Avatar size="sm">
                <AvatarImage src="https://github.com/shadcn.png" className="rounded-full"/>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        
        {/* main content */}
        <main className="p-6">
          {children}
        </main>

        {/* footer */}
        <footer className="bg-white shadow-md p-4">
          <p className="text-l text-center">Copyright © 2025 - UniMilk</p>
        </footer>
      </body>
    </html>
  )
}
