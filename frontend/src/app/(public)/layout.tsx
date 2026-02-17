import '../globals.css'
import { ReactNode } from 'react'
import { Navbar } from "@/components/navbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

export const metadata = {
  title: 'Milk Portal',
  description: 'Dashboard for personal services',
}

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen bg-gray-50">
        {/* top bar */}
        <div className="h-16 bg-white border-b">
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
        <footer className="h-12 flex items-center justify-center bg-white shadow-md">
          <p className="">Copyright © 2025 - UniMilk</p>
        </footer>
      </body>
    </html>
  )
}
