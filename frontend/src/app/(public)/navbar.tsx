"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/blog">Blog</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Files</NavigationMenuTrigger>
          <NavigationMenuContent className="p-2 border rounded-md shadow-xl w-64 slide-in-from-top-2">
            <ul className="grid lg:w-[300px]">
              <NavigationMenuLink asChild className="p-2 rounded-md hover:bg-accent">
                <Link href="/files">
                  <div className="font-normal">Local</div>
                  <div className="text-muted-foreground">
                    Browse files stored on local server.
                  </div>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild className="p-2 rounded-md hover:bg-accent">
                <Link href="/files">
                  <div className="font-normal">Baidu Netdisk</div>
                  <div className="text-muted-foreground">
                    Browse files stored on Baidu Netdisk.
                  </div>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild className="p-2 rounded-md hover:bg-accent">
                <Link href="/files">
                  <div className="font-normal">File Transfer</div>
                  <div className="text-muted-foreground">
                    Transfer your fiiles to others.
                  </div>
                </Link>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/media">Media</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Live</NavigationMenuTrigger>
          <NavigationMenuContent className="p-2 border rounded-md shadow-xl w-64 slide-in-from-top-2">
            <ul className="grid lg:w-[300px]">
              <NavigationMenuLink asChild className="p-2 rounded-md hover:bg-accent">
                <Link href="">
                  <div className="font-medium">Live Streaming</div>
                  <div className="text-muted-foreground">
                    Watch live streaming from UniMilk.
                  </div>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild className="p-2 rounded-md hover:bg-accent">
                <Link href="/files">
                  <div className="font-medium">Live Replay</div>
                  <div className="text-muted-foreground">
                    Watch live replay from UniMilk.
                  </div>
                </Link>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Smart Home</NavigationMenuTrigger>
          <NavigationMenuContent className="p-2 border rounded-md shadow-xl w-64 slide-in-from-top-2">
            <ul className="grid lg:w-[300px]">
              <NavigationMenuLink asChild className="p-2 rounded-md hover:bg-accent">
                <Link href="">
                  <div className="font-medium">Home Assistant</div>
                  <div className="text-muted-foreground">
                    Coming soon...
                  </div>
                </Link>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
