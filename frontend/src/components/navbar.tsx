"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

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

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}