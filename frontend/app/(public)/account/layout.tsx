"use client"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ProfileSidebar } from "./profile-sidebar";
import { ReactNode } from "react";
import { UserProvider } from '@/context/user-context'

export default function AccountLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full h-full flex flex-col">
            <UserProvider>
                <SidebarProvider>
                    <ProfileSidebar side="right" className="h-full flex flex-1 relative" />
                    <SidebarInset>
                        { children }
                    </SidebarInset>
                </SidebarProvider>
            </UserProvider>
        </div>
    )
}