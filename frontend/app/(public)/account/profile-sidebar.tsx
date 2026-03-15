"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from "@/components/ui/sidebar"
import {
    AudioWaveform,
    BadgeCheck,
    Bell,
    BookOpen,
    ChevronRight,
    ChevronsUpDown,
    Clapperboard,
    Command,
    Computer,
    Container,
    CreditCard,
    GalleryVerticalEnd,
    LogOut,
    Network,
    Pickaxe,
    Settings2,
    Sparkles,
    SquareUserRound,

} from "lucide-react"
import {useUser, User} from "@/context/user-context";
import { useRouter } from "next/navigation"
import { getUrl } from "@/lib/api"

// This is sample data.
const data = {
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Media",
            url: "#",
            icon: Clapperboard,
            isActive: true,
            items: [
                {
                    title: "AutoBangumi",
                    url: "#"
                },
                {
                    title: "qBittorrent",
                    url: "#",
                },
                {
                    title: "PeerBanHelper",
                    url: "#",
                },
            ],
        },
        {
            title: "Minecraft",
            url: "#",
            icon: Pickaxe,
            items: [
                {
                    title: "Console",
                    url: "#",
                },
                {
                    title: "Plugins",
                    url: "#",
                },
                {
                    title: "Backups",
                    url: "#",
                },
            ],
        },
        {
            title: "Documentation",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        {
            name: "Profile",
            url: "/account/profile",
            icon: SquareUserRound,
        },
        {
            name: "Beszel",
            url: "/beszel",
            icon: Computer,
        },
        {
            name: "Portainer",
            url: "/portainer",
            icon: Container,
        },
        {
            name: "Proxy",
            url: "/proxy",
            icon: Network,
        }
    ],
}

function NavMain({
                     items,
                 }: {
    items: {
        title: string
        url: string
        icon?: React.ElementType
        isActive?: boolean
        items?: {
            title: string
            url: string
        }[]
    }[]
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Platforms</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <Collapsible
                        key={item.title}
                        asChild
                        defaultOpen={item.isActive}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <CollapsibleTrigger className="rounded-md hover:bg-accent transition-transform" asChild>
                                <SidebarMenuButton tooltip={item.title}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    {item.items?.map((subItem) => (
                                        <SidebarMenuSubItem className="rounded-md hover:bg-accent transition-transform" key={subItem.title}>
                                            <SidebarMenuSubButton asChild>
                                                <a href={subItem.url}>
                                                    <span>{subItem.title}</span>
                                                </a>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}

function NavServer({
                         projects,
                     }: {
    projects: {
        name: string
        url: string
        icon: React.ElementType
    }[]
}) {
    const { isMobile } = useSidebar()

    return (
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarMenu>
                {projects.map((item) => (
                    <SidebarMenuItem className="rounded-md hover:bg-accent transition-transform" key={item.name}>
                        <SidebarMenuButton asChild>
                            <a href={item.url}>
                                <item.icon />
                                <span>{item.name}</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}

            </SidebarMenu>
        </SidebarGroup>
    )
}

function NavUser({user}: {user: User | null}) {
    const { isMobile } = useSidebar()

    const { refreshUser } = useUser()
    const router = useRouter()

    const handleLogOut = async () => {
        localStorage.removeItem("token")
        await refreshUser()
        router.push("/")
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src={user ? getUrl(user.avatarUri) : ""} alt={user?.username} />
                                <AvatarFallback className="rounded-lg">{ user?.username.substring(0, 2).toUpperCase() }</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">{user?.username}</span>
                                <span className="truncate text-xs">me@example.com</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuGroup>
                            <DropdownMenuLabel className="p-0 font-normal">
                                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage src={user ? getUrl(user.avatarUri) : ""} alt={user?.username} />
                                        <AvatarFallback className="rounded-lg">{ user?.username.substring(0, 2).toUpperCase() }</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-medium">{user?.username}</span>
                                        <span className="truncate text-xs">me@example.com</span>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <Sparkles />
                                Upgrade to Pro
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <BadgeCheck />
                                Account
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CreditCard />
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Bell />
                                Notifications
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={handleLogOut}>
                                <LogOut />
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export function ProfileSidebar({
                               ...props
                           }: React.ComponentProps<typeof Sidebar>) {
    const { user, loading } = useUser()

    return (
        <Sidebar variant="floating" collapsible="icon" {...props}>
            <SidebarContent>
                <NavServer projects={data.projects} />
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    )
}
