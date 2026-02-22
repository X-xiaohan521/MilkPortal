import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ProfileSidebar } from "./profile-sidebar";
import { ReactNode } from "react";

const data = {
    user: {
        username: "shadcn",
        avatar: ""
    }
}


export default function AccountLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full h-full flex flex-col">
            <SidebarProvider>
                <ProfileSidebar side="right" className="h-full flex flex-1 relative" />
                <SidebarInset>
                    { children }
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}