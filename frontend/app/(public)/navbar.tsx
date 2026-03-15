"use client"

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
import { useUser } from "@/context/user-context"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Search } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getUrl } from '@/lib/api'
import { useRouter } from "next/navigation"

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
          <NavigationMenuContent>
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

export function TopBar() {
  const { user, loading } = useUser()
  const router = useRouter()

  const onClickAvatar = () => {
    if (!localStorage.getItem("token")) {
      router.push("/login")
    } else {
      router.push("/account/profile")
    }
  }

  return (
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
          <InputGroup className="max-w-xs h-8">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
          </InputGroup>
          <ThemeToggle />
          {/* Avatar */}
          <Avatar onClick={onClickAvatar} className="cursor-pointer">
            <AvatarImage src={
              user
                ? `${getUrl(user.avatarUri)}?t=${Date.now()}`
                : ""
            } className="rounded-full" />
            <AvatarFallback>{ user? user.username.substring(0, 2).toUpperCase() : "ML" }</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}